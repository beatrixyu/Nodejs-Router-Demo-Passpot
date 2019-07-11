// npm install bcryptjs connect-flash ejs express express-session mongoose passport passport-local express-ejs-layouts --save

dbPassword = `mongodb+srv://${process.env.USERN}:${
  process.env.PASS
}@cluster0-vypua.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  mongoURI: dbPassword
};
