package org.teavm;

import org.teavm.interop.Export;

/**
 * Created by Dmitdry Alexandrov on 25.01.19.
 */
public class WasmFunctions {

    @Export(name = "thePurposeOfLife")
    public static int getThePurposeOfLife() { return 43; }

    public static void main(String[] args) {
        
    }
}