import React from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import Mission from "./Mission";
import HowToStart from "./HowToStart";
import Application from "./Application";
import Contact from "./Contact";
import LegalInformationSection from "./LegalInformation";

const More = () => (
    <div className='more'>
        <button>
            WIĘCEJ
            <ArrowDropDownRoundedIcon
                fontSize='large'
                className='hamburgerMenu-dropDown-icon'
            />
        </button>
        <div className='more-dropDown'>
            <Mission />
            <HowToStart />
            <Application />
            <Contact />
            <LegalInformationSection />
        </div>
    </div>
)

export default More;
