import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Layout from "./page/Layout";
import About from "./page/About";
import Contact from "./page/Contact";
import Menu from "./page/Menu";
import Cart from "./page/Cart";
import Message from "./page/Message";
import NoPage from "./page/NoPage";

export default function App() {
  return (
      <>
        <BrowserRouter>
          <Routes classname="navBar">
              <Route path="/" element={<Layout  />} >
                   <Route index element={<About />} />
                   <Route path="contact" element={<Contact />} />
                   <Route path="menu" element ={<Menu />} />
                   <Route path="cart" element={<Cart />} />
                   <Route path="message" element={<Message />} />
                   <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
