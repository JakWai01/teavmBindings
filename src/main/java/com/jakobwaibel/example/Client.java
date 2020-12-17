package com.jakobwaibel.example;

import org.teavm.flavour.templates.BindTemplate;
import org.teavm.flavour.widgets.ApplicationTemplate;
import org.teavm.interop.Async;
import org.teavm.interop.AsyncCallback;
import org.teavm.jso.JSBody;
import org.teavm.html4j.*;

@BindTemplate("templates/client.html")
public class Client extends ApplicationTemplate {
    private String userName = "";

    public static void main(String[] args) {
        Client client = new Client();
        client.bind("application-content");

        log("normal function");
        log2("Nebulark");
        System.out.println(log3("asd"));
        System.out.println(log4("asd"));
        System.out.println("" + log5(67));
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @JSBody(params = { "message" }, script = "function name(message) { console.log(message) };" + "name(message)")
    public static native void log(String message);

    @JSBody(params = {
            "message" }, script = "function name(message) { require(['config', 'test'], function(){ sayHi(message) }) };"
                    + "name(message)")
    public static native void log2(String message);

    @JSBody(params = { "message" }, script = "function name(message) { return message.length; };")
    public static native int log3(String message);

    @JSBody(params = { "message" }, script = "function name(message) { return message; };")
    public static native String log4(String message);

    @JSBody(params = {
            "message" }, script = "function name(message) { return new Promise(function (res) { require([\"config\", \"test\"], function () { res(add(message)); }); }); }; return name(message);")
    public static native int log5(int message);

    // Call async function which is returning a promise
    @Async
    public static native String foo(String arg);
    private static void foo(String arg, AsyncCallback<String> callback) {
        fooAsync(arg, result -> callback.complete(result));
    }

    @JsBody(params = { "arg", "callback" }, script = "return foo(arg, callback);")
    public static native void fooAsync(String arg, JsConsumer<String> callback);
}