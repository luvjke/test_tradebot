import React from 'react';

import { AppRouter } from '../AppRoutes/AppRoutes';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};
