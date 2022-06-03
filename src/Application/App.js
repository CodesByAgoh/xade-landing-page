import 'Application/App.css';
import NavBar from 'Components/NavBar';
import MainSection from 'Components/MainSection';
import Footer from 'Components/Footer';
import Section2 from 'Components/Section2';
import Section3 from 'Components/Section3';
import Section4 from 'Components/Section4';
import Footer2 from 'Components/Footer2';
import Section3b from 'Components/Section3b';
import 'Stylesheets/Responsive.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <Footer />
      <Section2 />
      <Section3 />
      <Section3b/>
      <Section4 />
      <Footer2 />
    </div>
  );
}

export default App;
