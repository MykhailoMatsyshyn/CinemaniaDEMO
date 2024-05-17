// import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTopButton from "../scroll-to-top-button/ScrollToTopButton";
import css from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={css.page__container}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />

      {/* <AppBar /> */}
      {/* {children} */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
}
