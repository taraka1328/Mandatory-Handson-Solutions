package org.example;

import org.example.Calculator;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class AppTest {

    private Calculator calculator;

    // This method runs before each test method
    @BeforeMethod
    public void setUp() {
        calculator = new Calculator();
    }

    // Test for the 'add' method
    @Test
    public void testAdd() {
        int result = calculator.add(5, 3);
        // Assert that the result of 5 + 3 is 8
        Assert.assertEquals(result, 8, "Addition result is incorrect");
    }

    // Test for the 'subtract' method
    @Test
    public void testSubtract() {
        int result = calculator.subtract(5, 3);
        // Assert that the result of 5 - 3 is 2
        Assert.assertEquals(result, 2, "Subtraction result is incorrect");
    }
}
