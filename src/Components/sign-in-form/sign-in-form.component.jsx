import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [valid, setValid] = useState(true);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  // Sign in eith google
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // Submit and create the user
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let { user } = await signInAuthUserWithEmailAndPassword(email, password);
      // console.log(user);
      setValid(true);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setValid(false);
      }
      console.error(err.code);
    }
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {!valid && <span className="invalid">Invalid email or password</span>}
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
