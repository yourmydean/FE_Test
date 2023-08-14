import React, { useState } from "react";
import InputTextMessage from "../../component/TextField/inputTextFields";
import {
  Alert,
  Avatar,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Button from "../../component/Button/Button";
import {
  BroadcastOnPersonal,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const Login = () => {
  const [isShowPassword, setisShowPassword] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("password", password);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const ProsesLogin = (e) => {
    e.preventDefault();
    if (validate) {
      fetch(process.env.REACT_APP_API_URL + "/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };

  const validate = () => {
    let result = true;

    if (username == "" || username == null) {
      return (
        <Stack sx={{ width: "100%" }} spacing={2}>
          result=false
          <Alert severity="warning">Input Username</Alert>;
        </Stack>
      );
    }
    if (password == "" || password == null) {
      return (
        <Stack sx={{ width: "100%" }} spacing={2}>
          result=false
          <Alert severity="warning">Input Password</Alert>;
        </Stack>
      );
    }
    return result;
  };

  return (
    <Grid container spacing={0} sx={{ height: "100%" }}>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyC: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          padding: 20,
        }}
        component="form"
        onSubmit={ProsesLogin}
      >
        <Avatar sx={{ bgcolor: "warning.main" }}>
          <BroadcastOnPersonal />
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Sign In
        </Typography>
        <InputTextMessage
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          autoFocus
          name="username"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <div style={{ display: "flex", width: "100%", position: "relative" }}>
          <InputTextMessage
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            autoFocus
            name="password"
            type={isShowPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              position: "absolute",
              right: 15,
              top: 33,
              cursor: "pointer",
            }}
            onClick={() => setisShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </div>
        </div>
        <Button type="submit" variant="contained" fullWidth label="Login" />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyC: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage:
            "url(https://images.pexels.com/photos/2116715/pexels-photo-2116715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Grid>
    </Grid>
  );
};

export default Login;
