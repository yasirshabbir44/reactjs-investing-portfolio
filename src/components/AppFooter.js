import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const { Footer } = Layout;
const { Link } = Typography;

const AppFooter = () => {
    return (
        <Footer style={{ background: '#f0f2f5', padding: '24px' }}>
            <Row justify="space-between" align="middle">
                <Col>
                    <img
                        src="https://dubaiholding.com/wp-content/themes/dubaiholding/images/foo-logo.png"
                        alt="Your Logo"
                        style={{ height: '40px' }}
                    />
                </Col>
                <Col>
                    <Row justify="end" align="middle">
                        <Col>
                            <p >
                                © 2024 Your Company Name. All Rights Reserved.
                            </p>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Footer>
    );
};

export default AppFooter;
