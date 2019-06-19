# ww.zakwest.tech
This is the source for my website [www.zakwest.tech](https://www.zakwest.tech). It's built using Node.js, Express.js, handlebars.js and sass.

![Image of the zakwest.tech site](https://www.zakwest.tech/files/Github/www.zakwest.tech/www.zakwest.tech.png)

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


## Building and Running
### Setup
Head over to the [dev.zakwest.tech](https://github.com/zwrawr/dev.zakwest.tech) repo to find out how to use vagrant to host this project.
The provisioning script deals with all the installation and setup and make the site avaliable at www.dev.zakwest.tech .

### Rebuild
To rebuild the site via npm run the following commands.
```bash
    cd /var/www/www.zakwest.tech/
    npm run build
```

### Restart
If changes have been made to the site, then you'll have to restart the node app.
```bash
	sudo service www.zakwest.tech restart
```
If changes have been made to the nginx config, then you'll have to restart nginx.
```bash
	sudo restart nginx service
```

### Clean
To remove all the built files do
```bash
    cd /var/www/www.zakwest.tech/
    npm run clean
```

