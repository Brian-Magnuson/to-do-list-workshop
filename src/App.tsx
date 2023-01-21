import React from 'react';
import Navbar from './components/Navbar';
import ListContainer from './components/ListContainer';

export default function App() {

  // EXERCISE (1) -- Create a Header component from scratch
  // Should be a header element with .header class
  return (
    <>
      <Navbar />
      <ListContainer />
    </>
  );
}