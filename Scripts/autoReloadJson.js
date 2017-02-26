// import file system
var fs = require('fs');

var updatetimeinms = 1000*60*5; // 2 mins
var loadedJson = {};

function getJson(path){

    // if we haven't loaded this file already or its an old version then load it now.
    if (!loadedJson[path]){
        console.log("Loading json file " + path );
        loadedJson[path] = {
            "data" : JSON.parse(fs.readFileSync(path, 'utf8')),
            "timestamp" : Date.now()
        };
    }
    else if (loadedJson[path]["timestamp"] < Date.now() - updatetimeinms)
    {
        console.log("Reloading json file " + path + " becuase it was too old");
        loadedJson[path] = {
            "data" : JSON.parse(fs.readFileSync(path, 'utf8')),
            "timestamp" : Date.now()
        };
    }

    return loadedJson[path]["data"];
};

exports.getJson = getJson;
