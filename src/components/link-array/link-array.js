import { h, Component } from 'preact';
import style from './style';
import LinkBox from '../link-box/link-box';
import Spinner from '../../components/spinner';

export default class LinkArray extends Component {

	getLinks(src) {

		fetch(src)
			.then(res => res.json())
			.then((out) => {
				this.setState({ links: out.links });
			})
			.catch(err => { throw err; });

	}

	constructor(props) {
		super(props);
		if (typeof window !== 'undefined'){
			this.getLinks(props.links);
		}
	}

	render( props, state ) {
		let linkboxes = [];

		if (state.links !== undefined){
			state.links.forEach(n => {
				linkboxes.push(<LinkBox {...n} />);
			});
		}


		let tmp = (
			<div class={style.linkarray}>
				<Spinner visible={state.links !== undefined} />
				{linkboxes}
			</div>
		);

		return tmp;
	}

}