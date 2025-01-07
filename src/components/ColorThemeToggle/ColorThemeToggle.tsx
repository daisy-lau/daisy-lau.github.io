import React from 'react';

import {IconMoonStars} from '../../icons/IconMoonStars';
import {IconSun} from '../../icons/IconSun';

import './ColorThemeToggle.css';

interface IColorThemeToggleProps {
    isLightTheme: boolean;
    onChange: () => void;
}

const ColorThemeToggle: React.FC<IColorThemeToggleProps> = ({isLightTheme, onChange}) => {
    return (
        <div
            className={`colorThemeToggle${isLightTheme ? ' colorThemeToggle--light' : ''}`}
            onClick={onChange}
        >
            <div className='colorThemeToggle__darkIcon'>
                <IconMoonStars />
            </div>
            <div className='colorThemeToggle__lightIcon'>
                <IconSun />
            </div>
            <div className='colorThemeToggle__knob'></div>
        </div>
    );
};

export default ColorThemeToggle;
