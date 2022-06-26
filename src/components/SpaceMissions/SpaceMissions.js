import React, {useEffect, useState} from 'react';

import SpaceMission from '../SpaceMission/SpaceMission';
import './SpaceMissions.css';

function SpaceMissions() {

    const [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(missions => setMissions(missions))
    }, [])

    return (
        <div className={'space_box'}>
            {missions.filter(item => item.launch_year !== '2020').map(value => <SpaceMission key={value.mission_name}
                                                                                             mission_name={value.mission_name}
                                                                                             launch_year={value.launch_year}
                                                                                             links={value.links}
            />)}
        </div>
    );
}

export default SpaceMissions;