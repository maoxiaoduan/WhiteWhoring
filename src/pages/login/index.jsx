import React, { Component } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}><Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name ="Username"
                            label="用户名"
                            rules={[{ required: true, message: '请输入用户名！' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name ="Password"
                            label="密码"
                            rules={[{ required: true, message: '请输入用户密码！' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                                登录
                        </Button>
                    </Form>
                    </Col>
                </Row>



            </div>
        );
    }
}

export default Login;