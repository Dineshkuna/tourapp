import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams(); // Get the username from the URL

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
};

export default Profile;
