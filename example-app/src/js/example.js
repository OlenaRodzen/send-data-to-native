import { SendDataToNative } from 'send-data-to-native';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    SendDataToNative.echo({ value: inputValue })
}
