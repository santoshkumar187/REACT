
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');

  return (
    <div>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('red')}
           className="outline-none px-4 py-2 bg-red-500 text-white rounded-3xl">RED</button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('blue')}
           className="outline-none px-4 py-2 bg-blue-500 text-white rounded-3xl">BLUE</button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('green')}
           className="outline-none px-4 py-2 bg-green-500 text-white rounded-3xl">GREEN</button>
           </div>
           <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('yellow')}
          className="outline-none px-4 py-2 bg-yellow-500 text-white rounded-3xl">YELLOW</button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('purple')}
          className="outline-none px-4 py-2 bg-purple-500 text-white rounded-3xl">purple</button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('violet')}
          className="outline-none px-4 py-2 bg-violet-500 text-white rounded-3xl">violet</button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('orange')}
          className="outline-none px-4 py-2 bg-orange-500 text-white rounded-3xl">orange</button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('black')}
          className="outline-none px-4 py-2 bg-black text-white rounded-3xl">
          
            BLACK 
            <div className="text-white"> </div>

    
            


          </button>
          
          </div>

      </div>
    </div>
  );
}

export default App;