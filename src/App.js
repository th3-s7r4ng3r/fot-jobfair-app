import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      {/* <div className='partnerships'>
          <img src='https://placehold.co/1500x50' alt='header-parternship' className='partner-logo'/>
      </div> */}

      <div className='company-list'>
        <div className='company-card'>
          <img src={'./images/companies/codegen.jpg'} alt='company-name' className='company-logo'/>
          <h3 className='title'>Available Positions</h3>
          <div className='position-list'>
            <p className='item'>Graphic Designing</p>
            <p className='item'>Graphic Designing</p>
            <p className='item'>Graphic Designing</p>
        
          </div>
          <h3 className='hall-no'>Location : LGF 07</h3>
        </div>
      </div>

        

      </header>
    </div>
  );
}

export default App;
