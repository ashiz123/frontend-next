export type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm_password: string;
  };
  
export type Errors = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm_password: string;
    other ?: string;
  };

export const initialStateError : Errors = {
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirm_password : "",
    other : ''
}

export const initialStateForm : FormData = {
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirm_password : ""
 }