export interface User {
    type: string;
    email: string;
    password: string;
    token?: string;
}