import React, { useState } from 'react';
import './LevelTwoCardFixedContainer.css';

const LevelTwoCardFixedContainer = () => {
    const [toogle,setToogle] = useState(false);
    const levelTwoCardFixedContainerToggleStyleOne={
        transform: 'translateY(-52%)',
        transition: 'transform 10000 ',
    }
    const levelTwoCardFixedContainerToggleStyleTwo={
        transform: 'translateY(0%)',
        background: 'yellow',
        transition: 'all 10000 linear',
    }
    const handleScrollUpBtn = () => {
        setToogle(true);
    }
    const handleScrollDownBtn = () => {
        setToogle(false);
    }
    return (
        <div className='level-two-card-fixed-container-main-container'>
            <div style={!toogle? levelTwoCardFixedContainerToggleStyleTwo:levelTwoCardFixedContainerToggleStyleOne} className='level-two-card-fixed-container-inner-container'>
                <h2>one card container card container card container card container card container card container card container card containercard container card container card container card container card container card container card container card container card containercard containercard container</h2>
                <p>card container card container card container card container card container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container</p>
                <div className='btn-scroll-up-container'>
                    <button onClick={handleScrollUpBtn} className='btn-scroll-up'></button>
                </div>
                <h2> two card container card container card container card container card container card container card container card containercard container card container card container card container card container card container card container card container card containercard containercard container</h2>
                <p>card container card container card container card container card container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container card container card container card container card container card container card containercard containercard container card container card container card container card container</p>
                <div className='btn-scroll-down-container'>
                    <button onClick={handleScrollDownBtn} className='btn-scroll-down'></button>
                </div>
            </div>
        </div>
    )
}

export default LevelTwoCardFixedContainer
