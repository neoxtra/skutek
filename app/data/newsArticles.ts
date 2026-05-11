export type Category = 'Newsletter' | 'Research' | 'Announcement' | 'Technical' | 'Team';

export interface NewsArticle {
  id: string;
  title: string;
  blurb: string;
  author: string;
  date: string;       // display string e.g. "Jan 2026"
  category: Category;
  img?: string;       // Cloudinary public ID — add when ready
  href?: string;      // link to full article; leave undefined until page exists
  featured: boolean;  // true = show on home page (keep exactly 6 featured)
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'january-newsletter-2026',
    title: 'January Newsletter',
    blurb:
      'The January 2026 edition of SkuTek DAQ News — featuring our Vireo and Chickadee digitizers, Compton coincidence experiments, and highlights from recent nuclear physics community events.',
    author: 'Edmond Tan',
    date: 'Jan 2026',
    category: 'Newsletter',
    img: 'News_Reporting_Presentation_in_Red_Grey_Newspaper_Style_3_allwj6',
    featured: true,
  },
  {
    id: '2025-sbir-data-management',
    title: '2025 SBIR Exchange: Data Management Solutions',
    blurb:
      'Jeff Maggio presents SkuTek\'s latest hardware and software innovations for high-speed distributed data management at the 2025 SBIR Exchange conference.',
    author: 'Jeff Maggio',
    date: 'Nov 2025',
    category: 'Research',
    img: 'high_speed_news_ktflqi',
    featured: true,
  },
  {
    id: 'august-newsletter-2025',
    title: 'August Newsletter',
    blurb:
      'The August 2025 edition of SkuTek News — Where Science Meets Industry. Catch up on our latest product updates, research highlights, and team news.',
    author: 'Edmond Tan',
    date: 'Aug 2025',
    category: 'Newsletter',
    img: 'aug_news_uaasjo',
    featured: true,
  },
  {
    id: 'july-newsletter-2025',
    title: 'July Newsletter',
    blurb:
      'Welcome to the first edition of SkuTek News! We\'re excited to share our latest developments in data acquisition technology and growing research partnerships.',
    author: 'Edmond Tan',
    date: 'Jul 2025',
    category: 'Newsletter',
    img: 'july_news_q5hfxp',
    featured: false,
  },
  {
    id: 'open-source-control-library',
    title: 'SkuTek Launches Open Source Control Library',
    blurb:
      'Announcing the beta release of SkuTek Utilities — our open-source Python control library for interacting with SkuTek hardware through a clean REST API.',
    author: 'Jeff Maggio',
    date: 'Jun 2024',
    category: 'Announcement',
    img: 'skutils_lzbibv',
    featured: true,
  },
  {
    id: 'dark-matter-milestones',
    title: 'New Milestones In Search For Dark Matter',
    blurb:
      'Scientists in Rochester reach new milestones in the search for dark matter, with significant contributions from SkuTek instrumentation deployed at the Sanford Underground Research Facility.',
    author: 'Wojtek Skulski',
    date: 'May 2024',
    category: 'Research',
    img: 'ur_news_xajmrc',
    featured: true,
  },
  {
    id: 'sbir-2024-digital-daq',
    title: 'SBIR 2024: Digital Data Acquisition with High Resolution and Linearity',
    blurb:
      'Wojtek Skulski presents SkuTek\'s innovations in digital data acquisition with high resolution and linearity, showcasing next-generation instrumentation at SBIR 2024.',
    author: 'Wojtek Skulski',
    date: 'Apr 2024',
    category: 'Research',
    img: 'wojtek_sbir_news_fzgr97',
    featured: false,
  },
  {
    id: 'sbir-2024-data-management',
    title: 'SBIR 2024: Data Management for High Speed, Distributed Data Acquisition',
    blurb:
      'Showcasing SkuTek\'s high-speed data management platform for distributed acquisition systems at the 2024 SBIR conference in Washington D.C.',
    author: 'Jeff Maggio',
    date: 'Apr 2024',
    category: 'Research',
    img: 'distributed_data_acq',
    featured: false,
  },
  {
    id: 'interns-2024',
    title: 'SkuTek Interns 2024: Work on Production Hardware and DOE SBIR Research',
    blurb:
      'Our 2024 interns made meaningful contributions to production hardware and DOE SBIR research, including testing Microbone SBCs for embedded data acquisition applications.',
    author: 'Jackson Hebel',
    date: 'Aug 2024',
    category: 'Team',
    img: 'intern_news_byebm8',
    featured: false,
  },
  {
    id: 'interns-2023',
    title: 'SkuTek Interns 2023: Work on Production Hardware and DOE SBIR Research',
    blurb:
      'Two excellent interns joined SkuTek in summer 2023 to work alongside our engineers on production hardware testing and Department of Energy research projects.',
    author: 'Jackson Hebel',
    date: 'Aug 2023',
    category: 'Team',
    img: 'charlie_news_tyykbs',
    featured: false,
  },
  {
    id: 'app-notes-cables',
    title: 'Application Notes: Surprises with Cables',
    blurb:
      'How to identify and troubleshoot electrical artifacts using the FemtoDAQ Kingfisher. Designing an experiment is sometimes full of surprises — especially with cables.',
    author: 'Jackson Hebel',
    date: 'Mar 2024',
    category: 'Technical',
    img: 'Surprises_With_Cables_figure5-1024x523-1_bihv2q',
    featured: false,
  },
];
