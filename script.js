function startMagic() {
  const surprise = document.getElementById('surpriseArea');
  const btn = document.getElementById('magicButton');
  
  surprise.classList.remove('hidden');
  btn.style.display = 'none';
  
  // Crear efecto de hojas cayendo
  for(let i = 0; i < 15; i++) {
    createFallingLeaf();
  }
}

function createFallingLeaf() {
  const leaf = document.createElement('div');
  leaf.innerHTML = '🍃';
  leaf.style.position = 'fixed';
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.top = '-5vh';
  leaf.style.fontSize = (Math.random() * 20 + 20) + 'px';
  leaf.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
  leaf.style.zIndex = '100';
  document.body.appendChild(leaf);
  
  setTimeout(() => leaf.remove(), 5000);
}

function showLeafLayer() {
  const layer = document.getElementById('leafLayer');
  layer.classList.remove('hidden');
  document.getElementById('nextButton').style.display = 'none';
  
  const overlay = document.querySelector('.leaf-overlay');
  const leaves = ['🌿', '🍃', '🍀', '✨'];
  
  // Crear la cuadrícula de hojas para limpiar
  for (let i = 0; i < 100; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'scratch-leaf';
    leaf.innerHTML = leaves[Math.floor(Math.random() * leaves.length)];
    
    // Al pasar el dedo o mouse, la hoja desaparece
    const clearLeaf = () => {
      leaf.classList.add('cleared');
      checkAllCleared();
    };
    
    leaf.addEventListener('mouseover', clearLeaf);
    leaf.addEventListener('touchstart', (e) => {
      e.preventDefault();
      clearLeaf();
    });
    
    overlay.appendChild(leaf);
  }
}

function checkAllCleared() {
  const uncleared = document.querySelectorAll('.scratch-leaf:not(.cleared)');
  if (uncleared.length < 15) { // Si quedan muy poquitas, mostramos el mensaje
    document.getElementById('finalMessage').classList.add('show');
    document.querySelector('.leaf-overlay').style.pointerEvents = 'none';
    document.querySelector('.instruction').style.display = 'none';
  }
}
