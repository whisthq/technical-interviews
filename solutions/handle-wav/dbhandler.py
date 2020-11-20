import psycopg2
import yaml

from psycopg2.extras import RealDictCursor

selectsql = """SELECT * FROM wavfiles WHERE (nframes = %(nframes)s OR %(nframes)s IS NULL)
      AND (samplewidth = %(samplewidth)s OR %(samplewidth)s IS NULL)
      AND (framerate = %(framerate)s OR %(framerate)s IS NULL)
      AND (filename LIKE %(filename)s OR %(filename)s IS NULL)
      AND (numchannels = %(numchannels)s OR %(numchannels)s IS NULL)
      AND (userid = %(userid)s OR %(userid)s IS NULL)
      AND (seconds = %(seconds)s OR %(seconds)s IS NULL)
      AND (seconds >= %(minduration)s OR %(minduration)s IS NULL)
      AND ((seconds <= %(maxduration)s AND seconds >= 0) OR %(minduration)s IS NULL)"""

insertsql = """insert into wavfiles (nframes, samplewidth, userid, content, numchannels, filename, seconds, framerate) 
VALUES (%(nframes)s, %(samplewidth)s, %(userid)s, %(content)s, %(numchannels)s, %(filename)s, %(seconds)s, %(framerate)s)"""

selectbynamesql = "SELECT * from wavfiles where (filename = %(filename)s OR %(filename)s IS NULL) AND (userid = %(userid)s OR %(userid)s IS NULL)"

chunkinsertsql = """insert into chunks (wavid, content, chunkid) VALUES (%(wavid)s, %(content)s, %(chunkid)s)"""

chunkretrievalsql = """select * from chunks where chunkid = %(chunkid)s"""

metadataretrievalsql = """select * from wavfiles where wavid = %(wavid)s"""

ctr = 0

with open("config.yaml", "r") as f:
    configfile = yaml.load(f, Loader=yaml.FullLoader)


def preprocessdict(indict):
    """
    ensures all required keys have default values if unset in our search dict.
    :param indict: incoming dictionary
    :return: processed dictionary
    """
    retdict = indict
    if "userid" not in indict:
        retdict["userid"] = 1
    keylst = [
        "nframes",
        "samplewidth",
        "userid",
        "numchannels",
        "filename",
        "seconds",
        "framerate",
        "minduration",
        "maxduration",
    ]
    for key in keylst:
        if key not in indict:
            retdict[key] = None
    if retdict["filename"] is not None:
        retdict["filename"] = "%" + retdict["filename"] + "%"
    return retdict


def searchformatches(inreq):
    """
    finds al rows corresponding to a given request
    :param inreq: incoming request args
    :return: all matching wav files + metadata (to be split)
    """
    newreq = preprocessdict(inreq)
    conn = psycopg2.connect(
        user="postgres", password=configfile["password"], database="deepgram"
    )

    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        try:
            cur.execute(selectsql, newreq)
            return [dict(item) for item in cur.fetchall()]
        except Exception as e:
            raise e
        finally:
            conn.commit()


def chunkandinsert(chunklist, wavid):
    global ctr
    oldctr = ctr
    conn = psycopg2.connect(
        user="postgres", password=configfile["password"], database="deepgram"
    )
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        for item in chunklist:
            try:
                dictquery = {"content": item[0], "wavid": wavid, "chunkid": str(ctr)}
                cur.execute(chunkinsertsql, dictquery)
                conn.commit()
                ctr += 1
            except Exception as e:
                raise e
            finally:
                conn.commit()
    return list(range(oldctr, ctr))


def getchunkandmetadata(inreq):
    conn = psycopg2.connect(
        user="postgres", password=configfile["password"], database="deepgram"
    )
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        try:
            cur.execute(chunkretrievalsql, inreq)
            conn.commit()
            reschunk = cur.fetchone()
            ncontent = reschunk["content"]
            chunkid = reschunk["chunkid"]
            metadict = {"wavid": reschunk["wavid"]}
            cur.execute(metadataretrievalsql, metadict)
            conn.commit()
            resmeta = dict(cur.fetchone())
            resmeta["content"] = ncontent
            resmeta["chunkid"] = chunkid
            return resmeta
        except Exception as e:
            raise e
        finally:
            conn.commit()


def insertmatch(member):
    """
    given a row from wavprocessor. saves it
    :param member: the member object
    :return: a boolean indicating successful or failed saving

    """

    if "userid" not in member:
        member["userid"] = 1
    conn = psycopg2.connect(
        user="postgres", password=configfile["password"], database="deepgram"
    )
    with conn.cursor() as cur:
        try:
            cur.execute(insertsql, member)
            conn.commit()
            return True
        except Exception as e:
            conn.commit()
            raise e


if __name__ == "__main__":
    print(searchformatches({"filename": "Ca"}))
