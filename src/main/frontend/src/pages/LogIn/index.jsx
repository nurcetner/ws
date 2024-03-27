import React from "react";
import {useEffect, useState} from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import {LogInApi} from "./api.jsx";
import "../../css/layout.css";
export function Login() {
    const [form] = Form.useForm();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [errors ,setErrors] = useState({});
    const [successMessageLogIn, setSuccessMessageLogIn] = useState("");
    const [errorMessageLogIn ,setErrorMessageLogIn] = useState("");
    const [apiProgress, setApiProgress] = useState(false);


    useEffect(() => {
        setErrors({})
    }, [username]);


    useEffect(() => {
        setErrors({})
    }, [password]);

    const onlogInSubmit = async (event) => {
        event.preventDefault();
        setSuccessMessageLogIn("");
        setErrorMessageLogIn("");
        setApiProgress(true);

        try {
            const response = await LogInApi({
                username,
                email,
                password
            });
            console.log(username)
            setSuccessMessageLogIn(response.data.message);
            setSuccessMessageLogIn("User is created");
            // console.log(response.data.userResponse)
            // authState.dispatch({type:"login-success",data:response.data.userResponse});

        } catch (error) {
            if (error.response && error.response.status === 500) {
                setErrorMessageLogIn("Unexpected error occured. Please try again");
            } else {
                setErrorMessageLogIn(error.message);
                console.log("Log İn Error")
            }
        } finally {
            setApiProgress(false);
        }
    }

    return (
        <div style={{maxWidth: 400, margin: 'auto',  marginTop: 200, alignItems: 'center'}}>
            <Form
                form={form}
                name="login_form"
                onFinish={onlogInSubmit}
                initialValues={{remember: true}}
            >
                <h1 style={{textAlign: 'center', marginBottom: 30,color:'#fffdd0',fontSize:50}}>Log In</h1>
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Username"
                           onChange={(event) => setUsername(event.target.value)}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password prefix={<LockOutlined/>} placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width: '100%'}}
                            onClick={onlogInSubmit}
                    >
                       Log In
                    </Button>

                </Form.Item>
                {/*<div>
                    <p style={{textAlign: 'center'}}>
                        Zaten bir hesabınız var mı? <span style={{cursor: 'pointer', color: 'blue'}}
                                                         >Giriş yapın</span>.
                    </p>
                </div> */}

            </Form>
        </div>
    );
}