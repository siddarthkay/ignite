import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../app/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-ondevice-controls'],
};

export default main;