# 🚀 Who's Up There?

A real-time space tracking application that displays the current location of the International Space Station (ISS), astronauts currently in space, and the current moon phase.

Built for **Code the Dream - Intro to Programming (Luna Class)** as a project to learn APIs, async/await, and DOM manipulation.

---

## 🌟 Features

- **ISS Location Tracking**: View the real-time latitude and longitude of the International Space Station
- **Astronaut Counter**: See how many people are currently in space and their names
- **Moon Phase Tracker**: Display the current moon phase and illumination percentage
- **Live Updates**: Fresh data fetched with each navigation click
- **Navigation**: Toggle between two views - "ISS & Crew" and "Moon Phase"

---

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Async/await, Fetch API, DOM manipulation
- **Google Fonts** - Orbitron font for space-themed typography

---

## 🌐 APIs Used

1. **Open-Notify ISS Location API**  
   `http://api.open-notify.org/iss-now.json`  
   Provides real-time ISS coordinates

2. **Open-Notify Astronauts API**  
   `http://api.open-notify.org/astros.json`  
   Provides list of people currently in space

3. **Sunrise-Sunset API**  
   `https://api.sunrise-sunset.org/json`  
   Provides moon phase and astronomical data

---

## 📂 Project Structure

```
whos-up-there/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

---

## 🚀 How to Run

1. **Clone or download this repository:**

   ```bash
   git clone https://github.com/AvionShea/whos-up-there.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd whos-up-there
   ```

3. **Open `index.html` in your browser:**

   - Double-click the `index.html` file, OR
   - Right-click and select "Open with" → your preferred browser, OR
   - Use a local development server (like Live Server in VS Code)

4. **Navigate between views:**
   - Click "ISS & Crew" to see space station location and astronauts
   - Click "Moon Phase" to see current lunar information

---

## 🎯 Learning Goals

This project demonstrates:

- ✅ Making asynchronous API requests using `fetch()`
- ✅ Using `async/await` syntax for cleaner asynchronous code
- ✅ Handling errors with `try-catch` blocks
- ✅ Manipulating the DOM to display API data
- ✅ Creating navigation between different data views
- ✅ Working with multiple API endpoints
- ✅ Implementing responsive design principles

---

## 🎨 Design

The application features a **Mission Control Dashboard** aesthetic with:

- Deep space black background (#0a0e27)
- Electric blue accents (#00d9ff)
- Orbitron font for futuristic typography
- Pulsing "LIVE" indicator
- Card-based layout with glassmorphism effects

---

## 👨‍💻 Author

**AvionShea**  
GitHub: [@AvionShea](https://github.com/AvionShea)

---

## 📝 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- Code the Dream - Luna Class
- Open-Notify API for providing free ISS data
- Sunrise-Sunset.org for moon phase data
- NASA for inspiring space enthusiasts everywhere

---

**🌙 Keep looking up! 🚀**
