import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db=mongoose.connection;

const handleOpen=()=>{
  console.log("✅ Connected to DB");
}

const handleError = (error)=>{
  console.log(`❌ ${error}`);
}

db.once("open", handleOpen);
db.on('error', handleError);

/*
DB Commanders
show dbs                     show database names
show collections             show collections in current database
show users                   show users in current database
show profile                 show most recent system.profile entries with time >= 1ms
show logs                    show the accessible logger names
show log [name]              prints out the last segment of log in memory, 'global' is default
use <db_name>                set current database
db.mycoll.find()             list objects in collection mycoll
db.mycoll.find( { a : 1 } )  list objects in mycoll where a == 1
it                           result of the last line evaluated; use to further iterate
DBQuery.shellBatchSize = x   set default number of items to display on shell
exit                         quit the mongo shell

*/