let SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

export default (config, env, _helpers) => {


	if (env.production) {
		const swPlugin = config.plugins.find(
			p => p instanceof SWPrecacheWebpackPlugin,
		  );

		  if (swPlugin) {
			swPlugin.options.staticFileGlobsIgnorePatterns.push(/public.*$/);
		  }
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
