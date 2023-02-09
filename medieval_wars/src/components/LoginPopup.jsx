import { Button, FormControl, TextField } from "@mui/material";
import styles from "../style";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

const Login = () => {
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [User, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  const login = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    )
      .then((res) => {
        console.log("resss", res);
        alert("Login Successfull");
        // navigate("/Navigation");
        setEmail("");
        setPassword("");
        console.log("resss", User);
      })
      .catch((err) => {
        console.log("eroors", err);
      });
  };

  return (
    <section id="Login" className="p-4">
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[25px] text-[52px]  mb-4">
          Login
        </h1>
        <div>
          <TextField
            // style={{ borderColor: "#fff" }}
            className="mb-4 "
            id="email"
            label="Email"
            size="small"
            variant="outlined"
            color="secondary"
            value={loginEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="mb-4"
            size="small"
            id="password"
            label="Password"
            variant="outlined"
            color="secondary"
            value={loginPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center">
          <Button
            variant="contained"
            size="small"
            onClick={login}
            fullWidth
            style={{ backgroundColor: "#875cd8", color: "#fff" }}
          >
            Login
          </Button>
        </div>
        <div>
          <p style={{ fontSize: "14px", textAlign: "center", marginTop: 10 }}>
            Already have an account{" "}
            <a href="SignupPage#SignupPage" style={{ color: "#875cd8" }}>
              Signup
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
