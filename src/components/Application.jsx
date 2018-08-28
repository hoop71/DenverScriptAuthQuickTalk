import React from 'react';
import User from './User';
import './Application.css';
import { Button } from 'semantic-ui-react';
import { Advertisement, Container, Grid, Segment, Responsive } from 'semantic-ui-react';

const Application = ({ auth, signIn, signOut, users }) => {
  const signOutAction = () => {
    signOut(auth.email);
  };
  return (
    <Container>
      <Advertisement unit="top banner" test="🔥🔥🔥🔥 8 Minute Auth with Firebase 🔥🔥🔥🔥" />
      <div class="ui message">
        {auth.status === 'ANONYMOUS' &&
          auth.status !== 'LOADING' && (
            <Button onClick={signIn} color="green" content="Sign In" icon="sign in alternate" />
          )}
        {auth.status === 'SIGNED_IN' &&
          auth.status !== 'LOADING' && (
            <Button
              onClick={signOutAction}
              color="red"
              content="Sign Out"
              icon="sign out alternate"
            />
          )}
      </div>
      <Grid>
        <Grid.Row centered>
          {users &&
            users.map(user => {
              return (
                <Grid.Column mobile={16} tablet={8} computer={5} key={user.photoURL}>
                  <User
                    centered
                    key={user.photoURL}
                    displayName={user.displayName}
                    photoURL={user.photoURL}
                  />
                </Grid.Column>
              );
            })}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Application;
