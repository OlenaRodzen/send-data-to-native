import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SendDataToNativePlugin)
public class SendDataToNativePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "SendDataToNativePlugin"
    public let jsName = "SendDataToNative"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = SendDataToNative()

    @objc func sendDataToNative(_ call: CAPPluginCall) {
            let data = call.getString("data") ?? ""
                    // Handle the data in native code
                    // For example, show an alert
                    if let appDelegate = UIApplication.shared.delegate as? AppDelegate {
                                appDelegate.sendUserInfo(data)
                            }
                    call.resolve()
        }
}
