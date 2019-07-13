import React from 'react';
import RouterProvider from '../utils/RouterProvider';
import UrqlProvider from './UrqlProvider';

const AllTheProviders = ({ children }) => {
  return (
    <RouterProvider>
      <UrqlProvider>{children}</UrqlProvider>
    </RouterProvider>
  );
};

export default AllTheProviders;
