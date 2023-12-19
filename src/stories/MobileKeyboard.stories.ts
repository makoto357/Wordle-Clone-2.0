import type { Meta, StoryObj } from '@storybook/react';
import MobileKeyboard from '../components/MobileKeyboard';

const meta = {
  title: 'Example/MobileKeyboard',
  component: MobileKeyboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof MobileKeyboard>;

export default meta;
type Story = StoryObj<typeof MobileKeyboard>;

export const Basic: Story = {};
