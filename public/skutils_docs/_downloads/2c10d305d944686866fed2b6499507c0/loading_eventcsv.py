"""
Loading in EventCSV Formatted Data
==================================

Load your data files into numpy arrays for every event in your file

All data used in this example is publically accessible.

Data was collected using two scionix 38b57 / 1.5M-E1 and a Na-22 source.
The scintillators in the detector are 38x57mm, with an unknown
photomultiplier tube connected.

The source was placed in between both detectors, with the dectectors
aligned such that they were in-line and the scintillation crystals were
pointing towards the source. The voltage provided to the PMTs was
adjusted based on the results to create plots that made sense (By “made
sense” we mean did not look like noise triggers).

It is likely that the resultant histogram is different between channel 0
and channel 1 due to the difference in gain from the PMTs due to
manufacturing tolerances, as well as slight deviations in voltage due to
the method of powering the PMTs using a voltage divider from the setup.

"""


######################################################################
# EventCSV Histogram Creation
# ---------------------------
# 
# skutils comes with Loaders which can load in all data formats generated
# by SkuTek digitizers, all Loaders follow a common API. Not all data is
# found in any specific file type, so it is important to save data in file
# types that store data in ways appropriate for your use or re-generate
# that information later. Not all formats by default are “event” formats
# either.
# 

import skutils
import matplotlib.pyplot as plt
import numpy as np
import importlib.resources

# Local file used for this example, contains NA-22 coincidences across 2 channels collected on a FemtoDAQ Vireo
# This file is actually distributed with skutils to ensure that there is example data that can be processed with known values ahead of time.
DATA_FILENAME = (
    importlib.resources.files("skutils").joinpath("./test_data/Sodium-22AppNote")
    / "Na-22_2Ch_AND_Coincidence_850V_04.33.47PM_Mar03_2025_seq000001.ecsv"
)


######################################################################
# First we instantiate our EventCSVLoader by passing in a filename
# 

loader = skutils.EventCSVLoader(DATA_FILENAME)


######################################################################
# We will now bin each channel in all events into a histogram of pulse
# heights
# 

event_count = 0
# We know there are two channels, make a histogram bin list and a label list
histogram_bin_list = [{}, {}]
histogram_label = [0 for _ in range(len(histogram_bin_list))]
for event in loader:
    print(f"timestamp for Event: {event.min_timestamp}")
    event_count += 1
    # Enumerate, we're also grabbing the histogram label per channel
    for channel_i, channel_data in enumerate(event.channel_data):
        histogram_label[channel_i] = event.channels[channel_i]

        # Grab the max height of the waveform
        val = int(np.max(channel_data.wave))
        # Create/update the per channel histogram
        if val in histogram_bin_list[channel_i]:
            histogram_bin_list[channel_i][val] += 1
        else:
            histogram_bin_list[channel_i][val] = 1


######################################################################
# Build and display the histogram plot
# 

histogram_list = []
# Create a list for each channel containing a list of all values of the vireo,
# then fill with the individual bins for each channel counted earlier
for channel in histogram_bin_list:
    build_histo = [0 for _ in range(2**15)]
    for key in channel:
        build_histo[key] = channel[key]
    histogram_list.append(build_histo)

# Display the histogram
for i, item in enumerate(histogram_list):
    plt.plot(item, label=f"Channel: {histogram_label[i]}")
plt.ylabel("Histogram Quantity")
plt.xlabel("Max Height In Channel Waveform")
plt.legend()
plt.yscale("log")
# There are no max heights above 3k, but no major information will be lost by going down to 1750
# cut off here as it makes the chart cleaner to look at
plt.xlim(0, 1750)
plt.title(f"Na-22 Coincidence Across 2 channels with {event_count} events")
plt.show()