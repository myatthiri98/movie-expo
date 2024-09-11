export const T = {
    color: {
      white: '#fff',
      black: '#000000',
      lightGray: 'rgb(244, 244, 244)',
      darkGray: '#333',
      grey: '#ddd',
      mediumGray: 'rgba(0,0,0,0.75)',
      red: 'rgba(255, 0, 0, 1)',
      purple: 'rgba(128, 0, 128, 1)',
      blue: 'rgba(0, 0, 255, 1)',
      green: 'rgba(0, 255, 0, 1)',
      shadow: '#000',
    },
    width: {
      max: 780,
      eighty_percent: '80%' as const,
      hundred_percent: '100%' as const,
      previewCard: 600,
      posterImage: 100,
      sixty_five_percent: '65%' as const,
    },
    height: {
      previewCard: 300,
      posterImage: 100,
    },
    spacing: {
      none: 0,
      extraExtraSmall: 2,
      extraSmall: 4,
      small: 8,
      medium: 16,
      large: 20,
      xLarge: 25,
      xxLarge: 32,
    },
    lineHeight: {
      small: 14,
      regular: 20,
      medium: 24,
      large: 28,
      xLarge: 32,
      xxLarge: 40,
    },
    border: {
      width: {
        none: 0,
        thin: 1,
        thick: 2,
      },
      radius: {
        roundedSmall: 5,
        rounded: 10,
        extraRounded: 20,
        fullRound: 100,
      },
    },
    font: {
      weight: {
        bold: 'bold' as const,
      },
      family: {
        primary: 'Arial',
        debug: 'monospace',
      },
      size: {
        small: 10,
        regular: 14,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 32,
        xxxLarge: 40,
      },
    },
  }
  