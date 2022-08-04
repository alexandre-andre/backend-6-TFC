enum EStatusMessage {
  notFields = 'All fields must be filled',
  incorrect = 'Incorrect email or password',
  unauthorized = 'Unauthorized token',
  notLength = 'Password lenght not allowed',
  impossibleMatch = 'It is not possible to create a match with two equal teams',
}

export default EStatusMessage;
