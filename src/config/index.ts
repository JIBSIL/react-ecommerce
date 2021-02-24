//@ts-nocheck
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooApi = new WooCommerceRestApi({
  url: 'https://react-ecommerce.crystalvms.com',
  consumerKey: 'ck_6c8e9a9a8a1ad7539ea32c030e81f36e2d850c84',
  consumerSecret: 'cs_c69a6656499349cee2644f1e22d2d7adb0f12d94',
  version: 'wc/v3',
  queryStringAuth: true
});
