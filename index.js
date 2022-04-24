function ageValidation(years) {
    if (years >= 18) {
        if (years >= 50) {
            return "Old age"
        } else {
            return "Adult"
        }
    } else { 
        if (years < 14) {
            return "Little boy"
        }
         else {
            return "Teen"
        }
    }
}

console.log(ageValidation(13))

console.log(ageValidation(64))