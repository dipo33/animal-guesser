import AboutPage from '@/pages/AboutPage.tsx';
import HomePage from '@/pages/HomePage.tsx';
import { PrivacyPage } from '@/pages/PrivacyPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import MockApp from './Mock.tsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="about" element={<AboutPage />} />
        {/*<Route path="game" element={<Game />} />    /!* path="/game" *!/*/}
      </Route>

      <Route path="mock" element={<MockApp />} />

      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default App;
