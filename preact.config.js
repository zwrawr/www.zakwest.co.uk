export default (config, env, _helpers) => {

	if (env.production) {
	}
	else {
		config.devServer.proxy = [
			{
				path: '/public/**',
				target: 'http://localhost:8080/assets/'
				// ...any other stuff...
			}
		];
	}
};
