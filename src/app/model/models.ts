export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    userType: UserType;
    accountStatus: AccountStatus;
    createdOn: string;
}

export enum UserType {

    ADMIN,
    STUDENT

}

export enum AccountStatus {
    
    UNAPROOVED,
    ACTIVE,
    BLOEKED
}
