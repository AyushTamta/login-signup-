import React from 'react';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';




export default function Home() {


  return (
    <>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
             Frontida Homepage
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Link this to the login/signup button of frontida home-page
            </Typography>
            <div >
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary' component={RouterLink} to='/signin'>
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' component={RouterLink} to='/signup'>
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}