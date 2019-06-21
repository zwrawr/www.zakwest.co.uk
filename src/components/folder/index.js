import { h, Component } from 'preact';

import style from './style';


const iconPrefix = '/public/img/icons/files/folder-';
const iconSuffix = '.svg';

export default class Folder extends Component {

	Open = e => {
		this.setState({ expanded: true });
	}

	Close = e => {
		this.setState({ expanded: false });
	}

	constructor (props) {
		super();

		let expanded = (props.openbydefault === undefined) ? false : props.openbydefault;

		this.state = {
			expanded
		};
	}

	render(props, { expanded }){

		const onclick = (expanded) ? this.Close : this.Open;
		let url = iconPrefix + ((expanded)?'open':'closed') + iconSuffix;
		let alt = ((expanded)?'open':'closed') + 'folder icon';

		return (
			<div class={style.folder + ' ' + ((expanded) ? style.opened : style.closed)} >
				<img onClick={onclick} src={url} alt={alt} />
				<h3 onClick={onclick}>{props.name}</h3>
				{(expanded) ? props.children : null}
			</div>
		);

	}
}

