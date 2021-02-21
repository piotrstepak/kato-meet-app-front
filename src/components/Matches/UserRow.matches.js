import { Link } from "react-router-dom";
import React from "react";
import { StyledRow, StyledButton, StyledLine, StyledLink } from "./styled/StyledMatches";
import { useHistory } from 'react-router-dom';

//todo remove users from matches
function UserRow({ user }) {
    // const { id, name, age, image } = props;
    const history = useHistory();

    //infinite clicks while rendering wtf?
    const handleLiClick = (name) => {
        console.log("CLICK")//helper print
        history.push(`/matches/${name.toLowerCase()}`);
    }

    return (
        <>
            <StyledLine/>
            {/*<StyledRow key={user._id} onClick={handleLiClick(user.name)}>*/}
            <StyledRow key={user._id}>
                <img src={user.images[0]} alt={user.name} />
                <p>{user.name}, {user.age}</p>
                <StyledLink to={'/messages/' + user._id}>napisz</StyledLink>
                <StyledLink to={'/matches/' + user._id}>profil</StyledLink>
                {/*user.name.toLowerCase()*/}
                <StyledButton>Usuń</StyledButton>
            </StyledRow>
        </>
    )
}

export default UserRow;
