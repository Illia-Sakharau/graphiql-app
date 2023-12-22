import Errors from "../modules/error/error";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <Errors />
      </main>
      <Footer />
    </>
  );
};
