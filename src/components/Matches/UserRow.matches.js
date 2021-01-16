import { Link } from "react-router-dom";
import React from "react";

const UserRow = ({ _id, name, age, image }) => (
    // const { id, name, age, image } = props;
    <tr key={_id}>
        <td>
            <img src={image} alt={name} />
        </td>
        <td>{name}</td>
        <td>
            <Link to={'/messages/' + _id}>Porozmawiaj</Link>
        </td>
        <td>
            <Link to={'/matches/' + name}>Zobacz profil</Link>
        </td>
        {/*_id instead id*/}

        <td>
            Usuń
        </td>
    </tr>
)

export default UserRow;
