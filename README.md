# ww.zakwest.tech
[![Build Status](https://travis-ci.org/zwrawr/www.zakwest.tech.svg?branch=develop)](https://travis-ci.org/zwrawr/www.zakwest.tech)


This is the source for my website [www.zakwest.co.uk](https://www.zakwest.co.uk). It's built using Node.js on the server side and preact on the client side. jest and preact-render-spy are used for testing whilt eslint and stylelint are the linters.

![Image of the zakwest.co.uk site](https://zakwest.co.uk/files/Github/www.zakwest.tech/www.zakwest.tech.png)

## Development CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run tests with jest and preact-render-spy
npm run test

# run eslint and stylelint
npm run lint
```


## Building and Running the pseudo Production enviroment
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

