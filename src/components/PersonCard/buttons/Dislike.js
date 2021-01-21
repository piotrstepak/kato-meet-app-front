import dislikeIcon from "../../../resources/images/actions/dislike.png";
import React from "react";
import { ActionButton } from '../styled/StyledActions';

const Dislike = ({ handleButtonAction, id }) =>  (
    <ActionButton
        onClick={() => handleButtonAction(id, 'ADD_TO_DISLIKED_USERS')}>
        <img src={dislikeIcon} alt='dislike'/>
    </ActionButton>
)

export default Dislike;
