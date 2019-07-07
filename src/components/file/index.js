import { h, Component } from 'preact';

import style from './style';

const iconBase = '/public/img/icons/files/';
const iconSuffix = '.svg';

export default class File extends Component {

	loadFailed(err) {
		console.warn('failed to load icon ' + this.state.src + ' defaulting back to file icon');
		this.setState({ src: iconBase + 'file' + iconSuffix });
	}

	constructor(props){
		super(props);

		if (!props.type) {
			props.type = 'file';
		}

		this.state = {
			src: iconBase + props.type + iconSuffix
		};

		this.loadFailed = this.loadFailed.bind(this);
	}

	render( { name, path, type, modtime }, { src } ) {

		return (
			<div class={style.file}>
				<a href={path} target="_blank" rel="noopener noreferrer">
					<img src={src} onerror={this.loadFailed} />
					<div>
						<h4>{name}</h4>
						<p>{path}</p>
						<p>modtime : {modtime}	type : {type}</p>
					</div>
				</a>
			</div>
		);
	}
}
