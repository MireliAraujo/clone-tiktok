import './App.css';
import Video from "./pages/Video" 

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={100}
          mensagens={200}
          shares={200}
          name="paulo"
          description="Brecker o goleiro"
          music="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />

        <Video 
          likes={125}
          mensagens={278}
          shares={582}
          name="pedro"
          description="Bird olhando para a camera"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        
      </div>
    </div>
  );
}

export default App;
