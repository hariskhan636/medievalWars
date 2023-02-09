import { Button, TextField } from "@mui/material";
import styles from "../style";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userid, setuserid] = useState(null);
  const UserRef = collection(db, "users");

  const handleAdd = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        alert("Signup sucessful");
        // console.log("user signed up", user.uid);
        // setuserid(user.uid);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    handleAddData();
  };

  const handleAddData = async () => {
    await addDoc(UserRef, {
      name: name,
      email: email,
    });
    setName("");
    setEmail("");
  };

  return (
    <section id="SignupPage" className={` p-4 bg-white ${styles.paddingY}`}>
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[25px] text-[52px]  mb-4">
          SignUp
        </h1>
        <div className="row">
          <TextField
            size="small"
            className="mb-4"
            id="email"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
            size="small"
            className="mb-4"
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
            size="small"
            className="mb-4"
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row">
          <Button
            style={{ backgroundColor: "#875cd8", color: "#fff" }}
            onClick={handleAdd}
            variant="contained"
          >
            Signup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
