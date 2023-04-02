
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
          name="Paulo"
          description= "Brecker o Goleiro" 
          music="musica épica" 
          url= "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"     
        />
        <Video
          likes={362}
          messages={285}
          shares={965}  
          name="Maoly"
          description= "Gato Pulando" 
          music="musica" 
          url= "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"           
        />
      </div>      
    </div>
  );
}

export default App;
