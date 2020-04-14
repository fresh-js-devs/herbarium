import React, { Component } from 'react';

import './Herbarium.css'

import Grid from '@material-ui/core/Grid';
/**
 * FEEDBACK: Zbytecny import
 */
import Paper from '@material-ui/core/Paper';

/**
 * FEEDBACK: Opet malo komponentujes
 */
const Herbarium = ({onGoTomDetail,familyName, scintificName,commonName, about, img}) => {
    
    return (
        <div className='herbarium-card' onClick={onGoTomDetail}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img src={img}/>
                </Grid>
                <Grid item xs={9}>
                    <h2>{familyName}</h2>
                    <div><b>scintificName:</b> {scintificName}</div>
                    <div><b>commonName:</b> {commonName}</div>
                    <p>{about}</p>
                </Grid>
            </Grid>
            
            
            
        </div>
    );
};

export default Herbarium;