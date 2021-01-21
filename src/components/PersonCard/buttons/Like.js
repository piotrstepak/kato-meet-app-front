import likeIcon from "../../../resources/images/actions/like.png";
import React from "react";
import { ActionButton } from '../styled/StyledActions';

const Like = ({ handleButtonAction, id }) => (
    <ActionButton
        onClick={() => handleButtonAction(id, 'ADD_TO_LIKED_USERS')}>
        <img src={likeIcon} alt='like'/>
    </ActionButton>
)

export default Like;
