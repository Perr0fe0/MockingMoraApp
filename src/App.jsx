
import song from './assets/audio/burlarseMora.mp3'

const App = () => {
  const mocking = new Audio(song)
  const songButton = () =>{
    document.getElementById("congrat").innerHTML = "Te has burlado de Mora exitosamente!"
    document.getElementById("boton").innerHTML = "Seguir burlandote"
    document.getElementById("imgShow").className = " rounded-md "
    mocking.play()

  }
   
    
    
    
  

  return (
    <>
      <main className='md:flex md:flex-col md:items-center'>
        <div className="bg-white md:w-3/6 p-8 m-8 rounded-md">
          <h1 className="text-4xl text-center">Molestador de Mora</h1>
          <div  className="mt-4 flex justify-center ">
            <img id="imgShow" className="rounded-md hidden " src="https://th.bing.com/th/id/OIP.EiQDDaQrsKyY6s7EWewGpwAAAA?rs=1&pid=ImgDetMain" alt="ola" />
          </div>
          <h2 id="congrat" className="text-2xl text-center my-10">
            Pulse el botón para <strong>molestar</strong> a Mora
          </h2>
          <button id='boton' onClick={songButton} className="border-2 w-[100%] border-black rounded-lg p-4 hover:bg-sky-500 hover:text-white font-black text-2xl transition-all">Molestar</button>
        </div>
      </main>
    </>
  );
};

export default App;
