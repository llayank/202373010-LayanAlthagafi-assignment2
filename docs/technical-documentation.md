# Technical Documentation

## 1. Project Architecture and Structure

The web application follows a separation of concerns:

* **Markup (`index.html`):** Uses semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` to improve organization, accessibility, and readability.

* **Styles (`css/styles.css`):** Contains the layout, responsive design, themes, buttons, transitions, and animations using pure CSS.

* **Logic (`js/script.js`):** Contains the client-side JavaScript functionality.

## 2. Responsive Design & Layout Strategy

* **CSS Grid:** Applied in the projects section (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) to dynamically reorganize project cards between mobile, tablet, and desktop screens.

* **Flexbox:** Applied to the navigation bar, project tags, contact form, and project filter buttons for precise alignment and flexible spacing.

* **Media Queries:** Configured at `@media (max-width: 640px)` to adapt typography, navigation spacing, and filter buttons on small screens.

## 3. Styling & Theming

* **CSS Custom Properties (Variables):** Theme colors, background layers, text colors, borders, and transition speeds are centralized in `:root`.

* **Dark Theme:** The dark theme is activated using `[data-theme="dark"]` and controlled through JavaScript.

* **Transitions & Animations:** Smooth color and transform transitions enhance the visual feedback when hovering over cards, buttons, and switching between light and dark themes. A fade-in animation is also used when filtered project cards appear.

## 4. Interactivity & JavaScript Implementation

* **Dynamic Time Greeting:** Queries `new Date().getHours()` on page load to display a greeting based on the user's local time: Morning, Afternoon, or Evening.

* **Theme Persistence:** Toggles the `data-theme` attribute and stores the user's theme preference using browser `localStorage`, allowing the selected theme to remain after refreshing the page.

* **Project Filtering:** Adds interactive filter buttons that allow users to filter projects by HTML/CSS, JavaScript, Full-Stack, or display all projects. JavaScript compares the selected filter with each project's category and dynamically shows or hides the matching project cards.

* **Form Event Handling:** Captures form submission events, prevents the page from refreshing, validates the input fields and email format, and displays a temporary confirmation message after a successful submission.

## 5. Data Handling

The project uses `localStorage` to save and retrieve the user's light or dark theme preference.

The contact form also handles user input by validating required fields and displaying a confirmation message after successful submission.

## 6. Error Handling & User Feedback

The contact form displays validation messages when required fields are empty or when an invalid email format is entered.

The project filtering feature displays a friendly empty-state message when no projects match the selected category.

The application does not use an external API, so API loading and API failure messages are not required.

## 7. Compatibility

The website is fully compatible with modern browsers, including Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

The layout is responsive and can be viewed on desktop, tablet, and mobile devices.