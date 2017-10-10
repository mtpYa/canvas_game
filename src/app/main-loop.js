import elements from './dom-elements';

export default function(numberOfPlayers) {
  const ctx = elements.canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 512);

  ctx.canvas.style.display = 'block';
  ctx.canvas.style.margin = '20px auto';
  ctx.canvas.style.border = '2px solid #7c7c7c';

  ctx.strokeStyle = '#298f48';
  ctx.lineWidth = 5;

  gradient.addColorStop(0, '#dbb941');
  gradient.addColorStop(0.4, '#34a5be');
  gradient.addColorStop(0.7, '#cf41db');
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(256, 128);
  ctx.lineTo(384, 384);
  ctx.lineTo(128, 384);
  ctx.closePath();
  ctx.fill();
  ctx.stroke()
};