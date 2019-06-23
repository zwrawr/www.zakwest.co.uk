import LazyImg from '../../src/components/lazyimg';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, mount } from 'enzyme';

const props = {
	src: 'file.xyz',
	alt: 'alt is this'
};

describe('Initial Test of the LazyImg', () => {

	test('LazyImg has spinner', () => {

		const context = mount(<LazyImg {...props} />);

		expect(context.find('.imagecontainer').exists()).toBeTruthy();

		expect(context.find('.spinner').exists()).toBeTruthy();
	});

	test('LazyImg has img', () => {

		const context = shallow(<LazyImg {...props} />);

		expect(context.find('.imagecontainer').exists()).toBeTruthy();

		expect(context.find('img').exists()).toBeTruthy();
		expect(context.find('img').prop('src')).toBe(context.state('src'));
	});


	//TODO: mutate the state
});
