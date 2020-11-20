# Solutions

This code defines a simple backend and API for uploading `.wav` music files.

## Running

Stand up a Postgres instance at `127.0.0.1`, placing your password in a file called `config.yaml` at the root level of
the code with the key of "password", then `flask run` from the root of the db.

## Implementation

The following routes exist:

**POST requirements**

/post -- takes no parameters, accepts one file.  Non-wav files or improperly formatted `.wav` files will return an error message.

**GET requirements**

/list -- lists all filenames with metadata fitting the below arguments.

/info -- lists metadata about all filenames with metadata fitting below arguments.

/download -- downloads *the first* file that fits the metadata query. Search by filename recommended.

GET arguments are all integers, except filename: 
- nframes -- number of frames in the file
- samplewidth -- number of bytes per sample in the file
- numchannels -- whether the audio is mono (1) or stereo (2)
- filename -- the name of the file, supporting partial names but not regex
- seconds -- length of the file in seconds
- framerate -- FPS of the audio
- minduration -- minimum duration of the file, in seconds
- maxduration -- maximum duration of the file, in seconds

To add new query parameters, see `dbhandler` (`selectsql` and `preprocessdict`). To add new metadata columns, see `wavprocessor`, `tables.sql`, and `dbhandler`.
