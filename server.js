const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

// Used when generating any kind of tokens
const twilioAccountSid = 'ACd96663db3e76d432dd82f05eb8238b5d';
const twilioApiKey = 'SK0f2c2c69e48fdbdd94c3752c17e24084';
const twilioApiSecret = 'hZiorJW8c0D5bvbJGHvuoUM3Y9XarHzw';

// Used specifically for creating Chat tokens
const serviceSid = 'IS1e33b2fbb7774a21b5015b3fad62bc3b';
const identity = 'user@example.com';

// Create a "grant" which enables a client to use Chat as a given user,
// on a given device
const chatGrant = new ChatGrant({
  serviceSid: serviceSid,
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);

token.addGrant(chatGrant);

token.identity = identity;

// Serialize the token to a JWT string
console.log(token.toJwt());

