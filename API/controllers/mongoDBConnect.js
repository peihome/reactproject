const mongoose = require('mongoose');
//Connect to MongoDB
try{
    const MongoDBCs = 'mongodb+srv://root:ZRqIm7NpSFToTBn3@cluster0.kjptudk.mongodb.net/EMS';
    mongoose.connect(MongoDBCs);
    console.log('Connected to MongoDb!!!');
}
catch(err){
    console.log('Not connected to mongodb ::: '+err);
}