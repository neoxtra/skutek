"""
Timestamp clearing
==================

How to clear the timestamp before a run
"""

from skutils import FemtoDAQController

controller = FemtoDAQController("Vireo-000019.tek", skip_version_check=True)

# This clears the timestamp counter internally in the FemtoDAQ device, the timestamp counter is not updated until an event is latched however,
# so it is not possible to see this effect without triggers
controller.zeroTimestamp()
