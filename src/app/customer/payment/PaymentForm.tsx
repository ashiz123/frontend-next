"use client"
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';

interface PaymentFormProps {
  clientSecret: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);
    

   if (!stripe || !elements) {
      console.error("Stripe or Elements not loaded yet");
      return;
    }


   const cardElement = elements.getElement(CardElement);
    console.log(cardElement);
    if (!cardElement) {
      console.error("CardElement not found.");
      return;
    }

    try{
      const {paymentIntent, error} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Jenny Rosen", // Customer's full name
              email: "jenny.rosen@example.com", // Customer's email
              phone: "555-555-5555", // Customer's phone number (optional)
              address: {
                line1: "123 Main Street", // Address line 1
                line2: "Apt 4B", // Address line 2 (optional)
                city: "San Francisco", // City
                state: "CA", // State or province
                postal_code: "94111", // Postal/ZIP code
                country: "US", // 2-letter country code (ISO 3166-1 alpha-2)
              },
          },
        },
      },
      )

      if (error) {
        console.error("[Payment error]", error.message);
        setPaymentStatus("Payment failed. Please try again.");
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        setPaymentStatus("Payment succeeded! 🎉");
      }

    }
    catch(error){
      if (error instanceof Error) {
        console.error("Unhandled Error:", error.message);
        setPaymentStatus("An unexpected error occurred.");
      } else {
        console.error("Unexpected Error:", error);
        setPaymentStatus("An unexpected error occurred.");
      }
    }
    finally{
      setIsProcessing(false)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isProcessing && <p>Payment is processing</p>}
      {paymentStatus && <p>{paymentStatus}</p>}
      {/* Stripe's Payment Element renders the payment UI */}
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;