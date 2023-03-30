import Header from "./mainComponents/Header";
import HomePage from "./routComponents/HomePage";
import Footer from "./mainComponents/Footer";
import styleApp from "./App.module.css";

function App() {
  return (
    <div className={styleApp.all}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
