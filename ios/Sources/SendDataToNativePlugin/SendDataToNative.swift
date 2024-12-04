import Foundation

@objc public class SendDataToNative: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
