import React,{ useState, useEffect} from 'react';
import LevelOneGameBoard from '../LevelOneGameBoard/LevelOneGameBoard';
import LevelOneLeaderBoard from '../LevelOneLeaderBoard/LevelOneLeaderBoard';
import LevelOneLocation from '../LevelOneLocation/LevelOneLocation';
import './LevelOneMain.css';

const LevelOneMain = () => {
    const [userLocation,setUserLocation] = useState([]);
    const [gameLocation,setGameLocation] = useState('');
    useEffect(()=>{
        fetch('./userLocation.json')
        .then(res => res.json())
        .then(data => {
            setUserLocation(data)
            setGameLocation(userLocation[0].locationName)
        })
    },[]);
    return (
        <div className='level-one-main-container-outer'>
        <div className='level-one-main-container'>
            <LevelOneLeaderBoard></LevelOneLeaderBoard>
            <LevelOneGameBoard gameLocation={gameLocation}></LevelOneGameBoard>
            <LevelOneLocation setGameLocation={setGameLocation} userLocation={userLocation}></LevelOneLocation>
        </div>
        </div>
    )
}

export default LevelOneMain
