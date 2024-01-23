// LoginPage.js
import React, {useState} from 'react';
import {Button, Form, Input, message, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

const {Title} = Typography;

const LoginPage = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // For simplicity, predefined set of credentials
    const validCredentials = {
        username: 'yasir',
        password: 'yasir',
    };
    const handleLogin = () => {
        // Perform your authentication logic here
        // For simplicity, always consider it successful
        const isAuthenticated = (username === validCredentials.username && password === validCredentials.password);

        if (isAuthenticated) {
            // Update the app state to indicate that the user is logged in
            onLogin(username);
            // Store user information in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify({username}));
            // Redirect to the home page
            navigate('/');
            // Show success message
            message.success('Login successful!');
        } else {
            message.error('Invalid username or password');
        }
    };

    return (
        <div style={{maxWidth: '300px', margin: 'auto'}}>
            <Title level={3}>Login Page</Title>
            <Form
                name="loginForm"
                initialValues={{remember: true}}
                onFinish={handleLogin}
                size="large"
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
