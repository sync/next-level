import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="antialiased text-gray-900 flex max-h-screen">
      {children}
    </div>
  );
};

export default Layout;
