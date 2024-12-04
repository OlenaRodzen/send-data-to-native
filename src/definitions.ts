export interface SendDataToNativePlugin {
  sendDataToNative(options: { value: string }): Promise<{ value: string }>;
}
