


function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"/>
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Best shose shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"><img src="/img/cart.svg"/> <span>120 $</span></li>
          <li><img src="/img/user.svg" /></li>
        </ul> 
      </header>
      <div className="content p-40">

        <h1 className="mb-40">All shose</h1>

        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <h5>Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/addIcon.svg" alt="Add"/>
              </button>
            </div>
          
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
            <h5>Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/addIcon.svg" alt="Add"/>
              </button>
            </div>
          
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
            <h5>Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/addIcon.svg" alt="Add"/>
              </button>
            </div>
          
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
            <h5>Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100 usd</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/addIcon.svg" alt="Add"/>
              </button>
            </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
