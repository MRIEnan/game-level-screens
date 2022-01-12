import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import './LevelOneGameBoard.css';

const LevelOneGameBoard = (props) => {
    const {gameLocation}=props;
    
    return (
        <div className='level-one-game-board-main-container'>
            <div className='level-one-game-board-inner-container'>
                <div className='level-one-game-board-info-container'>
                    <h2>You've got</h2>
                    <h2>Location: <span className='level-one-game-board-values'>{gameLocation}</span></h2>
                     <h2>Role: <span className='level-one-game-board-values'>Student</span></h2>
                    <p>Your objective is to find the Spy</p>
                </div>
                <div className='level-one-game-board-start-container'>
                    <div className='level-one-game-board-bg-start-container'>
                    </div>
                    <p>Start the game</p>
                </div>
            </div>
        </div>
    )
}

export default LevelOneGameBoard
