import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="space-y-3 flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
