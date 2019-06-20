import { h, Component } from 'preact';
import style from './style';
import spinner from '../../assets/img/icons/spinner.svg';

export default class Spinner extends Component {

	render( { visable } ){
		if (visable===true) {
			return (
				<div className={style.spinner}>
					<img src={spinner} alt="loading spinner" />
				</div>
			);
		}
		return;
	}
}

