import axios from "axios";

export function SignUpApi(body){

    // const { username, email, password, passwordRepeat } = body;
    // const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    // const passwordRegex = /^(?=.[0-9])(?=.[a-zA-Z])(?=.*[@#$%^&+=!-])(?=\S+$).{8,}$/;
    //
    // if (!username  username.trim() === " ") {
    //     throw new Error("Username mustn't be null");
    // }
    //
    // if (!email  !emailRegex.test(email.trim())) {
    //     throw new Error("Invalid e-mail");
    // }
    //
    // if (!password || password.trim() === " ") {
    //     throw new Error("Password mustn't be null");
    // }
    //
    // if (!passwordRegex.test(password.trim())) {
    //     throw new Error("The password must contain at least one number, one letter, one special character (@#$%^&+=!-) and no spaces")
    // }
    //
    // if (password !== passwordRepeat) {
    //     throw new Error("Password missmatch");
    // }

    return axios.post('http://localhost:8080/api/v1/users',body,{
})
}

