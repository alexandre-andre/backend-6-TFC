// function captilize(string: string): string {
//   return string.charAt(0).toUpperCase();
// }

function STATUS_MESSAGE(string?: string, num?: number) {
  return {
    notFound: `Not found ${string} field or value.`,
    lesserThan: `${string?.charAt(0).toUpperCase()} lesser than ${num} characteres`,
    invalid: `Invalid ${string}`,
  };
}

export default STATUS_MESSAGE;
