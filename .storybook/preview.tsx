import React from 'react';
import { StoreContextProvider } from '../src/store/useCreateStore';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <StoreContextProvider>
        <Story />
      </StoreContextProvider>
    )
  ]
};

export default preview;
