import { Box, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/auth/AuthSlice";
import { useLoginMutation } from "../redux/auth/AuthApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [userLogin] = useLoginMutation();

  async function btnLogin() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await userLogin({ email, password }).unwrap();
      dispatch(setToken(response?.result?.access_token));
      console.log("Login successful, token:", response?.result?.access_token);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed, please check your credentials.");
    }
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: { xs: 3, sm: 5 },
          border: "2px solid black",
          borderRadius: 4,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img src={logo} alt="logo" style={{ width: "8rem" }} />
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              padding: 3,
              fontWeight: "bold",
              textAlign: "center",
              color: "#1976D2",
            }}
          >
            Sign in to Tetrad Business
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              id="email"
              label="Email"
              required
              placeholder="Enter Email"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              required
              placeholder="Enter Password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button variant="contained" color="primary" onClick={btnLogin}>
              SIGN IN
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
