// import axios from "axios";
import React, { createContext, useContext, useState } from "react";
// import URI_MAP from "../uri/URI_MAP";
// import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [user, setUser] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const storeData = async (user) => {
//     try {
//       await AsyncStorage.setItem("@storage_Key", user.access_token);
//     } catch (e) {
//       console.log('error :>> ', error);
//     }
//   };
  //   sign up request
//   const handleRegister = async ({
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword,
//     isAgent,
//   }) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         URI_MAP.ome.register,
//         {
//           first_name: firstName,
//           last_name: lastName,
//           email: email,
//           password1: password,
//           password2: confirmPassword,
//           is_agent: isAgent,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       setIsLoading(false);
//       const data = response.data;
//       setUser(data);
//       console.log("response", response);
//     } catch (error) {
//       setIsLoading(false);
//       console.log("error", error.response);
//       if (!err?.response) {
//         setErrorMsg("No Server Response");
//       } else {
//         setErrorMsg(
//           "invalid credentials, please make sure that you details are correct amd have not been used before"
//         );
//       }
//     }
//   };

  //   Login Request
//   const handleLogIn = async ({ email, password }) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         URI_MAP.ome.login,
//         {
//           email: email,
//           password: password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       setIsLoading(false);
//       const data = response.data;
//       setUser(data);
//         props.onLoggedIn(data);
//       console.log("response", response.data);
//     } catch (error) {
//       setIsLoading(false);
//       if (!error?.response) {
//         setErrorMsg("No Server Response");
//       } else {
//         setErrorMsg("invalid email or password");
//       }
//     }
//   };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // handleRegister,
        // handleLogIn,
        // isLoading,
        // setIsLoading,
        // errorMsg,
        // setErrorMsg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  //   if (!context) throw new Error("useAuthContext must be used in HouseProvider");

  return context;
};
export default AuthProvider;
