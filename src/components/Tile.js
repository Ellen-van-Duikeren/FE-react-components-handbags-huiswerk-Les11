import React from 'react';

function Tile({imgName, name, children}) {
    return (
        <>
            <section>
                {imgName && <img src={imgName} alt={name}/>}
                <h2>{name}</h2>
                {children}
            </section>
        </>
    );
}

export default Tile;