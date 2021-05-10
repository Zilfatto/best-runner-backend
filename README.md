# How to run the code

For this you need to have Node installed and run the following command - 'npm install'.
After that you need to run the next command, to compile TypeScript - 'npm run build'.
Then run 'npm start'
And that's it, the server is running!

---

# Project structure:
* "controllers" contains all the business logic for the application

* "middleware" is used to add some extra logic to requests

* "models" for describing entities structure and their validators

* "routes" will have all the API Routes for the application

* "startup" for preparing an app for work

* "utils" for common and specific operations or actions which different controllers need. Because, otherwise controllers would be too big.