# 💸 Expense Tracker App (MERN Stack)

A fully responsive and modern **Expense Tracker Web Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**. The app allows users to securely manage their income and expenses with detailed visual insights and export functionality.

---

## 🚀 Features

### 🔐 User Authentication
- Secure login and signup using **JWT (JSON Web Token) authentication**.
- Session management using tokens stored in localStorage.

### 📊 Dashboard Overview
- Summary cards displaying:
  - ✅ Total Balance
  - 💰 Total Income
  - 💸 Total Expenses

### 📥 Income Management
- Add new income sources
- View all income entries
- Delete specific income entries
- Export income records as **Excel (.xlsx)**

### 📤 Expense Management
- Add expense entries with category support
- View and delete individual expenses
- Export expenses to **Excel (.xlsx)** for reporting

### 📈 Interactive Charts
- Built with **Recharts** and **React Charts**
- Pie Chart, Bar Chart, and Line Chart visualization for:
  - Income & Expense comparison
  - Category-wise expense distribution

### 🧾 Recent Transactions
- View the most recent incomes and expenses for quick access.

### 📂 Report Export
- Download full Income and Expense data in Excel format using a single click.

### 📱 Mobile Responsive UI
- Responsive layout using **Tailwind CSS**
- Optimized for Desktop, Tablet, and Mobile devices

### 🧭 Intuitive Navigation
- Sidebar menu for:
  - Dashboard
  - Income
  - Expenses
  - Logout
- Mobile navigation supported with toggle menu

---

## 🧰 Tech Stack

| Frontend               | Backend                | Database         |
| ---------------------- | ---------------------- | ---------------- |
| [React.js + Vite](https://vitejs.dev/) | [Express.js](https://expressjs.com/) | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |

### Frontend Tools:
- `react-icons` (Lucide, HeroIcons)
- `recharts` for interactive graphs
- `@tanstack/react-charts`
- `tailwindcss` for utility-first styling
- `xlsx` for Excel export
- `react-router-dom` for routing
- `jwt-decode` for token management

### Backend Tools:
- `express`
- `mongoose`
- `jsonwebtoken`
- `cors`
- `dotenv`
- `bcryptjs`

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js and npm
- MongoDB Atlas account
- Git

---

### 1️⃣ Clone the Repository


git clone https://github.com/PrasunPrabhat/Start-Journey-MERN-Expense-Tracker-Project.git
cd expense-tracker-app


---

### 2️⃣ Setup the Server (Backend)

```bash
cd server
npm install


- Create a `.env` file in the `server/` directory with the following:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

- Start the backend server:

```bash
npm run dev
```

---

### 3️⃣ Setup the Client (Frontend)

```bash
cd client
npm install
npm run dev
```

---

## 🌐 Live Demo

🚀 **Live Website:** [View Deployed App](https://expense-tracker-cbnz.onrender.com)

---

## 📤 Deployment

- **Frontend** deployed using **Render** / **Vercel** / **Netlify**
- **Backend** deployed using **Render**
- **MongoDB** hosted on **MongoDB Atlas**

---

## 📧 Contact

**Developer:** Prasun Prabhat  
📫 [LinkedIn](https://www.linkedin.com/in/prasun-prabhat-859838230/)  
📬 Email: prasun2000kir@gmail.com

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

