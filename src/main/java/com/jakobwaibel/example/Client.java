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

       log("normal function");
       log2("Nebulark");
       System.out.println(log3("asd"));
       System.out.println(log4("asd"));
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @JSBody(params = { "message" }, script = "function name(message) { console.log(message) };" +
    "name(message)")
    public static native void log(String message);

    @JSBody(params = { "message" }, script = "function name(message) { require(['config', 'test'], function(){ sayHi(message) }) };" + "name(message)")
    public static native void log2(String message);

    @JSBody(params = { "message" }, script = "function name(message) { return message.length; };")
    public static native int log3(String message);
    
    @JSBody(params = { "message" }, script = "function name(message) { return message; };")
    public static native String log4(String message);


}