package me.justschool.plugins.send;

import android.util.Log;

public class SendDataToNative {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
