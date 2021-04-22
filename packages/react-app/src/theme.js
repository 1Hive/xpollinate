import chakraTheme from '@chakra-ui/theme';

export const theme = {
  ...chakraTheme,
  styles: {
    ...chakraTheme.styles,
    global: {
      body: {
        bg: 'linear-gradient(118.5deg, #F2F3FB 13.9%, #F2F3FB 94.36%)',
      },
    },
  },
  colors: {
    ...chakraTheme.colors,
  },
  fonts: {
    ...chakraTheme.fonts,
    body: 'Manrope, sans-serif',
  },
};
