package org.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

/*
public class MyServicesTest {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyServices service = new MyServices(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}
*/



public class MyServicesTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create a mock of ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject the mock into the service
        MyServices service = new MyServices(mockApi);

        // Step 3: Call the method that uses the mock
        service.fetchData();

        // Step 4: Verify that mockApi.getData() was called exactly once
        verify(mockApi).getData();
    }
}
