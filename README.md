# 🚀 Task Manager Pro - Neon Edition

A high-end, modern Task Management application designed with a sleek "Neon-Dark" aesthetic. This tool allows users to manage daily tasks efficiently with persistence, filtering, and external data integration.

---

## 📍 Table of Contents
- [Overview](#-overview)
- [Screenshot](#-screenshot)
- [Links](#-links)
- [Key Features](#-key-features)
- [Built With](#-built-with)
- [What I Learned](#-what-i-learned)
- [Future Enhancements](#-future-enhancements)

---

## 📖 Overview
The Task Manager Pro is a performance-focused web application. It combines a premium glassmorphism UI with robust functionality. Beyond simple CRUD operations, it features dynamic task filtering, date-based sorting, and synchronizes with the browser's LocalStorage to ensure no data is lost.

Additionally, the app demonstrates asynchronous programming by fetching initial placeholder data from an external REST API if the user's list is empty.

---

## 📸 Screenshot
<img width="1713" height="838" alt="צילום מסך 2026-02-24 222841" src="https://github.com/user-attachments/assets/5bd139f6-cae2-45a6-8515-a18bc12919fd" />
<img width="100%" alt="Task Manager Preview" src="https://via.placeholder.com/1200x600?text=Task+Manager+Neon+Preview" />

---

## 🔗 Links
- **Code:** [View on GitHub](https://github.com/rejwanlior/Task-Manager)
- **Live Preview:** [Visit Live Site](https://rejwanlior.github.io/JS-PROJECT/)

---

## ✨ Key Features
* **Data Persistence:** Uses `LocalStorage` to save tasks across browser sessions.
* **API Integration:** Fetches initial data using `Async/Await` from JSONPlaceholder.
* **Dynamic Filtering:** Toggle between 'All', 'Active', and 'Completed' tasks instantly.
* **Smart Sorting:** Organizes tasks chronologically by due date.
* **Responsive UI:** Premium Dark-Mode design with CSS backdrop-filters and neon glow effects.

---

## 🛠 Built With
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

* **Modern CSS:** CSS Variables, Flexbox, and Glassmorphism (backdrop-filter).
* **Vanilla JavaScript:** DOM manipulation, Event Delegation, and Array Methods (`filter`, `map`, `sort`).
* **Fetch API:** Implementation of asynchronous calls to handle external data.

---

## 🎓 What I Learned
During the development of this project, I strengthened several core concepts:

* **State Management:** Managing a local array of objects as a "single source of truth" and mirroring it to the UI.
* **Asynchronous Logic:** Handling `try/catch` blocks and `async/await` for reliable API communication.
* **UI/UX Design:** Implementing "Neon" text-shadows and CSS transitions to provide immediate visual feedback (e.g., the rotate effect on delete).
* **Functional Logic:** Creating a reusable "Task Element Factory" to keep the code DRY (Don't Repeat Yourself).

---

## 🚀 Future Enhancements
* **Task Categories:** Adding tags (Work, Personal, Urgent) with different neon color-coding.
* **Edit Mode:** Implementing in-place editing for existing tasks.
* **Drag & Drop:** Integrating a library or native API for manual task reordering.
* **PWA:** Making it an installable Progressive Web App for offline use.

---
Created by [Lior Rejwan](https://github.com/rejwanlior) © 2026
