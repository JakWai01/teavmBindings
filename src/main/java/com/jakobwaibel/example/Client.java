package com.jakobwaibel.example;

import org.teavm.flavour.templates.BindTemplate;
import org.teavm.flavour.widgets.ApplicationTemplate;
import org.teavm.jso.JSBody;

@BindTemplate("templates/client.html")
public class Client extends ApplicationTemplate {
    private String userName = "";

    public static void main(String[] args) {
        Client client = new Client();
        client.bind("application-content");

    
        // Wird doppelt geladen
       log("normal function");
       log2("sayHi function");
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @JSBody(params = { "message" }, script = "function name(message) { console.log(message) };" + 
    "name(message);" + 
    "console.log(message);")
    public static native void log(String message);

    @JSBody(params = { "message" }, script = "require(['config', 'test'], function(message){ sayHi('Felix') });")
    public static native void log2(String message);

}