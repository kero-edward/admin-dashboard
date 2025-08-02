<<<<<<< HEAD
# AdminDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
// ==== STEP 1: Clone the Project ====
// Terminal Commands:
// git clone https://github.com/kero-edward/admin-dashboard.git
// cd admin-dashboard
// npm install

// Run the project:
// ng serve

... [code truncated for brevity] ...

// ==== README.md ====

# Angular Admin Dashboard

A feature-rich admin dashboard built with **Angular 18** and **Bootstrap 5**, showcasing routing, guards, reactive forms, interceptors, state management, and CRUD functionality using a mock API.

## 📋 Task Overview

This project demonstrates the following Angular 18 capabilities:

- Static login page using Reactive Forms and mock authentication
- Route protection using `AuthGuard` and `LoginGuard`
- Responsive sidebar layout using Angular’s RouterModule
- Products list with full CRUD functionality powered by `HttpClient` and a mock REST API
- State management with Angular Services and RxJS
- Global error handling using HTTP Interceptors

## ✅ Requirements Implemented

### 1. Login Page
- Static login form using Reactive Forms
- Validates the presence of username and password
- On submit:
  - Saves `mocktoken` to `localStorage`
  - Redirects to `/dashboard`

### 2. Logout
- Logout button in the sidebar
- Clears token and redirects to `/login`

### 3. Route Guards
- Redirects unauthenticated users to `/login`
- Prevents logged-in users from accessing `/login`

### 4. Sidebar Layout
- Responsive sidebar with links to:
  - `/dashboard`
  - `/products`
  - `/settings`

### 5. Dashboard Page
- Displays "Welcome, admin" message

### 6. Products Page
- Fetches from: https://62fb62afe4bcaf5351837ac1.mockapi.io/product
- Displays product list:
  - Name, Description, Image, Category, Price
- CRUD functionality:
  - Add/Edit (form modal)
  - Delete (with confirmation)

### 7. Settings Page
- Empty page stub

### 8. Error Handling
- HTTP Interceptor catches and shows friendly messages for:
  - 401 Unauthorized
  - 404 Not Found
  - 500 Server Errors

## 🧰 Tech Stack
- Angular 18
- Bootstrap 5
- Angular Material
- RxJS
- HttpClient
- ngx-toastr
- sweetalert2

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/kero-edward/admin-dashboard.git
cd admin-dashboard

# Install dependencies
npm install

# Run locally
ng serve
```

## 🔐 Mock Login
- Use any credentials — if both fields are filled, login succeeds
- Token stored in `localStorage`

## 📡 API Used
- [MockAPI Product Endpoint](https://62fb62afe4bcaf5351837ac1.mockapi.io/product)

## 👤 Author
[Kyrillos Edward](https://github.com/kero-edward)

## 📃 License
[MIT](LICENSE)
>>>>>>> c2cd3843a095e8970039c47fa2698298f82fea32
