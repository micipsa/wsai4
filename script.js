// ====== Sélection des éléments ======
const html = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let tasks = [];

// ====== Thème (dark / light) ======
function getStoredTheme() {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggleBtn.textContent = theme === "dark" ? "☾" : "☀";
  themeToggleBtn.setAttribute(
    "aria-label",
    theme === "dark" ? "Basculer en mode clair" : "Basculer en mode sombre"
  );
}

function initTheme() {
  const stored = getStoredTheme();
  if (stored === "dark" || stored === "light") {
    setTheme(stored);
  } else {
    // Respecte la préférence système
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
}

themeToggleBtn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
});

// ====== Todo logic ======
function loadTasks() {
  const raw = localStorage.getItem("tasks");
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      tasks = parsed;
    }
  } catch (e) {
    tasks = [];
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = task.id;

  const main = document.createElement("div");
  main.className = "todo-main";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.checked = task.completed;

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = task.text;
  if (task.completed) {
    span.classList.add("completed");
  }

  const delBtn = document.createElement("button");
  delBtn.className = "todo-delete";
  delBtn.textContent = "✕";
  delBtn.setAttribute("aria-label", "Supprimer la tâche");

  main.appendChild(checkbox);
  main.appendChild(span);
  li.appendChild(main);
  li.appendChild(delBtn);

  // Events
  checkbox.addEventListener("change", () => {
    toggleTask(task.id, checkbox.checked);
  });

  delBtn.addEventListener("click", () => {
    deleteTask(task.id);
  });

  return li;
}

function renderTasks() {
  list.innerHTML = "";
  if (!tasks.length) return;
  tasks.forEach((task) => {
    const el = createTaskElement(task);
    list.appendChild(el);
  });
}

function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const task = {
    id: Date.now().toString(),
    text: trimmed,
    completed: false,
  };
  tasks.unshift(task);
  saveTasks();
  renderTasks();
}

function toggleTask(id, completed) {
  tasks = tasks.map((t) => (t.id === id ? { ...t, completed } : t));
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

// ====== Events ======
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

// ====== Init ======
initTheme();
loadTasks();
renderTasks();
