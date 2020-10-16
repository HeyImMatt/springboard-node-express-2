### Bug #1
User cannot update their own info. Caused by requireAdmin middleware. Fixed by removing requireAdmin since that's being checked in the conditional.

## Bug #2
Non-admins can set themselves as admins. Test was passing because Bug #1 was preventing user from updating their info altogether.

## Bug #3
The getAll() method on the User class had unncessary paramaters for username and password.

## Bug #4
The get "/" route for all users returns email and phone when it should only return username, first, and last names.

## Bug #5
The authUser function in auth middleware only decodes the token. It should be verifying it to ensure it hasn't been tampered with.

## Bug #6
The patch route for updating a user allowed username and password to be changed when that should not be allowed.