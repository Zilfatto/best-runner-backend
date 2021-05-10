# How to run the code

For this you need to have Node installed and run the following command - 'npm install'.
After that you need to run the next command, to compile TypeScript - 'tsc'.
Then run 'npm start'
And that's it, the server is running!

---

# Project structure:
* "controllers" for handling incoming request

* "middleware" is used to add some extra logic to requests

* "models" for describing entities structure and their validators

* "routes" maps different endpoints of certain entities of an app and controllers

* "startup" for preparing an app for work

* "utils" for common and specific operations or actions which different controllers need. Because, otherwise controllers would be too big.