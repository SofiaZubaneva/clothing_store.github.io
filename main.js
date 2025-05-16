const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");


  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.getElementById('pollForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="style"]:checked').value;
  const results = JSON.parse(localStorage.getItem('pollResults') || '{}');
  results[selected] = (results[selected] || 0) + 1;
  localStorage.setItem('pollResults', JSON.stringify(results));
  showPollResults();
});
function showPollResults() {
  const results = JSON.parse(localStorage.getItem('pollResults') || '{}');
  const output = Object.entries(results).map(([option, count]) => `${option}: ${count}`).join('<br>');
  document.getElementById('pollResults').innerHTML = output;
}

// --- Комментарии ---
document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const text = document.getElementById('commentText').value.trim();
  if (!text) return;
  const comments = JSON.parse(localStorage.getItem('comments') || '[]');
  comments.push(text);
  localStorage.setItem('comments', JSON.stringify(comments));
  document.getElementById('commentText').value = '';
  loadComments();
});

function loadComments() {
  const comments = JSON.parse(localStorage.getItem('comments') || '[]');
  const list = document.getElementById('commentList');
  list.innerHTML = '';
  comments.forEach(comment => {
    const li = document.createElement('li');
    li.textContent = comment;
    list.appendChild(li);
  });

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

