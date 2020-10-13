import React from 'react';
import Footer from './footer';

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full p-2 mx-auto max-w-screen-md lg:max-w-screen-xl md:px-4 md:py-4">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
