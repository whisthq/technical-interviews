-- Table: public.wavfiles

-- DROP TABLE public.wavfiles;

CREATE TABLE public.wavfiles
(
    wavid bigint NOT NULL DEFAULT nextval('wavfiles_wavid_seq'::regclass),
    userid bigint NOT NULL,
    nframes bigint,
    samplewidth bigint,
    seconds bigint,
    framerate bigint,
    numchannels bigint,
    content bytea,
    CONSTRAINT wavfiles_pkey PRIMARY KEY (wavid),
    CONSTRAINT wavfiles_userid_fkey FOREIGN KEY (userid)
        REFERENCES public.usertable (userid) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public.wavfiles
    OWNER to postgres;

-- Index: userid

-- DROP INDEX public.userid;

CREATE INDEX userid
    ON public.wavfiles USING btree
    (userid)
    TABLESPACE pg_default;

-- Table: public.usertable

-- DROP TABLE public.usertable;

CREATE TABLE public.usertable
(
    userid bigint NOT NULL DEFAULT nextval('usertable_userid_seq'::regclass),
    username character varying COLLATE pg_catalog."default",
    CONSTRAINT usertable_pkey PRIMARY KEY (userid)
)

TABLESPACE pg_default;

ALTER TABLE public.usertable
    OWNER to postgres;

-- Index: useridind

-- DROP INDEX public.useridind;

CREATE INDEX useridind
    ON public.usertable USING btree
    (userid)
    TABLESPACE pg_default;
    