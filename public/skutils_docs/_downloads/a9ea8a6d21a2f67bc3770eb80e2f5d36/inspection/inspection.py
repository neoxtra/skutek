"""
Inspecting events
=================

This is an example of inspecting events during a recording session, inspection is *slow*, and should not be relied on for actual data acquisition.
"""
###############################################################################

import skutils
import matplotlib.pyplot as plt

controller = skutils.FemtoDAQController("Vireo-000012.tek")
controller.loadDefaultConfig()
try:
    controller.loadDefaultConfig()
    controller.configureRecording([0, 1], 128, file_recording_enabled=True)
    controller.start(10)
    event = controller.inspectNextEvent(1000)
    for data in event.channel_data:
        print(data.pulse_summary)
        if data.has_wave:
            plt.plot(data.wave, label=f"Channel data {data.channel}")
    plt.xlabel("Sample Number")
    plt.ylabel("ADC Count")
    plt.show()

finally:
    controller.stop()
