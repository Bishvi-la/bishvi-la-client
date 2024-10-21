import Constants from 'expo-constants';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: Constants.manifest2.extra.expoClient.extra.SENTRY_DSN,
  _experiments: {
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
  },
  debug: __DEV__,
});

export const withSentry = (Component: React.ComponentType) => {
  return Sentry.wrap(Component);
};
