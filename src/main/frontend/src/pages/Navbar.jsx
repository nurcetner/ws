import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    HomeTwoTone,
    LoginOutlined,
    SignatureOutlined,

} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const items = [
        { key: '1', icon: <HomeTwoTone />, label: 'Home' },
        { key: '2', icon: <SignatureOutlined />, label: 'SignUp' },
        { key: '3', icon: <LoginOutlined />, label: 'LogIn' },
    ];

    return (
        <div
            style={{
                width: 256,
                position:"fixed"
            }}
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                {items.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
}

export default App;
