
import { h, Component } from 'preact';
import style from './style';
import Spinner from '../spinner';

export default class LazyImg extends Component {

	state = {
		src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		dataSrc: false,
		loaded: false
	}

	inview(entries, observer){
		entries.forEach(entry => {
			if (entry.intersectionRatio){
				entry.target.addEventListener('load', this.loading.bind(this));
				entry.target.src = entry.target.getAttribute('data-src');
				observer.unobserve(entry.target);
			}
		});
	}

	loading(event){
		if (event.target.complete) this.setState({
			loaded: true
		});
	}

	componentWillMount(){
		this.setState({
			dataSrc: this.props.src,
			loaded: false
		});
	}

	componentDidMount(){
		// eslint-disable-next-line compat/compat
		const observer = new IntersectionObserver(this.inview.bind(this));

		observer.observe(this.element);
	}

	render(props,state) {
		return (
			<div className={style.imagecontainer + ' ' + props.style}>
				<Spinner visable={!state.loaded} />
				<img src={this.state.src} data-src={this.state.dataSrc} ref={element => this.element = element} alt={props.alt} />
			</div>
		);
	}
}