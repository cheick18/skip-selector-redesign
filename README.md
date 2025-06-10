# Skip Selector Redesign

A complete UI/UX redesign of the skip selection page for **WeWantWaste**.  
This project focuses on a modern, clean, and responsive design while maintaining the original functionality.

---

## My Approach

The goal was to modernize the skip selection interface without altering the core functionality. Here's what I implemented:

- Analyzed the original design to identify areas for improvement.
- Structured the project to support easier evolution and maintenance.
- Created a service to fetch skip information using the **Fetch API**.
- Developed components based on the new design.
- Redesigned the layout using **Tailwind CSS** for a clean, modern, and responsive interface.
- Used **Flowbite React** to integrate accessible and consistent UI components.
- Added **scroll-based animations** with **AOS** to enhance the user experience.
- Managed shared state using the **React Context API** to ensure smooth navigation between pages, aligned with the existing logic.
- Preserved the existing logic for skip data selection and navigation.

---

## Tech Stack

- **React** – Frontend framework  
- **Vite** – Fast build tool for development  
- **Tailwind CSS** – Utility-first CSS framework  
- **Flowbite React** – Accessible prebuilt UI components  
- **AOS (Animate On Scroll)** – Scroll-based animations  
- **React Context API** – State management  
- **Fetch API** – For HTTP requests  

---

## How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cheick18/skip-selector-redesign.git
   cd skip-selector-redesign
   ```

2. **Install dependencies**:
   ```bash 
   npm install 
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

