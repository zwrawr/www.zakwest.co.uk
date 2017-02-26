// import file system
var fs = require('fs');

var updatetimeinms = 1000*60*2; // 2 mins
var loadedJson = null;

function getJson(path){

    // make sure our internal storage exists
    if(!loadedJson)
    {
        console.log("Creating loaded json cache!");
        loadedJson = {};
    }

    // if we haven't loaded this file already or its an old version then load it now.
    if(!loadedJson[path] || (loadedJson[path]["timestamp"] > new Date(Date.now() - updatetimeinms)))
    {
        if (!loadedJson[path]){
            console.log("Loading json file " + path );
        }
        else if (loadedJson[path]["timestamp"] > new Date(Date.now() - updatetimeinms))
        {
            console.log("Reloading json file " + path + "becuase it was too old");
        }

        loadedJson[path] = {
            "data" : JSON.parse(fs.readFileSync(path, 'utf8')),
            "timestamp" : new Date()
        };
    }

    return loadedJson[path]["data"];
};

exports.getJson = getJson;
