export type FormData = {
    email: string;
    password: string;
}

export type Error = {
    email : string;
    password : string;
}


export const initialStateForm: FormData = {
    email : '',
    password : ''
}

export const initialStateError: Error = {
    email : '',
    password : ''
}