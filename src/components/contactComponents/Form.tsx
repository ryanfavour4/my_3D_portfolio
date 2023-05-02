import React, { useContext, useRef } from "react";
import "../../styles/Form.css";
import { FormContext } from "../../context/ContactFormContext";

const Form = () => {
  const formRef = useRef<any>();
  const { handleSubmitContactForm } =
    useContext(FormContext);

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          handleSubmitContactForm(formRef.current);
        }}
        className="Contact_form"
      >
        <label className="lb" htmlFor="name">
          Name:
        </label>
        <input required name="name" id="name" type="text" className="infos" />

        <label htmlFor="email" className="lb">
          E-mail:
        </label>
        <input required name="email" id="email" type="email" className="infos" />

        <label htmlFor="message" className="lb">
          Message:
        </label>
        <input required name="text" id="message" type="text" className="infos" />

        <button id="send" type="submit">
          Send
        </button>
        <button id="limpar" type="reset">
          Clear{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
