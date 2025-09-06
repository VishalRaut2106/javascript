
# 📘 React Routing Notes (Basic → Advanced)

## 🔹 1. What is Routing?

* Routing ka matlab hota hai **different pages ya views dikhana bina page reload ke** (Single Page Application behavior).
* React me routing ke liye **react-router-dom** package use hota hai.

👉 Install:

```bash
npm install react-router-dom
```

---

## 🔹 2. Basic Setup

Sabse pehle `BrowserRouter` wrap karna padta hai:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🔹 3. Routes and Route

`Routes` ke andar `Route` define karte hai:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

---

## 🔹 4. Navigation (Link & NavLink)

* **Link** → Page reload nahi hota, SPA ke tarike se navigate hota hai.
* **NavLink** → Active tab highlight karne ke liye.

```jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        About
      </NavLink>
    </nav>
  );
}
```

---

## 🔹 5. Nested Routes

Ek route ke andar child route define kar sakte ho.

```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

Aur `Dashboard.jsx` me outlet use hoga:

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

---

## 🔹 6. URL Parameters (Dynamic Routing)

```jsx
<Route path="/user/:id" element={<User />} />
```

`User.jsx`:

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

👉 `/user/101` → "User ID: 101"

---

## 🔹 7. Query Parameters

```jsx
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  return <p>Query: {searchParams.get("q")}</p>;
}
```

👉 `/search?q=react` → "Query: react"

---

## 🔹 8. Programmatic Navigation

Manually navigate karne ke liye `useNavigate()` use hota hai:

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 🔹 9. Protected Routes (Authentication)

Private routes banane ka example:

```jsx
function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("auth"); 
  return isAuth ? children : <Navigate to="/login" />;
}

<Routes>
  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
</Routes>
```

---

## 🔹 10. Lazy Loading (Code Splitting)

React ke `lazy` aur `Suspense` se routes optimize kar sakte hai.

```jsx
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./pages/Dashboard"));

<Routes>
  <Route path="/dashboard" element={
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  } />
</Routes>
```

---

## 🔹 11. Redirects

Old URL ko new page pe redirect karne ke liye:

```jsx
<Route path="/old" element={<Navigate to="/new" />} />
```

---

## 🔹 12. Catch-All (404 Page)

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 🔹 13. Advanced Concepts

* **Relative Routing**: `to="profile"` instead of full path.
* **Route Objects Config** (instead of JSX-based routing).
* **Data API (v6.4+)**: Loader, Action, useLoaderData, etc.
* **MemoryRouter / HashRouter**: Different router types for special use cases (like mobile apps, Electron, etc.).

---

# 🚀 Summary

1. `BrowserRouter`, `Routes`, `Route` → basic setup
2. `Link`, `NavLink` → navigation
3. Nested routes with `Outlet`
4. Dynamic routes with `useParams`
5. Query params with `useSearchParams`
6. Programmatic navigation with `useNavigate`
7. Private routes with `Navigate`
8. Lazy loading for performance
9. Redirects and 404 handling
10. Advanced Data APIs & router types

---
