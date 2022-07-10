import React, {useEffect, useState} from "react";

import Album from "../album/Album";

function Albums() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(albums => setAlbums(albums))
    }, []);


    return (
        <div>
            {albums.map(album => <Album key={album.id}
                                        id={album.id}
                                        title={album.title}/>)}
        </div>
    );
}

export default Albums;