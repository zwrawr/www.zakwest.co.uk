import Folder from '../../src/components/folder';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

const props = {
	name: 'folder_xyz'
};

describe('Initial Test of the Folder', () => {

	test('Folder has name and image', () => {

		const context = shallow(<Folder {...props} />);

		expect(context.find('.folder').exists()).toBeTruthy();

		expect(context.find('.closed').exists()).toBeTruthy();

		expect(context.find('.folder').find('h3').text()).toBe(props.name);
		expect(context.find('.folder').find('img').length).toBe(1);

	});


	test('Expanded Folder with openbydefault', () => {

		const context = shallow(<Folder {...props} openbydefault />);

		expect(context.find('.folder').exists()).toBeTruthy();

		expect(context.find('.opened').exists()).toBeTruthy();

	});


});
