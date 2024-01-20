import axios from "axios";
import { LoginForm, RegisterForm } from "../components/Types/UserDataTypes";

export async function authorizeUser(loginData: LoginForm) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/auth',
            data: loginData
        });
        const token: string = response.data.token;
        localStorage.setItem('token', token);
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function registerUser(registerData: RegisterForm) {
    try {
        await axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/create',
            data: registerData
        });
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}