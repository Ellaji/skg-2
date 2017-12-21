var path = require('path');

exports.modifyWebpackConfig = ({config, stage}) => {
    if (stage === 'build-javascript' || stage === 'develop') {
      config.loader('typescript', {
        test: /\.(ts|tsx)$/,
        loaders: [
          'awesome-typescript-loader'
        ]
      });

      // config.loader('js', {
      //   include: '/node_modules/react-animate-height'
      // });
    }
    
    config.merge({ 
      resolve: { 
        alias: { 
          Assets: path.resolve(__dirname, './src/assets')
        }
      }
    })
  };