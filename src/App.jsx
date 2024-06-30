const App = () => {
  
  const songButton = () =>{
    document.getElementById("congrat").innerHTML = "Te has burlado de Mora exitosamente!"
    document.getElementById("imgShow").className = " mt-4 "
  }

  return (
    <>
      <main>
        <div className="bg-white p-8 m-8 rounded-md">
          <h1 className="text-4xl text-center">Molestador de Mora</h1>
          <div id="imgShow" className="mt-4 hidden">
            <img className="rounded-md" src="src\assets\laugh-point.gif" />
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
