import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate, useParams } from "react-router-dom";

const EditUser = ({handleEdit, store}) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [updating, setUpdating] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    console.log("JJJ",id)
    loadUser();
  }, []);
  const handleChange = (e)=>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value});
    };

  const handleSubmit = async e => {
    try{

      e.preventDefault();
      setUpdating(true);
      console.log(id)
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
      console.log('Updated',res.data);
      handleEdit(e,res.data);
      navigate("/");
    }catch(err){
      alert(err);
    }
  };

  const loadUser = async () => {
    store.forEach((user) => {
      if(user.id == id){
        setUser(user);
      }
    });
  };
  return ( updating? <h1>Updating wait..</h1> :
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
                onChange={e => handleChange(e)}
            />
        </div><br/>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter full name'
                name='name'
                value={user.name}
                onChange={e => handleChange(e)}
            />
        </div><br/>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter email address'
                name='email'
                value={user.email}
                onChange={e => handleChange(e)}
            />
        </div><br/>
        <div className='form-group'>
            <input 
                type='text'
                className='form-conrtrol form-control-lg'
                placeholder='Enter mobile number'
                name='phone'
                value={user.phone}
                onChange={e => handleChange(e)}
            />
        </div><br/>
      <Button variant="btn btn-primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  );
};

export default EditUser;