import React, { useState } from "react";
import InputTextMessage from "../../component/TextField/inputTextFields";
import {
  Avatar,
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Button from "../../component/Button/Button";
import {
  BroadcastOnPersonal,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import AlertMessage from "../../component/AlertMessage/AlertMessage";

function HalamanLogin(params) {
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setisSuccess(true);
  };
  const handleClose = () => {
    setisSuccess(false);
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            marginTop: 15,
            left: 0,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          component="form"
          onSubmit={handleSubmit}
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
            required
            margin="normal"
            autoFocus
            name="username"
            type="text"
          />
          <div style={{ display: "flex", width: "100%", position: "relative" }}>
            <InputTextMessage
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              autoFocus
              name="password"
              type={isShowPassword ? "text" : "password"}
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
          <AlertMessage
            label="your username is correct"
            open={isSuccess}
            severity="success"
            onClose={handleClose}
          />
        </Grid>
        {/* </Box> */}
        <Grid
          item
          xs={6}
          sx={{
            left: 0,
            alignItems: "right",
          }}
        >
          <div>
            <img
              src={
                "https://images.pexels.com/photos/2116715/pexels-photo-2116715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HalamanLogin;
