import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import React from "react";

const LegalInformation = () => (
    <div className='information'>
        <button>
            INFORMACJE PRAWNE
            <ArrowDropDownRoundedIcon
                fontSize='large'
                className='hamburgerMenu-dropDown-icon'
            />
        </button>
        {/*{infoContent ? infoClicked() : infoNotClicked()}*/}
        <div className='information-dropDown'>
            <button>prywatność</button>
            <button>regulamin</button>
            <button>polityka</button>
        </div>
    </div>
)

export default LegalInformation;
