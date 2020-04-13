import './MainPage.css';
import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import Herbs from './data/plants.json'
import Card from './components/card/Card';
import Layout from './components/layout/Layout';

function MainPage() {
    const [herbs, setHerbs] = useState(Herbs);

    const { push } = useHistory();

    const handleGoToPostDetail = id => push(`/herb/${id}`);
  
    const renderCards = () =>
      herbs &&
      herbs.map(({id, familyName, scintificName, commonName, about, img}) => (
          <Card
            id = {id}
            familyName = {familyName}
            scintificName = {scintificName}
            commonName = {commonName}
            about = {about}
            img = {img}
            onGoToHerbDetail={() => handleGoToPostDetail(id)}
          />
        )
      );    
    
    return (
      <Layout>
      <div>
        <h1 className='header'>Herbarium</h1>
      </div>
          {renderCards()}
      </Layout>
  
  
    );
  };
  
  export default MainPage;