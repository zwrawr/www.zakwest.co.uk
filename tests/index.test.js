import App from '../src/index.js';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

describe('Test of the Index route', () => {

	test('Index mounts', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();
	});

});