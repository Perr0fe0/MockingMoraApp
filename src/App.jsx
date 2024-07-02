import { useState } from "react";
import song from "./assets/audio/burlarseMora.mp3";

const App = () => {
  /*Variable para guardar el audio de la risa  */
  const mocking = new Audio(song);
  
  /* Variable para iniciar contador en 1 */
  const [contador, setContador] = useState(1);

  /* Variable array que contiene los links de las imagenes a usar */
  const listaImagenes = [
    "https://i.pinimg.com/originals/06/14/f0/0614f0c1b8ddfd2ba063eee38e31599d.jpg",
    "https://th.bing.com/th/id/OIP.EiQDDaQrsKyY6s7EWewGpwAAAA?rs=1&pid=ImgDetMain",
    "https://i.ytimg.com/vi/01GHrWrN7UA/maxresdefault.jpg",
    "https://th.bing.com/th/id/OIP.YZTKhRXQx9FvvRIKXXTiZwAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.10ef024751e9de23c420c4852e60ed8e?rik=Ew%2fRSag9NQC8Bg&riu=http%3a%2f%2fpm1.aminoapps.com%2f7795%2fee4e1f4b84794b0eee99b24dc902ed627f246f9br1-720-952v2_uhq.jpg&ehk=mNcgB8B8R6DvnI5EhMlG5MUjaPTo9gdSeD2khbaxBDA%3d&risl=&pid=ImgRaw&r=0",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhxVisdA7-_hblzUv1blqLdfurh69RQTxW5MgZZt3fCdPFif3-e2qqQDlDcEpyYpGnzU&usqp=CAU",
    "https://i.pinimg.com/736x/09/db/0c/09db0cde356d3fb1d7e46d34e3289fff.jpg",
    "https://i.pinimg.com/564x/62/fa/f6/62faf6e5594158009d6f5e816f51a86f.jpg",
    "https://i.pinimg.com/564x/21/22/aa/2122aaddac099f072873d1bf4df24322.jpg",
    "https://i.pinimg.com/736x/32/4d/d1/324dd15a64b6a483d52b7cdde057b023.jpg",
    "https://i.pinimg.com/564x/90/68/eb/9068eb9c0aeccfde5d3a30ed57f493e2.jpg",
    "https://i.pinimg.com/236x/7e/34/04/7e34048a0b17580018a3284e62e3fb13.jpg",
    "https://i.pinimg.com/236x/0b/04/00/0b0400c8eb58e68c69f5efc6301ee429.jpg",
    "https://i.pinimg.com/736x/f9/d6/88/f9d6884809830c6343a2b38a5f1a630d.jpg",
    "https://i.pinimg.com/736x/27/dc/59/27dc5994c2e6a3bd64dbdf80f8d6d5f6.jpg",
    "https://i.pinimg.com/736x/2d/65/6b/2d656bb7d7320b9ca656b59da8c64f5e.jpg",
    "https://i.pinimg.com/736x/b4/e6/f9/b4e6f9d1e0aeb4f15b2fb76cbcf9949e.jpg",
    "https://i.pinimg.com/564x/ad/1b/38/ad1b38e2f3dada2d09687c9f272a3a56.jpg",
    "https://i.pinimg.com/564x/ad/79/82/ad7982bd0d6271947699f2c6da2b0097.jpg",
    "https://i.pinimg.com/236x/45/c8/b7/45c8b7ffbecdf861bc6b2e9958476878.jpg",
    "https://i.pinimg.com/736x/b1/71/95/b17195292ca4b502f11119c2d9ab0b29.jpg",
    "https://i.pinimg.com/564x/41/4b/ba/414bba07f32fddab6465a44756815630.jpg",
    "https://i.pinimg.com/564x/d2/d7/06/d2d70673c97301537483050f417bb0ff.jpg",

    
  ]

  /* Variable para aleatorizar las imagenes */
  const [randomImage, setRandomImage] = useState(listaImagenes[0]);

  /* Funcion para hacer la burla */
  const mockingButton = () => {

    setContador(contador + 1); /* <--- Sumar contador a si mismo + 1 */
    const randomIndex = Math.floor(Math.random() * listaImagenes.length) /* <--- Crear un indice mediante el array de la lista de las imagenes */
    setRandomImage(listaImagenes[randomIndex]) /*<--- Mostar imagen segun el numero del indice generado aleatoriamente */

    /* Condicional para verificar si se ha burlado una o mas veces */
    if (contador === 1) {
      document.getElementById("congrat").innerHTML =
        "Te has burlado de Mora " + contador + " vez!";
    } else {
      document.getElementById("congrat").innerHTML =
        "Te has burlado de Mora " + contador + " veces!";
    }
    document.getElementById("boton").innerHTML = "Seguir burlandote";
    document.getElementById("imgShow").className = " rounded-md ";
    mocking.play();
  };

  return (
    <>
      <main className="md:flex md:flex-col md:items-center">
        <div className="bg-white md:w-3/6 p-8 m-8 rounded-md">
          <h1 className="text-4xl text-center">Molestador de Mora</h1>
          <div className="mt-4 flex justify-center ">
            <img
              id="imgShow"
              className="rounded-md hidden "
              src={randomImage}
              alt="ola"
              width={200}
              height={200}
            />
          </div>
          <h2 id="congrat" className="text-2xl text-center my-10">
            Pulse el botón para <strong>molestar</strong> a Mora
          </h2>
          <button
            id="boton"
            onClick={mockingButton}
            className="border-2 w-[100%] border-black rounded-lg p-4 hover:bg-sky-500 hover:text-white font-black text-2xl transition-all"
          >
            Molestar
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
