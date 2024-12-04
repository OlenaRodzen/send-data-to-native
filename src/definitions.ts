export interface SendDataToNativePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
