const mongoose = require('mongoose');

const remoteDbUrl = process.env.MONGODB_CONNECTION_URL;


url = 'mongodb+srv://dbUser:Pa25dm.KO@cluster0.tvq44.mongodb.net/candyshop?retryWrites=true&w=majority'
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected succesfully');
  })
  .catch((error) => {
    console.log('error ' + error);
  });

module.exports = mongoose;
