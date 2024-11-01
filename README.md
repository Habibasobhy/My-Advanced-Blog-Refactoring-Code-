1) Project Overview:
- This project is a responsive, advanced blog website built using HTML, CSS, and JavaScript. 
  It incorporates Bootstrap 5 for layout and responsiveness and provides a toggleable dark mode feature using custom CSS. 
  The blog consists of a navbar, articles section, sidebar, and a contact form in the footer, with dynamic interactions
  like a back-to-top button and scroll-to-top functionality.
 
 
2) Project Structure
   The project directory contains the following files:
   /project-root
   │
   ├── index.html               # The main HTML file for the blog
   ├── /CSS                     # Directory containing all CSS files
   │   ├── style.css            # Main CSS file for styling the layout
   │   ├── dark-mode.css        # CSS for dark mode theme
   │   └── all.min.css          # FontAwesome icons for the UI
   │
   ├── /JS                      # Directory containing JavaScript files
   │   └── main.js              # JavaScript file for dynamic features
   │
   └── /images                  # Folder for storing any images used in the blog


3) Files Explanation:

  1) index.html:
   - The main HTML structure of the blog, including the header, navbar, articles, sidebar, and footer with a contact form.
     It also includes the toggle for switching between light and dark modes.

  2) CSS Folder:
   - style.css: This file contains custom styles for the blog, such as the layout of the navbar, cards, sidebar, and footer.
   - dark-mode.css: Defines the dark mode theme. It utilizes the :has() pseudo-class to check if the dark mode toggle is
     activated and switches the color scheme accordingly.
   - all.min.css: Includes FontAwesome icons for decorative purposes in the navbar and footer.

  3) JS Folder:
   - main.js: Contains JavaScript functions for the scroll-to-top button and other dynamic interactions. 
     It ensures that the button appears when scrolling down and handles smooth scrolling back to the top.
	 
	 
4) Key Features

  1) Responsive Navbar:
   - Collapses on smaller screens and displays a hamburger menu.
   - Contains links to different sections (Home, About, Contact, Portfolio).
   
  2) Dark Mode Toggle:
   - Allows users to switch between light and dark modes by clicking on the moon/sun icon in the navbar. The color scheme
     adjusts automatically using custom CSS.
   
  3) Interactive Articles:
   - Each article is displayed as a card with a brief description and a "Read More" button.
   
  4) Sidebar:
   - Contains sections for "About the Blog," useful links, and recent posts.
   
  5) Back to Top Button:
   - A floating button that appears when the user scrolls down and allows easy navigation back to the top of the page.
   
  6) Footer:
   - Includes a contact form for visitors to send messages
   
   
5) How to Run the Project
  1) Clone or Download:
   - Clone the repository or download the project files to your local machine.
   
  2) Open in Browser:
   - Navigate to the project folder.
   - Open the index.html file in your preferred browser.
   
  3) Dependencies:
   - Ensure that you have an active internet connection since the project relies on external CDN links for Bootstrap and FontAwesome.