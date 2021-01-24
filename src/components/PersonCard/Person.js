import React, {useState} from 'react';
import Layout from "../../layout/layout";
import StyledImage from "./styled/StyledImage";
import StyledDescription from './styled/StyledDescription';
import StyledDropDownDesc from "./styled/StyledDropDownDesc";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Person({ person }) {
    const [isOpen, setIsOpen] = useState(false);
    const { id, name, age, image, description } = person;

    return (
        <>
            <Layout>
                <StyledImage src={image} alt={name} />
                <StyledDescription>
                    <p>{name}, {age}</p>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MoreHorizIcon fontSize='large'/>
                    </button>
                    {isOpen ?
                        <StyledDropDownDesc>
                            {description ?
                                <p>{description}</p> :
                                <p>Upss wygląda na to, że użytkownik nie dodał jeszcze żadnego opisu,
                                napisz do niego i przypomnij mu o tym :)</p>
                            }
                        </StyledDropDownDesc> : null
                    }
                </StyledDescription>
            </Layout>
        </>
    );
}

export default Person;
