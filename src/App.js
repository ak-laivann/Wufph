import './App.css';
import Facebook from './components/Facebook';
import Instagram from './components/Insta';
import Twitter from './components/Twitter';
import Whatsapp from './components/Whatsapp';
import Wufph from './components/Wufph';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Facebook />
        <Instagram />
        <Twitter />
        <Whatsapp />
      </div>
      <Wufph />
    </div>
  );
}

export default App;
