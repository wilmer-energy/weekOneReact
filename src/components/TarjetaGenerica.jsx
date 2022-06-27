import React from 'react';

const TarjetaGenerica = ({titulo,id1,id2,id3,backgroundC=""}) => {
    return (
        <div className="tarjeta" style={{background: backgroundC}}>
            <h2 >{titulo}
        <ul>
            <li>{id1}</li>
            <li>{id2}</li>
            <li>{id3}</li>
        </ul>
    </h2>
        </div>
    );
};

export default TarjetaGenerica;