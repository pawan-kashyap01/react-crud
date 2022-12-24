import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import useApi from './components/customHooks/useApi';
import useDeleteApi from './components/customHooks/useDeleteApi';



function App() {
  const {loading, data:store, setData: setStore } = useApi('https://jsonplaceholder.typicode.com/users');
  const [deleting, setDeleting] = useState(false);
  const handleDelete = (e,id)=>{
    e.preventDefault();
    const data = store.filter((user) => {
      console.log(user.id !== id , user.id , id)
      return user.id !== id
    });
    axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
    .then(resData=>{
        setStore(data);
        setDeleting(false);
    }).catch(err=>{
        alert(err);
    });
  }

  const handleEdit = (e,upUser)=>{
    e.preventDefault();
    const x =  store.map((user) => {
      if(user.id === upUser.id){
        return upUser;
      }else{
        return user;
      }
    });
    setStore(x);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={loading? <h1>loading</h1> : <Home store={store} setStore={setStore} handleDelete={handleDelete} deleting={deleting} setDeleting={setDeleting}/>} />
          <Route path="users/add" element={<AddUser store={store} setStore={setStore}/>} />
          <Route path="users/edit/:id" element={<EditUser store={store} setStore={setStore} handleEdit={handleEdit} />} />
          <Route path="users/view/:id" element={<ViewUser store={store} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
