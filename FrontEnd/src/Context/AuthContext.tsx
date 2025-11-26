import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { User } from "../UserType";
import axios from "axios";
type AuthType = {
  // User: User;
  // Login :  (User:User) => void,
  SingUp: (newUser: User) => Promise<string>;
  // Logout: () => void,
};



export const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  

 const SingUp  = async (newUser:User) => {
    try {
      const respons = await axios.post("http://localhost:3000/Auth/Singup",newUser);

      return(respons.data.message);
    } catch (error: any) {
      return(error.response.data.message);
    } 
 }
//   // const Login = async (User:User)  => {

//   //     const respons = await  axios.post("http://localhost:3000/Auth/Singup" , User)

//   // }
//   // const Logout = ()  => {

//   //     setUser({Name : "" , Email : "" , password : ""})

  // }

  return (
    <AuthContext.Provider value={{ SingUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Something went in Context or authentification");
  }

  return context;
};
