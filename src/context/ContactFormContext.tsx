import React, { createContext } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICES_ID_KEY, EMAILJS_TEMPLATE_KEY,EMAILJS_ACCOUNT_PUBLIC_KEY } from "../keys/emailjs.keys";
import { toast } from "react-toastify";

type props = {
  children: React.ReactNode;
};

type FormContextType = {
  success?: boolean;
  responseText?: string;
  handleSubmitContactForm?: any;
};

export const FormContext = createContext<FormContextType>({});

const ContactFormContext = ({ children }: props) => {
  const ToastOpt =  {
    position: toast.POSITION.TOP_RIGHT,
  };

  const handleSubmitContactForm = (formRef: any) => {
    emailjs
      .sendForm(
        EMAILJS_SERVICES_ID_KEY,
        EMAILJS_TEMPLATE_KEY,
        formRef,
        EMAILJS_ACCOUNT_PUBLIC_KEY
      )
      .then(
        (result: any) => {
          formRef.reset();
          toast.success('Message sent successfully ✅', ToastOpt);
        },
        (error: any) => {
          toast.error('Something went wrong please try again ❌', ToastOpt);
        }
      )
  };
  return (
    <FormContext.Provider
      value={{  handleSubmitContactForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default ContactFormContext;
