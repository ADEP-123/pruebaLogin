import React, {useState,useEffect} from "react";

export default function Formulary(){
    async function extractInfo(event){
        const info = new FormData(event.target);
        const infoLogin = Object.fromEntries(info);
        try {
            const res = await(await fetch(`http://127.10.10.10:5010/campus/login`,{
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(infoLogin)
            })).json();
            const token = await res.json()
            console.log(token);
            localStorage.setItem('token', token.token );
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <>
            <div>
                <h1>Formulary</h1>
                <form onSubmit={extractInfo}>
                    <ul>
                        <li>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="user_name" placeholder="user name" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label htmlFor="pass">Contraseña</label>
                            <input type="text" id="pass" name="user_pass" placeholder="password" />
                        </li>
                    </ul>
                    <ul>
                        <li className="button">
                            <button type="submit">Enviar</button>
                        </li>
                    </ul>
                </form>
            </div>
        </>
        )
}

