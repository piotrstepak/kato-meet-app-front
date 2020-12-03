import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import React from "react";

const Contact = () => (
    <div className='contact'>
        <button>
            KONTAKT
            <ArrowDropDownRoundedIcon
                fontSize='large'
                className='hamburgerMenu-dropDown-icon'
            />
        </button>
        <div className='contact-dropDown'>
            <button>facebook</button>
            <button>instagram</button>
            <button>e-mail</button>
        </div>
    </div>
)

export default Contact;
