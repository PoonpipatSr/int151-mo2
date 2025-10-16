const animals = document.getElementById("animals");
const allAnimals = animals.children;

// 🧠 Practice 1 — “List All Animals”
// เข้าถึง <ul id="animals">
// แสดงชื่อสัตว์ทั้งหมดใน <li> ทีละตัวใน console
Array.from(allAnimals).forEach((animal) => console.log(animal.textContent));

// 🧠 Practice 2 — “Find and Show Cat’s Neighbors”
// หา <li> ที่มีข้อความ "Cat"
// แสดง:
// - previous element sibling
// - next element sibling
// - parent element
const catAnimal = Array.from(allAnimals).find(
  (li) => li.textContent.trim() === "Cat"
);
console.log(catAnimal);
console.log(catAnimal.previousElementSibling);
console.log(catAnimal.nextElementSibling);
console.log(catAnimal.parentElement);

// 🧠 Practice 3 — “Count How Many Animals”
// เข้าถึง <ul>
// แสดงจำนวน <li> ทั้งหมดใน console
Array.from(allAnimals).forEach((animal) => console.log(animal));

// 🧠 Practice 4 — “Highlight the First and Last Animal”
// เข้าถึง <li> ตัวแรกและตัวสุดท้าย
// เพิ่ม style เช่น color: "red" ให้ตัวแรก
// เพิ่ม style เช่น color: "blue" ให้ตัวสุดท้าย
const lastAnimal = Array.from(allAnimals).length - 1

allAnimals[0].style.color = "red"
allAnimals[lastAnimal].style.color = "blue"

// 🧠 Practice 5 — “Add a New Animal”
// สร้าง <li> ใหม่ชื่อ "Rabbit"
// เพิ่มไปต่อท้ายหลัง <ul>
const liRabbitElement = document.createElement("li")
liRabbitElement.textContent = "Rabbit"
animals.after(liRabbitElement)

// 🧠 Practice 6 — “Insert Animal in the Middle”
// สร้าง <li> ใหม่ชื่อ "Elephant"
// แทรกให้อยู่ก่อน <li>Bird</li>
const liElephantElement = document.createElement("li")
liElephantElement.textContent = "Elephant"

const birdElement = Array.from(allAnimals).find(
    (animal) => animal.textContent === "Bird"
)
animals.insertBefore(liElephantElement, birdElement)

// 🧠 Practice 7 — “Remove an Animal”
// ลบ <li> ตัวที่มีข้อความ "Dog" ออกจาก <ul>
const dogElment = Array.from(allAnimals).find(
    (animal) => animal.textContent === "Dog"
)
animals.removeChild(dogElment)

// 🧠 Practice 8 — “Change Text Content”
// เข้าถึง <li> ที่มีข้อความ "Fish"
// เปลี่ยนข้อความให้เป็น "Shark"
const fishElement = Array.from(allAnimals).find(
    (animal) => animal.textContent === "Fish"
)
fishElement.textContent = "Shark"

// 🧠 Practice 9 — “Reverse the Animal Order”
// ดึง <li> ทั้งหมดออกมาเป็น array
// กลับลำดับ (reverse) แล้วแสดงกลับใน <ul>
Array.from(allAnimals).reverse().forEach(animal => animals.appendChild(animal))

// 🧠 Practice 10 — “Find by Text Dynamically”
// ให้ผู้ใช้กรอกชื่อสัตว์ใน prompt()
// หาว่าสัตว์ชื่อนั้นอยู่ใน <ul> หรือไม่
// ถ้ามีให้ console.log("Found!") ถ้าไม่มีให้ console.log("Not found!")
const input = prompt("Enter animal name: ")
const findAnimal = Array.from(allAnimals).some(
    (animal) => animal.textContent === input
)
findAnimal ? console.log("Found!") : console.log("Not Found!")