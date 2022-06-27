import React from 'react';
import DataUsuarios from "./Users.json"
import { useState } from 'react';

const Usuarios = () => {
    let [index, setIndex] = useState(0)

    let cambiarUsuario = () => {
        let random = Math.floor(Math.random() * DataUsuarios.length)
        console.log(random)
        console.log(typeof (random))
        setIndex(random)
    }
    return (
        <div className="Usuario">
            <img src={DataUsuarios[index].picture.large} alt="" />
            <h1>{DataUsuarios[index].name.title} {DataUsuarios[index].name.first} {DataUsuarios[index].name.last}</h1>
            

            <ul>
                <li>
                    <i className="fa-solid fa-envelope"></i> {DataUsuarios[index].email}
                </li>
                <li>
                    <i className="fa-solid fa-phone-flip"></i> {DataUsuarios[index].phone}
                </li>
                <li>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {DataUsuarios[index].location.country}, {DataUsuarios[index].location.city},{" "}
                    {DataUsuarios[index].location.state}
                </li>
            </ul>
            <br/>
            <button onClick={cambiarUsuario}>Cambiar</button>
        </div>
    );
};

export default Usuarios;