import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}

export default Authentication;

/* Signing in with different methods */

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../Utils/firebase/firebase.utils";

// function SignIn() {
//   useEffect(() => {
//     async function getResult() {
//       const response = await getRedirectResult(auth);

//       if (response) {
//         await createUserDocumentFromAuth(response.user);
//       }
//     }
//     getResult();
//   }, []);

//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     await createUserDocumentFromAuth(user);
//   };

//   // const logGoogleRedirectUser = async () => {
//   //   const { user } = await signInWithGoogleRedirect();
//   //   console.log(user);
//   // };

//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <button onClick={logGoogleUser}>Sign in with Google Popup</button>
//       <button onClick={signInWithGoogleRedirect}>
//         Sign in with Google Redirect
//       </button>
//     </div>
//   );
// }

// export default SignIn;
