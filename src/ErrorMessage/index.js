import React from "react";
import "./ErrorMessage.css"

function ErrorMessage(){
    return(
        <div className="error-message">
            <h2>Error al cargar los datos</h2>
            <p>Hubo un problema al consumir el API. Por favor, intenta de nuevo más tarde.</p>
      </div>
    );
}

export {ErrorMessage};