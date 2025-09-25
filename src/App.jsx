// src/App.jsx

import { Routes, Route } from 'react-router'; // Import React Router

import NavBar from './components/NavBar/NavBar.jsx';
// Import the SignUpForm component
import SignUpForm from './components/SignUpForm/SignUpForm.jsx';

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;

