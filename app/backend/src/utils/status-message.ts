enum EStatusMessage {
  idTeamNotFound = 'There is no team with such id!',
  impossibleMatch = 'It is not possible to create a match with two equal teams',
  impossibleUpdate = 'Impossible update, match finished or not existing',
  incorrect = 'Incorrect email or password',
  invalidToken = 'Token must be a valid token',
  notFields = 'All fields must be filled',
  notLength = 'Password lenght not allowed',
  unauthorized = 'Unauthorized token',
}

export default EStatusMessage;
