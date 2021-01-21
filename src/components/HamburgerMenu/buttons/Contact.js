import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import React, { useState } from "react";
import { StyledDropDown,
    StyledDropDownButton,
    StyledDropDownList } from "../styled/StyledDropDown";
import Link from './Link';

//add dropdowns links to one generic
function Contact() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <StyledDropDownList>
            <StyledDropDownButton onClick={() => {
                setIsClicked(!isClicked)
                console.log(isClicked)
            }}>
                KONTAKT
                <ArrowDropDownRoundedIcon
                    fontSize='large'
                    className='hamburgerMenu-dropDown-icon'
                />
            </StyledDropDownButton>
            {isClicked ?
                (<StyledDropDown>
                    <Link
                        path='#facebook'
                        name='facebook'
                    />
                    <Link
                        path='#instagram'
                        name='instagram'
                    />
                    <Link
                        path='#email'
                        name='email'
                    />
                </StyledDropDown>) : null}
        </StyledDropDownList>
    )
}
export default Contact;
