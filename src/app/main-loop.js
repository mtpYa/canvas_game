import elements from './dom-elements';

export default function(numberOfPlayers) {
  const context = elements.canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, 0, 512);

  context.canvas.style.display = 'block';
  context.canvas.style.margin = '20px auto';
  context.canvas.style.border = '2px solid #7c7c7c';

  context.strokeStyle = '#298f48';
  context.lineWidth = 5;

  gradient.addColorStop(0, '#dbb941');
  gradient.addColorStop(0.4, '#34a5be');
  gradient.addColorStop(0.7, '#cf41db');
  context.fillStyle = gradient;

  context.beginPath();
  context.moveTo(256, 128);
  context.lineTo(384, 384);
  context.lineTo(128, 384);
  context.closePath();
  context.fill();
  context.stroke()
};
