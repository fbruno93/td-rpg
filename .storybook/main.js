const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    // '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    }
  ]
};
