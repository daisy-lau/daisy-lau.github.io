interface ICvData {
    lastUpdated: number;
    name: ICvName;
    title: string;
    url: ICvUrl;
    description: string;
    sections: ICvSection[];
}

interface ICvName {
    first: string;
    last: string;
    legal?: string;
}

export interface ICvUrl {
    linkedIn?: string;
}

interface ICvSection {
    title: string;
    subsections: ICvSubsection[];
}

interface ICvSubsection {
    key: string;
    heading?: string;
    subheading?: string;
    points: string[];
    areShortPoints?: boolean;
}

export const data: ICvData = {
    lastUpdated: 1736543064086,
    name: {
        first: 'Daisy',
        last: 'Lau',
    },
    title: 'Senior Frontend Engineer | Video Player | OTT | Connected TV',
    url: {
        linkedIn: 'https://www.linkedin.com/in/daisy-lau-7768401b0',
    },
    description: 'Experienced and passionate Front-end Engineer with 10+ years experience in web development (8+ years in connected TV and video streaming industry). Skilled in TypeScript, JavaScript, React, React Native and reactive programming with RxJS. Studied B.Sc. in Computer Science in The Chinese University of Hong Kong. Currently based in London, United Kingdom.',
    sections: [
        {
            title: 'Education',
            subsections: [
                {
                    key: '2011 - 2014',
                    heading: 'BSc Computer Science',
                    subheading: ', The Chinese University of Hong Kong',
                    points: [
                        'First Class Honours (Major GPA: 3.593)',
                        'Awarded Dean’s List 2012-13 and 2013-14',
                    ],
                },
            ],
        },
        {
            title: 'Experience',
            subsections: [
                {
                    key: 'Jan 2025 - Present',
                    heading: 'Senior Software Engineer (Software Engineer III)',
                    subheading: '@ JPMorgan Chase & Co.',
                    points: [],
                },
                {
                    key: 'Jan 2022 - Dec 2024',
                    heading: 'Software Engineer',
                    subheading: '@ DAZN',
                    points: [
                        'Work on our in-house MSE/EME video player for millions of users which supports desktops, higher/lower-end living room devices such as TV & set-top boxes, tablets and mobile phones',
                        'Work on SSAI advertisement integration for video streams, playback analytics reporting, player testing tooling',
                        'Own player UI/UX development',
                        'Optimise player wrapper efficiency and performance metrics',
                        'Mentor junior team members and teams from other offices',
                        'Communicate and define requirements with Product teams and others',
                        'Full-stack work with emphasis on frontend',
                        'Tech stack: TypeScript, RxJS, React, GraphQL',
                    ],
                },
                {
                    key: 'Mar 2021 - Nov 2021',
                    heading: 'Frontend Developer',
                    subheading: '@ Energybox',
                    points: [
                        'Develop in-house frontend applications for managing IoT components',
                        'Construct responsive UI for desktop, tablets and phones',
                        'Cooperate with Product owners and Engineers in multiple offices worldwide on a daily basis (Hong Kong, Germany, United States)',
                        'Tech stack: React, Redux, TypeScript, Module CSS, Yarn',
                    ],
                },
                {
                    key: 'Jul 2015 - Feb 2021',
                    heading: 'Software Engineer',
                    subheading: '@ Amino Communications',
                    points: [
                        'Build multimedia web apps, set-top box apps and mobile apps (BooxTV) with multi-national teams located in Hong Kong and Helsinki, Finland',
                        'Work on set-top box application layer and web browser porting (Webkit, Opera)',
                        'Construct front-end of Engage, the set-top box management platform',
                        'Construct web app and setup app of FusionHome, the home camera solution',
                        'Tech stack: React, React Native, KefirJS, SASS, Jest, Enzyme, Storybook, Webpack, Yarn',
                    ],
                },
                {
                    key: 'Jul 2014 - Jun 2015',
                    heading: 'Research Assistant',
                    subheading: '@ The Chinese University of Hong Kong',
                    points: [
                        'Develop the Knowledge & Education Exchange Platform (KEEP), an online courses information and knowledge aggregator, for eight universities in Hong Kong',
                        'Tech stack: JavaScript, Ruby on Rails, SQLite',
                    ],
                },
                {
                    key: 'Jun 2013 - Aug 2013',
                    heading: 'Junior Research Assistant',
                    subheading: '@ The Chinese University of Hong Kong',
                    points: [
                        'Full-time summer internship',
                        'Develop EasyScriptor, a web-based essay formatter, for helping university students to write formatted essays',
                        'Tech stack: JavaScript, jQuery, PHP',
                    ],
                },
            ],
        },
        {
            title: 'Skills',
            subsections: [
                {
                    key: 'General',
                    points: [
                        'Code solutions, review pull requests and arrange deployments',
                        'Define and communicate requirements with Engineers and Product teams',
                        'Mentor junior engineers',
                        'Host meetings and demo products',
                        'Certified Mental Health First Aider',
                    ],
                },
                {
                    key: 'Language',
                    points: [
                        'English (Full professional proficiency)',
                        'Cantonese, Traditional Chinese (Native proficiency)',
                        'Mandarin Chinese (Professional working proficiency)',
                    ],
                },
                {
                    key: 'Web',
                    points: [
                        'TypeScript',
                        'JavaScript',
                        'HTML5',
                        'Module CSS',
                        'CSS3',
                        'ES6',
                        'REST',
                        'jQuery',
                    ],
                    areShortPoints: true,
                },
                {
                    key: 'Framework',
                    points: [
                        'React',
                        'React Native',
                        'Redux',
                        'GraphQL',
                        'RxJS',
                        'Jest',
                        'KefirJS',
                        'SASS',
                        'Ruby on Rails',
                        'Bootstrap',
                        'Spring',
                    ],
                    areShortPoints: true,
                },
                {
                    key: 'Database',
                    points: [
                        'MongoDB',
                        'MySQL',
                        'SQLite',
                    ],
                    areShortPoints: true,
                },
                {
                    key: 'Other Languages',
                    points: [
                        'Java',
                        'C',
                        'C++',
                        'PHP',
                        'Python',
                        'Ruby',
                        'Swift',
                        'COBOL',
                    ],
                    areShortPoints: true,
                },
                {
                    key: 'Version Control',
                    points: [
                        'Git',
                        'Github',
                        'Bitbucket',
                    ],
                    areShortPoints: true,
                },
            ],
        },
    ],
};
