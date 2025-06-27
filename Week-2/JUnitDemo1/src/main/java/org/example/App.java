package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class App {

    @Test
    public void testAddition() {
        int a = 5;
        int b = 7;
        int result = a + b;
        assertEquals(12, result);
    }
}