import React from 'react';
import './App.css';
import {data} from './assets/cvData';
import type {ICvUrl} from './assets/cvData';
import ColorThemeToggle from './components/ColorThemeToggle/ColorThemeToggle';
import {IconLinkedIn} from './icons/IconLinkedIn';

const App: React.FC = () => {
    // light/dark theme: use system default as init value
    const [isLightTheme, setIsLightTheme] = React.useState(
        window.matchMedia("(prefers-color-scheme: light)").matches
    );

    const setColorTheme = React.useCallback(() =>
        setIsLightTheme(!isLightTheme)
    , [isLightTheme, setIsLightTheme]);

    return (
        <div className={`root${isLightTheme ? ' light' : ''}`}>
            <section className='header'>
                <p className='lastUpdated'>{`Last Updated: ${new Date(data.lastUpdated).toDateString()}`}</p>
                <ColorThemeToggle isLightTheme={isLightTheme} onChange={setColorTheme} />
            </section>
            <CvIntroduction />
            <CvSections />
        </div>
    );
};

const CvIntroduction: React.FC = () => {
    return (
        <section className='intro'>
            <h1>{`${data.name.first} ${data.name.last}`}</h1>
            <h2>{data.title}</h2>
            <p className='description'>{data.description}</p>
            <p className='url'>{renderUrls(data.url)}</p>
        </section>
    );
};

const CvSections: React.FC = () => {
    return data.sections.map(section => (
        <section key={section.title}>
            <h3 className='sectionTitle'>{section.title.toUpperCase()}</h3>
            <div className='section'>
                {section.subsections.map(subsection => (
                    <React.Fragment key={subsection.key}>
                        <div className='subsectionKey'>{subsection.key.toUpperCase()}</div>
                        <div className='subsectionValue'>
                            {Boolean(subsection.heading || subsection.subheading) &&
                                <div className='headings'>
                                    <span className='heading'>{subsection.heading}</span>
                                    <span>{subsection.subheading}</span>
                                </div>
                            }
                            {subsection.areShortPoints && renderShortPoints(subsection.points)}
                            {!subsection.areShortPoints && renderFullPoints(subsection.points)}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    ));
};

const renderUrls = (url: ICvUrl) => {
    const iconMap: Record<string, React.ReactNode> = {
        linkedIn: <IconLinkedIn />,
    };

    return (
        <>
            <span>Connect me on:</span>
            {Object.entries(url).map(([key, value]) =>
                <a key={key} href={value} className='url' target='_blank'>{iconMap[key]}</a>
            )}
        </>
    );
};

const renderShortPoints = (points: string[]) => {
    return (
        <div>
            {points.map((point, index) => {
                if (!index) {
                    return (<span key={index}>{point}</span>);
                }
                return (
                    <React.Fragment key={index}>
                        <span className='shortPointsSeparator'>/</span>
                        <span>{point}</span>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const renderFullPoints = (points: string[]) => {
    return (
        <ul>
            {points.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
    );
};

export default App;
