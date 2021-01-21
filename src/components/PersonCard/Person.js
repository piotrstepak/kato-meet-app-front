import React from 'react';
import Layout from "../../layout/layout";
import StyledImage from "./styled/StyledImage";
import StyledDescription from './styled/StyledDescription';

function Person({ person }) {
    const { id, name, age, image } = person;

    return (
        <>
            <Layout>
                <StyledImage src={image} alt={name} />
                <StyledDescription>
                    <p>{name}, {age}</p>
                </StyledDescription>
            </Layout>
        </>
    );
}

export default Person;
