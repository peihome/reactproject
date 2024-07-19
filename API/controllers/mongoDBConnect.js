const mongoose = require('mongoose');
//Connect to MongoDB
try{
    const MongoDBCs = process.env.MONGODB_URL;
    mongoose.connect(MongoDBCs);
    console.log('Connected to MongoDb!!!');
}
catch(err){
    console.log('Not connected to mongodb ::: '+err);
}