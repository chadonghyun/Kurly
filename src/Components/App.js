import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer'
import './css/Common.css';

function App(props) {
  return (
  <>
    <body>
      <Header />
      <ProductList />
      <Footer />
    </body>
  </>
  );
}

export default App;