
export type TName ={
    firstName :string;
    middleName :string;
    lastName :string;
}

export type TUser ={
    name:TName;
    email:string;
    password:string;
    role: "admin" | "user";
    isBlocked: boolean;
}