
import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={800}
          messages={200}
          shares={300}        
        />

        <Video
          likes={362}
          messages={285}
          shares={965}        
        />

      </div>      
    </div>
  );
}

export default App;
