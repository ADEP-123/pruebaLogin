import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types'

export default function Formulary({nombre}){
    const [nom,setNombre] = useState(nombre);
    const user = "admin";
    const pass = "contraseña123"
     const cambiar = async()=>{
         let res = await(await fetch(`http://127.10.10.10:5010/campus/get/usuarios?user=${user}&pass=${pass}`,{
            method: "GET",

         })).json();
         setNombre(JSON.stringify(res))
        //  console.log(res);
     }

    // useEffect(()=>{
    //     let btn = document.querySelector("#info");
    //     console.log(btn.textContent);
    // })

    return(
        <>
            <div>formulary
                <form action="">
                    <ul>
                        <li>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="user_name" placeholder={"user name"} />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label htmlFor="pass">Contraseña</label>
                            <input type="text" id="pass" name="user_pass" />
                        </li>
                    </ul>
                    <ul>
                    <li className="button">
                        <button type="submit">Enviar</button>
                    </li>
                    </ul>
                </form>
            </div>
            <button onClick={cambiar}>Click</button>
            <div id="info">
                Nombre : {nom}
            </div>
        </>
        )
}

//schema
Formulary.propTypes={
    nombre: PropTypes.string.isRequired
}
//props, son como las propiedades del tag
Formulary.defaultProps= {
    nombre: "parangaricutirimicuaro"
}