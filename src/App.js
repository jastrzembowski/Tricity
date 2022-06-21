import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Technologies from "./components/technologies/Technologies";
import Company from "./components/company/Company";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/company" element={<Company/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/technologies" element={<Technologies/>}/>
        <Route path="/contact" element={<Contact/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
