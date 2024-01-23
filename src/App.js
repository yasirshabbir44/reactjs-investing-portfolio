// App.js
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../src/components/login/LoginPage';
import HomePage from '../src/components/home/Home';
import AppHeader from "./components/AppHeader";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {Footer} from "antd/es/modal/shared";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

    useEffect(() => {
        // Check localStorage for user information on page load
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser));
        }
    }, []);

  return (

    <Router>
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            <Route
                                path="/login"
                                element={loggedInUser ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />}
                            />
                            <Route
                                path="/"
                                element={loggedInUser ? <HomePage username={loggedInUser} /> : <Navigate to="/login" />}
                            />
                        </Routes>
                    </div>
                </Content>
                {/*<Footer style={{ textAlign: 'center' }}>Your Footer Information</Footer>*/}
            </Layout>
        </Layout>
    </Router>
  );
};

export default App;
