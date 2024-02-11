# hindi-dates

This package provides a simple and convenient way to get the current date and time in Hindi using the Day.js library.

## Installation

To install the package, use the following command:

```sh
$ npm install hindi-dates
```
or 
```sh
$ yarn add hindi-dates
```

## Usage
To use the package, import the getHindiDates function and call it as shown below:

```javascript
import { getHindiDates } from "hindi-dates";

const { dateInHindi, timeInHindi } = getHindiDates();

console.log(`Current Date in Hindi: ${dateInHindi}`);
console.log(`Current Time in Hindi: ${timeInHindi}`);
```

## Example output

```plaintext
Current Date in Hindi: ग्यारह फ़रवरी दो हज़ार चौबीस
Current Time in Hindi: छह बजकर तैंतालीस मिनट
```

## Notes
The package uses the Day.js library for date and time formatting.
The package includes translations for numbers, months, and other constants in Hindi.

## Open source
Feel free to use and modify the package according to your needs. If you encounter any issues or have suggestions for improvement, please open an issue on the GitHub repository.

