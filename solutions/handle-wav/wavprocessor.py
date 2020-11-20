import wave


def writetofile(retdict):
    """
    writes a wav file to a temp file, outputting the name of that temp file (for, e.g., file sending)
    :param retdict: a dict containing metadata and content of a wav file
    :return: filename
    """
    p = retdict
    with wave.open("test.wav", "wb") as g:
        g.setnchannels(p["numchannels"])
        g.setsampwidth(p["samplewidth"])
        g.setframerate(p["framerate"])
        g.writeframes(p["content"])
    return "test.wav"


def processfile(binobj):
    """
    takes in a wave.read object, outputs a metadata processed version of the object
    :param binobj: the output of wave.read() on a given file
    :return: a dict containing metadata and content
    """
    retdict = {
        "nframes": -1,
        "framerate": -1,
        "content": bytes(),
        "seconds": -1,
        "samplewidth": -1,
        "numchannels": -1,
    }
    try:
        retdict["nframes"] = binobj.getnframes()
        retdict["framerate"] = binobj.getframerate()
        retdict["content"] = binobj.readframes(retdict["nframes"])
        retdict["seconds"] = retdict["nframes"] / retdict["framerate"]
        retdict["samplewidth"] = binobj.getsampwidth()
        retdict["numchannels"] = binobj.getnchannels()
    except Exception as e:
        print(e)
    return retdict


def chunkobj(binobj, maxsec=10):
    chunklist = []
    framerate = binobj.getframerate()
    currframes = binobj.getnframes()
    while currframes > 0:
        framestoread = min(framerate * maxsec, currframes)
        chunklist.append((binobj.readframes(framestoread), framestoread))
        currframes -= framestoread
    return chunklist


def savetotemp(p):
    """
    saves an incoming rowdict to a tempfile

    :param p: incoming row dict
    """
    with wave.open("test1.wav", "wb") as g:
        g.setnchannels(p["numchannels"])
        g.setsampwidth(p["samplewidth"])
        g.setframerate(p["framerate"])
        g.writeframes(p["content"])


if __name__ == "__main__":
    with wave.open("StarWars3.wav", "rb") as f:
        p = processfile(f)
        print(p)
        with wave.open("test.wav", "wb") as g:
            g.setnchannels(p["numchannels"])
            g.setsampwidth(p["samplewidth"])
            g.setframerate(p["framerate"])
            g.writeframes(p["content"])
