import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Home = ({store,setStore,handleDelete, deleting, setDeleting}) => {

  return (
    <div className='container'>
      <div className='py-4'>
      <h1>Home page</h1>
      <div>
      <Table striped bordered hover variant="dark">
      <thead >
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {store && store.map((user, index)=>(
        <tr>
          <td>{index}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Link className='btn btn-outline-success' to={'/users/view/'+user.id}> View</Link>
            <Link className='btn btn-primary' to={'/users/edit/'+user.id}> Edit</Link>
            <Link className='btn btn-danger' onClick={(e)=>{setDeleting([true,index]); handleDelete(e,user.id)}}> {(deleting[0] && deleting[1]===index)? 'Deleting...' : "Delete"}</Link>
          </td>
        </tr>
       ))}
      </tbody>
    </Table>
      </div>
      </div>
    </div>
  )
}

export default Home

