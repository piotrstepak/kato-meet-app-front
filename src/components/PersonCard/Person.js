import React, {useState} from 'react';
import Layout from "../../layout/layout";
import StyledImage from "./styled/StyledImage";
import StyledDescription from './styled/StyledDescription';
import StyledDropDownDesc from "./styled/StyledDropDownDesc";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ImageGallery from "react-image-gallery";///src/ImageGallery
import "react-image-gallery/styles/css/image-gallery.css";
import StyledGallery from './styled/StyledGallery';

function Person({ person }) {
    const [isOpen, setIsOpen] = useState(false);
    const { id, name, age, images, description } = person;

    const prepareImagesToUseInImageGallery = images => {
        let preparedImages = [];
        for (let image of images) {
            preparedImages.push({
                original: image
            })
        }
        return preparedImages;
    }

    return (
        <>
            <Layout>
                {/*<StyledImage src={image} alt={name} />*/}
                <StyledGallery>
                    <ImageGallery
                        items={prepareImagesToUseInImageGallery(images)}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showThumbnails={false}
                    />
                </StyledGallery>
                <StyledDescription isOpen={isOpen}>
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
