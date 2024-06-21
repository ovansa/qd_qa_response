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
