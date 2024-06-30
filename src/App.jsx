
import song from './assets/audio/burlarseMora.mp3'

const App = () => {
  const mocking = new Audio(song)
  const songButton = () =>{
    document.getElementById("congrat").innerHTML = "Te has burlado de Mora exitosamente!"
    document.getElementById("imgShow").className = " mt-4 "
    mocking.play()

  }
   
    
    
    
  

  return (
    <>
      <main>
        <div className="bg-white p-8 m-8 rounded-md">
          <h1 className="text-4xl text-center">Molestador de Mora</h1>
          <div id="imgShow" className="mt-4 hidden">
            <img className="rounded-md" src="https://th.bing.com/th/id/OIP.EiQDDaQrsKyY6s7EWewGpwAAAA?rs=1&pid=ImgDetMain" alt="ola" />
          </div>
          <h2 id="congrat" className="text-2xl text-center my-10">
            Pulse el botón para molestar a Mora
          </h2>
          <button onClick={songButton} className="border-2 w-[100%] border-black rounded-lg p-4">Molestar</button>
        </div>
      </main>
    </>
  );
};

export default App;
