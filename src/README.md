1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand.

2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. State is used to store and change data inside a component.

3. What does the useState hook do, and where did you use it in this project?
useState is used to store and update data in a component. I used it to manage the mobile menu, technologies, and user stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after the component renders. I used it to load the technology data from the JSON file when the app starts.

5. Why does every item in a .map() list need a unique key prop?
The key helps React identify each item in the list. It helps React update the list correctly.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something only when a condition is true. I used it to show the empty stack message when there are no technologies in the stack.

Example:

{stack.length === 0 && <p>Your stack is empty.</p>}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can send something back by calling a function that the parent passes as a prop.

⚙️ Technology Used
React.js – Used to build the user interface and components.
Tailwind CSS – Used to style the website and make it responsive.
TypeScript – Used to write organized and type-safe code.
React-Toastify – Used to show success, warning, and info messages.
JSON – Used to store the technology data.
Vite – Used to run and build the React project.

❓ Common FAQ

1. Where can we deploy the site?
We can deploy the site on platforms like Netlify, Vercel, or Cloudflare Pages.

2. Do we have to use TypeScript?
No. We can use either TypeScript or JavaScript.

3. Can we change the title, logo, and colors?
Yes. We can change the title, logo, and colors as long as they are related to the project.

4. Where do we get the technology logos/icons?
We can use technology logo URLs from different websites. I used image URLs for the technology icons in the JSON data.