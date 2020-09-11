import React from 'react';
import axios from 'axios';
import { getAuthHeaders } from './Auth';

const Admin = (props) => {
  const getContent = () => {
    axios
      .get('http://localhost:8080/api/v1/sample/admin-only/123', {
        headers: getAuthHeaders(),
      })
      .then((response) => {
        alert(response.data);
      });
  };
  return (
    <>
      <h3>Admin</h3>
      <hr />
      <button onClick={getContent}>Get Content</button>
    </>
  );
};

export default Admin;
