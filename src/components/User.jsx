import React from 'react';
import './User.css';
import { Card, Image } from 'semantic-ui-react';

const User = ({ displayName, modified, photoURL }) => (
  <Card>
    <Image
      onLoad={() => {
        console.log(photoURL.naturalWidth);
      }}
      src={photoURL}
    />
    <Card.Content>
      <Card.Header>{displayName}</Card.Header>
    </Card.Content>
  </Card>
);

export default User;
