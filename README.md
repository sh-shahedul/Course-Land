# Course Land

[![Frontend](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB-yellow?logo=mongodb)](https://www.mongodb.com/)

**Course Land** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) learning platform where users can explore, enroll in, and manage online courses. It is designed for both learners and instructors with an intuitive and interactive UI.

---

## Live Demo

Check out the live version of **Course Land** here:  

[🔗 Visit Live Site](https://your-live-site-url.com)


---

## Key Features

### 🌐 Public Features
- 🌟 **Browse All Courses:** Explore a variety of courses freely.  
- 🔥 **Popular Courses:** Quickly find trending and highly-rated courses.  
- 🎨 **Interactive UI:** Smooth animations with **Framer Motion** and **AOS** enhance the user experience.  

### 🔒 Private Features (Authenticated Users)
- 🎓 **Instructor Dashboard:**  
  Upload new courses, update or delete them, and manage all your content.  
- 💳 **Course Selling System:**  
  Instructors can sell courses, and students can browse and enroll.  
- 🔐 **Secure Authentication:**  
  Firebase Authentication ensures safe login/signup for all users.  
- 📱 **Fully Responsive Design:**  
  Works seamlessly on desktop, tablet, and mobile devices.  
- 🌈 **Modern UI & Animations:**  
  Tailwind CSS + **Framer Motion** + **AOS** provide smooth visuals.  
- 🔥 **Dynamic Routing & Protected Routes:**  
  Separate dashboards and pages for logged-in users.  
- ⚡ **Fast Performance:**  
  Developed with **Vite** for ultra-fast build and development.  

### 🛠 Additional Features
- 🔑 **Private Routes:** Ensure user-specific content access.  
- 🔔 **Notifications:** Interactive alerts with **React Hot Toast** and **SweetAlert2**.  
- 💾 **Data Handling:** Fetch and manage data efficiently using **Axios**.  

---

## Technologies Used

### Frontend Technologies

| Category | Technology | Description |
|----------|-----------|-------------|
| UI Library | React.js | Functional components & hooks for building UI |
| Routing | React Router v6 | Routing and private routes for navigation |
| Styling | Tailwind CSS | Responsive and modern styling |
| Animations | Framer Motion, AOS | Smooth component and scroll animations for interactive UI |
| Icons | React Icons / Lucide-React | Icons for buttons, menus, and UI elements |
| Data Handling | Axios | Fetching and sending data to backend APIs |
| Build Tool | Vite | Ultra-fast development and build tool |

### Backend Technologies

| Category | Technology | Description |
|----------|-----------|-------------|
| Runtime | Node.js | JavaScript runtime for server-side programming |
| Framework | Express.js | Web framework for building REST APIs |
| Database | MongoDB | NoSQL database for storing courses and users |
| ODM | Mongoose | MongoDB object modeling for schema management |
| Authentication | JWT Authentication | Secure login and private routes |
| Security & Middleware | CORS | Cross-Origin Resource Sharing protection |
| Deployment & Environment | Vercel, dotenv | Deployment on Vercel & environment variable management |

### Additional Tools

| Category | Tool | Purpose |
|----------|------|---------|
| Notifications | React Hot Toast, SweetAlert2 | Display interactive notifications and alerts |
| Authentication | Firebase Authentication | Secure login/signup for users |




---
```
## 📂 Folder Structure (Client Side)

src/
├── assets/
│ ├── images/
│
├── components/
│ ├── Achievement/
│ │ └── Achievement.jsx
│ ├── CourseCard/
│ │ └── CourseCard.jsx
│ ├── ErrorMessage/
│ │ └── ErrorMessage.jsx
│ ├── ErrorPage/
│ │ ├── courseErrorPage.jsx
│ │ └── ErrorDetails.jsx
│ ├── ForgotPassword/
│ │ └── ForgotPassword.jsx
│ ├── Hero/
│ │ └── Hero.jsx
│ ├── Loading/
│ │ └── Loading.jsx
│ ├── Navbar/
│ │ └── Navbar.jsx
│ ├── TopInstructor/
│ │ └── TopInstructor.jsx
│ ├── WhyChooseUs/
│ │ └── WhyChooseUs.jsx
│ ├── FireBase/
│ │ └── FireBase.init.js
│ ├── LayOut/
│   └── RootLayOut.jsx
│ 
│
├── pages/
│ ├── AddCourse/
│ │ └── AddCourse.jsx
│ ├── CourseDetails/
│ │ └── CourseDetails.jsx
│ ├── Courses/
│ │ └── Courses.jsx
│ ├── Footer/
│ │ └── Footer.jsx
│ ├── Home/
│ │ └── Home.jsx
│ ├── Login/
│ │ └── Login.jsx
│ ├── MyAddedCourses/
│ │ └── MyAddedCourses.jsx
│ ├── MyEnrolledCourses/
│ │ └── MyEnrolledCourses.jsx
│ ├── Register/
│ │ └── Register.jsx
│ ├── UpdateCourse/
│   └── UpdateCourse.jsx
│ 
├── Provider/
│ ├── AuthContext.jsx
│ ├── AuthProvider.jsx
│ └── PrivateRoute.jsx
│
├── Routes/
│ └── Routes.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx