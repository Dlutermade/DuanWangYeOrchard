import React from 'react';
import { Outlet } from 'react-router-dom';
import Title from './components/Title';
import { useOredrInjection } from './OutletContext';

const index = () => {
  const [order, setOrder] = useOredrInjection();

  return (
    <>
      <Title />
      <Outlet context={{ order, setOrder }} />
    </>
  );
};

export default index;
