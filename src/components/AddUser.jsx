import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, } from 'react-router-dom';

const AddUser = ({store, setStore}) => {
    let navigate = useNavigate();
    const[user, setUser] = useState({
        username:'',
        name:'',
        email:'',
        phone:''
    });
    const handleChange = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("use",user)
        const resp = await axios.post("https://jsonplaceholder.typicode.com/users",user);
        console.log("resp=",resp);
        console.log("resp=",[...store, resp]);
        setStore([...store, resp.data]);
        navigate('/');
    }

  return (
    <div>
      <h1>Add user</h1>
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
  )
}

export default AddUser;
