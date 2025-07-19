// 'use client'

// import { useOCAuth } from '@opencampus/ocid-connect-js';

// export default function LoginButton() {
//   const { ocAuth } = useOCAuth();

//   const handleLogin = async () => {
//     try {
//       // await ocAuth.signInWithRedirect({ state: 'opencampus' });
//     } catch (error) {
//       // console.error('Login error:', error);
//     }
//   };

//   return <button onClick={handleLogin}>Login</button>;
// }

// Login button and authentication are hidden/disabled as per request.
export default function LoginButton() {
  return null;
}