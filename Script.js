 
 const loginBtn  = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('loginError');

    // Show modal when clicking Login
    loginBtn.addEventListener('click', () => {
      errorDiv.style.display = 'none';
      loginModal.style.display = 'block';
    });

    // Hide modal when clicking outside content
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });

    // Handle form submission via JS
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorDiv.style.display = 'none';

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      if (!username || !password) {
        errorDiv.textContent = 'Please enter both username and password.';
        errorDiv.style.display = 'block';
        return;
      }

      // Simulate authentication (replace with real AJAX/fetch)
      fakeAuthenticate(username, password)
        .then(success => {
          if (success) {
            // Redirect to drawing app
            window.location.href = 'drawing.html';
          } else {
            errorDiv.textContent = 'Invalid credentials.';
            errorDiv.style.display = 'block';
          }
        });
    });

    // Example fake login function
    function fakeAuthenticate(user, pass) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(user === 'user@example.com' && pass === '1234');
        }, 500);
      });
    }


function launchGame(gameName) {
  alert(`🎨 Launching ${gameName}...`);
}
function openSelectPicture() {
  document.getElementById("selectPicturePage").classList.remove("hidden");
}

function closeSelectPicture() {
  document.getElementById("selectPicturePage").classList.add("hidden");
}
  function toggleBox() {
      const box = document.getElementById("appBox");
      box.style.display = box.style.display === "none" || box.style.display === "" ? "block" : "none";
    }
     function toggleBox() {
      const box = document.getElementById('appBox');
      box.style.display = box.style.display === 'none' || box.style.display === '' ? 'block' : 'none';
    }
   function toggleParentBox() {
  const box = document.getElementById("parentBox");
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}
function launchGame(game) {
  if (game === 'paint') {
    document.getElementById('paintModal').classList.remove('hidden');
    resizeCanvas();
  }
}

function closePaint() {
  document.getElementById('paintModal').classList.add('hidden');
}

// Setup canvas
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 50;
}

// Drawing functions
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  draw(e);
});
canvas.addEventListener('mouseup', () => {
  drawing = false;
  ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = document.getElementById('brushSize').value;
  ctx.strokeStyle = document.getElementById('colorPicker').value;
  ctx.lineCap = 'round';

  ctx.lineTo(e.clientX, e.clientY - 50); // minus toolbar height
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY - 50);
}

function clearPaint() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function savePaint() {
  const link = document.createElement('a');
  link.download = 'paint.png';
  link.href = canvas.toDataURL();
  link.click();
}

// Resize when window changes
window.addEventListener('resize', () => {
  if (!document.getElementById('paintModal').classList.contains('hidden')) {
    resizeCanvas();
  }
});
let isEraser = false;
let showGrid = false;
let isNeon = false;

function toggleEraser() {
  isEraser = !isEraser;
}

function toggleGrid() {
  const canvas = document.getElementById('paintCanvas');
  const ctx = canvas.getContext('2d');
  showGrid = !showGrid;
  if (showGrid) {
    drawGrid(ctx, canvas.width, canvas.height);
  } else {
    redrawCanvas(); // Your own logic to redraw existing content
  }
}

function toggleNeon() {
  isNeon = !isNeon;
}

function drawGrid(ctx, width, height) {
  ctx.save();
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < width; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
}

function uploadToCanvas(event) {
  const canvas = document.getElementById('paintCanvas');
  const ctx = canvas.getContext('2d');
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}


function launchGame(gameName) {
  // Close all modals first
  closeAllModals();

  if (gameName.toLowerCase() === 'paint') {
    document.getElementById('paintModal').classList.remove('hidden');
  } 
  else if (gameName.toLowerCase() === 'pencil sketch') {
    document.getElementById('pencilSketchModal').classList.remove('hidden');
  } 
  else {
    // For other games, open a new page (you can replace URLs accordingly)
    alert(`${gameName} is launching...`);
    // Example: window.open(`https://example.com/${gameName}`, '_blank');
  }
}

function closePaint() {
  document.getElementById('paintModal').classList.add('hidden');
}

function closePencilSketch() {
  document.getElementById('pencilSketchModal').classList.add('hidden');
}

function closeAllModals() {
  document.getElementById('paintModal').classList.add('hidden');
  document.getElementById('pencilSketchModal').classList.add('hidden');
}
function launchGame(gameName) {
  if (gameName.toLowerCase() === 'paint') {
    window.open('https://jspaint.app/', '_blank');
  } else if (gameName.toLowerCase() === 'pencil sketch') {
    window.open('https://sketch.io/sketchpad/', '_blank');
  } else {
    alert(`Sorry, ${gameName} is coming soon!`);
  }
}

function launchGame(game) {
  if (game === 'paint') {
    document.getElementById("paintModal").classList.remove("hidden");
  } else if (game === 'pencil sketch') {
    document.getElementById("pencilSketchModal").classList.remove("hidden");
  } else if (game === 'waterArt') {
    document.getElementById("waterArtModal").classList.remove("hidden");
  }
}
function launchGame(gameName) {
  closeAllModals();
  if (gameName === 'paint3d') {
    document.getElementById('paint3dModal').classList.remove('hidden');
  }
}

function closePaint3D() {
  document.getElementById('paint3dModal').classList.add('hidden');
}

function clearPaint3D() {
  const ctx = document.getElementById('paint3dCanvas').getContext('2d');
  ctx.clearRect(0, 0, 800, 500);
}

function savePaint3D() {
  const canvas = document.getElementById('paint3dCanvas');
  const link = document.createElement('a');
  link.download = '3d-paint.png';
  link.href = canvas.toDataURL();
  link.click();
}

function loadPaint3DImage(src) {
  const canvas = document.getElementById('paint3dCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = src;
}

// Drawing logic
let isDrawing3D = false;
const canvas3D = document.getElementById('paint3dCanvas');
const ctx3D = canvas3D.getContext('2d');

canvas3D.addEventListener('mousedown', () => isDrawing3D = true);
canvas3D.addEventListener('mouseup', () => isDrawing3D = false);
canvas3D.addEventListener('mouseleave', () => isDrawing3D = false);
canvas3D.addEventListener('mousemove', draw3D);

function draw3D(e) {
  if (!isDrawing3D) return;
  const rect = canvas3D.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const size = document.getElementById('paint3dBrush').value;
  const color = document.getElementById('paint3dColor').value;

  ctx3D.fillStyle = color;
  ctx3D.beginPath();
  ctx3D.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx3D.fill();
}

// Launch game modals
function launchGame(game) {
  if (game === 'paint') {
    document.getElementById('paintModal').classList.remove('hidden');
  } else if (game === 'pencil sketch') {
    document.getElementById('pencilSketchModal').classList.remove('hidden');
  } else if (game === 'paint3d') {
    document.getElementById('paint3dModal').classList.remove('hidden');
  }
}

// Close modals
function closePaint() {
  document.getElementById('paintModal').classList.add('hidden');
}

function closePencilSketch() {
  document.getElementById('pencilSketchModal').classList.add('hidden');
}

function closePaint3D() {
  document.getElementById('paint3dModal').classList.add('hidden');
}

// Drawing functionality (Paint)
const paintCanvas = document.getElementById('paintCanvas');
const paintCtx = paintCanvas?.getContext('2d');
if (paintCanvas) {
  paintCanvas.width = 800;
  paintCanvas.height = 500;
  let painting = false;

  paintCanvas.addEventListener('mousedown', () => (painting = true));
  paintCanvas.addEventListener('mouseup', () => (painting = false));
  paintCanvas.addEventListener('mousemove', drawPaint);

  function drawPaint(e) {
    if (!painting) return;
    const brushSize = document.getElementById('brushSize').value;
    const color = document.getElementById('colorPicker').value;
    const shape = document.getElementById('brushShape').value;

    paintCtx.fillStyle = color;
    if (shape === 'round') {
      paintCtx.beginPath();
      paintCtx.arc(e.offsetX, e.offsetY, brushSize / 2, 0, 2 * Math.PI);
      paintCtx.fill();
    } else {
      paintCtx.fillRect(e.offsetX, e.offsetY, brushSize, brushSize);
    }
  }

  window.clearPaint = () => paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  window.savePaint = () => {
    const link = document.createElement('a');
    link.download = 'paint.png';
    link.href = paintCanvas.toDataURL();
    link.click();
  };
}

// Drawing functionality (Pencil Sketch)
const sketchCanvas = document.getElementById('sketchCanvas');
const sketchCtx = sketchCanvas?.getContext('2d');
if (sketchCanvas) {
  let drawing = false;
}
  sketchCanvas.addEventListener('mousedown', () => (drawing = true));
  sketchCanvas.addEventListener('mouseup', () => (drawing = false));
  sketchCanvas.addEventListener('mousemove', drawSketch);

  function drawSketch(e) {
    if (!drawing) return;
    const color = docume
  }
  // Optional custom function if needed for mixed logic
function launchGame(gameName) {
  switch (gameName.toLowerCase()) {
    case 'paint':
      window.open('https://jspaint.app/', '_blank');
      break;
    case 'pencil sketch':
      window.open('https://www.photopea.com/', '_blank');
      break;
    case 'paint3d':
      window.open('https://kleki.com/', '_blank');
      break;
    case 'procreate (ios)':
      window.open('https://procreate.com/', '_blank');
      break;
    default:
      alert("Game not found.");
  }
}

function launchGame(gameName) {
  switch (gameName.toLowerCase()) {
    case 'paint':
      window.open('https://jspaint.app/', '_blank');
      break;
    case 'pencil sketch':
      window.open('https://www.photopea.com/', '_blank');
      break;
    case 'paint3d':
      window.open('https://kleki.com/', '_blank');
      break;
    case 'procreate (ios)':
      window.open('https://procreate.com/', '_blank');
      break;
    case 'adobe fresco (ios, windows)':
      window.open('https://www.adobe.com/products/fresco.html', '_blank');
      break;
    default:
      alert("Game not found.");
  }
}
function launchGame(gameName) {
  switch (gameName.toLowerCase()) {
    case 'paint':
      window.open('https://jspaint.app/', '_blank');
      break;
    case 'pencil sketch':
      window.open('https://www.photopea.com/', '_blank');
      break;
    case 'paint3d':
      window.open('https://kleki.com/', '_blank');
      break;
    case 'procreate (ios)':
      window.open('https://procreate.com/', '_blank');
      break;
    case 'adobe fresco (ios, windows)':
      window.open('https://www.adobe.com/products/fresco.html', '_blank');
      break;
    case 'autodesk sketchbook':
      window.open('https://www.sketchbook.com/', '_blank');
      break;
    default:
      alert("Game not found.");
  }
}

function launchGame(gameName) {
  switch (gameName.toLowerCase()) {
    case 'paint':
      window.open('https://jspaint.app/', '_blank');
      break;
    case 'pencil sketch':
      window.open('https://www.photopea.com/', '_blank');
      break;
    case 'paint3d':
      window.open('https://kleki.com/', '_blank');
      break;
    case 'procreate (ios)':
      window.open('https://procreate.com/', '_blank');
      break;
    case 'adobe fresco (ios, windows)':
      window.open('https://www.adobe.com/products/fresco.html', '_blank');
      break;
    case 'autodesk sketchbook':
      window.open('https://www.sketchbook.com/', '_blank');
      break;
    case 'ibis paint x':
      window.open('https://ibispaint.com/', '_blank');
      break;
    default:
      alert("Game not found.");
  }
}

function launchGame(gameName) {
  switch (gameName.toLowerCase()) {
    // other cases...
    case 'clip studio paint':
      window.open('https://www.clipstudio.net/', '_blank');
      break;
    default:
      alert("Game not found.");
  }
}


 function launchGame(gameId) {
    if (gameId === 'paint3d') {
      document.getElementById('paint3dModal').classList.remove('hidden');
      initPaint3D(); // initialize drawing
    }
  }

  // Close Modal
  function closePaint3D() {
    document.getElementById('paint3dModal').classList.add('hidden');
  }

  // Load Image as Base
  function loadPaint3DImage(src) {
    const canvas = document.getElementById('paint3dCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = "anonymous"; // allow external images
    img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.src = src;
  }

  // Clear Canvas
  function clearPaint3D() {
    const canvas = document.getElementById('paint3dCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Save Canvas Drawing
  function savePaint3D() {
    const canvas = document.getElementById('paint3dCanvas');
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'color_splash_art.png';
    link.href = image;
    link.click();
  }

  // Drawing Logic
  function initPaint3D() {
    const canvas = document.getElementById('paint3dCanvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    const brushColor = document.getElementById('paint3dColor');
    const brushSize = document.getElementById('paint3dBrush');

    canvas.onmousedown = (e) => {
      painting = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    canvas.onmousemove = (e) => {
      if (painting) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = brushColor.value;
        ctx.lineWidth = brushSize.value;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    };

    canvas.onmouseup = () => {
      painting = false;
    };

    canvas.onmouseleave = () => {
      painting = false;
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
  const giftBtn = document.querySelector('.gift-btn');
  const settingsBtn = document.querySelector('.settings-btn');
  const giftModal = document.getElementById('giftModal');
  const settingsModal = document.getElementById('settingsModal');
  const closeButtons = document.querySelectorAll('.close-btn');

  function openModal(modal) {
    modal.classList.remove('hidden');
  }

  function closeModal(modal) {
    modal.classList.add('hidden');
  }

  giftBtn.addEventListener('click', () => openModal(giftModal));
  settingsBtn.addEventListener('click', () => openModal(settingsModal));

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('.modal'));
    });
  });

  // Close modal when clicking outside content
  [giftModal, settingsModal].forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const officialBtn = document.querySelector('.official-btn');
  const nameBtn = document.querySelector('.name-btn');
  const officialModal = document.getElementById('officialModal');
  const appBox = document.getElementById('appBox');
  const closeBtn = officialModal.querySelector('.close-btn');

  function toggleModal(modal) {
    modal.classList.toggle('hidden');
  }

  officialBtn.addEventListener('click', () => toggleModal(officialModal));
  closeBtn.addEventListener('click', () => toggleModal(officialModal));

  nameBtn.addEventListener('click', () => {
    appBox.classList.toggle('hidden');
  });

  // Close modal if clicking outside modal-content:
  officialModal.addEventListener('click', e => {
    if (e.target === officialModal) toggleModal(officialModal);
  });
});

function openDrawing() {
  const overlay = document.getElementById('drawingOverlay');
  const canvas = document.getElementById('drawingCanvas');
  overlay.style.display = 'block';

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let drawing = false;

  function startDraw(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  function stopDraw() {
    drawing = false;
    ctx.closePath();
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseout', stopDraw);
}

document.getElementById('closeCanvas').onclick = () => {
  document.getElementById('drawingOverlay').style.display = 'none';
};
 function openDrawing() {
    alert("Launching Drawing Tool... 🎨");
    // Replace this line with actual drawing app logic
    window.location.href = "https://www.canva.com/draw/"; // or open a modal, canvas, etc.
  }
  
  

