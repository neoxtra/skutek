"""
Recording and Analyzing Data Using SkuTils and a FemtoDAQ Vireo 2-Channel Digitizer
===================================================================================

SkuTils is not just designed to help one with analyzing data from your
FemtoDAQ Digitizer, but it is also designed to be a fully-controllable
system for managing your FemtoDAQ digitizer.

"""


######################################################################
# Imports
# 

import skutils
import numpy as np
import matplotlib.pyplot as plt


######################################################################
# Variables to modify to run a similar experiment on your own system.
# 

# Fill in this spot with your own FemtoDAQ device location
femto_daq_url = "http://vireo-000012.tek"


######################################################################
# Configuring the vireo
# 

vireo_location = skutils.FemtoDAQController(femto_daq_url)
# Configure the vireo to record both channels, with 4096 samples in the waveform
# Use eventcsv as it's easier to demo
recording_channels = [0, 1]
vireo_location.configureRecording(
    recording_channels,
    number_of_samples_to_capture=4096,
    events_to_capture=100,
    file_recording_format="eventcsv",
    file_recording_data_output="waveforms",
)
# enable triggers
vireo_location.setEnableTrigger(0, True)
vireo_location.setEnableTrigger(1, True)

# Allow us to see the beginning of the pulse, if we wish.
vireo_location.setTriggerXPosition(100)
# This is the only digitizer we're using here, set the global id to 0
vireo_location.setGlobalId(0)
# We want to capture the rising edge, and we want a "fairly" sensitive trigger
vireo_location.setTriggerEdge(0, "rising")
vireo_location.setTriggerEdge(1, "rising")
vireo_location.setTriggerSensitivity(0, 1)
vireo_location.setTriggerSensitivity(1, 1)
# Trigger windows
# The trigger active window can also be called the "Coincidence window"
vireo_location.setTriggerActiveWindow(4096)
vireo_location.setTriggerAveragingWindow(0, 1)
vireo_location.setTriggerAveragingWindow(1, 1)

# Coincidence settings, I want both channels to have triggered in order to be a true "trigger" and recording the data point
vireo_location.configureCoincidence("multiplicity", trigger_multiplicity=2)


######################################################################
# Collect data
# 

vireo_location.start()
vireo_location.waitUntil()
# Technically not needed, just for posterity
vireo_location.stop()
# We're already in a stopped state at this point, no need to calls stop
file_list = vireo_location.downloadLastRunDataFiles(".")