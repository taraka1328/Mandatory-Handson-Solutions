import axios from 'axios';
import GitClient from './GitClient';

// Mock the axios library
jest.mock('axios');

describe('Git Client Tests', () => {
    test('should return repository names for techiesyed', async () => {
        // Dummy data to be returned by the mocked axios object
        const resp = {
            data: [
                { name: 'appscentricsolutions' },
                { name: 'ArrayListDemo' },
                { name: 'AzureDevopsDemoProductsApi' },
            ]
        };

        // Mock the axios.get method to resolve with the dummy data
        axios.get.mockResolvedValue(resp);

        // Call the method under test
        const repositories = await GitClient.getRepositories('techiesyed');

        // Assert that the mocked data is returned
        expect(repositories.data).toEqual(resp.data);
    });
});