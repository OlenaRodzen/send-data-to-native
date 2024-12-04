import { registerPlugin } from '@capacitor/core';

import type { SendDataToNativePlugin } from './definitions';

const SendDataToNative = registerPlugin<SendDataToNativePlugin>('SendDataToNative', {
  web: () => import('./web').then((m) => new m.SendDataToNativeWeb()),
});

export * from './definitions';
export { SendDataToNative };
