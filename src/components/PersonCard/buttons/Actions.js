import React from "react";
import Like from './Like';
import Dislike from "./Dislike";

const Actions = ({ handleButtonAction, id }) => (
    <div className='person-actions'>
        <Dislike
            handleButtonAction={handleButtonAction}
            id={id}
        />
        <Like
            handleButtonAction={handleButtonAction}
            id={id}
        />
    </div>
)

export default Actions;
