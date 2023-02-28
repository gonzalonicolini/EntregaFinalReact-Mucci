import React from 'react';
import { useDarkModeContext } from '../../../context/DarkModeContext';
import './botonDarkMode.css'

const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext()
    return (
        <div className='theme-switch-wrapper'>
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onInput={() => toggleDarkMode()}/>
                <div className="slider round"></div>
            </label>            
        </div>
    );
}

export default BotonDarkMode;
