 export const passwordLevels = new Map()
.set(0, ' Very Weak')
.set(10, ' Very Weak')
.set(20, 'Still weak')
.set(30, 'Still weak')
.set(40, 'Medium')
.set(50, 'Medium')
.set(60, 'Normal')
.set(70, 'Normal')
.set(80, 'Strong')
.set(90, 'Strong')
.set(100, 'Impossible');

  export function getPasswordStrength ( password ) {

    let reliability = 0;

    let lowerCaseChars = password.match(/[a-z]/gm);
    console.log(lowerCaseChars);
    if ( lowerCaseChars != null ) {
        reliability += 10;
        if ( lowerCaseChars.length > 2 ) reliability += 10;
    }

    let upperCaseChars = password.match(/[A-Z]/gm);
    if ( upperCaseChars != null ) {
        reliability += 10;
        if( upperCaseChars.length > 2 ) reliability += 10;
    }
    
    let digits = password.match(/[0-9]/gm);
    console.log(digits);
    if ( digits != null  ) {
        reliability += 10;
        if ( digits.length > 2 ) reliability += 10;
    }
    
    let specialChars = password.match(/[!@#$%^&*()]/gm);
    if ( specialChars != null ) {
        reliability += 10;
        if ( specialChars.length > 2 ) reliability += 10;
    }

    if ( password.length > 8 ) reliability += 10;
    if ( password.length > 12 ) reliability += 10;

    return reliability;
 }