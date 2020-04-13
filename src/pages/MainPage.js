import React from 'react';
import { useHistory } from 'react-router-dom';
import plants from '../data/plants.json';
import Card from '../components/Card/card.js';

const MainPage = () => {
    const { push } = useHistory();
  
    const handleGoToDetail = (id) => push(`/herb/${id}`);
  
    return (
        <div>
        <title>The best herbarium app ever made.</title>
          {plants.map(({ id, scintificName, commonName, about, img }) => (
            <Card
              id={id}
              scintificName={scintificName}
              commonName={commonName}
              about={about}
              img={img}
              onGoToDetail={() => handleGoToDetail(id)}
            />
          ))}
          </div>
    );
};
export default MainPage;