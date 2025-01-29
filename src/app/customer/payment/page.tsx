"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchClientSecret } from "./fetchClientSecret";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { publishableKey } from "./publishableKey";
import PaymentForm from "./PaymentForm";
import ErrorMessage from "@/app/customer/components/error";

interface paymentInterface {
  parkingAmount: number;
}

const stripePromise = loadStripe(publishableKey);

const Payment: React.FC<paymentInterface> = ({ parkingAmount }) => {
  const [clientSecret, setClientSecret] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const hasFetchedClientSecret = useRef<boolean>(false);

  const amountInClients = useMemo(() => {
    return Math.round(parseFloat(parkingAmount.toFixed(2)) * 100);
  }, [parkingAmount]);

  const getClientSecret = async (amount: number) => {
    setLoading(true);
    setError(null);
    try {
      if (amount < 30) {
        throw new Error("Amount must be atleast 30 pence");
      }

      const secretKey = await fetchClientSecret(amount);
      setClientSecret(secretKey.clientSecret);
    } catch (error) {
      console.log(error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "failed to fetch client secret";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetchedClientSecret.current) return;

    getClientSecret(amountInClients);
    hasFetchedClientSecret.current = true;
  }, [amountInClients]);

  console.log(loading);

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
