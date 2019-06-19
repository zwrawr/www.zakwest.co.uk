import style from './style';
import { h } from 'preact';

const LinkBox = ( props ) => (

	<div class={style.linkbox}>
		<a href={props.address} target={props.target} rel={props.rel}>
			<img class={style.links_image} src={props.image} alt={props.image_desc} />
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	</div>
);

export default LinkBox;