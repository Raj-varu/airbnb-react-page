import "../src/testing.css"
import "./components/navbar.css"
import Naav from "../src/components/navbar";
import Mainimg from "./components/mainimg"
import Sec1 from "./components/section1";
import Cards from "./components/cards";
import dummyapi from "./dummyapi";

const ccards = dummyapi.map(data=>{
  return(
    <Cards
     status = {data.state}
     img = {data.img}
     rating = {data.rating}
     ratecount = {data.ratecount}
    title = {data.title}
     price = {data.price}
    />
  )
  })
function App() {

  return (
    <div className="App">
     <div className="background">
     <div className="container">
      <Naav/>
      <Mainimg/>
      <Sec1/>
      <section className="Cards-flex-conatainer">
      {ccards}
      </section>
     </div>
     </div>
    </div>
  );
}

export default App;
