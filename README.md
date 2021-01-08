# Password Generator #

## My tasks to complete ##
## -------------------- ##
This week’s homework requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## Acceptance Criteria ##
## ------------------- ##
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

![screenShot](/readmeAssets/screenShot.png)

# Password Generator for bootcamp! #
# -------------------------------- #
Going step by step I completed the criteria by initializing and filling the variables with strings of the characters required to build a password.  I used lower, upper, numbers, and special to identify the strings and use them to add to a big string with which to run a randomizer, and give a password pulled from said big string.

I used generatePassword function and initialized empty strings titled pwlength, password, and charset.  charset will house the combined string that the user has selected and pull the password from those.

Before asking the user for those parameters I ran a check on the given length to make sure that it was within 8 and 128 characters as well as making sure the user entered an actual number with isNan.

From then on I confirmed each case with the user to see what type of characters I needed to add to the character set.

At the end of the function I included a check to make sure that the user actually selected at least one parameter with which to work with.  If there wasnt one selected, it reruns the program until at least one was selected.

After my character set was built, I then ran a for loop that added characters at random to the password and then returns the password.

A few modifications I made to the style and the html was to include a second button that resets the window and clears the password that was given in order to run the generate password again.  This was simply done in order to rid the window of the last password while the browser reruns the prompts and confirms.  I added a small bit of styling ony to make it red to add contrast between the buttons but everything else should be identical to the existing button in the interface.

## Issues I ran into ##

The only issue I really ran into was the placement of the variables that needed to reset if the program was run again.  I initialized them the first time around outside of the function and I found that If ran again, the program would hang on to the last rounds variables and simply add on to them.  With a little help from Mr. Google and the online TA assistant, I was able to replace them within the write password function, so that upon rerun, they would reset to empty!

## Links to Repo and Deployed Site! ##
## -------------------------------- ##

[Link to Repo](https://github.com/cmgson/password_generator)

[Link to Deployed Site](https://cmgson.github.io/password_generator/)