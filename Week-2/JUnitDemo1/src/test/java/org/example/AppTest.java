package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {

    @Test
    public void testAssertions() {
        // Assert that two values are equal
        assertEquals("Expected 5 as result", 5, 2 + 3);

        // Assert that a condition is true
        assertTrue("Should be true", 5 > 3);

        // Assert that a condition is false
        assertFalse("Should be false", 5 > 3);

        // Assert that an object is null
        assertNull("Should be null", null);

        // Assert that an object is not null
        assertNotNull("Should not be null", new Object());
    }
}
