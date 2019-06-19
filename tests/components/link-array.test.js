import LinkArray from '../../src/components/link-array/link-array.js';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

const props ={
	links: [
		{
			address: 'https://blog.zakwest.co.uk' ,
			target: '_blank',
			rel: 'noopener',
			title: 'Blog',
			description: 'My Blog about electronics and computing',
			image: '/assets/img/linkboxes/Blog.svg',
			image_desc: 'Blog screenshot'
		},
		{
			address: 'https://zakwest.co.uk' ,
			target: '_blank',
			rel: 'noopener',
			title: 'Zak West',
			description: 'My Site about electronics and computing',
			image: '/assets/img/linkboxes/Blog.svg',
			image_desc: 'Blog screenshot'
		}
	]
};

describe('Initial Test of the LinkArray', () => {
	test('LinkArray contains LinkBoxes', () => {

		const context = shallow(<LinkArray {...props} />);

		expect(context.find('LinkBox').exists()).toBeTruthy();
		expect(context.find('LinkBox').length).toBeGreaterThan(1);

		//make sure the link boxes are not duplicates
		expect(context.find('LinkBox')[0]).not.toMatchObject(context.find('LinkBox')[1]);

	});

});
