export interface LoginResponse {
    token: string;
    email: string;
    roles: {authority: string}[];
}
