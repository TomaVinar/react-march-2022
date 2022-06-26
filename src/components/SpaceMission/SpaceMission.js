import React from 'react';

import './SpaceMission.css'

function SpaceMission({mission_name, launch_year, links}) {

    const {mission_patch_small} = links

    return (
        <div>
            {mission_name}
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    );
}

export default SpaceMission;