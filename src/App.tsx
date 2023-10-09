import React from 'react';
import News from './pages/News';
import Header from './components/Shared/Header';
import Layout from './components/Shared/Layout';
import Footer from './components/Shared/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" Component={News}></Route>
          </Routes>
        </Layout>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
