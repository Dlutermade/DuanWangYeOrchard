import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Title from './components/Title';

const Knowledge = () => {
  return (
    <>
      <Title />
      <Menu />
      <Outlet />
    </>
  );
};

export default Knowledge;
