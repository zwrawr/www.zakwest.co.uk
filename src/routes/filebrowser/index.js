import { h, Component } from 'preact';

import style from './style';

import Folder from '../../components/folder';
import File from '../../components/file';
import Spinner from '../../components/spinner';

const filesUrl = '/public/data/files.json';


export default class FileBrowser extends Component {

	parseFolder(data, f) {

		/* There are three possible states
		*      # it is a folder
		*	   # it is a file
		*	   # there is no node
		*/


		if (data===undefined){
			console.error('data is undefined',data);
			return;
		}

		if (data.children === undefined) {
			// this is a file
			f.push(<File {...data} />);
		}
		else {
			//this is a folder

			// parse all the children
			let tmp = [];
			data.children.forEach( (child) => {
				this.parseFolder(child,tmp);
			});

			// create a folder with the children in it
			f.push(
				<Folder {...data} >
					{tmp}
				</Folder>
			);
		}
	}


	getFiles(src) {

		fetch(src)
			.then(res => res.json())
			.then((out) => {
				let t = [];
				// Findout whats changing this, so we don't need to clone it
				this.parseFolder(out,t);

				this.setState({ tree: t });
			})
			.catch(err => { throw err; });

	}

	constructor(props) {
		super(props);

		if (typeof window !== 'undefined'){
			this.getFiles(filesUrl);
		}


	}


	render(_props,state) {

		return (
			<div class={style.filebrowser + ' ' + style.page}>
				<h1>FileBrowser</h1>
				<hr />
				<Spinner visible={state.tree !== undefined} />

				{(state.tree === undefined) ? null : state.tree}
			</div>
		);
	}
}
