# ZakWest.tech
This is the source for my website [www.zakwest.tech](https://www.zakwest.tech). It's built using Node,
Express, handlebars, markdown-it and sass.

![Image of the zakwest.tech site](https://www.zakwest.tech/files/Github/www.zakwest.tech/www.zakwest.tech.png)

## Building and Running
### Basic setup
These are the steps needed to install, build and start the express app on port 3000. They should be ran from within the projects root folder.
1. run ```npm install``` to install all the node dependicys
2. run ```npm build``` to build the node dependancys
3. run ```npm run build``` to build the project
4. run ```npm run start``` to start the project

5. copy the nginx config over ```cp path\to\www.zakwest.tech\config\www.zakwest.tech \etc\nginx\sites-avalible\```
6. copy the systemd file over ```cp path\to\www.zakwest.tech\config\www.zakwest.tech.service \etc\systemd\system\```
7. run ```sudo systemctl enable www.zakwest.tech.service```
8. reboot and pray

### Connecting to nginx and starting automaticaly on boot
The files within the [config](/config) directory give a template for nginx configuration as well as a configaration for systemd.

### Clean up
There is also a clean command ```npm run clean``` that will clean up any tmp folders as well as
any folders and files that are generated as part of the build process.


