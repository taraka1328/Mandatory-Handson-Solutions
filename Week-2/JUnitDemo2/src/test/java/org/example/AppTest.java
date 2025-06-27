package org.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;


import static org.junit.Assert.*;

public class AppTest {

    public App calc;

    // Arrange – Setup before each test
    @Before
    public void setUp() {
        calc = new App();
        System.out.println("Setup completed.");
    }

    // Teardown – Runs after each test
    @After
    public void tearDown() {
        System.out.println("Test completed.\n");
    }

    @Test
    public void testAddition() {
        // Arrange done in setUp()

        // Act
        int result = calc.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange done in setUp()

        // Act
        int result = calc.subtract(10, 5);

        // Assert
        assertEquals(5, result);
    }
}
