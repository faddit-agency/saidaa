import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Works from '@/pages/Works';
import WorksDetail from '@/pages/WorksDetail';
import Saidaa from '@/pages/Saidaa';
import ZeroSaidaa from '@/pages/ZeroSaidaa';
import ZeroSaidaaDetail from '@/pages/ZeroSaidaaDetail';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="works/:id" element={<WorksDetail />} />
          <Route path="saidaa" element={<Saidaa />} />
          <Route path="zero-saidaa" element={<ZeroSaidaa />} />
          <Route path="zero-saidaa/:id" element={<ZeroSaidaaDetail />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
