import React from "react";
import { useHistory } from "react-router-dom";
/**
 * FEEDBACK: Nevyuzite importy odstranit prosit
 */
import MessageBox from "../../components/MessageBox/MessageBox";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";

import plants from "../../mocks/plants.json";
import Card from "../../components/Card";

const MainPage = () => {
  const { push } = useHistory();

  const handleGoToPostDetail = (id) => push(`/plant/${id}`);

  return (
    <Layout>
      <div className="content">
        {plants.map(
          ({ id, familyName, bscintificName, commonName, about, img }) => (
            <Card
              key={id}
              familyName={familyName}
              bscintificName={bscintificName}
              commonName={commonName}
              about={about}
              img={img}
              onGoToPostDetail={() => handleGoToPostDetail(id)}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default MainPage;
