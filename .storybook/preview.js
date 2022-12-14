import {
  addDecorator,
} from '@storybook/react'
import {
  ThemeProvider,
} from '@mui/material/styles'
import {
  theme,
} from '../src/themes/light'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  addDecorator: (story) => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  ),
}