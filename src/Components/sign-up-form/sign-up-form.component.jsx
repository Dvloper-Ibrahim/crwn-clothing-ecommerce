import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  // Submit and create the user
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      let { user } = await createAuthUserWithEmailAndPassword(email, password);
      // console.log(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.error("user creation encountered an error: ", err);
      }
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
