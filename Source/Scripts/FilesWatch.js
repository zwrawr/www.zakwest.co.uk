var fs = require('fs');
var util = require('util');

// Constants
function get_ROOT_DIR_PATH() { return "./Built/Public/files"; }
function get_FILES_JSON_PATH() { return './Built/Data/files.json'; }

function registerWatch(){

    console.log(get_ROOT_DIR_PATH());
    console.log(get_FILES_JSON_PATH());


    fs.watch(get_ROOT_DIR_PATH(), (event, filename) => {
        update();
    });
    update();
}

function update(){

    console.log("Update: Started!");
    writeDataBack( genData( "" ) );
}

function writeDataBack(newData){

    fs.writeFile(get_FILES_JSON_PATH(), JSON.stringify(newData, null, '\t'), (err) => {
        if (!err){
            console.log("Update: Saved!");
        } else {
            console.log("Update: could't be saved!");
        }
    });
}

function genData(startDir) {

    var children = getFiles(startDir);

    var val = {
        "is_folder":true,
        "is_file":false,
        "path":"",
        "name":"files",
        "children" : children
    }

    return val;
}

function getFiles(dir){
    var filesData = [];

    var files = fs.readdirSync(get_ROOT_DIR_PATH() + "/" + dir);
    for (var i in files){

        var data = null;
        var name = dir + '/' + files[i];

        if (fs.statSync(get_ROOT_DIR_PATH() + "/" + name).isDirectory()){

            var children = getFiles(name);

            data = {
                "name" : files[i],
                "path" : name,
                "is_folder" : true,
                "children" : children
            }

        } else {
            var stats = fs.statSync(get_ROOT_DIR_PATH() + "/" + name);
            var mod_time = new Date(util.inspect(stats.mtime));

            data = {
                "name" : files[i],
                "path" : name,
                "is_file" : true,
                "mod_time" : mod_time
            }

        }

        filesData.push(data);
    }

    return filesData;
}

exports.registerWatch = registerWatch;
