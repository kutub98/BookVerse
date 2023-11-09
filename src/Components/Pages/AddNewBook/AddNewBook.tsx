import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const AddNewBook = () => {
  const [AuthorName, setAuthorName] = useState('');
  const [Genre, setGenre] = useState('');
  const [PublicationDate, setPublicationDate] = useState('');
  const [Title, setTitle] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (e: any) => {
    e.preventDefault();
    // Add your login logic here, e.g., send login data to the server
    console.log('Login button clicked!');
    console.log('AuthorName:', AuthorName);
    console.log('Title:', Title);
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
         Add New Book
        </Typography>
        <form
          onSubmit={handleLogin}
          style={{ width: '100%', marginTop: '16px' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Author Name"
                variant="outlined"
                value={AuthorName}
                onChange={e => setAuthorName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                type="Title"
                variant="outlined"
                value={Title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Genre"
                variant="outlined"
                value={Genre}
                onChange={e => setGenre(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="PublicationDate"
                type="PublicationDate"
                variant="outlined"
                value={PublicationDate}
                onChange={e => setPublicationDate(e.target.value)}
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
              Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddNewBook;
