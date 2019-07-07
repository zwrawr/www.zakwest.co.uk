import Spinner from '../../src/components/spinner';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

describe('Initial Test of the Spinner', () => {
	test('visible Spinner contains an image', () => {
		const context = shallow(<Spinner visable />);

		expect(context.find('img').exists()).toBeTruthy();
	});

	test('invisible Spinner contains nothing', () => {
		const context = shallow(<Spinner />);

		expect(context.exists()).toBeFalsy();
	});

	test('visible Spinner correctly updates on props change', () => {
		const context = shallow(<Spinner visable />);

		expect(context.find('img').exists()).toBeTruthy();

		context.setProps({ visable: undefined });

		expect(context.find('img').exists()).toBeFalsy();

	});
});
