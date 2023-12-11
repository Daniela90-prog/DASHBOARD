import './App.css';
import GraphicPie from "./Components/Graphicstwo/GraphicPie"
import GraphicLine from './Components/Graphics/GraphicLine';
import Tittle from './Components/Tittle/Tittle';
import TotalAttention from './Components/TotalAttention/TotalAttention';
import YearButtons from './Components/YearButtons/YearButtons';


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


    </div>
  );
}

export default App;
