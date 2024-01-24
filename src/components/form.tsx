import { Box, Button, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authenticationAction } from "../store/authentication-slice";
import { useEffect, useRef } from "react";

const formSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

type formType = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const isEmailValid = !formState.errors.email?.message;
  const isPasswordValid = !formState.errors.password?.message;
  const isNameValid = !formState.errors.name?.message;

  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
    localStorage.setItem("authenticated", "true");
    dispatch(authenticationAction.loggedInHandler());
    reset();
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        padding: "50px 0px 0px 10px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            margin: "auto",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
              {...register("name")}
              label="Name"
              variant="standard"
              error={!isNameValid}
              helperText={formState.errors.name?.message}
              autoFocus
            />
            <TextField
              {...register("email")}
              label="Email"
              variant="standard"
              required
              error={!isEmailValid}
              helperText={formState.errors.email?.message}
            />
            <TextField
              {...register("password")}
              label="Password"
              variant="standard"
              required
              type="password"
              error={!isPasswordValid}
              helperText={formState.errors.password?.message}
            />
          </Box>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
