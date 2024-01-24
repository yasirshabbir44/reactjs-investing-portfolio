// App.js
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from '../src/components/login/LoginPage';
import HomePage from '../src/components/home/Home';
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

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
            <Layout style={{minHeight: '100vh'}}>

                <Layout className="site-layout">
                    <Content>
                        <div className="site-layout-background" style={{minHeight: 360}}>
                            <Routes>
                                <Route
                                    path="/login"
                                    element={loggedInUser ? <Navigate to="/"/> : <LoginPage onLogin={handleLogin}/>}
                                />
                                <Route
                                    path="/"
                                    element={loggedInUser ? <HomePage username={loggedInUser}/> :
                                        <Navigate to="/login"/>}
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
