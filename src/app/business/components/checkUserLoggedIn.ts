'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const checkUserLoggedIn = () => {
    const router  = useRouter();

    useEffect(() => {
        try{
            const user = localStorage.getItem('auth_user');
            if(!user){
                router.push('/business/login');
            }
        }

        catch(error){
            console.log('User not logged in ', error)
        }
}, [])

   

}