import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepState from './components/StepState';
import Page from './Page';
import { PageStateEnum } from './PageStateEnum';
import { FormContextProvider } from './UserContext';

const index = () => {
  const [step, setSetp] = useState(PageStateEnum.ORDER_CHECK);

  const handleChangeSetp =
    (step: PageStateEnum): React.MouseEventHandler =>
    (e) => {
      e.preventDefault();
      setSetp(() => step);
    };

  return (
    <div>
      <Link
        to="/shop"
        className="relative text-2xl before:absolute before:left-0 before:top-1 before:h-full before:w-0 before:border-b-2 before:border-gray-800 before:duration-200 hover:before:w-full"
      >
        {'< 返回產品頁面'}
      </Link>
      <StepState className="mt-6 mb-6" step={step} />

      <FormContextProvider>
        <Page state={step} handleChangeSetp={handleChangeSetp} />
      </FormContextProvider>
    </div>
  );
};

export default index;
