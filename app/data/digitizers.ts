export interface SpecRow {
  label: string;
  value: string;
}

export interface DigitizerProduct {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  images: string[];       // Cloudinary public IDs
  specSheetUrl?: string;  // Cloudinary PDF public ID
  tableIntro?: string[];  // Optional paragraphs shown above the specs table
  specs: SpecRow[];       // Additional Information table
}

const chk32Specs: SpecRow[] = [
  { label: 'Optical Fiber Transceivers', value: 'One for GRETA / GRETINA Time and Trigger Control Link. One for 10G Ethernet.' },
  { label: 'Digitizer Readout Rate',     value: '10G with Ethernet' },
  { label: 'NIM Outputs',               value: '4 (LEMO connectors)' },
  { label: 'NIM Inputs',                value: '4 (LEMO connectors)' },
  { label: 'Analog Outputs',            value: 'N/A' },
  { label: 'Connectors',                value: 'Standard VME 64x P1/P2 and Hard Metric P0' },
  { label: 'Physical Dimensions',       value: 'Standard VME 64x Rear Transition Module with Hard Metric P0 connector' },
  { label: 'Form Factor',               value: 'Standard 6U VME 64x (Note: no VME readout. Streaming Ethernet is used)' },
  { label: 'Synchronization',           value: 'GRETA Timing and Trigger Control Link (TTCL)' },
  { label: 'Computer Interfaces',       value: 'Gigabit Ethernet' },
  { label: 'Power',                     value: 'VME 5V' },
  { label: 'API',                       value: 'Register Configuration via Python Remote Procedure Calls' },
];

const chk32Description = [
  "The Chickadee-32's Rear Transition Module (RTM) allows for transportation of additional I/O ports to our Chickadee-32 digitizer inside a standard VME 64x crate configuration. It allows the Chickadee-32 to communicate over the GRETA / GRETINA Time and Trigger Control Link.",
  'The RTM, which is 6U in VME crate size, communicates with the Chickadee-32 through a Hard Metric P0 connector. This RTM is also ideal for users of the Chickadee-32 who want additional digital logic I/O, or communication over 10G Ethernet.',
  'Coming Soon: an additional 10 MHz clock input from White Rabbit.',
];

export const digitizers: DigitizerProduct[] = [
  {
    id: 'femtodaq-vireo',
    name: 'FemtoDAQ Vireo',
    tagline: '2 Channel Digitizer',
    description: [
      'Our classroom and small project digitizer.',
      'The FemtoDAQ Vireo is the successor to our popular FemtoDAQ classic digitizer. It features 2 low noise data acquisition channels, an 11-56V detector bias supply, and logical I/O to interact with your experimental setup. Simply power it up and connect it via USB or ethernet to start collecting data!',
      'A full feature graphical interface lets you configure your experiment, view plots of data collection live, and download your data in CSV, binary, or IGOR data formats. The unit is fully programmable with Python or C language APIs for more nuanced data acquisition needs. A programming guide with examples and user manual are available from the graphical interface to get you started.',
    ],
    images: [
      'vireo_angle_tilt_1-scaled_yef0ek',
      'vireo_rear_2_asppfm',
      'vireo_linked_aubhzz',
      'vireo_gui_qfyksh',
      'vireo_download_tqx814',
    ],
    specSheetUrl: undefined,
    specs: [
      { label: 'Channel Count',                value: '2' },
      { label: 'Bit Resolution',               value: '14' },
      { label: 'Sampling Frequency',           value: '100 MHz' },
      { label: 'Analog Inputs',                value: 'LEMO (Max 2Vpp input). MCX on request. AUX (TRRS) port — Detector Attachment System: power and signal over 1 cable.' },
      { label: 'Waveform Length',              value: 'Up to 81.92 μs (at 100 MHz)' },
      { label: 'Trigger Modes',                value: 'Hit Pattern, Multiplicity' },
      { label: 'Real-Time Pulse Processing',   value: 'Pulse height, Trigger height, Pulse summation, Timestamping' },
      { label: 'Multi-Channel Analysis (MCA)', value: '4096 histogram bins per channel. Offsets and scaling features control effective range.' },
      { label: 'Data Products',                value: 'Waveforms, Histograms (in-firmware), Pulse Summaries. Additional customization available on a contract basis.' },
      { label: 'Analog Outputs',               value: 'N/A' },
      { label: 'Readout Options',              value: 'Internal Storage' },
      { label: 'Physical Dimensions',          value: '10.2 × 16.5 × 7.6 cm' },
      { label: 'Weight',                       value: '0.30 kg' },
      { label: 'Form Factor',                  value: 'Benchtop' },
      { label: 'Digital I/O',                  value: '4× MCX Logical I/O' },
      { label: 'Synchronization',              value: 'Input: 1× 10 MHz reference clock (MCX). Output: 2× 10 MHz synchronized clocks (MMCX). Compatible with White Rabbit or GPS clocks. Units can be daisy-chained.' },
      { label: 'Computer Interfaces',          value: 'USB, Mini-USB, Ethernet' },
      { label: 'Detector Bias Output',         value: '11–56V, 4 mA' },
      { label: 'Power',                        value: '5V DC Barrel Jack' },
      { label: 'User Interface',               value: 'Web-based interface (no installation required) — accessible via Mini-USB or Ethernet' },
      { label: 'API',                          value: 'Open-Source Python API. Low-level C and Python Hardware Abstraction libraries. Programming not required when using the Web Interface.' },
      { label: 'Operating System',             value: 'Embedded Linux' },
    ],
  },
  {
    id: 'multichannel-daq-system',
    name: 'Chickadee-32 Rear Transition Module',
    tagline: 'Multi-Channel DAQ System',
    description: chk32Description,
    images: [
      'chk32_mounted_knjt8y',
      'chk32_eqlzzz',
      'lux_oecdss',
      'science_op_nn64pn',
    ],
    specSheetUrl: undefined,
    specs: chk32Specs,
  },
  {
    id: 'chickadee-32',
    name: 'Chickadee-32 Rear Transition Module',
    tagline: 'Rear Transition Module',
    description: chk32Description,
    images: [
      'rtm_rear_slz6pb',
      'rtm_blue_s6gnqb',
      'chk32_rtm_pcb_lvv7g7',
    ],
    specSheetUrl: undefined,
    specs: chk32Specs,
  },
  {
    id: 'solidago-udp',
    name: 'Solidago – UDP Event Generator (160 Gbps)',
    tagline: 'High-Performance UDP Streaming System',
    description: [
      'The Solidago UDP Event Generator is a high-performance UDP streaming system that emulates an array of digitizers or data acquisition systems. The Solidago can generate sixteen 10 Gbps UDP streams with configurable packet and event formats. The FPGA-based streaming system means no tuning is required to generate performant data streams.',
      'An easy to use web-based GUI can be used to control the unit, and a REST API is available for programmatic control. Front panel I/O allows the user to monitor streaming behavior in real-time, trigger or veto events using an external source, or synchronize multiple Solidago units together.',
      'Solidago was originally developed to generate 160 Gbps data streams to stress-test SkuTek 100 Gbps data management systems, but was so useful that we developed it as a spinoff product. It is ideal for developing data management solutions or for stress-testing networking hardware.',
    ],
    images: [
      'Solidago_Main_gb7zk8',
      'Solidago_IO-600x377_qnh8m8',
      'Solidago_SYNC_qux40s',
      'solidago_hookup_drkqte',
    ],
    specSheetUrl: undefined,
    tableIntro: [
      'The Solidago is unique in that its UDP streams are generated in FPGA firmware which allows more control and higher performance than any software-based system. Packets streamed across multiple ports can be synchronized to within a few nanoseconds of each other. Delays between packets and events have a step precision of 8ns and are randomizable within a user-specified range. This high degree of control means that the Solidago can be tuned to emulate a streaming system\'s rate with high precision anywhere between 0.01 Gbps to 160 Gbps. Importantly the Solidago can stream packets in short-duration bursts which can be precisely timed. This level of precision is impossible for software-based emulation. This makes it perfect for stress testing routing equipment, testing network buffer overflow, error correction systems, or for developing a scientific data management system before hardware is in hand.',
      'Packets can be streamed in clusters known as events. This pulsed streaming behavior is typical of scientific instrumentation in nuclear or particle physics where trigger-based acquisition is used. The frequency, size, and inter-packet spacing of events can be configured or randomized to match the behavior of your particle accelerator or experimental setup. All stream ports can be configured to stream packets in sync. This mimics the behavior of an array of clock-synchronized digitizers. Streaming ports can also run asynchronously with independent configuration or randomized timing to mimic the behavior of an array of software systems. Synchronization can be daisy-chained between Solidagos for emulation of large systems.',
      'Similar technology may be referred to as a "UDP Cannon" or "Network Saturator" in other literature.',
    ],
    specs: [
      { label: 'Number of 10G-capable streams', value: '16' },
      { label: 'Network Interfaces',            value: '16× 10G SFP+ (UDP Streams)\n1× RJ-45 Ethernet (control)' },
      { label: 'Control / User Interface',      value: 'REST API (programmatic control)\nWeb-GUI' },
      { label: 'Rackmountable?',                value: 'No, however fits on a 4U shelf in a server rack.' },
      { label: 'Logical I/O',                   value: 'Trigger / Veto Events (LVTTL)\nIndividual port "active" signals — HIGH when packet is streaming (LVTTL)\nSynchronization Daisy Chain Connectors' },
      { label: 'Minimum Streaming Speed (net)', value: '0 Gbps' },
      { label: 'Maximum Streaming Speed (net)', value: '160 Gbps' },
      { label: 'Customizable Features',         value: 'Packet / Event format, software, enclosure, etc. (customization may increase quote price)' },
    ],
  },
];

export function getDigitizer(id: string): DigitizerProduct | undefined {
  return digitizers.find(d => d.id === id);
}
