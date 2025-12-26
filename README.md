# React Todo List

A simple, responsive Todo List application built with React and TypeScript.  
It supports adding tasks via a dialog, viewing pending and completed todos, and moving tasks between lists.

## Features

- Add new todos using a modal dialog (title + description)
- Separate sections for:
  - **Pending Todos**
  - **Completed Todos**
- Mark tasks as completed
- Delete pending tasks
- Scrollable lists with fixed-height containers
- Responsive layout with centered content

## Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite** (or CRA – update this if different)
- **CSS** for styling (no UI library)

## Project Structure
src/
components/
PendingList.tsx
CompletedList.tsx
TodoCard.tsx
CompleteTodoCard.tsx
css/
PendingList.css
CompletedList.css
TodoCard.css
CompletedTodoCard.css
App.tsx
App.css
main.tsx
index.css

- `App.tsx` – main container, holds state for todos and dialog.
- `PendingList.tsx` / `CompletedList.tsx` – layout wrappers for the two sections.
- `TodoCard.tsx` / `CompleteTodoCard.tsx` – individual todo item cards.
- `*.css` – styling for lists, cards, and layout.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Installation

clone this repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

install dependencies
npm install

or
yarn install

### Running the App

npm run dev
or
yarn dev


Open the URL shown in the terminal (usually `http://localhost:5173` for Vite).

## Usage

1. Click **+ ADD Task** in the header.
2. A dialog appears asking for **Title** and **Description**.
3. Fill in the fields and click **Add** to create the todo.
4. The new task appears under **Pending Todos**.
5. Use:
   - **Complete** to move a task to **Completed Todos**.
   - **Delete** to remove a pending task.
6. When there are many tasks, each list becomes scrollable while keeping a fixed height.

## Styling / Layout Notes

- The main content is wrapped in `.outer-container` with a max-width of `1200px` and centered.
- `.pending-list` and `.completed-list` have:
  - `height: 320px` and `overflow-y: auto` for fixed-height scrollable sections.
- `.todo-grid` uses flexbox to wrap cards into multiple rows.
- A custom modal is implemented using a backdrop div and simple CSS.

## Future Improvements

- Persist todos in `localStorage` or a backend.
- Edit existing todos.
- Add due dates / priority.
- Better validation and error messages for the dialog.
- Tests for components and hooks.

Feel free to fork and modify it for your own learning or projects.
