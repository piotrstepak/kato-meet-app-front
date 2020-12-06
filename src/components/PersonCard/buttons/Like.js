import likeIcon from "../../../resources/like.png";
import React from "react";

const Like = ({ handleButtonAction, id }) => (
    <button
        onClick={() => handleButtonAction(id, 'ADD_TO_LIKED_USERS')}>
        <img src={likeIcon} alt='like'/>
    </button>
)

export default Like;
