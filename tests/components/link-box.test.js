import LinkBox from '../../src/components/link-box/link-box.js';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

const props = {
	address: 'https://blog.zakwest.co.uk' ,
	target: '_blank',
	rel: 'noopener',
	title: 'Blog',
	description: 'My Blog about electronics and computing',
	image: '/assets/img/linkboxes/Blog.svg',
	image_desc: 'Blog screenshot'
};

describe('Initial Test of the LinkBox', () => {
	test('LinkBox contains correct link', () => {

		const context = shallow(<LinkBox {...props} />);

		expect(context.find('a').exists()).toBeTruthy();
		expect(context.find('a').prop('href')).toBe(props.address);
		expect(context.find('a').prop('target')).toBe(props.target);
		expect(context.find('a').prop('rel')).toBe(props.rel);

	});

	test('LinkBox contains correct Image', () => {

		const context = shallow(<LinkBox {...props} />);

		expect(context.find('img').exists()).toBeTruthy();
		expect(context.find('img').prop('src')).toBe(props.image);
		expect(context.find('img').prop('alt')).toBe(props.image_desc);

	});

	test('LinkBox contains correct text', () => {

		const context = shallow(<LinkBox {...props} />);

		expect(context.find('h2').exists()).toBeTruthy();
		expect(context.find('h2').text()).toBe(props.title);

		expect(context.find('p').exists()).toBeTruthy();
		expect(context.find('p').text()).toBe(props.description);
	});


});
