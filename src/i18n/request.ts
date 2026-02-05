import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const validLocale = locale && ['de', 'en'].includes(locale) ? locale : 'de';
  
  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});
