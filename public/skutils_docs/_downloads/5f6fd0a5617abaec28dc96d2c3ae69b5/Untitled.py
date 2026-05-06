"""
Example
=======

"""

#######################################################################4723########
import skutils
import matplotlib.pyplot as plt
import numpy as np



###############################################################################
# Connect to your FemtoDAQ 
url = "vireo-000019.tek" # skutils.FEMTODAQ_USB # for digitizers connected via USB, other replace with URL or IP 
digitizer = skutils.FemtoDAQController(url, skip_version_check=True)

digitizer.stop()

print(digitizer.summary())




###############################################################################
# Configure data collection for a -0.8V pulse on channel 0
# and a identical pulse 50ns later on channel 1

# Reset settings to known values
# digitizer.loadDefaultConfig()
digitizer.setTriggerXPosition(8)
digitizer.setTriggerActiveWindow(10)
digitizer.setPulseHeightWindow(4)
digitizer.setPulseHeightAveragingWindow(1)
# set trigger and pulse height windows
for chan in digitizer.channels:
    digitizer.setInvertADCSignal(chan, True)
    digitizer.setEnableTrigger(chan, True)
    digitizer.setDigitalOffset(chan, 700)
    digitizer.setTriggerSensitivity(chan, 200)
    digitizer.setTriggerEdge(chan, "rising")
    

# Save 512 samples per waveform
digitizer.configureRecording(digitizer.channels,
                             128,
                             "inspection_example",
                             waveform_display_enabled=True,
                             display_channels=[0,1], )
# require both channels to fire
digitizer.configureCoincidence("multiplicity", 2)    

###############################################################################
digitizer.start("continuous")

print("grabbing event to inspect")
inspection_event = digitizer.inspectNextEvent(2)
skutils.quickPlotEvent(digitizer, inspection_event,
                        fig_title="Inspected Event for Pocket Pulser with 50ns delay on Ch1",
                          channel_titles={0:"Pocket Pulser", 1:"Delayed by 50ns"})
digitizer.stop()


    

