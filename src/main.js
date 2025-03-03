import './style.css'
import { createIcons, icons } from 'lucide';
createIcons({icons});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    const template = document.getElementById('card-template');
    const numCards = 10;
    const colors = [
      'from-cyan-200 to-blue-300',
      'from-green-200 to-teal-300',
      'from-lime-200 to-emerald-300',
      // ... ajouter les autres couleurs
    ];
  
    // Générer les cartes
    for (let i = 0; i < numCards * 2; i++) {
      const clone = template.content.cloneNode(true);
      const card = clone.querySelector('.carousel-card');
      card.querySelector('div').className = `h-full w-full rounded-lg bg-gradient-to-br ${colors[i % numCards]}`;
      container.appendChild(clone);
    }
  
    // Gestion de l'hover
    const carousel = document.getElementById('carousel');
    carousel.querySelectorAll('.carousel-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
      });
      
      card.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
      });
    });
  });