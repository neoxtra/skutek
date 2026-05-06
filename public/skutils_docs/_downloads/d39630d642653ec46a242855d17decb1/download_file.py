"""
Download File Example
=====================
This is a mini-example for downloading a file from your FemtoDAQ device.
"""
###############################################################################

from skutils import FemtoDAQController
import tempfile
controller = FemtoDAQController("Vireo-000019.tek", skip_version_check=True)

# Download all of the data files from the previous run, 
# we're placing it in a temporary directory here as part of trying to not save this 
# particular one to disk, but for your purposes you will want to save to a known directory,
# e.g. "C:\User\%user%\Downloads\..." or simply even "."
controller.downloadLastRunDataFiles(tempfile.gettempdir())
