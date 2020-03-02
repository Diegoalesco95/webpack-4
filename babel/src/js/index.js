import '../css/index.css';
import search from './search';
import render from './render';
/* import text from './text';

text();

if (module.hot) {
  module.hot.accept('./text.js', function() {
    text();
  });
}
*/

const id = prompt('¿Quién es ese pokemon?');

search(id)
  .then(data => {
    render(data);
  })
  .catch(() => {
    console.log('No se encotró el pokemon');
  });
