import FileBrowser from '../../src/routes/filebrowser';
import { h } from 'preact';

import { shallow } from 'enzyme';

const props = {
	path: '/files/'
};

const filesjson = {
	path: '',
	name: 'files',
	openbydefault: true,
	children: [
		{
			name: 'test.txt',
			path: '/test.txt',
			type: 'text/plain',
			mod_time: '2019-04-21T21:58:53.475Z'
		},
		{
			name: 'Github',
			path: '/Github',
			children: [
				{
					name: 'Header.svg',
					path: '/Github/BrainFucker.NET/Header.svg',
					type: 'image/svg+xml',
					mod_time: '2017-03-22T22:27:25.855Z'
				}
			]
		}
	]
};


const delay = 50;

function slowResponse (data) {
	return new Promise((res) => {
		setTimeout(() => {
			res({ body: JSON.stringify(data) });
		}, delay);
	});
}


describe('Test of the FileBrowser route', () => {


	beforeEach(() => {
		fetch.resetMocks();
	});

	test('FileBrowser mounts', () => {
		fetch.mockResponseOnce(JSON.stringify(filesjson));

		const context = shallow(<FileBrowser {...props} />);

		expect(context.find('.filebrowser').exists()).toBeTruthy();
	});

	test('FileBrowser has Title and Spinner', () => {
		// This is should be json, but this intentionaly causes an error
		fetch.mockResponseOnce('{}');

		const context = shallow(<FileBrowser {...props} />);

		expect(context.find('.filebrowser').exists()).toBeTruthy();

		expect(context.find('.filebrowser').find('h2').text()).toEqual('FileBrowser');

		expect(context.find('.filebrowser').find('Spinner').exists()).toBeTruthy();

		expect(context.find('.filebrowser').find('Spinner').at(0).prop('visible')).toBeTruthy();

	});

	test('FileBrowser updates when json has arrived', (done) => {

		// sends filesjson to the requester after a delay of 100ms
		fetch.mockResponse(() => slowResponse(filesjson));

		const context = shallow(<FileBrowser {...props} />);

		expect(context.find('.filebrowser').exists()).toBeTruthy();

		expect(context.find('.filebrowser').find('Spinner').at(0).prop('visible')).toBeTruthy();

		// wait 110ms before checking the status of the spinner
		setTimeout(() => {
			expect(context.find('.filebrowser').find('Spinner').at(0).prop('visible')).toBeFalsy();
			done();
		}, delay * 1.1);

	});

	test('FileBrowser gens correct folders and files', (done) => {

		fetch.mockResponseOnce(JSON.stringify(filesjson));

		const context = shallow(<FileBrowser {...props} />);

		expect(context.find('.filebrowser').exists()).toBeTruthy();

		setTimeout(() => {
			//context.rerender();
			expect(context.find('.filebrowser').find('Folder').exists()).toBeTruthy();

			expect(context.find('.filebrowser').find('Folder').length).toBe(2);
			expect(context.find('.filebrowser').find('Folder').at(0).prop('name')).toBe(filesjson.name);
			expect(context.find('.filebrowser').find('Folder').at(1).prop('name')).toBe(filesjson.children[1].name);

			expect(context.find('.filebrowser').find('File').length).toBe(1);
			expect(context.find('.filebrowser').find('File').at(0).prop('name')).toBe(filesjson.children[0].name);

			done();
		}, delay * 1.1);


	});

});
