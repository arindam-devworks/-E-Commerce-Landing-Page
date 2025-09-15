🌟 Features
Responsive Design: Fully responsive layout that works on desktop, tablet, and mobile devices

Product Listing: Display products from external API with images, titles, and prices

Category Filtering: Filter products by categories fetched from API

Search Functionality: Real-time search that filters products by title and description

Dark Mode Toggle: Switch between light and dark themes with persistent preferences

Contact Form: Fully validated contact form with name, email, and message fields

Hover Effects: Interactive product cards with "Add to Cart" overlay animations

Modern UI: Clean, professional design with smooth transitions and animations

🛠️ Technologies Used
Frontend Framework: React

Build Tool: Vite

Styling: CSS3 with Flexbox and Grid

API Integration: Fetch API for external data

State Management: React Hooks (useState, useEffect, useContext)

Icons: Emoji-based icons for theme toggle

Local Storage: For persisting user theme preferences

📦 Installation
Clone the repository

bash
git clone https://github.com/your-username/e-commerce-landing-page.git
cd e-commerce-landing-page
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:5173

🏗️ Project Structure
text
src/
├── components/
│ ├── Header/
│ │ ├── Header.jsx
│ │ ├── Header.css
│ │ ├── SearchBar.jsx
│ │ └── ThemeToggle.jsx
│ ├── Hero/
│ │ ├── Hero.jsx
│ │ └── Hero.css
│ ├── Products/
│ │ ├── ProductGrid.jsx
│ │ ├── ProductCard.jsx
│ │ ├── CategoryFilter.jsx
│ │ └── ProductGrid.css
│ ├── Contact/
│ │ ├── ContactForm.jsx
│ │ └── ContactForm.css
│ └── Footer/
│ ├── Footer.jsx
│ └── Footer.css
├── contexts/
│ └── ThemeContext.jsx
├── services/
│ └── api.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css

🔌 API Integration
This project uses the following APIs:

Products API: https://api.escuelajs.co/api/v1/products

Categories API: https://api.escuelajs.co/api/v1/categories

📝 Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

Note: This project was developed as part of a hiring process to demonstrate React skills, API integration, and responsive design capabilities.
