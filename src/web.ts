import { WebPlugin } from '@capacitor/core';

import type { SendDataToNativePlugin } from './definitions';

export class SendDataToNativeWeb extends WebPlugin implements SendDataToNativePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
