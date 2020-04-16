import React from "react";
import {useHistory} from 'react-router-dom';
import { Col, Row } from "antd";
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import SiteLayout from "../../components/SiteLayout/SiteLayout";
import PlantCard from "../../components/PlantCard/PlantCard";

import "./MainPage.css";
import plants from "../../data/plants.json";

const MainPage = () => {
  /**
 * FEEDBACK: Mezera mezi rovna se
 */
    const {push}=useHistory();

    const handleGoToPlantDetail=(id)=>{push(`/plant/${id}`)};

  return (
    <SiteLayout>
      <div>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          {plants.map(({ id, commonName, img }) => {
            return (
              <Col key={id} span={6} className="center-cards">
                <PlantCard commonName={commonName} image={img} onGoToPlantDetail={()=>handleGoToPlantDetail(id)}/>
              </Col>
            );
          })}
        </Row>
      </div>
    </SiteLayout>
  );
};

export default MainPage;
