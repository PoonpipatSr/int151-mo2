// Lesson 2: Books, Authors, and Library (quiz from chatgpt) ref. by classwork

// 1. Create an empty array called library to hold the books
const library = [];

/*
  2. Function: addBook
  - Accepts a book object with id, title, and author
  - Adds it to the library array
*/
function addBook(book) {
  // TODO: Add book to library
  return library.push(book);
}

/*
  3. Function: removeBook
  - Accepts an id
  - Removes the book with that id from the library
*/
function removeBook(id) {
  // TODO: Remove book by id
  return library.splice(
    library.findIndex((bookId) => bookId.id === id),
    1
  );
}

/*
  4. Function: updateBook
  - Accepts an id and an object with new title and/or author
  - Updates the book with the given id
*/
function updateBook(id, updatedBook) {
  // TODO: Update book by id
  return Object.assign(
    library.find((book) => book.id === id) || {},
    updatedBook
  );
}

/*
  5. Function: getAllBooks
  - Returns all books in the library
*/
function getAllBooks() {
  // TODO: Return the library array
  return library;
}

// 6. Test your functions below
// Add 3 books
addBook({ id: 1, title: "1984", author: "George Orwell" });
addBook({ id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" });
addBook({ id: 3, title: "Clean Code", author: "Robert C. Martin" });
// console.log(getAllBooks())

// Remove 1 book
removeBook(2);
// console.log(getAllBooks())

// Update 1 book
updateBook(1, { title: "Nineteen Eighty-Four", author: "Orwell" });
// console.log(getAllBooks())

// Print all books
// console.log(getAllBooks())

// -----------------------------------------------------------------------

// Lesson 3: Task Manager (quiz from chatgpt) ref. by classwork

// 1. Create an array called tasks to hold all task objects
const tasks = [];

/*
  2. Function: addTask(task)
  - Accepts a task object with id, title, description, status, priority, dueDate
  - Check if the id already exists in tasks
  - If not, add the task to tasks
  - If duplicate, return "Task with this ID already exists!"
*/
function addTask(task) {
  // TODO: implement addTask
  return tasks.find((whereId) => whereId.id === task.id)
    ? "Task with this ID already exists!"
    : tasks.push(task);
}

/*
  3. Function: deleteTask(id)
  - Accepts an id
  - Remove the task with the given id from tasks
*/
function deleteTask(id) {
  // TODO: implement deleteTask
  const whereId = tasks.findIndex((task) => task.id === id);
  if (whereId !== -1) {
    return tasks.splice(whereId, 1);
  }
}

/*
  4. Function: updateTask(id, updatedFields)
  - Accepts an id and an object with new fields
  - Find the task by id and update its properties
  - Can use Object.assign or spread operator
*/
function updateTask(id, updatedFields) {
  // TODO: implement updateTask
  return Object.assign(
    tasks.find((whereId) => whereId.id === id),
    updatedFields
  );
}

/*
  5. Function: getTasksByStatus(status)
  - Accepts a status ("pending", "in-progress", "done")
  - Return all tasks matching that status
*/
function getTasksByStatus(status) {
  // TODO: implement getTasksByStatus
  return tasks.filter((task) => task.status === status);
}

/*
  6. Function: getTasksByPriority(priority)
  - Accepts a priority ("low", "medium", "high")
  - Return all tasks matching that priority
*/
function getTasksByPriority(priority) {
  // TODO: implement getTasksByPriority
  return tasks.filter((task) => task.priority === priority);
}

/*
  7. Function: getAllTasks()
  - Return all tasks in the array
*/
function getAllTasks() {
  // TODO: implement getAllTasks
  return tasks;
}

// 8. Test your functions below
// Add sample tasks, update, delete, filter, and print results

// เพิ่มงาน
addTask({
  id: 1,
  title: "Finish project",
  description: "Complete the final report",
  status: "pending",
  priority: "high",
  dueDate: "2025-09-30",
});
addTask({
  id: 2,
  title: "Buy groceries",
  description: "Milk, Bread, Eggs",
  status: "in-progress",
  priority: "medium",
  dueDate: "2025-09-25",
});
addTask({
  id: 3,
  title: "Workout",
  description: "Go to the gym",
  status: "done",
  priority: "low",
  dueDate: "2025-09-20",
});
addTask({
  id: 3,
  title: "Workout",
  description: "Go to the gym",
  status: "done",
  priority: "low",
  dueDate: "2025-09-20",
});
console.log(getAllTasks());
console.log("----------------------------------------");

// อัปเดตงาน
updateTask(1, { status: "in-progress" });
console.log(getAllTasks());
console.log("----------------------------------------");

// ลบงาน
deleteTask(3);
console.log(getAllTasks());
console.log("----------------------------------------");

// หางานตามสถานะ
console.log(getTasksByStatus("in-progress"));
console.log("----------------------------------------");

// หางานที่ priority สูง
console.log(getTasksByPriority("high"));
console.log("----------------------------------------");

// แสดงงานทั้งหมด
console.log(getAllTasks());
console.log("----------------------------------------");
