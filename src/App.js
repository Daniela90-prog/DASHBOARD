import './App.css';
import GraphicPie from "./Components/Graphicstwo/GraphicPie"
import GraphicLine from './Components/Graphics/GraphicLine';
import Tittle from './Components/Tittle/Tittle';
import TotalAttention from './Components/TotalAttention/TotalAttention';
import YearButtons from './Components/YearButtons/YearButtons';
import { SexGraphic } from './Components/SexGraphic/SexGraphic';


const App = () => {
  return (
    <div className='App'>
      <Tittle />
      <TotalAttention />
      <YearButtons />
      <br></br>
      <br></br>
      <GraphicLine/>
      <br></br>
      <GraphicPie />
      <br></br>
      <br></br>
      <SexGraphic />

    </div>
  );
}

export default App;
