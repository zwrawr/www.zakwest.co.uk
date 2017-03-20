# ZakWest.tech
This is the source for my website [www.zakwest.tech](https://www.zakwest.tech). It's built using Node,
Express, handlebars, markdown-it and sass.

## Building and Running
### Basic setup
These step will install build and start the express app on port 3000. They should be ran from within the projects root folder.
1. run ```npm install``` to install all the node dependicys
2. run ```npm build``` to build the node dependancys
3. run ```npm run build``` to build the project
4. run ```npm run start``` to start the project

### Connecting to nginx and starting automaticaly on boot
The files within the [config](/config) directory give a template for nginx configuration as well as a configaration for systemd.

### Clean up
There is also a clean command ```npm run clean``` that will clean up any tmp folders as well as
any folders and files that are generated as part of the build process.


