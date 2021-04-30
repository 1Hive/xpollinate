import chakraTheme from '@chakra-ui/theme';

export const theme = {
  ...chakraTheme,
  styles: {
    ...chakraTheme.styles,
    global: {
      body: {
        bg: 'linear-gradient(118.5deg, #F2F3FB 13.9%, #F2F3FB 94.36%)',
        bgImage:
          // eslint-disable-next-line quotes
          "url('https://storage.googleapis.com/1hive/xpollinate/bg-pattern.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
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
