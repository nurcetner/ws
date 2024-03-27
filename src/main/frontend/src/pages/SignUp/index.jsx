import React from "react";
import {useEffect, useState} from "react";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import {SignUpApi} from "./api.jsx";
import "../../css/layout.css";
import Navbar from "../Navbar.jsx";

const validateMessages = {
    required: '${label} cannot be null!',
    types: {
        email: '${label} is not a valid email!',
    },
};


export function SignUp() {
    const [form] = Form.useForm();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [errors, setErrors] = useState({});
    const [successMessageSignUp, setSuccessMessageSignUp] = useState("");
    const [errorMessageSignUp, setErrorMessageSignUp] = useState("");
    const [apiProgress, setApiProgress] = useState(false);


    useEffect(() => {
        setErrors({})
    }, [username]);

    useEffect(() => {
        setErrors({})
    }, [email]);

    useEffect(() => {
        setErrors({})
    }, [password]);

    const onSignUpSubmit = async (event) => {
        event.preventDefault();
        setSuccessMessageSignUp("");
        setErrorMessageSignUp("");
        setApiProgress(true);


        try {
            const response = await SignUpApi({
                username,
                email,
                password
            });
            console.log(username)
            setSuccessMessageSignUp(response.data.message);
            setSuccessMessageSignUp("User is created");
            // console.log(response.data.userResponse)
            // authState.dispatch({type:"login-success",data:response.data.userResponse});

        } catch (error) {
            if (error.response && error.response.status === 500) {
                setErrorMessageSignUp("Unexpected error occured. Please try again");
            } else {
                setErrorMessageSignUp(error.message);
                console.log("Sign Up Error")
            }
        } finally {
            setApiProgress(false);
        }
    }

    return (
        <>

            <div style={{maxWidth: 400, margin: 'auto', marginTop: 200, alignItems: 'center'}}>
                <Form
                    form={form}
                    name="signup_form"
                    onFinish={onSignUpSubmit}
                    initialValues={{remember: true}}
                >
                    <h1 style={{textAlign: 'center', marginBottom: 30, color: '#fffdd0', fontSize: 50}}>Sign Up</h1>
                    <Form.Item
                        name="username"
                        rules={[
                            {required: true},
                            {type: 'string', min: 5}
                        ]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="Username"
                               onChange={(event) => setUsername(event.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {required: true, type: 'email'},
                        ]}
                    >
                        <Input prefix={<UserOutlined/>} type="email" placeholder="Email"
                               onChange={(event) => setEmail(event.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {required: true},
                            {type: 'password'}
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="Password"
                                        onChange={(event) => setPassword(event.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        name="passwordRepeat"
                        rules={[
                            {required: true},
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="Repeat Password"
                                        onChange={(event) => setPasswordRepeat(event.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}
                                disabled={!password || password !== passwordRepeat}
                                onClick={onSignUpSubmit}
                        >
                            Sign Up
                        </Button>

                    </Form.Item>
                </Form>
                {/*<p style={{textAlign: 'center'}}>
               Zaten bir hesabınız var mı? <span style={{cursor: 'pointer', color: 'blue'}} >Giriş yapın</span>.
            </p> */}
            </div>
        </>
    );
}






