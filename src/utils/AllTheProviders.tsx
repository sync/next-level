import React from "react";
import RouterProvider from "../utils/RouterProvider";
import GraphQLProvider from "../utils/GraphQLProvider";

const AllTheProviders = ({ children }) => {
  return (
    <RouterProvider>
      <GraphQLProvider>{children}</GraphQLProvider>
    </RouterProvider>
  );
};

export default AllTheProviders;
