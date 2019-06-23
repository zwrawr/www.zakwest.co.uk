import File from '../../src/components/file';
import { h } from 'preact';

// See: https://github.com/mzgoddard/preact-render-spy
//import { shallow } from 'preact-render-spy';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter() });

const props = {
	name: 'file_xyz',
	path: 'path/is/this',
	modtime: '2018-04-28 10:42:53 +UTC2',
	type: 'text/css'
};


describe('Initial Test of the File', () => {

	test('File mounts', () => {
		const context = shallow(<File {...props} />);

		expect(context.find('.file').exists()).toBeTruthy();
	});

	test('File has name and description', () => {

		const context = shallow(<File {...props} />);

		expect(context.find('.file').exists()).toBeTruthy();

		expect(context.find('.file').find('h4').text()).toBe(props.name);
		expect(context.find('.file').find('p').first().text()).toBe('/public/files/' + props.path);
		expect(context.find('.file').find('p').last().text()).toBe('modtime : ' + props.modtime + ' type : ' + props.type);

	});


	test('File has image', () => {

		const context = shallow(<File {...props} />);

		expect(context.find('.file').exists()).toBeTruthy();
		expect(context.find('.file').find('img').length).toBe(1);
		expect(context.find('.file').find('img').prop('src')).toBe('/public/img/icons/files/' + props.type + '.svg');

	});

	test('File deals with unknown type', (done) => {

		const context = mount(<File {...props} />);

		expect(context.find('.file').exists()).toBeTruthy();
		expect(context.find('.file').find('img').length).toBe(1);
		expect(context.find('.file').find('img').prop('src')).toBe('/public/img/icons/files/' + props.type + '.svg');


		//context.find('.file').find('img').at(0).simulate('error');
		context.find('.file').find('img').at(0).getElement().;

		context.update();
		expect(context.find('.file').find('img').prop('src')).toBe('/public/img/icons/files/file.svg');

	});

});
