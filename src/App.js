import HeaderComponents from "./components/HeaderComponents/HeaderComponents";
import Image from "./components/ImageComponents/Image";
import './components/StyleCssComponents/style.css'

function App() {
  return (
    <div className=" title text-center col-12 ">
      <div>
        <HeaderComponents/>
        <Image/>
      </div>
      
    </div>
  );
}

export default App;
