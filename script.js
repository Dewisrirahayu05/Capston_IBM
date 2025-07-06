// Ambil data dari localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Tampilkan daftar tugas
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const [judul, isi] = task.split(":");
    const subTasks = isi ? isi.match(/\d+\.\s*[^0-9]+/g): [];

    let subTaskHTML = "";
    if (subTasks.length > 0) {
      subTaskHTML = "<ul class='subtask'>";
      subTasks.forEach((sub) => {
        subTaskHTML += `<li>${sub.trim()}</li>`;
      });
      subTaskHTML += "</ul>";
    }

    li.innerHTML = `
      <div>
        <strong>${judul ? judul.trim() : ''}:</strong>
        ${subTaskHTML}
      </div>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Hapus</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Hapus tugas
function deleteTask(index) {
  if (confirm("Hapus tugas ini?")) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

// Edit tugas
function editTask(index) {
  window.location.href = `edit.html?index=${index}`;
}

renderTasks(); // Tampilkan saat halaman dibuka