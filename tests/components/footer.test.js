import Footer from '../../src/components/footer';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Footer', () => {
	test('Footer contains correct link', () => {

		const context = shallow(<Footer />);

		expect(context.find('footer').exists()).toBeTruthy();

		expect(context.find('footer').find('.left').exists()).toBeTruthy();
		expect(context.find('footer').find('.left').find('a').length).toBe(2);
		expect(context.find('footer').find('.left').find('img').length).toBe(3);


		expect(context.find('footer').find('.right').exists()).toBeTruthy();
		expect(context.find('footer').find('.right').find('a').length).toBe(1);
		expect(context.find('footer').find('.right').find('img').length).toBe(1);

	});

});
