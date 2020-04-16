import React from 'react';
import {useHistory} from 'react-router-dom';
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import Layout from '../../components/Layout/Layout';
import Herb from '../../components/Herb/Herb';
import herbs from '../../data/plants.json';

const MainPage = () => {
    const { push } = useHistory();
    const handleGoToHerbDetail = id => push(`/herb/${id}`);

    return(
        <Layout>
                {
                    herbs.map(
                        ({id,familyName,scintificName,commonName,img,about}) =>(
                            <Herb 
                                key={id} 
                                familyName={familyName} 
                                scintificName={scintificName} 
                                commonName={commonName}
                                img={img} 
                                about={about}
                                onGoToHerbDetail={() => handleGoToHerbDetail(id)}
                            />
                        )
                    )
                }
        </Layout>
    );

};

export default MainPage;