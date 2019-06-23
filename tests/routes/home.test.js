import Home from '../../src/routes/home';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

const props = {
	path: '/home/'
};

describe('Test of the Home route', () => {

	test('Home mounts', () => {
		const context = shallow(<Home {...props} />);

		expect(context.find('.home').exists()).toBeTruthy();
	});

	test('Home has LinkArray', () => {
		const context = shallow(<Home {...props} />);

		expect(context.find('.home').find('LinkArray').exists()).toBeTruthy();
		expect(context.find('.home').find('LinkArray').prop('links')).toBe('/public/data/links.json');
	});


});