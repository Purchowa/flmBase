export default function getUserToken(): string {
    const token = localStorage.getItem('token');
    return token === null ? '' : token;
}