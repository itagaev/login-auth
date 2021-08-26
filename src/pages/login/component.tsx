import React, { FC, useState } from "react";
import { Typography, FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { login } from "../../api";

import { useLoginStyles } from "./styles";

export const LoginPage: FC = () => {
  const classes = useLoginStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) return;

    const { status } = await login(username, password);
    if (status === 204) {
      setIsLogined(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={classes.container}>
      {!isLogined ? (
        <>
          {hasError && (
            <Alert className={classes.alert} severity='error'>
              <AlertTitle>Неправильный login или password</AlertTitle>
            </Alert>
          )}

          <Typography variant='h4' gutterBottom>
            Вход
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

            <Button className={classes.button} type='submit' variant='contained' color='primary' size='large'>
              Вход
            </Button>

            <Link to='/register'>Нет аккаунта? Создать</Link>
          </form>
        </>
      ) : (
        <Alert severity='success'>
          <AlertTitle>Успех!</AlertTitle>
          Вы вошли в аккаунт
        </Alert>
      )}
    </div>
  );
};
