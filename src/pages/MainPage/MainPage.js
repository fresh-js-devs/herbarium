import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "./MainPage.css";

import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';

import Plants from '../../data/plants.json';


import Form from '../../components/Form/Form.js';
import Button from '../../components/atoms/Button.js'
import Input from '../../components/atoms/Input.js'
import TextArea from '../../components/atoms/TextArea.js'


const MainPage = () => {
  const [plants, setPlants] = useState(Plants);
  const [familyName, setFamilyName] = useState('');
  const [scintificName, setScintificName] = useState('');
  const [commonName, setCommonName] = useState('');
  const [about, setAbout] = useState('');


  const handleAddPlantClicked = () => {
    console.log(plants);
    // const newPlant = {
    //   id: plants.length,
    //   familyName,
    //   scintificName,
    //   commonName,
    //   about,
    // };

    console.log(plants);
    plants.push({id: plants.length+1, familyName: familyName, scintificName: scintificName, commonName: commonName, about: about});
    // setPlants([ ...plants, newPlant]);


    setFamilyName('');
    setScintificName('');
    setCommonName('');
    setAbout('');

    console.log(plants);
  };


  const handleDeletePlantCard = id => {
    const filteredPlants = plants.filter(plant => plant.id !== id);
    setPlants(filteredPlants);
  };

  const inputsAreEmpty = familyName === '' || scintificName === '' || commonName ==='' || about ==='';


  const { push } = useHistory();


  const handleGoToPlantDetail = id => {
    push(`/plant/${id}`);
  }

  return (
    <Layout>
      <Form>
        <Input
          value={familyName}
          onChange={event => setFamilyName(event.target.value)}
          name='familyName'
          placeholder='Family name' 
        />
        <Input
          value={scintificName}
          onChange={event => setScintificName(event.target.value)}
          name='scintificName'
          placeholder='Scintific name' 
        />
        <Input
          value={commonName}
          onChange={event => setCommonName(event.target.value)}
          name='commonName'
          placeholder='Common name' 
        />
        <TextArea
          value={about}
          onChange={event => setAbout(event.target.value)}
          name='about'
          placeholder='About'
        ></TextArea>
        <Button onClick={handleAddPlantClicked} className="buttonAdd" disabled={inputsAreEmpty}>
          Add plant
        </Button>
      </Form>

      <div className='content' id="cards">
        {plants.map(({ id, familyName, scintificName }) => (
          <Card
            key={id}
            familyName={familyName}
            onGoToPlantDetail={() => handleGoToPlantDetail(id)}
            onDeleteClick={() => handleDeletePlantCard(id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MainPage;