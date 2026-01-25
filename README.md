##🚀 Role-Based Job Portal (React)**::
A modern role-based job portal frontend application built using React, Redux Toolkit, and Tailwind CSS, supporting User, Recruiter and Admin roles with separate dashboards and features.

##✨ Features ::

  ###🔐Authentication & Authorization:
   - User & Recruiter registration and login
   - Role-based access control (User / Recruiter / Admin)
   - Authentication state managed using Redux Toolkit
   - Persistent login using localStorage

**👤 User Features** ::
  - Browse job listings
  - Search jobs by title
  - View job details
  - Personalized profile page

**🧑‍💼 Recruiter Features** ::
   - Recruiter dashboard
   - Post new jobs,
   - Edit & delete own job postings
   - Job statistics view
   - Personalized welcome message

 **🛠 Admin Features** ::
   - Admin dashboard
   - View all jobs
   - Edit or delete any job
   - Analytics cards (jobs, users, recruiters)
   - Centralized job management

 **🧰 Tech Stack** ::
   - Frontend: React (Vite)
   - State Management: Redux Toolkit
   - Routing: React Router DOM
   - Styling: Tailwind CSS
   - Persistence: localStorage
   - Version Control: Git & GitHub

## 📁 Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── user/
│   │   └── Jobs.jsx
│   │
│   ├── recruiter/
│   │   └── RecruiterDashboard.jsx
│   │
│   ├── admin/
│   │   └── AdminDashboard.jsx
│   │
│   └── profile/
│       └── Profile.jsx
│
├── redux/
│   ├── authSlice.js
│   └── jobSlice.js
│
├── App.jsx
└── main.jsx 
```
##Link: https://jobprtal.netlify.app/ 

##▶️ Getting Started** ::
  - Clone the repository: 
      git clone https://github.com/adarshanit1125/job-portal.git
  - Install dependencies: npm install 
  - Run the app:  npm run dev

##📸 Screenshots** ::      
  <img width="1732" height="906" alt="image" src="https://github.com/user-attachments/assets/3abee704-a4b3-46e6-8893-4410e0d3c445" />
  <img width="1892" height="872" alt="image" src="https://github.com/user-attachments/assets/0f091ad3-7085-484d-a7d1-8b1c8e6f46f8" />
  <img width="1767" height="927" alt="image" src="https://github.com/user-attachments/assets/c3c06411-d3da-4c83-bf15-83aba19573d3" />

##🚀 Future Improvements** ::
   Backend integration (Node.js / Express)
   Real authentication with JWT
   Job application workflow
   Admin user management
   Email-based password reset
   Avatar upload 

  ** ⭐ If you like this project, give it a star on GitHub!**



