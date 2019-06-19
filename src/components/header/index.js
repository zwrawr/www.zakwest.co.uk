import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
//import LazyImg from '../lazyimg';

const base = '/public/img/header/header_';
const srcset =
`${base}720w.png 720w,
${base}1080w.png 480w,
${base}1500w.png 1500w,
${base}2000w.png 2000w,`;

const sizes = '100vw';

const Header = () => (
	<header class={style.header}>
		<div class={style.top}>
			<img style={style.headerimgcontainer} src={base+'1080w.png'} srcset={srcset} sizes={sizes} alt="blue-green triangle background" />
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
