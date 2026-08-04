import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import TeamDetails from "./pages/TeamDetails/TeamDetails";

import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Players from "./pages/Players/Players";
import Matches from "./pages/Matches/Matches";
import PointsTable from "./pages/PointsTable/PointsTable";
import Records from "./pages/Records/Records";
import Venues from "./pages/Venues/Venues";
import Compare from "./pages/Compare/Compare";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="teams" element={<Teams />} />

          <Route path="players" element={<Players />} />

          <Route path="matches" element={<Matches />} />

          <Route path="points-table" element={<PointsTable />} />

          <Route path="records" element={<Records />} />

          <Route path="venues" element={<Venues />} />

          <Route path="compare" element={<Compare />} />

          <Route path="about" element={<About />} />

          <Route path="/teams/:id" element={<TeamDetails />}
/>

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;