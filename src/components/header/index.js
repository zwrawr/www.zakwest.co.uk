import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
//import LazyImg from '../lazyimg';

const img = '/public/img/header/header.svg';

const Header = () => (
	<header class={style.header}>
		<div class={style.top}>
			<div style={style.imgcontainer}>
				<img src={img} alt="blue-green triangle background" />
			</div>
			<Link href="/" class={style.text}>
				<h1>Zak West</h1>
				<h5>An Electronics and Computer Engineering student at the University of York.</h5>
			</Link>
		</div>

		<nav>
			<Link activeClassName={style.active} href="/"><h4>Home</h4></Link>
			<Link activeClassName={style.active} href="/about"><h4>About</h4></Link>
			<Link activeClassName={style.active} href="/files"><h4>Files</h4></Link>
		</nav>
	</header>
);

export default Header;
