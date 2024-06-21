# qd_qa_response

## Task 1: Functional Testing and Defect Management

### Test Cases for Input Forms, Select dropdown list, Alerts/Modals

#### Test cases for Single Input Field

**Test case 1**

- **Description**: Verify that a single word entered in the input field is displayed correctly when the "Show Message" button is clicked.
- **Preconditions**: The application is loaded and the input field and "Show Message" button are visible.
- **Steps**:
  - Enter the text "ABCDEF" in the input field.
  - Click on the "Show Message" button.
  - Verify that the displayed message is "ABCDEF".
- **Expected Result**: should display the message "ABCDEF".
- **Status**: Pass

**Test case 2**

- **Description**: Verify that multiple words entered in the input field is displayed correctly when the "Show Message" button is clicked.
- **Preconditions**: The application is loaded and the input field and "Show Message" button are visible.
- **Steps**:
  - Enter the text "ABCDEF ABCDEF ABCDEF ABCDEF" in the input field.
  - Click on the "Show Message" button.
  - Verify that the displayed message is "ABCDEF ABCDEF ABCDEF ABCDEF".
- **Expected Result**: should display the message "ABCDEF ABCDEF ABCDEF ABCDEF".
- **Status**: Pass

**Test case 3**

- **Description**: Verify that alphanumeric characters entered in the input field is displayed correctly when the "Show Message" button is clicked.
- **Preconditions**: The application is loaded and the input field and "Show Message" button are visible.
- **Steps**:
  - Enter the text "ABcdE12345.$%" in the input field.
  - Click on the "Show Message" button.
  - Verify that the displayed message is "ABcdE12345.$%".
- **Expected Result**: should display the message "ABcdE12345.$%".
- **Status**: Pass

#### Test cases for Two Input Field

**Test case 4**

- **Description**: Verify the sum calculation for positive integer inputs.
- **Preconditions**: Application is open, and the UI is displayed.
- **Steps**:
  - Enter "7" in the first text field.
  - Enter "3" in the second text field.
  - Click on "Get Total" button.
- **Expected Result**: should display valid sum with two positive integers i.e. 10.
- **Status**: Pass

**Test case 5**

- **Description**: Verify the sum calculation for a positive and a negative integer input.
- **Preconditions**: Application is open, and the UI is displayed.
- **Steps**:
  - Enter "7" in the first text field.
  - Enter "-3" in the second text field.
  - Click on "Get Total" button.
- **Expected Result**: should display valid sum with positive and negative integers i.e. 4.
- **Status**: Pass

**Test case 6**

- **Description**: Verify the sum calculation for negative integers.
- **Preconditions**: Application is open, and the UI is displayed.
- **Steps**:
  - Enter "-7" in the first text field.
  - Enter "-3" in the second text field.
  - Click on "Get Total" button.
- **Expected Result**: should display valid sum with two negative integers i.e. -10.
- **Status**: Pass

**Test case 7**

- **Description**: Verify the sum calculation for two decimal number inputs.
- **Preconditions**: Application is open, and the UI is displayed.
- **Steps**:
  - Enter "6.5" in the first text field.
  - Enter "3.5" in the second text field.
  - Click on "Get Total" button.
- **Expected Result**: should display valid sum with two negative integers i.e. 10.
- **Status**: Fail
- **Comments**: The result displayed is "9"

**Test case 8**

- **Description**: Verify that a NaN result when text fields contains alphanumeric characters.
- **Preconditions**: Application is open, and the UI is displayed.
- **Steps**:
  - Enter "one123" in the first text field.
  - Enter "one123" in the second text field.
  - Click on "Get Total" button.
- **Expected Result**: should display the message (NaN)
- **Status**: Pass

#### Test cases for Select List

**Test case 9**

- **Description**: Verify that a select value is displayed as Day Selected.
- **Preconditions**: Application is open, and the Select List Demo page is displayed.
- **Steps**:
  - Select a day in the Single list demo section.
- **Expected Result**: should display the selected day from dropdown list
- **Status**: Pass

#### Test cases for Multiple Select List

**Test case 10**

- **Description**: Verify that a select value is displayed.
- **Preconditions**: Application is open, and the Select List Demo page is displayed.
- **Steps**:
  - Select a city in the Multiple list demo section.
  - Click on "First Selected" button
- **Expected Result**: should display the only selected option
- **Status**: Pass

**Test case 11**

- **Description**: Verify that two selected values are displayed.
- **Preconditions**: Application is open, and the Select List Demo page is displayed.
- **Steps**:
  - Select the city 'Florida' and 'Ohio' in the Multiple list demo section.
  - Click on "First Selected" button
- **Expected Result**: should display the only selected option
- **Status**: Fail
- **Comment**: Unable to select two cities at once. After selecting an option, clicking another to add deselects the initial selection.

#### BUG REPORT

**Title**: [Two Input Fields] Summing Two Decimal Numbers Rounds the Value Down Incorrectly
**Description**: When summing two decimal numbers, such as 6.5 and 3.5, the value returned is 9 instead of the correct total of 10. The function appears to round down the sum incorrectly.
**Preconditions**: - Navigate to the Simple Form Demo page at https://demo.seleniumeasy.com/basic-first-form-demo.html.
**Steps to Reproduce**:

- Scroll down to the "Two Input Fields" section.
- In the "Enter a" field, enter the value 6.5.
- In the "Enter b" field, enter the value 3.5.
- Click on the "Get Total" button.
- Observe the total displayed.

**Observed Result**: - The total displayed is 9.
**Expected Result**: - The total displayed should be 10.
**Screenshot**: ![Incorrect Decimal Sum](https://github.com/ovansa/qd_qa_response/assets/7291106/06edb9a8-acb9-4acc-8bf6-ede48e228163)

**IMPROVEMENTS**

- **Single Input Field**: Implement validation for minimum and maxiumum length of character allowable
- **Two Input Fields**: Implement validation to allow only number inputs
- **Two Input Fields**: Update decimal arithmetic not to round down. E.g. 6.5 + 3.5 should be 10 and not 9.

## Task 2: Test Automation

## Setup

1. Clone the repository:

`git clone https://github.com/ovansa/qd_qa_response.git` or `git clone git@github.com:ovansa/qd_qa_response.git`

2. Navigate into the project directory:

`cd qd_qa_response`

3. Install the required dependencies:

`npm ci`

## Running the tests

### Locally

1. To run the E2E tests, use the following command: `npm run test:e2e`

### With Docker

1. Build the Docker image: `docker build -t qd_qa_response .`

2. Run the tests in a Docker container: `docker run -it qd_qa_response`
