# AI Usage Report

## 1. Tools Used & Use Cases

* **Tools:** Gemini (Google) and ChatGPT

* **Use Cases:**

  * **Ideation and Layout Assistance:** Brainstorming the structure of a personal portfolio website and organizing semantic HTML sections.

  * **CSS and Color Palettes:** Suggesting modern CSS variables, responsive layouts, transitions, hover effects, and color combinations for the portfolio design.

  * **JavaScript Assistance:** Understanding and improving JavaScript features such as time-based greetings, light/dark theme switching, localStorage, contact form validation, and project filtering.

  * **Interactive Feature Planning:** Planning the project filtering feature using buttons, `data-*` attributes, event listeners, and dynamic content.

  * **Documentation Guidance:** Organizing the README file, technical documentation, and AI usage report according to the assignment requirements.

## 2. Assignment 2 Improvements

For Assignment 2, AI was used to help plan and implement an interactive project filtering feature.

The feature allows users to filter projects by technology category:

- All projects
- HTML/CSS
- JavaScript
- Full-Stack

When a user clicks a filter button, JavaScript displays the matching projects and hides the other projects. The selected button is highlighted to make the current filter clear.

The website also includes an empty-state message that informs the user when no projects match the selected category.

## 3. Benefits

* **Faster Workflow:** AI helped me understand how to organize the project folders and build the interactive feature more efficiently.

* **Improved User Experience:** AI suggested using hover effects, transitions, fade-in animations, and clear feedback messages.

* **Debugging Assistance:** AI helped identify and fix issues related to email validation, CSS transitions, and project filtering.

* **Documentation Support:** AI helped me organize the README and technical documentation.

## 4. Challenges

* **Generic Suggestions:** Some initial suggestions were generic, so I customized the content and design to match my own portfolio.

* **Understanding the Code:** I had to review the JavaScript code to understand how the buttons filter the projects.

* **Validation Issues:** The email field initially accepted some incomplete formats, so I improved the validation using a regular expression pattern and a custom error message.

* **Testing:** I manually tested the website to make sure the filter buttons, theme switcher, form validation, and animations worked correctly.

* **Avoiding Unnecessary Features:** Some suggested features were more advanced than required, so I kept the project focused on the assignment requirements.

## 5. Learning Outcomes

Through this assignment, I learned how to:

- Add interactive buttons to a website.
- Use `addEventListener()` to respond to user actions.
- Use `querySelectorAll()` to select multiple elements.
- Use `data-category` and `data-filter` attributes.
- Show and hide content dynamically with JavaScript.
- Use `classList` to update CSS classes.
- Use localStorage to save user preferences.
- Validate form input using HTML and JavaScript.
- Display confirmation and feedback messages.
- Add CSS transitions and fade-in animations.
- Organize HTML, CSS, JavaScript, and documentation files.

## 6. Responsible Use and Modifications

AI was used as a learning and development assistant, not as a replacement for my own work.

I reviewed and modified the suggested code to match my portfolio design and project content. I also tested the final website manually using a web browser.

The final changes included:

- Adding project filter buttons.
- Adding project categories using `data-category`.
- Adding JavaScript filtering logic.
- Adding an empty-state message.
- Adding CSS hover effects and fade-in animations.
- Improving email validation.
- Updating the project documentation.

## 7. Testing and Verification

I tested the website by:

- Clicking each project filter button.
- Checking that matching projects appeared.
- Checking that non-matching projects were hidden.
- Testing the All filter.
- Testing the light and dark theme switcher.
- Refreshing the page to confirm that the selected theme was saved.
- Submitting the contact form with empty fields.
- Entering an invalid email address.
- Entering a valid email address.
- Checking the website on different screen sizes.

The final website was reviewed to ensure that the interactive features worked correctly and that the user received clear feedback.