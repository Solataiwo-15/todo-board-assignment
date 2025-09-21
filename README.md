# Todo System - Frontend Developer Assignment

This project is a high-fidelity implementation of a Todo management system, built as a frontend developer assignment. The goal was to take a detailed Figma design and translate it into a fully functional, interactive, and responsive web application.

---

### **Live Demo**

A live version of this project is deployed on Vercel.

**[View Live Demo](https://todo-board-assignment.vercel.app/)**

### **Screenshot**

[Todo System Screenshot](./public/screenshot.png)

---

## Features Implemented

This application meets all the core and bonus requirements of the assignment.

### Core Requirements

- [x] **Pixel-Perfect Design:** The application closely follows the provided Figma design for all components, layouts, and views.
- [x] **Table View:** A responsive and styled table displays the list of todos with all relevant details.
- [x] **Card View (Kanban Board):** A fully functional Kanban-style board view with columns for each status.
- [x] **Mark as Complete:** A task's status can be updated to "Complete" via the Edit modal, and it will move to the appropriate column/filter.
- [x] **Consistent UI/UX:** The application is built entirely with Chakra UI, ensuring a consistent and robust design system. Icons from `iconsax-reactjs` and `react-icons` are used as specified.

### Bonus Features

- [x] **Add/Edit Tasks:** Users can add new tasks and edit existing ones through a comprehensive modal form.
- [x] **Live Updates:** The UI updates instantly and automatically when a task is created or edited, without a page reload, thanks to state management.
- [x] **localStorage Persistence:** All tasks are saved to the browser's `localStorage`, so the user's data persists even after refreshing the page.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Library:** Chakra UI
- **Icons:** `iconsax-reactjs`, `react-icons`
- **Date Picker:** `react-day-picker` with `date-fns`

---

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Your-Username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-repository-name
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
