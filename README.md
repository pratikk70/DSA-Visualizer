# 🚀 DSA Visualizer

An interactive educational platform built to visualize core Data Structures and Algorithms. Watch algorithms execute step-by-step with real-time state animations and synchronized **C++ code analysis**.

**🔗 [Live Demo](https://dsavisualizer26.vercel.app/)** 

## ✨ What Makes It Special

* **Visual Learning:** Complex algorithms become intuitive through visualization
* **Interactive Experience:** Direct manipulation and real-time feedback
* **Educational First:** Built specifically for learners and educators
* **Modern Design:** Clean, accessible interface with smooth animations
* **Performance:** Optimized for smooth 60fps animations
* **Mobile Ready:** Responsive design that works on all devices

## ✨ Features

Interactive visualizations mapping directly to standard C++ implementations:

### Data Structures
* **Arrays**: Visualize memory shifts during Insertion, Deletion, and Linear Search.
* **Linked Lists**: Watch pointer manipulation (`->next`) dynamically update during node operations.
* **Stacks**: Understand LIFO memory management with Push, Pop, and Peek operations.
* **Binary Search Trees**: Interactive hierarchical node insertion, searching, and deletion.

### Algorithms
* **Sorting**: Step-by-step execution of classic algorithms:
  * Bubble Sort O(n²)
  * Selection Sort O(n²)
  * Insertion Sort O(n²)
  * Merge Sort O(n log n)
* **Recursion**: Explore the call stack and base cases for:
  * Direct Recursion (Factorial)
  * Tail Recursion (Optimized Factorial)
  * Tree Recursion (Fibonacci)

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **UI Library**: [React](https://reactjs.org/)
* **Language**: TypeScript & C++ (Snippets)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Deployment**: Vercel

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have Node.js (v18.x or later) installed on your machine.

### Installation

1. **Clone the repository**
```bash
git clone [https://github.com/pratikk70/DSA-Visualizer](https://github.com/pratikk70/DSA-Visualizer)
cd dsa-visualizer
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open the app**
Navigate to http://localhost:3000 in your browser to see the application.

## 📂 Project Structure

```text
dsa-visualizer/
├── app/                  # Next.js App Router
│   ├── array/            # Array visualizer
│   ├── linked-list/      # Linked list visualizer
│   ├── stack/            # Stack visualizer
│   ├── binary-tree/      # Binary tree visualizer
│   ├── sorting/          # Sorting algorithms
│   └── about/            # About page
├── components/           # React components
│   ├── visualizers/      # Core visualizer components
│   ├── ui/               # Reusable UI components
│   └── *.tsx             # Layout components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 💡 Motivation

This project was built to bridge the gap between theoretical algorithmic concepts and practical understanding. By mapping complex state management to smooth UI animations, it provides a visual mental model for how standard C++ operations affect memory in real-time. 

## 📄 License

This project is licensed under the MIT License.