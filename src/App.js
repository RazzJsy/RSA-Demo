import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout/layout';
import HomeInsurance from './webpages/homeInsurance/homeInsurance'

import './sass/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeInsurance title="Home Insurance" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
