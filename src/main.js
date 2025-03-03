import './style.css'
import { createIcons, icons } from 'lucide';
createIcons({icons});
document.getElementById('btn-menu-open').addEventListener('click', function() {
  this.closest('.group').classList.toggle('is-open');
  
});

document.getElementById('btn-menu-close').addEventListener('click', function() {
  this.closest('.group').classList.toggle('is-open');
  
});