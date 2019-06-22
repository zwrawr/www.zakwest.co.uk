import App from '../../src/components/app.js';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Test of the Index route', () => {

	test('Index mounts', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();
	});

	test('Index has Header and Footer', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();

		expect(context.find('#app').find('Header').exists()).toBeTruthy();
		expect(context.find('#app').find('Footer').exists()).toBeTruthy();
	});

	test('Index has Router with three routes', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();

		expect(context.find('#app').childAt(1).children().length).toBe(3);

	});

	test('Index has About route', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();

		expect(context.find('#app').childAt(1).find('About').exists()).toBeTruthy();
		expect(context.find('#app').childAt(1).find('About').attr('path')).toBe('/about/');

	});

	test('Index has Home route', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();

		expect(context.find('#app').childAt(1).find('Home').exists()).toBeTruthy();
		expect(context.find('#app').childAt(1).find('Home').attr('path')).toBe('/');

	});

	test('Index has FileBrowser route', () => {
		const context = shallow(<App />);

		expect(context.find('#app').exists()).toBeTruthy();

		expect(context.find('#app').childAt(1).find('FileBrowser').exists()).toBeTruthy();
		expect(context.find('#app').childAt(1).find('FileBrowser').attr('path')).toBe('/files/');

	});

});