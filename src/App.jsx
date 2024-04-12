import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
