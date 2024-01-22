// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/AppHeader';
import HomePage from './pages/Home';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add more routes as needed */}
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Your Footer Information</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
