import './App.css';
import GraphicPie from "./Components/Graphicstwo/GraphicPie"
import GraphicLine from './Components/Graphics/GraphicLine';
import Tittle from './Components/Tittle/Tittle';
import TotalAttention from './Components/TotalAttention/TotalAttention';
import YearButtons from './Components/YearButtons/YearButtons';
import Download from './Components/Download/Download';


const App = () => {
  return (
    <div className='App'>
      <div className='containerResponsive'>
      <Tittle />
      <TotalAttention />
      <YearButtons />
      <br></br>
      <br></br>
      <GraphicLine/>
      <br></br>
      <GraphicPie />
      <br></br>
      <Download />
      </div> 

    </div>
  );
}

export default App;
