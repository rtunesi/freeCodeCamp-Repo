// Email Masker Function
function maskEmail(email) {
    // Split the email into two by using @ as the seperator
    const emailSplit = email.split("@");
    // Take the name part of the email and assign it here
    const emailFront = emailSplit[0];
    // Take the domain part of the email and assign it here
    const emailBack = emailSplit[1];
  
    const firstLetter = emailFront[0];
    const lastLetter = emailFront[emailFront.length - 1];
    // Create as many stars as the length of emailFront but minus 2
    const hidden = "*".repeat(emailFront.length - 2);
  
    return firstLetter + hidden + lastLetter + "@" + emailBack;
  }
  
  const email = "test@email.com";
  
  console.log(maskEmail(email))