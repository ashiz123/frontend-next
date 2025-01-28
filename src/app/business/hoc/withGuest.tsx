import React, { useEffect, useState, ComponentType } from 'react';
import { useRouter } from 'next/navigation';

const withGuest = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return function GuestOnly(props: P) {
    const router = useRouter();
    const [loading, setLoading] = useState(true); // To prevent flicker

    useEffect(() => {
      const userData = sessionStorage.getItem('auth_user');

      if (userData) {
        router.push('/business/dashboard');
      } else {
        setLoading(false); // User is not logged in, allow component to render
      }
    }, [router]);

    // Prevent rendering until redirect logic is resolved
    if (loading) {
      return null; // or a spinner/loading component
    }

    return <WrappedComponent {...props} />;
  };
};

export default withGuest;