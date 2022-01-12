import React from 'react';
import LevelTwoCardFixedContainer from '../LevelTwoCardFixedContainer/LevelTwoCardFixedContainer';
import LevelTwoHeader from '../LevelTwoHeader/LevelTwoHeader';
import './LevelTwoMain.css';

const LevelTwoMain = () => {
    return (
        <div className='level-two-main-fixed-container'>
            <LevelTwoHeader></LevelTwoHeader>
            <LevelTwoCardFixedContainer></LevelTwoCardFixedContainer>
        </div>
    )
}

export default LevelTwoMain
