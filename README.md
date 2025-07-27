A React application that fetches and displays repositories from Google’s GitHub account using GitHub’s public API.

## Tech Stack

- **React 19**
- **TypeScript**
- **Axios**
- **TanStack Query (React Query)**
- **React Context**
- **Material UI (MUI)**
- **Tailwind CSS**

---

### Prerequisites

[Node.js](https://nodejs.org/) (Latest LTS version recommended)

### Installation

```bash
npm install
```

### Run
```bash
npm run dev
```

## Structure

- **App.tsx** – Root component of the application. Currently loads the main page and could handle routing in the future.
- **components/** – Reusable components used across pages.
- **pages/** – High-level page components that compose individual screens.
- **hooks/** – Custom React hooks.
- **context/** – React Context for managing global filters and sorting state.
- **api/** – Typed API functions to interact with GitHub's public API.
