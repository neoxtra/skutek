"""
Statistics
==========

Get statistics from your current/previous run.
"""

from skutils import FemtoDAQController
from pprint import pprint

controller = FemtoDAQController("Vireo-000019.tek", skip_version_check=True)

pprint(controller.getRunStatistics())   
