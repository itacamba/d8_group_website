# Project Dependencies
- Sass (node-sass)
    1. Extensions: 'Live Sass Compiler', 'Sass'
    2. Command: npm i node-sass --save-dev
- React Router Dom
    1. Command: npm i react-router-dom --save-dev

# How to reuse components
1. Universal Styles are located in the 'Styles' folder, the index.scss and variables.scss files contain the necessary styles to get started.
2. The 'Styles' folder must be placed inside the 'src' folder
3. Create a 'Components' folder in the 'src' folder to hold the 'Navbar' folder
4. Create a 'Images' folder in the 'src' folder and add your logo.png 
5. Copy and paste the 'Navbar' folder in the 'Components' folder.
6. Copy the App.js that contains the router. 

# How to make changes and re-deploy to Godaddy
1. Make changes and push to github
2. Make sure to delete old 'build' file
3. Create a new build file by running 'npm run build'
4. In CPanel, the only files not to delete are the following:
    - .htaccess
    - 404.shtml
4. Use that build folder to upload to Godaddy's > CPanel > public_html folder.