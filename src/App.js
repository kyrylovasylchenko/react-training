import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [{ title: 'Nike air Jordan 11', price: 110, img:"/img/sneakers/1.jpg" },
             { title: 'Nike pegasus', price: 90, img:"/img/sneakers/2.jpg"},
             { title: 'Nike pegasus', price: 90, img:"/img/sneakers/3.jpg"}]

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All shose</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>


        </div>

        <div className="d-flex">


          {
            arr.map(obj => {
              return <Card title={obj.title} price={obj.price} imgUrl={obj.img}/>
            })
          }

         
        </div>
      </div>
    </div>
  );
}

export default App;
