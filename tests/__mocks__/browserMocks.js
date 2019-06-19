
const storageMock = () => {
	let storage = {};
	return {
		getItem: key => key in storage ? storage[key] : null,
		setItem: (key, value) => storage[key] = value || '',
		removeItem: key => delete storage[key],
		clear: () => storage = {}
	};
};

class intersectionObserverMock{
	constructor(obj){
		this.obj = obj;
	}

	observe(element) {
		return null;
	}

	unobserve(element) {
		return null;
	}
}

Object.defineProperty(window, 'localStorage', { value: storageMock() });
Object.defineProperty(window, 'sessionStorage', { value: storageMock() });
+Object.defineProperty(window, 'IntersectionObserver', { value: intersectionObserverMock });
Object.defineProperty(window, 'getComputedStyle', {
	value: () => ['-webkit-appearance']
});