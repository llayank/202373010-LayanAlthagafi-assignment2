# 202373010-LayanAlthagafi-assignment2

## Project Description

This project is a responsive personal portfolio website for showcasing my software engineering background, skills, and projects.

The website includes an About section, Featured Projects section, and Contact section. Assignment 2 improves the original portfolio by adding an interactive project filtering feature using JavaScript.
Users can filter projects by technology, switch between light and dark themes, and receive feedback when submitting the contact form.


Users can filter the projects by technology category:
- All projects
- HTML/CSS
- JavaScript
- Full-Stack

When the user selects a category, JavaScript dynamically shows the matching projects and hides the others. The selected filter button is also highlighted to improve usability.

The website also includes:

- A dynamic time-based greeting
- Light and dark theme switching
- Theme preference saved using localStorage
- Contact form validation
- Confirmation messages after form submission
- Hover effects and fade-in animations
- A message when no projects match the selected category

## Data Handling

The portfolio uses localStorage to save the user's light or dark theme preference. The selected theme is restored when the user opens the website again.

The contact form validates required fields and checks the email format before submission. After a successful submission, the user receives a confirmation message.

## AI Usage Summary

AI tools were used as learning and development assistants to help brainstorm the portfolio structure, improve JavaScript interactivity, and organize the documentation.

All AI suggestions were reviewed, customized, and tested manually. More details are available in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).


## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
2. Open the project folder.
3. Open the index.html file in a web browser.
No additional libraries or installation steps are required.