import About from '../../src/routes/about';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

const props = {
	path: '/about/'
};

describe('Test of the About route', () => {

	test('About mounts', () => {
		const context = shallow(<About {...props} />);

		expect(context.find('.page').exists()).toBeTruthy();
	});

	test('About has two sections', () => {
		const context = shallow(<About {...props} />);

		expect(context.find('.page').exists()).toBeTruthy();

		expect(context.find('.page').find('.about').length).toEqual(2);

	});

	test('About first section is About', () => {
		const context = shallow(<About {...props} />);

		expect(context.find('.page').find('.about').at(0).find('h2').text()).toBe('About');
		expect(context.find('.page').find('.about').at(0).prop('id')).toBe('About');

	});

	test('About second section is Contact', () => {
		const context = shallow(<About {...props} />);

		expect(context.find('.page').find('.about').at(1).find('h2').text()).toBe('Contact');
		expect(context.find('.page').find('.about').at(1).prop('id')).toBe('Contact');

	});

});