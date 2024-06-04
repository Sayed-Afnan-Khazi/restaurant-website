import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Photos from "./pages/photos/Photos";
import LeaveAReview from "./pages/leave_a_review/LeaveAReview";
import TableReservation from "./pages/reserve/TableReservation";
import Admin from "./pages/reserve/Admin_res";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/photos" element={<Photos />} />
        <Route path="/leave-a-review" element={<LeaveAReview />} /> 
        <Route path="/reserve" element={<TableReservation />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
