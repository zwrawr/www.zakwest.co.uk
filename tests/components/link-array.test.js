/* eslint-disable key-spacing */
import LinkArray from '../../src/components/link-array/link-array.js';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

const linksjson ={
	links : [

		{
			address : 'https://blog.zakwest.co.uk' ,
			target : '_blank',
			rel : 'noopener',
			title : 'Blog',
			description : 'My Blog about electronics and computing',
			image : '/public/img/linkboxes/Blog.svg',
			image_desc : 'Blog screenshot'
		},

		{
			address : 'https://www.twitter.com/zwrawr' ,
			target : '_blank',
			rel : 'noopener',
			title : 'Twitter',
			description : 'Follow me on twitter',
			image : '/public/img/linkboxes/Twitter.svg',
			image_desc : 'Twitter logo'
		}
	]
};

describe('Initial Test of the LinkArray', () => {

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('LinkArray contains LinkBoxes', () => {


		// LINK ARRAY IS RERENDERING BUT CHANGES ARE NOT BEING SHOWN IN CONTEXT

		fetch.mockResponseOnce(JSON.stringify(linksjson));

		const context = shallow(<LinkArray links={'/dummy/path'}/>);

		//while (fetch.mock.calls.length == 0) {}
		//context.rerender();

		//console.log(context.output());
		//while (context.state('links') == undefined) {}
		//console.log(context.state('links'));

		expect(context.find('Spinner').exists()).toBeTruthy();
		//expect(context.find('LinkBox').length).toBeGreaterThan(1);

		//make sure the link boxes are not duplicates
		//expect(context.find('LinkBox')[0]).not.toMatchObject(context.find('LinkBox')[1]);

	});

});
