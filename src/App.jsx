// src/App.jsx
import { useContext } from 'react';
import { Routes, Route } from 'react-router'; // Import React Router

import NavBar from './components/NavBar/NavBar.jsx';
// Import the SignUpForm component
import SignUpForm from './components/SignUpForm/SignUpForm.jsx';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import { UserContext } from './contexts/UserContext';
const App = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <NavBar />
      <Routes>
         <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;

