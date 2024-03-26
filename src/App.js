import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home';
import Thankyou from './Components/Thankyou/Thankyou'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
        {/* <FormProvider> */}
          {/* <Header /> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/thankyou" exact element={<Thankyou />} />
          </Routes>
          <Footer />
        {/* </FormProvider> */}
      </Router>
    </div>
  );
}

export default App;
