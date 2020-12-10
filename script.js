import { applyTotoView, totoView } from './src/views/toto';
import { applyTutuView } from './src/views/tutu';
import './styles.scss';

const main = document.querySelector('main');

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.id; // e.currentTarget.id;
    if (id === 'nav-toto') {
      applyTotoView();
    } else if (id === 'nav-tutu') {
      applyTutuView();
    }
  });
});

main.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    e.preventDefault();
    alert('toto');
  }
});
