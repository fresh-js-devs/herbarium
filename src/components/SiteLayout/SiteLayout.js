import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import './SiteLayout.css'

const SiteLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  const { pathname } = useLocation();

  return (
    <Layout className="layout">
      <Header className="site-header">
          {pathname==='/'?<h1>Herbarium</h1>:<h1>Herb Detail</h1>}
      </Header>
      <Content className="site-content">
          <div className="site-layout-content">
              {children}
          </div>
      </Content>
      <Footer>
        <p style={{textAlign:'center'}}>Made by Matej Makara</p>
      </Footer>
    </Layout>
  );
};

export default SiteLayout;
