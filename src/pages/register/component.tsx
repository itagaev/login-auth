import React, { FC, useState } from "react";
import { Typography, FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { register } from "../../api";

import { useLoginStyles } from "../login/styles";

export const RegisterPage: FC = () => {
  const classes = useLoginStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [hasError, setHasError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.length >= 4 && password.length >= 6 && emailRegex.test(email)) {
      const { status } = await register(username, password, email);
      if (status === 204) {
        setIsRegistered(true);
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={classes.container}>
      {!isRegistered ? (
        <>
          {hasError && (
            <Alert className={classes.alert} severity='error'>
              <AlertTitle>
                <Typography>login - обязательное поле не менее 4 символов</Typography>
                <Typography>password - обязательное поле не менее 6 символов</Typography>
                <Typography>email - обязательное поле, валидный email </Typography>
              </AlertTitle>
            </Alert>
          )}

          <Typography variant='h4' gutterBottom>
            Регистрация
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormControl className={classes.input}>
              <InputLabel htmlFor='login'>Login</InputLabel>
              <Input value={username} onChange={(e) => setUsername(e.currentTarget.value)} id='login' />
            </FormControl>

            <FormControl className={classes.input}>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl className={classes.input}>
              <InputLabel htmlFor='login'>Email</InputLabel>
              <Input value={email} onChange={(e) => setEmail(e.currentTarget.value)} id='email' />
            </FormControl>

            <Button className={classes.button} type='submit' variant='contained' color='primary' size='large'>
              Вход
            </Button>

            <Link to='/login'>Есть аккаунт?</Link>
          </form>
        </>
      ) : (
        <Alert severity='success'>
          <AlertTitle>Успех!</AlertTitle>
          <Link to='/login'>Зайти в аккаунт</Link>
        </Alert>
      )}
    </div>
  );
};
