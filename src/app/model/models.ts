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

export interface BookCategory{
    id: number;
    category: string;
    subCategory: string;
}

export interface Book{
    id:number;
    title: string;
    author: string;
    price: number;
    ordered:boolean;
    bookCategoryId:number;
    bookCategory:BookCategory;

}

//for view many category wise
export interface BookByCategory{
    bookCatagoryId:number;
    category:string;
    subCategory:string;
    books: Book[];
}

export interface Order {
    id: number;
    userId: number;
    userName: string;
    bookId: number;
    bookTitle: string;
    orderDate: string;
    returned: boolean;
    returnDate: string;
    finePaid: number;
}