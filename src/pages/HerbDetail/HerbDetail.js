import React from 'react';
import { useParams, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * FEEDBACK: Zbytecny import faAngleLeft
 */
import { faAngleLeft, faBackspace } from "@fortawesome/free-solid-svg-icons";

import Layout from '../../components/Layout/Layout';
import herbs from '../../data/plants.json';
import "./HerbDetail.css";

//import herbs from "components/data/plants.json"
//https://hackernoon.com/react-pro-tip-use-absolute-imports-for-better-readability-and-easy-refactoring-2ad5c7f2f957

/**
 * FEEDBACK: Nemas dost descriptivni alt u img, nektere se ti tam budou opakovat
 */
const HerbDetail = ({ onClick }) => {
    const { id } = useParams();
    const herb = herbs.find(herb => herb.id === parseInt(id));
    const { familyName, scintificName, commonName, about, img } = herb;

    return (
        <Layout>
            <div className="herb-detail">
                <div className="herb-detail__picture">
                    <img src={img} alt="picture of flower" />
                </div>
                <div className="herb-detail__content">
                    <ul>
                        <li> <strong>family name:</strong> {familyName}</li>
                        <li> <strong>scintificName:</strong> {scintificName}</li>
                        <li> <strong>commonName:</strong>  {commonName}</li>
                    </ul>
                    <strong>about</strong>
                    <p>{about}</p>
                </div>
            </div>
            <NavLink to='/'>
                <div onClick={onClick} className="backbutton">
                    <FontAwesomeIcon icon={faBackspace} GoBack />
                </div>
            </NavLink>

        </Layout >
    );
};

export default HerbDetail;