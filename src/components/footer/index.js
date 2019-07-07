import { h } from 'preact';
import style from './style';

import cc from '../../assets/img/icons/creativecommons/cc.svg';
import by from '../../assets/img/icons/creativecommons/by.svg';
//import sa from '../../assets/img/icons/creativecommons/sa.svg';
import github from '../../assets/img/icons/icomoon/github.svg';

const zw = '/public/img/zw.svg';

const Footer = () => (
	<footer class={style.footer + ' ' + style.cf}>
		<div class={style.left}>
			<a href="/#app">
				<img src={zw} alt="Zak West's Z.W. logo" />
			</a>
			<a href="https://creativecommons.org/licenses/by/3.0/" >
				<img class={style.small} src={cc} alt="crative commons mark" />
				<img class={style.small} src={by} alt="by attribution" />
			</a>
		</div>
		<div class={style.right}>
			<a href="https://github.com/zwrawr/www.zakwest.co.uk">
				<img src={github} alt="Source on Github" />
			</a>
		</div>
	</footer>
);

export default Footer;
