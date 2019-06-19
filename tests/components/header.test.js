import Header from '../../src/components/header';
import { h } from 'preact';
import { Link } from 'preact-router/match';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
	test('Header renders 4 nav items', () => {
		const context = shallow(<Header />);

		expect(context.find('nav').exists()).toBeTruthy();
		expect(context.find(<Link />).length).toBe(4);
	});

	test('Header text is Zak West', () => {
		const context = shallow(<Header />);

		expect(context.find('h1').text()).toBe('Zak West');
		expect(context.find('h5').text()).toBe('An Electronics and Computer Engineering student at the University of York.');
	});

	test('There is a lazy image', () => {
		const context = shallow(<Header />);

		expect(context.find('LazyImg').exists()).toBeTruthy();

	});
});
