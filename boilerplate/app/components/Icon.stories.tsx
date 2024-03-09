import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconTypes, iconRegistry } from './Icon';
import { Text } from './Text';
import { View } from 'react-native';
import { colors, spacing } from '../theme';
import React from "react"

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconRegistry) as IconTypes[],
    },
    color: { control: 'color' },
    size: { control: 'number' },
    onPress: { action: 'pressed' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'ladybug',
    color: colors.tint,
    size: 35,
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    color: colors.palette.angry500,
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    size: 50,
  },
};

export const CustomStyle: Story = {
  args: {
    ...Default.args,
    style: {
      tintColor: colors.palette.neutral100,
    },
    containerStyle: {
      padding: spacing.md,
      backgroundColor: colors.palette.angry500,
    },
  },
};

export const AllIcons: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {(Object.keys(iconRegistry) as IconTypes[]).map((icon) => (
        <View key={icon} style={{ width: '33.333%', alignItems: 'center', paddingVertical: spacing.xs }}>
          <Icon icon={icon} color={colors.tint} size={35} />
          <Text size="xs" style={{ marginTop: spacing.xxs, color: colors.textDim }}>
            {icon}
          </Text>
        </View>
      ))}
    </View>
  ),
};
