import 'dotenv/config';

export default {
  expo: {
    name: 'bishvi-la-client',
    slug: 'bishvi-la-client',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        '@sentry/react-native/expo',
        {
          url: 'https://sentry.io/',
          project: 'bishvi-la-client',
          organization: 'idan-levian',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      GEOAPIFY_API_KEY: process.env.GEOAPIFY_API_KEY,
      SENTRY_DSN: process.env.SENTRY_DSN,
      SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    },
  },
};
