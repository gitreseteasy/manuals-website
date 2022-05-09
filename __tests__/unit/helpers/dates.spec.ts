import {formatDateForResultsPage} from "@/helpers";

describe('helpers', () => {
  describe('formatDateForResultsPage', () => {
    const testCases:Array<{input: string; expected: string}> = [
      {input: '2020-01-01', expected: '01 Jan 2020'},
      {input: '2022-05-07', expected: '07 May 2022'},
      {input: '1991-01-01', expected: '01 Jan 1991'}
    ];

    testCases.forEach(({input, expected}) => {
      it(`should return ${expected} out for input ${input}`, () => {
        const output = formatDateForResultsPage(input);
        expect(output).toEqual(expected);
      });
    });
  });
});