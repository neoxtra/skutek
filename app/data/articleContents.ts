/**
 * Article HTML content store.
 *
 * To publish a new article:
 *   1. Add its metadata to newsArticles.ts (set featured: true/false).
 *   2. Add its HTML content here using the same id as the key.
 *
 * Content supports any valid HTML: headings, paragraphs, lists,
 * blockquotes, <strong>, <em>, <a>, <img>, <code>, <pre>, <table>, <hr>.
 */

export const articleContents: Record<string, string> = {

  'july-newsletter-2025': `
<p><em>July 2025</em></p>

<h2>Welcome to the First Edition of SkuTek News! 🌐</h2>
<p>
  We're excited to introduce you to our first monthly newsletter — a place where we share
  technical insights, the latest developments, and new tools for Digital Data Acquisition.
  Whether you're at a university or national lab, we're here to support you throughout the
  entire data acquisition chain.
</p>

<hr/>

<h2>About SkuTek Instrumentation</h2>
<p><em>Where Science Meets Industry</em></p>
<p>
  At SkuTek Instrumentation, we're more than an equipment company — we're your scientific
  partners in advancing the frontiers of physics research. We are a small, woman-owned
  American company founded and led by former scientists. We understand the unique challenges
  of modern physics research because we've lived them.
</p>
<p>
  Our team combines expertise in nuclear physics, particle astrophysics, and digital signal
  processing with hands-on experience from major national laboratory projects. This unique
  perspective allows us to develop solutions that don't just meet specifications — they solve
  real research problems.
</p>

<h3>Proven Track Record in World-Class Science</h3>
<ul>
  <li><strong>LUX-ZEPLIN Dark Matter Experiment:</strong> 1,500+ channels powering the world's largest dark matter search. <a href="https://arxiv.org/abs/2405.14732" target="_blank" rel="noopener">Publication: The Data Acquisition System of the LZ Dark Matter Detector</a></li>
  <li><strong>National Laboratory Deployments:</strong> Active installations at SURF, Lawrence Berkeley National Lab, and FRIB.</li>
  <li><strong>DOE Office of Science Funding:</strong> Technology development supported by federal SBIR grants from the DOE Office of Science, Nuclear Physics.</li>
  <li><strong>Zero Failures:</strong> Over 5 years of continuous operation in the demanding underground environment of LUX-ZEPLIN with no reported failures.</li>
  <li><strong>Global Deployments:</strong> Instruments used at laboratories spanning the Americas, Europe, and Asia-Pacific.</li>
</ul>

<h3>Complete Data Acquisition Solutions</h3>
<p>
  We provide the entire data acquisition chain — from digitizers and firmware pulse processing
  to data management for scientific applications big or small. Our scalable platform grows
  with your research:
</p>
<ul>
  <li><strong>Tabletop Systems:</strong> 2–10 channels for student training and small experiments.</li>
  <li><strong>Research Platforms:</strong> 32–320+ channels for facility-scale installations.</li>
  <li><strong>Custom Solutions:</strong> Purpose-built hardware engineering for specialized research requirements.</li>
</ul>

<h3>Scientific Heritage</h3>
<p>
  Our company follows the footsteps of previous generations of scientists and engineers.
  Our 40-channel instrument echoes the spirit of a 50-channel oscilloscope built by
  Dr. Archie Tunturi at the University of Oregon in the early 1950s — an instrument that
  could display 50 waveforms simultaneously and photograph them on a single negative.
  Our 40-channel DAQ is a distant, far more compact and affordable successor.
</p>
<p><a href="https://vintagetek.org/50-channel-oscilloscope/" target="_blank" rel="noopener">Read more about Dr. Tunturi's design →</a></p>

<hr/>

<h2>Technology Update</h2>

<h3>SkuTek Launches Open-Source Control Library</h3>
<p>
  We're excited to announce the beta release of <strong>SkuTek Utilities (Skutils)</strong> —
  a free, open-source Python library that puts complete control of your SkuTek hardware
  at your fingertips.
</p>
<ul>
  <li><strong>Remote hardware control</strong> via REST API from any lab computer</li>
  <li><strong>Python integration</strong> for seamless data analysis workflows</li>
  <li><strong>Pip installable</strong> for maximum portability across lab environments</li>
  <li><strong>Student-friendly design</strong> — ideal for teaching experimental automation</li>
</ul>
<p>
  SkuTek Utilities enables integration of data collection and analysis into single Python
  scripts, making it ideal for automated workflows and easy-to-port experiments. It is
  specifically designed with students in mind — perfect for distributing Jupyter Notebooks
  that teach experimental automation alongside data analysis. The library is completely
  free and open-source, with 4 example experiments already published and more coming soon.
</p>
<p><a href="https://skutek.com/product/skutils/" target="_blank" rel="noopener">Learn more about SkuTek Utilities →</a></p>

<h3>Shipment of Firebird — 40 Channel DAQ</h3>
<p>
  We're pleased to announce the successful shipment of a 40-channel Digital Data Acquisition
  system to <strong>Lawrence Berkeley National Laboratory</strong>. The instrument simultaneously
  digitizes forty signals with 14-bit precision (16,384 voltage levels) and processes data
  with an embedded 1 GHz local processor running Linux.
</p>

<hr/>

<h2>Product Spotlight</h2>

<h3>SkuTek Digitizers</h3>
<p>
  The same technology powering the world's largest dark matter search (LUX-ZEPLIN, 1,500+
  channels) is available for your research — from a 2-channel bench-top to 320+ channel
  facility-scale systems. We now support automatic linearity calibration and high-speed
  10 Gbps streaming.
</p>
<ul>
  <li><strong>FemtoDAQ Vireo:</strong> 2-channel bench-top digitizer with built-in SiPM bias supply. Perfect for student training and small experiments.</li>
  <li><strong>FemtoDAQ Kingfisher:</strong> 10-channel bench-top digitizer with built-in SiPM bias supply for mid-scale research.</li>
  <li><strong>Chickadee-32:</strong> 32-channel digitizer with embedded Linux, streaming events at 1 Gbps in a variety of formats.</li>
  <li><strong>Chickadee-32 RTM:</strong> Rear Transition Module adds 10 Gbps event streaming and additional I/O.</li>
  <li><strong>Custom DAQ Solutions:</strong> Systems that integrate seamlessly with your research and applications.</li>
</ul>
<p><a href="https://skutek.com/products/digitizers-page/" target="_blank" rel="noopener">Read more about our Digitizers →</a></p>

<h3>Rear Transition Module (RTM) with 10G Ethernet</h3>
<p>
  The RTM transforms your SkuTek digitizers from 1 Gbps to 10 Gbps streaming — a 10×
  performance increase. Each digitizer can now stream up to 1 gigabyte per second,
  eliminating data bottlenecks that limit experimental throughput.
</p>
<ul>
  <li>VME64x with standard back cage installation</li>
  <li>High-performance connection via 96-pin P0 connector</li>
  <li>Works with existing CHK-32 SkuTek digitizers</li>
  <li>Parallel streaming maintains independent data paths from each digitizer</li>
</ul>
<p><a href="https://skutek.com/product/chickadee-32-rear-transmission-module/" target="_blank" rel="noopener">Learn more about the RTM →</a></p>

<h3>Data Management: Solidago UDP Network Generator</h3>
<p>
  Originally developed to stress-test our own 100 Gbps data management systems, Solidago
  proved so effective that we've made it available as a standalone product for the research
  community.
</p>
<ul>
  <li>160 Gbps total throughput across 16 synchronized 10G streams</li>
  <li>FPGA-based streaming with no software tuning required</li>
  <li>Clock-synchronized digitizer emulation replicates real experimental conditions</li>
  <li>Web GUI and REST API for easy control and automation</li>
</ul>
<p>
  Traditional software can't replicate the synchronized "burst" behavior of digitizer arrays
  that overwhelm network buffers. Solidago's FPGA-based approach provides realistic testing
  for DAQ validation, network stress testing, and data management development — all without
  deploying expensive detector hardware.
</p>
<p><a href="https://skutek.com/products/data-management/" target="_blank" rel="noopener">Read more about Solidago →</a></p>

<hr/>

<h2>Let's Build Together</h2>
<p>
  Need a custom system? From digitizers to data streaming and offloading, we have the tools
  and the team to help your science meet industry.
</p>
<p>
  <a href="https://skutek.com/quote/" target="_blank" rel="noopener">Request a Quote</a> &nbsp;·&nbsp;
  <a href="https://skutek.com/faq/" target="_blank" rel="noopener">FAQ</a>
</p>

<h2>Connect with SkuTek</h2>
<ul>
  <li>Website: <a href="https://www.skutek.com" target="_blank" rel="noopener">www.skutek.com</a></li>
  <li>LinkedIn: <a href="https://www.linkedin.com/company/skutek/" target="_blank" rel="noopener">SkuTek Instrumentation</a></li>
  <li>Email: <a href="mailto:info@skutek.com">info@skutek.com</a></li>
</ul>
`,

  'december-newsletter-2025': `
<p><em>January 2026 Edition</em></p>
<p><strong>News editors:</strong> Ujval Madhu, Edmond Tan, Research Engineers</p>

<h2>Welcome to SkuTek DAQ News!</h2>
<p>
  We wish you a prosperous New Year 2026! In this issue, we present our research-grade
  digitizers which deliver high-performance spectroscopy, sub-nanosecond timing, and easy
  scaling to 1,000+ channels. We also describe a Compton coincidence experiment performed
  with our table-top unit.
</p>

<hr/>

<h2>Product Spotlight</h2>

<h3>FemtoDAQ Vireo — 2-Channel Digitizer</h3>
<p><em>Modern FPGA-based digitization for bench-top experimentation</em></p>
<p>
  The <strong>FemtoDAQ Vireo</strong> is an affordable 2-channel table-top digitizer that
  works without external NIM electronics.
</p>
<h4>Key Features</h4>
<ul>
  <li>2 Channels, 14-bit @ 100 MHz ADC per channel</li>
  <li>FPGA-based real-time pulse processing — timing filters, discriminators, coincidence logic, and scalers</li>
  <li>Compatible with scintillators, SiPMs, and virtually any other detector</li>
  <li>Live histograms, 2D correlation plots, and waveforms directly in the browser</li>
  <li>Integrated SiPM bias supply from 11 to 56 volts</li>
  <li>Customizable file output formats</li>
  <li>Open-source Python and C libraries</li>
  <li>External trigger and clock synchronization</li>
</ul>
<h4>Applications</h4>
<ul>
  <li>Gamma-ray spectroscopy</li>
  <li>Coincidence measurements</li>
  <li>Time-of-flight experiments</li>
  <li>Scintillator characterization</li>
  <li>Educational labs</li>
  <li>Radiation monitoring</li>
</ul>

<h3>Chickadee — 32-Channel Digitizer</h3>
<p><em>Scalable high-performance digitization</em></p>
<p>
  The <strong>Chickadee DAQ System</strong> scales from 32 channels to thousands, providing
  high-speed 1 Gbps readout from each board. 10 Gbps is available as an option.
</p>
<ul>
  <li>32 channels per module, 14-bit resolution at 100 MHz sampling</li>
  <li>Timestamps and triggers synchronized across multiple units</li>
  <li>Sub-nanosecond time resolution with fast signals</li>
  <li>Supports HPGe, liquid noble gas arrays, Si detectors, and more</li>
</ul>
<h4>FPGA-Powered Signal Processing</h4>
<p>Real-time pulse height and shape analysis, timestamp extraction, and configurable trigger logic with multiplicity counting.</p>
<h4>High-Speed Triggered and Triggerless Operation</h4>
<p>1 Gbps streaming per module by default; optional 10 Gbps streaming with both triggered and triggerless operation modes.</p>
<h4>Open Software Ecosystem</h4>
<p>Open-source Python/C libraries, GRETA-compatible event format, and Debian Linux for control and monitoring over the network.</p>
<h4>Clock and Channel Synchronization</h4>
<p>Facility clock integration and VME backplane trigger distribution. Timestamps can be synchronized with other facility electronics.</p>

<hr/>

<h2>Example Table-Top Experiment</h2>
<h3>Demonstrating Compton Scattering Through Coincidence Detection</h3>
<p><em>Developed for student labs and classrooms</em></p>
<p>
  We demonstrate Compton scattering with coincidence measurement using the Vireo's
  coincidence firmware.
</p>
<h4>Experiment 1: 180° Compton Back Scattering</h4>
<p>
  Two NaI(Tl) detectors were positioned at 180°, with signals processed by the Vireo.
  A coincidence window of 100 ns was applied between both channels — replacing traditional
  NIM electronics. Histograms and 2D correlation plots were collected using a
  <sup>137</sup>Cs source.
</p>
<p>
  The 1D histograms from both channels were dominated by the Compton edge and Compton
  backscatter peaks from the 662 keV gamma ray. The "singles" peaks at 32 keV and 662 keV
  were due to random coincidences. The 2D correlation plot showed red spots indicating
  true coincidences — symmetric due to the symmetric detector setup.
</p>
<h4>Experiment 2: 90° Scattering Angle</h4>
<p>
  Detector B was repositioned at 90° with a lead shield to block direct gammas.
  The 2D correlation plot reflected the new geometry — the Compton edge and backscatter
  components merged into a single anti-diagonal band. These results demonstrate Vireo's
  ability to collect coincidence events without external NIM electronics.
</p>

<hr/>

<h2>The Relevance for Education</h2>
<p>Our results demonstrate how SkuTek's digital DAQ can teach students modern digital techniques:</p>
<ul>
  <li><strong>Live histogram and 2D correlation display</strong> for immediate feedback</li>
  <li><strong>Built-in pulse processing</strong> without external analog electronics</li>
  <li><strong>Python/C scripting</strong> allowing students to modify examples and develop their own experiments</li>
</ul>

<hr/>

<h2>Connecting with the Nuclear Physics Community</h2>
<p>We attended the <strong>DOE Office of Nuclear Physics SBIR/STTR Exchange Meeting</strong>, where two principal investigators presented online:</p>
<ul>
  <li><em>High Channel Density Digital DAQ</em> — Wojciech Skulski, Chief Technology Officer</li>
  <li><em>Data Management for High Speed DAQ</em> — Jeffrey Maggio, Principal Investigator</li>
</ul>
<p>
  We also participated in the <strong>Workshop on New Generations of Detector and DAQ Systems
  for Nuclear Physics</strong> at FRIB, Michigan State University, and presented at the
  <strong>APS Division of Nuclear Physics Fall 2025</strong> meeting.
</p>

<hr/>

<h2>Inspiring Tomorrow's Scientists: Nuclear Science Day for Scouts</h2>
<p>
  On October 11, 2025, over 250 scouts and leaders joined Berkeley Lab for the 13th Annual
  Nuclear Science Day for Scouts — focused on the International Year of Quantum Science and
  Technology. We proudly supported a <strong>"Hands-On Radioactivity"</strong> station
  demonstrating cosmic-ray detection using our Vireo digitizer.
</p>

<hr/>

<h2>Coming Up Next</h2>
<p>
  A classic cosmic ray capture-and-decay experiment using a plastic scintillator and the Vireo
  digitizer — no external logic required. Stay tuned.
</p>

<hr/>

<h2>We Appreciate Your Feedback</h2>
<p>
  Was this newsletter too terse, or too wordy? We'd love to hear from you.
  Send us an email and let us know about your needs in data acquisition electronics.
</p>
<p><a href="mailto:info@skutek.com">info@skutek.com</a></p>
`,

  'august-newsletter-2025': `
<p><em>August 2025 Edition</em></p>
<h2>SkuTek News Newsletter — Where Science Meets Industry</h2>
<p>
  Welcome to the August edition of SkuTek Newsletter! Summer has been busy for our team
  as we prepare for several conference presentations and continue shipping hardware to
  research partners.
</p>
<h3>Product Updates</h3>
<p>
  The FemtoDAQ Vireo has received firmware improvements improving readout stability
  at high event rates. Customers can update via the FemtoDAQ Utilities software.
</p>
<h3>Research Spotlight</h3>
<p>
  Our instrumentation continues to play a key role at the Sanford Underground Research
  Facility, supporting ongoing dark matter search experiments.
</p>
`,

  '2025-sbir-data-management': `
<h2>2025 SBIR Exchange: Data Management Solutions</h2>
<p>
  Jeff Maggio from SkuTek Instrumentation presented new hardware and software solutions
  for high-speed distributed data management at the 2025 SBIR Exchange conference.
</p>
<h3>Presentation Highlights</h3>
<p>
  The presentation covered SkuTek's end-to-end data acquisition chain — from front-end
  digitizers through onsite collection nodes, high-speed WAN transfer, and automated
  offsite archiving via the SkuTek Globus system.
</p>
<h3>Key Technologies Shown</h3>
<ul>
  <li>Solidago UDP Event Generator — 160 Gbps throughput</li>
  <li>FemtoDAQ Vireo 2-channel digitizer</li>
  <li>SkuTek Globus automatic file transfer system</li>
  <li>Skutils REST API for remote hardware control</li>
</ul>
`,

  'open-source-control-library': `
<h2>SkuTek Launches Open Source Control Library</h2>
<p>
  We are happy to announce the beta release of <strong>SkuTek Utilities (Skutils)</strong> —
  our open-source Python control library for interacting with SkuTek hardware.
</p>
<h3>What Is Skutils?</h3>
<p>
  Skutils provides a clean, documented Python API and REST interface for controlling
  FemtoDAQ digitizers, reading data streams, and configuring hardware parameters —
  all from a laptop, a server, or a remote workstation.
</p>
<h3>Getting Started</h3>
<p>
  Installation is straightforward via pip. Full documentation and example notebooks
  are available in the repository.
</p>
<blockquote>
  We believe open tools accelerate science. Skutils is our contribution to the
  instrumentation community.
</blockquote>
<h3>Roadmap</h3>
<ul>
  <li>Stable 1.0 release</li>
  <li>Expanded hardware support</li>
  <li>GUI front-end integration</li>
</ul>
`,

  'dark-matter-milestones': `
<p><em>Photo credit: Matthew Kapust / Sanford Underground Research Facility</em></p>
<h2>New Milestones In Search For Dark Matter</h2>
<p>
  We still do not know what dark matter is — but we are getting better at knowing
  where it is not. Scientists at the Sanford Underground Research Facility (SURF)
  have reached new sensitivity milestones, with significant technical assistance from
  researchers in Rochester and instrumentation from SkuTek.
</p>
<h3>SkuTek's Role</h3>
<p>
  FemtoDAQ digitizers and SkuTek's data management software form a critical part of the
  readout chain at the experiment, ensuring low-noise, high-fidelity data capture deep
  underground.
</p>
<h3>Why It Matters</h3>
<p>
  Dark matter accounts for roughly 27% of the universe's mass-energy, yet has never
  been directly detected. Each new milestone tightens the bounds on what dark matter
  could be, guiding future theoretical and experimental work.
</p>
`,

  'sbir-2024-digital-daq': `
<h2>SBIR 2024: Digital Data Acquisition with High Resolution and Linearity</h2>
<p>
  Wojtek Skulski presented SkuTek's latest advances in digital data acquisition at the
  2024 SBIR conference, highlighting improvements in resolution, linearity, and
  noise performance across our digitizer product line.
</p>
<h3>Technical Highlights</h3>
<ul>
  <li>14-bit effective resolution at high sampling rates</li>
  <li>Improved differential nonlinearity (DNL) performance</li>
  <li>New calibration algorithms integrated into Skutils</li>
</ul>
<h3>Applications</h3>
<p>
  These advances directly benefit nuclear physics, particle detection, and medical
  imaging experiments that require precise pulse-height measurements.
</p>
`,

  'sbir-2024-data-management': `
<h2>SBIR 2024: Data Management for High Speed, Distributed Data Acquisition</h2>
<p>
  Jeff Maggio presented SkuTek's data management platform at the 2024 SBIR conference,
  demonstrating how the system handles distributed, high-speed acquisition across
  multiple sites.
</p>
<h3>System Overview</h3>
<p>
  The platform integrates the Solidago UDP Event Generator with collector nodes and
  the SkuTek Globus transfer system to move data from detectors to HPC facilities
  with minimal latency and zero data loss.
</p>
<h3>Performance Figures</h3>
<ul>
  <li>Up to 160 Gbps aggregate throughput</li>
  <li>Sub-second transfer latency to offsite storage</li>
  <li>Automatic checksumming and integrity verification</li>
</ul>
`,

  'interns-2024': `
<h2>SkuTek Interns 2024: Work on Production Hardware and DOE SBIR Research</h2>
<p>
  This summer SkuTek welcomed a new cohort of engineering interns who contributed
  directly to our production hardware pipeline and Department of Energy SBIR research.
</p>
<h3>Highlights</h3>
<p>
  Iris focused on testing our Microbone single-board computers for use in embedded
  data acquisition applications — running automated test suites and documenting failure
  modes for the engineering team.
</p>
<p>
  Other projects included firmware validation, PCB inspection protocols, and
  contributions to the Skutils Python library.
</p>
<blockquote>
  Our internship program is designed to give students real engineering experience on
  real hardware — not simulations or toy projects.
</blockquote>
`,

  'interns-2023': `
<h2>SkuTek Interns 2023: Work on Production Hardware and DOE SBIR Research</h2>
<p>
  We had two excellent interns join us in the summer of 2023. Both contributed
  meaningfully to production hardware testing and DOE-funded research projects.
</p>
<h3>What They Worked On</h3>
<ul>
  <li>Hardware qualification testing for the FemtoDAQ Kingfisher</li>
  <li>Development of automated test scripts in Python</li>
  <li>Documentation for internal calibration procedures</li>
  <li>Support for ongoing SBIR deliverables</li>
</ul>
<p>
  We are proud to support the next generation of instrumentation engineers and look
  forward to continuing the program each summer.
</p>
`,

  'app-notes-cables': `
<h2>Application Notes: Surprises with Cables</h2>
<p>
  How to troubleshoot electrical artifacts using the FemtoDAQ Kingfisher.
  Designing an experiment is sometimes full of surprises — especially with cables.
</p>
<h3>The Problem</h3>
<p>
  A common source of unexpected noise in data acquisition setups is the signal
  cabling between the detector and the digitizer. Impedance mismatches, ground loops,
  and reflections can all introduce artifacts that look deceptively like real signals.
</p>
<h3>Diagnosing with the Kingfisher</h3>
<p>
  The FemtoDAQ Kingfisher's high-resolution waveform capture mode makes it straightforward
  to identify cable-induced reflections by their characteristic timing relative to the
  primary pulse.
</p>
<h3>Common Fixes</h3>
<ul>
  <li>Use 50 Ω terminated cables throughout the signal chain</li>
  <li>Keep cable runs as short as practical</li>
  <li>Isolate ground loops by using differential inputs where available</li>
  <li>Check connector crimps — a poorly crimped BNC is a surprisingly common culprit</li>
</ul>
<blockquote>
  When in doubt, swap the cable first. You'd be surprised how often that's the answer.
</blockquote>
`,
};
