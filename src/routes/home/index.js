import { h } from 'preact';
import style from './style';
import LinkArray from '../../components/link-array/link-array';

const links = '/public/data/links.json';

const Home = () => (
	<div class={style.home}>
		<LinkArray links={links} />
	</div>
);

export default Home;
