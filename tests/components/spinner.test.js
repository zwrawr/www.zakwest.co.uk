import Spinner from '../../src/components/spinner';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Spinner', () => {
	test('visible Spinner contains an image', () => {
		const context = shallow(<Spinner visable />);

		expect(context.find('img').exists()).toBeTruthy();
	});

	test('invisible Spinner contains nothing', () => {
		const context = shallow(<Spinner />);

		expect(context.output()).toBeFalsy();
	});

	test('visible Spinner correctly updates on props change', () => {
		const context = shallow(<Spinner visable />);

		expect(context.find('img').exists()).toBeTruthy();

		context.render(<Spinner />);
		expect(context.find('img').exists()).toBeFalsy();

	});
});
