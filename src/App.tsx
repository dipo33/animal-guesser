import AboutPage from '@/pages/AboutPage.tsx';
import HomePage from '@/pages/HomePage.tsx';
import { PrivacyPage } from '@/pages/PrivacyPage.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import MockApp from './Mock.tsx';
import GameRoute from './routes/GameRoute.tsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/game/:mode" element={<GameRoute />} />
        <Route path="/game" element={<Navigate to="/game/classic" replace />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="mock" element={<MockApp />} />

      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default App;
