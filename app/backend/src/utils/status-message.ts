// function captilize(string: string): string {
//   return string.charAt(0).toUpperCase();
// }

function initialString(string: string) {
  const result = string.replace(/(^\w{1})|(\s+\w{1})/g, (firstLetter) => firstLetter.toUpperCase());
  return result;
}

function STATUS_MESSAGE(string?: any, num?: number) {
  return {
    notFields: 'All fields must be filled',
    notFound: `${initialString(string)} not found.`,
    lesserThan: `${initialString(string)} lesser than ${num} characteres`,
    invalid: `Invalid ${string}`,
  };
}

export default STATUS_MESSAGE;
