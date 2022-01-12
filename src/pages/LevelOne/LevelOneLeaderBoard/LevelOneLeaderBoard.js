import React, { useEffect, useState } from 'react'
import LevelOneLeaderBoardCard from '../LevelOneLeaderBoardCard/LevelOneLeaderBoardCard';
import './LevelOneLeaderBoard.css';

const LevelOneLeaderBoard = () => {
    const [userInfo,setUserInfo] = useState([]);
    useEffect(()=>{
        fetch('./userInfo.json')
        .then(res => res.json())
        .then(data => setUserInfo(data))
    },[]);
    return (
        <div className='level-one-leader-board-main-container'>
            <h1 className='level-one-leader-board-title'>Leader board</h1>
            {
                userInfo.map(uInfo => <LevelOneLeaderBoardCard key={uInfo.uId} uInfo={uInfo}></LevelOneLeaderBoardCard>)
            }
        </div>
    )
}

export default LevelOneLeaderBoard
