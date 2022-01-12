import React from 'react';
import './LevelOneLeaderBoardCard.css';

const LevelOneLeaderBoardCard = (props) => {
    const { userName, uId, userScore } = props.uInfo;
    return (
        <div className='level-one-leader-board-card-main-container'>
            <h3 className='level-one-leader-board-card-user-name'>{userName}</h3>
            <div className='level-one-leader-board-card-user-score'>
                <p>Score: {userScore}</p>    
            </div>            
        </div>
    )
}

export default LevelOneLeaderBoardCard
