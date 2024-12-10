import React from 'react';
import Layout from '@/app/customer/components/customerLayout';
import { Button } from 'flowbite-react';

const contactPage : React.FC = () => {
    return(
        <Layout>
           
           contact page
           <Button gradientDuoTone="cyanToBlue">Click Me</Button>
        
        </Layout>
    )
}


export default contactPage;