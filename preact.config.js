let SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

export default (config, env, _helpers) => {

	if (!env.production) {

		config.devServer.proxy = [
			{
				path: '/public/**',
				target: 'http://localhost:8080/assets/'
				// ...any other stuff...
			}
		];
	}
};
