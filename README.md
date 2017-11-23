# c2c_assessment

**Challenge:**

- Duplicate facebook login page design


## How to run this web page

- clone repo
- Install node packages `npm init`
- Run script `npm start`

or

- Click here: [Temporary live version](https://www.michaeldonal.com/c2c/)

## Node packages used (for development only)

- [node-sass](https://www.npmjs.com/package/node-sass)
- [live-server](https://www.npmjs.com/package/live-server)

## Project struture

```
|-- css                                     # Compiled css from sass files
|     |-- style.css
|
|-- img                                     # Contain all the images used
|
|-- sass                            
|     |-- abstracts                 
|     |     |-- mixins.scss                 # Mixins for responsive design
|     |     |-- variable.scss               # Colors variables
|     |
|     |-- base
|     |     |-- base.scss                   # Reset/normalize
|     |     |-- typography.scss             # Typography rules
|     |     |-- utilities.scss              # Utils
|     |
|     |-- components
|     |     |-- dropdown.scss               # Style for the birthday date dropdown
|     |   
|     |-- layout
|     |     |-- content.scss                # Main content
|     |     |-- footer.scss                 # Footer
|     |     |-- header.scss                 # Header
|     | 
|     |-- main.scss                         # Primary sass file 
|
|--index.html                               # html file
|
|-index.js                                  # Script that toggle the logo/name
```