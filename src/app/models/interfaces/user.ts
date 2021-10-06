export interface IAuthUser {
    login: string;
    password: string;
}

export interface IUser extends IAuthUser {
    fio: string;
    
}
