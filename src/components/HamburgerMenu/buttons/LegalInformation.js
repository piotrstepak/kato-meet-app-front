import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import React from "react";
import Link from './Link';
import { StyledDropDown,
    StyledDropDownButton,
    StyledDropDownList } from "../styled/StyledDropDown";

//add dropdowns links  to one generic
const LegalInformation = () => (
    <StyledDropDownList>
        <StyledDropDownButton>
            INFORMACJE PRAWNE
            <ArrowDropDownRoundedIcon
                fontSize='large'
                className='hamburgerMenu-dropDown-icon'
            />
        </StyledDropDownButton>
        {/*{infoContent ? infoClicked() : infoNotClicked()}*/}
        <StyledDropDown>
            <Link
                path='/privacy-policy'
                name='polityka prywatności'
            />
            <Link
                path='/regulations'
                name='regulamin'
            />
        </StyledDropDown>
    </StyledDropDownList>
)

export default LegalInformation;
