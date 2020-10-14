### Bug #1
User cannot update their own info. Caused by requireAdmin middleware. Fixed by removing requireAdmin since that's being checked in the conditional.

## Bug #2
Non-admins can set themselves as admins. Test was passing because Bug #1 was preventing user from updating their info altogether.