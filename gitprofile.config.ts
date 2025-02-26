// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HaiNguyen2903', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['HaiNguyen2903/Banking_Customer_Segmentation', 
                  'HaiNguyen2903/Car-Purchasing-Customer-Classification',
                  'HaiNguyen2903/Telecom_Customer_Understanding',
                  'HaiNguyen2903/MOT_Human_Tracking_DeepSORT'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'NSW Traffic Analysis for Road Maintenance Optimization',
          description:
            'A story-telling project with advanced Tableau visualizations for NSW Road Maintenance Optimization',
          imageUrl:
            '',
          link: 'https://medium.com/@harry_nguyen_/nsw-traffic-analysis-for-road-maintenance-optimization-218f2c81f355',
        },
        {
          title: 'Data Science Job Salaries Analysis 2024',
          description:
            'A comprehensive look at the data science job market in the first quarter of 2024.',
          imageUrl:
            '',
          link: 'https://medium.com/@harry_nguyen_/data-science-job-salaries-analysis-2024-d8d96cfe16e8',
        },
      ],
    },
  },
  seo: {
    title: 'Harry Nguyen Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'nguyenphuchai',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'harry_nguyen_',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '0451499890',
    email: 'hainguyen29031412@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/10oVOe2csbkKCKCQd7IhUZq3vZj9WRz6b/view?usp=sharing, // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'Tableau',
    'AWS',
    'Docker', 
    'Wandb', 
    'Git', 
    'Scikitlearn',
    'Pytorch', 
    'Tensorflow',
    'Computer Vision', 
    'Natural Language Processing', 
    'Deep Learning',
  ],
  experiences: [
    {
      company: 'Silicon Cube',
      position: 'Machine Learning Engineer',
      from: 'July 2022',
      to: 'June 2023',
      companyLink: '',
    },
    {
      company: 'University of Engineering and Technology - Vietnam',
      position: 'Computer Vision Research Engineer',
      from: 'April 2020',
      to: 'August 2022',
      companyLink: '',
    },
    {
      company: 'Viettel Digital',
      position: 'Machine Learning Engineer Intern',
      from: 'April 2021',
      to: 'July 2021',
      companyLink: 'https://www.linkedin.com/company/viettel-digital/',
    },
  ],

  educations: [
    {
      institution: 'University of Technology Sydney (UTS)',
      degree: 'Master’s Degree in Data Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'University of Engineering and Technology, Vietnam National University',
      degree: 'Bachelor’s Degree in Computer Science',
      from: '2018',
      to: '2022',
    },
  ],
  
  certifications: [
    {
      name: 'Postgraduate Excellence International Scholarship',
      body: 'Academic scholarship for excellence international student by University of Technology Sydney (UTS)',
      year: 'August 2023',
      link: '',
    },
    {
      name: 'IBM: What is Data Science?',
      body: 'Certification of 1 of the top rated Data Science courses on Coursera',
      year: 'April 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/NHEGH26A8QRT',
    },
    {
      name: 'DeepLearning.AI: Machine Learning in Production',
      body: 'Certification of 1 of the top rated MLOps courses on Coursera',
      year: 'December 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/SVMYNTVEEQVD',
    },
    {
      name: 'Second place in Scientific Research Competition of UET (Vietnam)',
      body: 'Second place in Scientific Research Competition of a leading university in Vietnam',
      year: 'May 2022',
      link: '',
    },
    {
      name: 'Viettel Digital Talent Certificate',
      body: 'Certification for excellence work during Viettel Digital Talent Training Program',
      year: 'July 2021',
      link: 'https://www.linkedin.com/in/nguyenphuchai/overlay/1635464854928/single-media-viewer/',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'harry_nguyen_', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/HaiNguyen2903/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
