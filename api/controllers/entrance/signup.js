module.exports = async function (req, res) {
  let inputs = req.allParams();
console.log('inputs:', inputs);
  // Build up data for the new user record and save it to the database.
  // (Also use `fetch` to retrieve the new ID so that we can use it below.)
  let newUserRecord = await User.create({
    avatarString: inputs.avatarString,
    mbid: inputs.mbid,
    username: inputs.username
  })
  .intercept('E_UNIQUE', 'usernameAlreadyInUse')
  .intercept({name: 'UsageError'}, 'invalid')
  .fetch();

  // Store the user's new id in their session.
  req.session.userId = newUserRecord.id;

  // Since everything went ok, send our 200 response.
  return res.ok();

};
