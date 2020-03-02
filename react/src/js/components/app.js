import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader.js';

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      ¡React is alive!
      <ul>
        {loaderList.map(item => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Mostrar</button>
    </div>
  );
}

export default App;
