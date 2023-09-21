import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export function Bienvenida({ nombre }) {
  const token = localStorage.getItem("token");
  const [nom, setNombre] = useState(nombre);

  useEffect(() => {
    const getUser = async () => {
      const headers = {
        Authorization: `${token}`,
      };
      try {
        const result = await (
          await fetch("http://192.168.129.72:5076/campus/get/usuarios", {
            method: "GET",
            headers,
          })
        ).json();

        if (result.rol) {
          setNombre(result.rol);
        } else {
          setNombre(result.message);
        }
      } catch (error) {
        console.error(`Error detectado: ${error.message}`);
      }
    };

    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <>
      <div id="info">Rol : {nom}</div>
    </>
  );
}

Bienvenida.defaultProps = {
  nombre: "sin rol",
};
