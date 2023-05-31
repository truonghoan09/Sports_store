import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function AppProvider({ children }) {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>{children}</BrowserRouter>
    </Suspense>
  );
}
