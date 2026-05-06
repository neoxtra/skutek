"""
Changing Coincidence Example
============================

This is a small example demonstrating how to configure coincidences in skutils
"""
###############################################################################

from skutils import FemtoDAQController
from skutils.helpers import HitPatternCoincidenceBuilder

controller = FemtoDAQController("Vireo-000019.tek", skip_version_check=True)

###############################################################################
# Multiplicity

# Configure a simple multiplicity coincidence setup
controller.configureCoincidence("multiplicity", 2)

###############################################################################
# Hit Pattern

# Helper for easily creating hit pattern coincidences, as the API demands are fairly rigid and less knowable
builder = HitPatternCoincidenceBuilder(controller.num_channels)

builder.addChannel(0, "Coincidence")
builder.addChannel(1, "Anticoincidence")
# Configure with the built string
controller.configureCoincidence(
    "hit_pattern", trigger_hit_pattern=builder.buildForSend()
)
