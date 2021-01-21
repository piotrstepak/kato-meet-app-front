import React, {useState} from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import Contact from "./Contact";
import LegalInformationSection from "./LegalInformation";
import { StyledDropDown,
    StyledDropDownButton,
    StyledDropDownList } from "../styled/StyledDropDown";
import Link from "./Link";

//add dropdowns links to one generic
const More = () => (
    <StyledDropDownList>
        <StyledDropDownButton>
            WIĘCEJ
            <ArrowDropDownRoundedIcon
                fontSize='large'
                className='hamburgerMenu-dropDown-icon'
            />
        </StyledDropDownButton>
        <StyledDropDown>
            <Link
                path='/mission'
                name='MISJA'
            />
            <Link
                path='/how-to-start'
                name='JAK ZACZĄĆ'
            />
            <Link
                path='/application'
                name='APLIKACJA'
            />
            <Contact />
            <LegalInformationSection />
        </StyledDropDown>
    </StyledDropDownList>
)

export default More;
