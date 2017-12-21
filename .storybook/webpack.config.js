// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
var path = require('path');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    // Fix in order to get the build step to work. The used UglifyJS version doesn't support ES6 yet.
    if (env === 'PRODUCTION') {
        baseConfig.plugins.pop();
    }

    // Extend it as you need.
    // For example, add typescript loader:
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.alias['Assets'] = path.resolve(__dirname, '../src/assets')

    return config;
};