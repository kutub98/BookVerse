import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (e: any) => {
    e.preventDefault();
    // Add your login logic here, e.g., send login data to the server
    console.log('Login button clicked!');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" component="h1">
          Login
        </Typography>
        <form
          onSubmit={handleLogin}
          style={{ width: '100%', marginTop: '16px' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
