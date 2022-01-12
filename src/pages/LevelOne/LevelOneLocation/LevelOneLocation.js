import React from 'react';
import './LevelOneLocation.css';

const LevelOneLocation = (props) => {
    // setGameLocation={setGameLocation} userLocation={userLocation}
    const {userLocation} = props;
    const {setGameLocation} = props;
    const handleLocationChange = (id) => {
        const foundedLocation =userLocation.find(uLoca => uLoca.lId===id);
        // console.log(foundedLocation);
        setGameLocation(foundedLocation.locationName);
    }
    return (
        <div className='level-one-location-main-container'>
            <h1 className='level-one-loction-title'>Locations</h1>
            {
                userLocation.map(uLocation => <button key={uLocation.lId} className='location-btn' onClick={()=>handleLocationChange(uLocation.lId)}>{uLocation.locationName}</button>)
            }
        </div>
    )
}

export default LevelOneLocation
