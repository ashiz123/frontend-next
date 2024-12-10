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
  };

export const initialStateError = {
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirm_password : ""
}