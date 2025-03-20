import React from "react";

const CharacterCard = ({name, image}) => {
    return (
        <div>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default CharacterCard