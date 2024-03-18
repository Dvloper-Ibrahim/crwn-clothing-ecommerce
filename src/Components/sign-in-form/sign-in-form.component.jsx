import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../Store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

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
    dispatch(googleSignInStart());
  };

  // Submit and create the user
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
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
    <SignInContainer>
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

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
