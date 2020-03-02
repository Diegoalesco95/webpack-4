import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader.js';

import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <p className="sass">Sass</p>
      <p className="less">Less</p>
      <p className="stylus">Stylus</p>
      <p className="post-css">Postcss</p>
      ¡React is alive! <br />
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" width={40} />
      </p>
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
