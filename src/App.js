import CompanyCard from './CompanyCard';
import Floor from './Floor';
import Footer from './Footer';
import Partnerships from './Partnerships';
import './css/App.css';
import { useState, useEffect } from 'react';


//Main application
function App() {
  //Storing details of different companies
  const [companies, setCompanies] = useState([]);

  //reading data from the files
  useEffect(() => {
    const readDataFile = async () => {
      try {
        const content = await fetch('./CompanyData.json');
        const contentText = await content.json();
        setCompanies(contentText);
      } catch(error){
        console.error(error);
      }
    };
    readDataFile();
  }, [])

  
  //displaying all elements in the site
  return (
    <div className="App">
      <section className="App-section">

        {/* Logo and Partnerships */}
        <div className='section-back'>
          <img src='./images/logo.png' alt='Touch the Peak 2023 Logo' className='ttp-logo' />
          <Partnerships/>
        </div>


        {/* Ground Floor */}
        <Floor floorText = "Ground Floor"/>
        <div className='company-list'>
          {companies.map((company) => (
              company.floor === "0" ? <CompanyCard company={company}/> : ""
            ))}   
        </div>


        {/* First Floor */}
        <Floor floorText = "First Floor"/>
        <div className='company-list'>
          {companies.map((company) => (
              company.floor === "1" ? <CompanyCard company={company}/> : ""
            ))}   
        </div>


        {/* Footer Section */}
        <div className='footer-sec'>
          <Partnerships/>
        </div>
        <Footer/>


      </section>
    </div>
  );
}

export default App;
