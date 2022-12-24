import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate, useParams } from "react-router-dom";

const ViewUser = ({store}) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    navigate("/");
  };

  const loadUser = async () => {
    store.forEach((user) => {
      if(user.id == id){
        setUser(user);
      }
    });
  };
  return (
    <div className="container">
       <h1>Edit user</h1>
      <div className='container w-75 mx-auto shadow p-5'>
      <Form onSubmit={e=> handleSubmit(e)}>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter username'
                name='username'
                value={user.username}
            />
        </div><br/>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter full name'
                name='name'
                value={user.name}
            />
        </div><br/>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter email address'
                name='email'
                value={user.email}
            />
        </div><br/>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter mobile number'
                name='phone'
                value={user.phone} 
            />
        </div><br/>
      <Button variant="btn btn-primary" type="submit">
        Go to Home
      </Button>
    </Form>
      </div>
    </div>
  );
};

export default ViewUser;