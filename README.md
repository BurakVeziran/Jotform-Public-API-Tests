# Playwright API Test Suite for JotForm Public APIs

Welcome to the Playwright API test suite for JotForm's public APIs! This test suite is designed to help you automate the testing of JotForm's APIs using Playwright. By following the instructions below, you'll be able to set up and run tests to ensure the functionality and reliability of JotForm's Public APIs.

## Prerequisites

Before you begin, please make sure you have the following:

1. Node.js installed on your machine.
2. A JotForm account for accessing the necessary API credentials.
3. Basic understanding of API testing concepts.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/BurakVeziran/Jotform-Public-API-Tests.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playwright-jotform-api-test-suite
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## Configuration

To run the tests, you'll need to set up your API credentials and other configuration parameters in a `.env` file.

```dotenv
APIKEY=your_jotform_api_key
USERNAME=your_jotform_username
EMAIL=your_email
PASSWORD=your_password
NAME=your_name
STATICFORMID=your_static_form_id
BASEURL=base_api_url
TIMEZONE=your_timezone
```

Replace the placeholders with your actual values.

## Running Tests

Once you've configured the environment variables, you can run the tests using the following command:

```bash
npx playwright test --headed --workers=1
```

This command will trigger Playwright to execute the API tests defined in the test files.

## Test Files

The API test files are located in the `tests/api` directory. You can find different test scenarios there, each contained within its own file. Feel free to modify or extend these tests to match your specific testing requirements.

## Contributing

If you find any issues or want to contribute improvements to this test suite, feel free to create a pull request or report an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
