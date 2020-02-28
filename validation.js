const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: /^\d{11}$/, //Any digit, 11 characters
        username: /^[a-z\d]{5,12}$/i, //Any letter, any digit, 5-12 characters, case insensitive
        password: /^[\w@-]{8,20}$/, //Any word character (letter(upper and lower case), digit, underscore), @ or -, 8-20 characters
        slug: /^[a-z\d-]{8,20}$/, //Lowercase letters, any digit, hyphen, 8-20 characters
        email: /^([a-z\d\.+-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ // (name) @ (domain) . (extension)(.extension2 - optional)  - seems to break if + is put at end of square brackets, even with escape character
        /*
            (name): any letter, any digit, ., +, -, >1 character
            (domain): any letter, any digit, -, >1 characer
            (extension): any letter, 2-8 characters
            (extension2): . followed by any letter, 2-8 characters, optional (? makes preceding character/statement optional)
        */
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            // console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
