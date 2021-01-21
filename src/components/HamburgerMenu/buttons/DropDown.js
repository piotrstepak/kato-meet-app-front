import React, { useState } from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { StyledDropDown,
    StyledDropDownButton,
    StyledDropDownList } from "../styled/StyledDropDown";
import Link from "./Link";
import { v4 as uuidv4 } from 'uuid';

function DropDown({ name, links, buttons }) {
    const [isClicked, setIsClicked] = useState(false);
    // console.log(isClicked)//helper print

    return (
        <StyledDropDownList>
            <StyledDropDownButton onClick={() => setIsClicked(!isClicked)}>
                {name}
                <ArrowDropDownRoundedIcon
                    fontSize='large'
                    className='hamburgerMenu-dropDown-icon'
                />
            </StyledDropDownButton>
            {isClicked ?
                (<StyledDropDown>
                    <ul>
                    {links.map(link => (
                        <li key={uuidv4()}>
                            <Link
                                path={link.path}
                                name={link.name}
                            />
                        </li>
                    ))}
                    {buttons && buttons.map(button => (
                        <li key={uuidv4()}>
                            <DropDown
                                name={button.name}
                                links={button.links}
                                buttons={button.buttons}
                            />
                        </li>
                    ))}
                    </ul>
                </StyledDropDown>) : null}
        </StyledDropDownList>
    )}

export default DropDown;
