function arabicToRomanNumerals(input: number): string {
  let output = "";
  const numStr = input.toString();
  const len = numStr.length;

  function roman_val(
    N: number,
    one: string,
    five: string,
    ten: string
  ): string {
    let out = "";

    switch (N) {
      case 0:
        break;
      case 1:
      case 2:
      case 3:
        while (N > 0) {
          out += one;
          N--;
        }
        break;
      case 4:
        out += one + five;
        break;
      case 5:
        out += five;
        break;
      case 6:
      case 7:
      case 8:
        out += five;
        N -= 5;
        while (N > 0) {
          out += one;
          N--;
        }
        break;
      case 9:
        out += one + ten;
        break;
    }
    return out;
  }

  for (let i = 0; i < len; i++) {
    const num = parseInt(numStr[i]);

    switch (len - i) {
      case 1:
        output += roman_val(num, "I", "V", "X");
        break;
      case 2:
        output += roman_val(num, "X", "L", "C");
        break;
      case 3:
        output += roman_val(num, "C", "D", "M");
        break;
      case 4:
        output += roman_val(num, "M", "V", "X");
        break;
      default:
        while (input > 0) {
          output += "M";
          input--;
        }
        break;
    }
  }

  return output;
}

export default arabicToRomanNumerals;
