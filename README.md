# zakwest.tech
This is the source for my website [www.zakwest.tech](https://www.zakwest.tech). It's built using Node,
Express, handlebars, markdown-it and sass.

![Image of the zakwest.tech site](https://www.zakwest.tech/files/Github/www.zakwest.tech/www.zakwest.tech.png)

## Building and Running
### Setup
Head over to the [zakwest.tech](https://github.com/zwrawr/zakwest.tech) repo to find out how to use vagrant to host this project.
The provisioning script deals with all the installation and setup and make the site avaliable at www.dev.zakwest.tech .

### Rebuild
To rebuild the site do the following
```
    cd /var/www/www.zakwest.tech/
    npm run build
```

### Restart
If changes have been made to the site, then you'll have to restart the node app.
```sudo service restart www.zakwest.tech``` 
If changes have been made to the nginx config, then you'll have to restart the node app.
```sudo service restart nginx``` 

### Clean
To remove all the built files do
```
    cd /var/www/www.zakwest.tech/
    npm run clean    
```

