import dislikeIcon from "../../../resources/dislike.png";
import React from "react";

const Dislike = ({ handleButtonAction, id }) =>  (
    <button
        onClick={() => handleButtonAction(id, 'ADD_TO_DISLIKED_USERS')}>
        <img src={dislikeIcon} alt='dislike'/>
    </button>
)

export default Dislike;
