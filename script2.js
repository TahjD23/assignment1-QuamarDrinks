alert("Welcome to Quamar's Portfolio test site! Be Blessed.");


document.addEventListener('DOMContentLoaded', () => {
  if (window.__sunriseMenuInitialized) return;
  window.__sunriseMenuInitialized = true;

  const menuList = document.getElementById('menu-list');
  if (!menuList) {
    console.error('No element with id "menu-list" found.');
    return;
  }

  const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const highlights = [
    "Technical Experience: Geek Squad Consultation Agent",
    "Project: Personal Portfolio Website",
    "Athletic Leadership: Track Team Co-Captain", 
    "Education: Computer Science & Business MGL", 
    "Career Goal: IT Leadership & Management"
  ];

  const randomHighlight = 
    highlights[Math.floor(Math.random() * highlights.length)];

  display.textContent = randomHighlight;
});

  const rawItems = (typeof window.menuItems !== 'undefined')
  ? window.menuItems : ["Meet Mar", "Technical Experience", "Projects", "Athletic Leadership", "Education and Beyond"];


  const items = rawItems.map(it => {
    if (typeof it === 'string') {
      return { name: it };
    }

    return {
      name: it.name || '',
      price: (typeof it.price === 'number') ? it.price : null, 
      desc: it.desc || ''
    };
  });

  menuList.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';

    const icon = document.createElement('span');
    icon.className = 'accent';
    icon.textContent = (/(lion|run|espresso|iced)/i.test(item.name)) ? '🦁':'🎓';
    li.appendChild(icon);

    const content = document.createElement('div');
    content.className = 'item-content';

    const title = document.createElement('div');
    title.className = 'item-title';
    title.textContent = item.name;
    content.appendChild(title);

    if (item.desc) {
      const desc = document.createElement('div');
      desc.className = 'item-desc';
      desc.textContent = item.desc;
      content.appendChild(desc);
    }

    li.appendChild(content);
    menuList.appendChild(li)
  })
  
  const toggleBtn = document.getElementById("toggle-mode");
  const body = document.body;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("night-mode");

      toggleBtn.textContent = body.classList.contains("night-mode")
      ? "Switch to Day Mode"
      : "Switch to Night Mode";
  });
  
}

});
