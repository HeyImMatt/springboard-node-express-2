### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  * JSON Web Token - open standard that allows tokens to be shared between parties like a server and a client

- What is the signature portion of the JWT?  What does it do?
  * The signature is the third portion of the token string. Allows the receiving party to verify the sender is who they say they are. Also ensures the data of the payload or headers haven't been tampered with as they are used in calculating the signature.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  * Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  * After you log a user in on your server, you can generate and respond with a JWT that includes info like the username or a property like "isAuthenticated". You would then include this token in any requests back to the server from the client. The server can then respond if the token is verified or deny the request if it fails verification.

- Compare and contrast unit, integration and end-to-end tests.
  * Unit tests are small, isolated tests that test only a specific function or unit of code.
  * Integration tests are for testing that two or more units are able to work together. An example would be testing an API endpoint as this tests not only that the API responds properly, but that the API code is able to retrieve data correctly like getting it from a database.
  * End-to-end tests are for testing an application from a user perspective. This could include things like clicking a login button, filling out the login form, clicking the button to submit, and being shown either the logged in screen if successful or some field validation if a field was filled out incorrectly.

- What is a mock? What are some things you would mock?
  * Mocks are replacing dependency objects like functions or data in a test when it's not practical to have it included. You might mock the result of a function or data that would be returned from an external API.

- What is continuous integration?
  * The practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?
  * Set outside of the application, environment variables are used for app configuration. They allow you to set things like different databases to use whether you're in production, dev, or testing.

- What is TDD? What are some benefits and drawbacks?
  * Test Driven Development is the process of writing tests before writing code, then writing code that gets the tests to pass, and then refactoring the code for optimization. One benefit is forcing you to think about all the cases and expected returns or outcomes of your code before you write it. Another is it can prevent you from "coding yourself into a box" where you get so far down the path of a not-ideal approach that it is hard to change course. A drawback is that it can slow the development process down quite a bit in the short term since you're writing your tests upfront. Another drawback is that it can be very difficult to write tests beyond unit testing.

- What is the value of using JSONSchema for validation?
  * You can have user data fail fast so that it doesn't get into your database. It reduces the amount of code you need to process and validate the incoming data. And it's much easier to setup and maintain than rolling your own validation.

- What are some ways to decide which code to test?
  * Think about and test for reasonable edge cases
  * If you discover/fix a bug, write a test for it.
  * Test for expectations and exceptions

- What are some differences between Web Sockets and HTTP?
  * Web sockets are small, stateful, and stay connected vs HTTP which is "heavy" and a singular transaction (request, response, end connection).
  * Web sockets allow for live updates vs HTTP which would rely on repeated requests to the server for updates.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
  * Generally, I don't prefer one over the other. Python is a friendly language and has some nice built-ins that JS doesn't have. That said, I would probably use a JS server-side framework more often than not so that I'm not context switching languages since so many front-end frameworks are based on JS.
