import File from '../../src/components/file';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

const props = {
	name: 'file_xyz',
	path: 'path/is/this',
	modtime: '2018-04-28 10:42:53 +UTC2',
	type: 'text/css'
};

describe('Initial Test of the File', () => {

	test('File has name and description', () => {

		const context = shallow(<File {...props} />);

		expect(context.find('.file').exists()).toBeTruthy();

		expect(context.find('.file').find('h4').text()).toBe(props.name);
		expect(context.find('.file').find('p').first().text()).toBe(props.path);
		expect(context.find('.file').find('p').last().text()).toBe('modtime : ' + props.modtime);

	});


	test('File has image', () => {

		const context = shallow(<File {...props} />);

		expect(context.find('.file').exists()).toBeTruthy();
		expect(context.find('.file').find('img').length).toBe(1);

	});

});
