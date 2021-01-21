import React from "react";
import Like from './Like';
import Dislike from "./Dislike";
import { StyledActions } from "../styled/StyledActions";

const Actions = ({ handleButtonAction, id }) => (
    <StyledActions>
        <Dislike
            handleButtonAction={handleButtonAction}
            id={id}
        />
        <Like
            handleButtonAction={handleButtonAction}
            id={id}
        />
    </StyledActions>
)

export default Actions;
