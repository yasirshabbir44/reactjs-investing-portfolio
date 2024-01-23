// Header.js
import React from 'react';
import { Layout, Menu } from 'antd';
import {LogoutOutlined} from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {

    const handleLogout = () => {
        // Implement your logout logic here
        console.log('Logout clicked');
        localStorage.removeItem('loggedInUser');
        window.location.href = '/login';
        // For example, you can redirect to a logout page or dispatch a logout action.
    };
  return (
      <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Menu.Item key="1">Home</Menu.Item>
              {/* Add more menu items as needed */}
              <Menu.Item key="2" icon={<LogoutOutlined />} style={{ marginLeft: 'auto' }} onClick={handleLogout}>Logout</Menu.Item>
          </Menu>
      </Header>
  );
};

export default AppHeader;
