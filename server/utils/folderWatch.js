const fs = require('fs');
const util = require('util');
const mime = require('mime-types');

const updateTime = 60*60*1000; // hour

class FolderWatch {

	constructor(folder, jsonOut) {

		if (!folder || !jsonOut ){
			throw new Error('invalid constructor attributes');
		}

		this.jsonOut = jsonOut;
		this.folder = folder;

		// run update on file change
		fs.watch(this.folder, (event, filename) => {
			this.update();
		});

		// run update so often even if no events happened
		setInterval( () => {
			this.update();
		}, updateTime);
	}

	// Read the file tree and save as json
	update() {

		let data = {
			path: '',
			name: 'files',
			openbydefault: true
		};

		data.children = this.readFolder(this.folder);

		this.write(data);

	}

	// Write json to file
	write(data){

		fs.writeFile(
			this.jsonOut, JSON.stringify(data, null, '\t'), (err) => {
				if (!err){
					console.log('Update: Saved!');
				}
				else {
					console.log("Update: could't be saved!");
				}
			}
		);
	}

	// reads one folder and return it's json. recursive
	readFolder(folder) {
		const files = fs.readdirSync(folder, { withFileTypes: true });

		files.sort((a,b) => {
			if (a.isFile() && b.isDirectory()) return -1; // files come before directorys
			if (a.isDirectory() && b.isFile()) return 1; // directorys come after files
			return 0;
		});

		let json = [];

		for (let i in files) {
			const path = folder + '/' + files[i].name;

			let data = {
				name: files[i].name,
				path
			};

			if (files[i].isFile()) {
				data.modtime = new Date(util.inspect(fs.statSync(path).mtime));

				const type = mime.lookup(files[i].name);
				data.type = type ? type : null;
			}
			else if (files[i].isDirectory()) {
				data.children = this.readFolder(path);
			}
			else {
				console.warn('Unexpect item in folder. Not file or Folder');
			}

			json.push(data);
		}

		return json;
	}
}

module.exports = FolderWatch;
