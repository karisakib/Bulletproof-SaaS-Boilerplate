// /**
//  * ^[A-Za-z]+: Ensures the name starts with one or more alphabetic characters.
//  * (?:[-'][A-Za-z]+)*: Allows optional groups of a hyphen or apostrophe followed by one or more alphabetic characters, repeated zero or more times.
//  * $: Ensures the name ends with an alphabetic character, hyphen, or apostrophe.
//  * e.g.: Brian O'Brien, Tim Dustin-Davis, John Smith
//  */
// const nameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/;

// /**
//  * ^.+@: Ensures there is at least one character before the @ symbol
//  * .+\.: Ensures there is at least one character after the @ symbol, followed by a . (dot)
//  * .+$: Ensures there is at least one character after the dot
//  * e.g.: a@b.com, admin@hotmail.com, user@gmail.com
//  */
// const emailRegex = /^.+@.+\..+$/;

// /**
//  * ^(?=.*[a-z]): Ensures there is at least one lowercase letter.
//  * (?=.*[A-Z]): Ensures there is at least one uppercase letter.
//  * (?=.*\d): Ensures there is at least one digit.
//  * (?=.*[@$!%*?&]): Ensures there is at least one special character from the set @$!%*?&.
//  * [A-Za-z\d@$!%*?&]{8,16}$: Ensures the password is between 8 and 16 characters long and consists of letters, digits, and special characters from the allowed set.
//  * e.g.: Password1!, Abcdef12$, StrongPass9@
//  */
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

// Patterns
const regexPatterns = {
 nameRegex: /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/,
 emailRegex: /^.+@.+\..+$/,
 passwordRegex:
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
};

module.exports = regexPatterns