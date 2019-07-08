import { h } from 'preact';

import style from './style';

import LazyImage from '../../components/lazyimg';

const zw = '/public/img/linkboxes/Blog.svg';
const headshot = '/public/img/headshot.jpg';

const abouttext = [
	<p>Hi, my name is Zak West and I’m a student at the University of York.</p>,
	<p>I’m currently in my forth year of a Electronics and Computing Engineering Masters. So far I’m really enjoying the course.</p>,
	<p>I decided to create this website so that I can have a place to share the projects that I’ve been working on, and the ideas that have been on my mind. I’ll be writing blog posts about university assessments, open source projects I’ve contributing, As well as stuff like Ludum Dare. This site also serves as a place I can host downloads for these projects.</p>
];

const contacttext = [
	<p>I’m <a href="https://twitter.com/zwrawr">@zwrawr</a> over on Twitter</p>,
	<p>I’m <a href="https://github.com/zwrawr">@zwrawr</a> over on Github</p>,
	<p>I have a <a href="https://linkedin.com/in/zakrawest">linkedin</a> account.</p>,
	<p>You can email me at <a href="mailto:zwrawr@gmail.com?subject=Hello%20!%20:%20From%20zakwest.co.uk&amp;body=Hey%20Zak,%0A%20%20%20%20%20%20%20%20I'm%20contacting%20to%20you%20to%20.%20.%20."> zakr.a.west@gmail.com </a> or <a href="mailto:zwrawr@gmail.com?subject=Hello%20!%20:%20From%20zakwest.co.uk&amp;body=Hey%20Zak,%0A%20%20%20%20%20%20%20%20I'm%20contacting%20to%20you%20to%20.%20.%20."> zwrawr@gmail.com </a></p>
];

const About = () => (
	<div class={style.page}>
		<div id="About" class={style.about + ' ' + style.cf}>
			<h2>About<hr /></h2>
			<div class={style.left + ' ' + style.small}>
				<LazyImage src={headshot} alt="Zak West's Headshot" />
			</div>
			<div class={style.right + ' ' + style.big}>
				{abouttext}
			</div>
		</div>
		<div id="Contact" class={style.about + ' ' + style.cf}>
			<h2>Contact<hr /></h2>
			<div class={style.right + ' ' + style.small}>
				<img src={zw} alt="Zak West's Z.W. logo" />
			</div>
			<div class={style.left + ' ' + style.big}>
				<ul>
					{contacttext.map((t) => (<li>{t}</li>))}
				</ul>
			</div>
		</div>
	</div>
);

export default About;
