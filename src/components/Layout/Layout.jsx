// import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTopButton from "../scroll-to-top-button/ScrollToTopButton";
// import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
      <ScrollToTopButton />

      {/* <AppBar /> */}
      {/* {children} */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
}
