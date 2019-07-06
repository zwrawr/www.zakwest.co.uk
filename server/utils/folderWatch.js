const fs = require('fs');
const util = require('util');
const mime = require('mime-types');

const updateTime = 60*60*1000;

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

		// run update so often even if n events happened
		setInterval( () => {
			this.update();
		}, updateTime);
	}

	update() {

		let data = {
			path: '',
			name: 'files',
			openbydefault: true
		};

		data.children = this.readFolder(this.folder);

		console.log(data);
		this.write(data);

	}

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

	readFolder(folder) {
		const files = fs.readdirSync(folder, { withFileTypes: true });

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
				console.log(type);
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
