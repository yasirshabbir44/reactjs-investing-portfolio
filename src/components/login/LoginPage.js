// LoginPage.js
import React, {useState} from 'react';
import {Button, Form, Input, message, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useNavigate,Link} from 'react-router-dom';
import '../../style.css'; // Import the common styles

const { Title, Text } = Typography;

const LoginPage = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // For simplicity, predefined set of credentials
    const validCredentials = {
        username: 'yasir',
        password: 'dubaiHolding123',
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
        <div className="login-container"> {/* Apply common styles */}
            <div className="form-container"> {/* Apply common styles */}
                <div className="logo-container">
                    {/* Replace 'your-logo.png' with your actual logo */}
                    <img src="https://dubaiholding.com/wp-content/themes/dubaiholding/images/foo-logo.png" alt="Logo" className="logo" />
                </div>

                <Form
                    name="loginForm"
                    initialValues={{ remember: true }}
                    onFinish={handleLogin}
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                    <Text>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </Text>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
