import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Chat from './Component/chat';
import SignIn from './Component/signIn';
import SignUp from './Component/signUp';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}