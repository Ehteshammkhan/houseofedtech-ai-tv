import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra;

export const ENV = {
  APP_NAME: extra?.appName ?? 'AITV+',
  APP_ENV: extra?.appEnv ?? 'development',
  API_BASE_URL: extra?.apiBaseUrl ?? '',
  REQUEST_TIMEOUT: Number(extra?.requestTimeout ?? 10000),
  ENABLE_LOGGER: extra?.enableLogger === true,
};