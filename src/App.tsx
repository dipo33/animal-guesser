import MockApp from './Mock.tsx';
import Layout from './components/Layout.tsx'
import HomePage from '@/pages/HomePage.tsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />          {/* path="/" */}
        {/*<Route path="game" element={<Game />} />    /!* path="/game" *!/*/}
      </Route>

      <Route path="mock" element={<MockApp />} />

      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default App;
