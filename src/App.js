import CompanyCard from './CompanyCard';
import Floor from './Floor';
import Partnerships from './Partnerships';
import './css/App.css';


//Storing details of different companies
const companies = [{
  "floor" : "0",
  "name" : "CodeGen",
  "logo" : "./images/companies/codegen.jpg",
  "location" : "LGF 07",
  "positions" : "Software Developer,Graphic Designer,Network Administrator"
},{
  "floor" : "0",
  "name" : "99X",
  "logo" : "./images/companies/99x.png",
  "location" : "LGF 10",
  "positions" : "Software Developer,Graphic Designer"
},{
  "floor" : "0",
  "name" : "CodeGen",
  "logo" : "./images/companies/codegen.jpg",
  "location" : "LGF 07",
  "positions" : "Software Developer,Graphic Designer,Network Administrator"
},{
  "floor" : "1",
  "name" : "99X",
  "logo" : "./images/companies/mobitel.jpeg",
  "location" : "LGF 10",
  "positions" : "Software Developer,Graphic Designer"
},{
  "floor" : "1",
  "name" : "CodeGen",
  "logo" : "./images/companies/mas.jpg",
  "location" : "LGF 07",
  "positions" : "Software Developer,Graphic Designer,Network Administrator"
},{
  "floor" : "1",
  "name" : "99X",
  "logo" : "./images/companies/silvermill.svg",
  "location" : "LGF 10",
  "positions" : "Software Developer,Graphic Designer"
}]



//Main application
function App() {
  //declaring variables for all components



  //displaying all elements in the site
  return (
    <div className="App">
      <header className="App-header">

        <Partnerships imageLink="https://placehold.co/1400x75"/>

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

        <Partnerships imageLink="https://placehold.co/1400x75"/>
      </header>
    </div>
  );
}

export default App;
