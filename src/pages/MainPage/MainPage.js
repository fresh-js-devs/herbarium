import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';

import plants from '../../data/plants.json';

const MainPage = () => {
  const { push } = useHistory();

  const handleGoToPostDetail = (id) => push(`/plant/${id}`);

  return (
    <Layout>
      <div className='content'>
        {plants.map(({ id, commonName, about, img }) => (
          <Card
            key={id}
            commonName={commonName}
            about={about}
            img={img}
            onGoToPostDetail={() => handleGoToPostDetail(id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MainPage;
