import Folder from '../../src/components/folder';
import File from '../../src/components/file';
import { h } from 'preact';


// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'enzyme';

const props = {
	name: 'folder_xyz'
};

describe('Initial Test of the Folder', () => {

	test('Folder mounts', () => {
		const context = shallow(<Folder {...props} />);

		expect(context.find('.folder').exists()).toBeTruthy();
	});

	test('Folder has name', () => {

		const context = shallow(<Folder {...props} />);

		expect(context.find('.folder').exists()).toBeTruthy();

		expect(context.find('.closed').exists()).toBeTruthy();
		expect(context.find('.folder').find('h3').text()).toBe(props.name);

	});

	test('Folder has image', () => {

		const context = shallow(<Folder {...props} />);

		expect(context.find('.folder').exists()).toBeTruthy();

		expect(context.find('.folder').find('img').length).toBe(1);
		expect(context.find('.folder').find('img').prop('src')).toBe('/public/img/icons/files/folder-closed.svg');

	});

	test('Folder mounts with child', () => {
		const context = shallow(
			<Folder {...props} >
				<File />
			</Folder>
		);

		expect(context.find('.folder').exists()).toBeTruthy();

		expect(context.find('.closed').exists()).toBeTruthy();
		expect(context.find('.folder').find('File').exists()).toBeFalsy();

	});

	test('Expanded Folder with openbydefault', () => {

		const context = shallow(
			<Folder openbydefault {...props} >
				<File />
			</Folder>
		);
		expect(context.find('.folder').exists()).toBeTruthy();

		expect(context.find('.opened').exists()).toBeTruthy();
		expect(context.find('.folder').find('File').exists()).toBeTruthy();


	});

	test('Click on img toggles expanded', () => {
		const context = shallow(
			<Folder {...props} >
				<File />
			</Folder>
		);

		expect(context.find('.folder').exists()).toBeTruthy();
		expect(context.find('.folder').find('File').exists()).toBeFalsy();

		context.find('img').simulate('click', {});
		expect(context.find('.folder').find('File').exists()).toBeTruthy();

		context.find('img').simulate('click', {});
		expect(context.find('.folder').find('File').exists()).toBeFalsy();

	});

	test('Click on h3 toggles expanded', () => {
		const context = shallow(
			<Folder {...props} >
				<File />
			</Folder>
		);

		expect(context.find('.folder').exists()).toBeTruthy();
		expect(context.find('.folder').find('File').exists()).toBeFalsy();

		context.find('h3').simulate('click', {});
		expect(context.find('.folder').find('File').exists()).toBeTruthy();

		context.find('h3').simulate('click', {});
		expect(context.find('.folder').find('File').exists()).toBeFalsy();

	});


});
