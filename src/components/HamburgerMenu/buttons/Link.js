import React from "react";
import StyledLink from "../styled/StyledLink";

const Link = ({ name, path }) => (
    <StyledLink to={path}>
        {name}
    </StyledLink>
)

export default Link;
