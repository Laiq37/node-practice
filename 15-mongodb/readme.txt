What is mongoDb?
	MongoDB is a document database used to build highly available and scalable internet applications. With its flexible schema 
	approach, it's popular with development teams using agile methodologies.
	
	we can relate nosql db collection to sql table and document to rows and fields to column 

|-| MongoDb store data internally as BSON
What is BSON?
	BSON is the binary encoding of JSON-like documents that MongoDB uses when storing documents in collections. It adds support for 
	data types like Date and binary that aren't supported in JSON.
Difference b/w BSON and JSON?
	BSON is a serialization format encoding format for JSON mainly used for storing and accessing the documents, whereas JSON is a
	 human-readable standard file format mainly used for transmission of data in the form of key-value attribute pairs.


|-| install mongoDb

|-| to enter in mongo db environment, write command in terminal "mongo"
|-| to check mongodb version, write "mongo --version"
|-| to check databases, write command "show dbs"
|-| to check collections in db, write "show collections"
|-| to check active db, write "db"

create/use database
|-| to create database, write command in mongo env "use databaseName"
if database doesnt exist a database will created and selected, and if exist then database will be selected

create collection in Database
|-| db.collectionName
user collection will be created if doesnt exist

|-| to check collections in db, write "show collections"

insert single data in db
|-| to insert data in db, write "db.CollectionName.insertOne(jsonObject)

insert more than one data in db
|-| "db.collectionName.insertMany([{},{}....])

find data in collection
There are two to methods to find data
|-| to find data in db collection, write "db.collectionName.find()"
|-| to find single data, "db.collectionName.findOne()"
|-| we can also prettify our db result, "db.collectioName.find().pretty", pretty not worked on findOne()
|-| we can give the limit of data to find, "db.collectionName.find().pretty().limit(noOfDataRequired)"
|-| we can also skip particular data, "db.collectionName.find().pretty().skip(noOfDataTobeskipped)"

--------------------------------------READ------------------------------------------------------
query&projection
|-| "db.collectioName.find({query},{projection})
query: filter data according to entered doc field
projection: show only those fields which are projected to show

find data in collection using query(through particular fields)
|-| "db.collectionName.find({fieldName:"value"}).pretty()

find and show data fields of collection
|-| "db.collectionName.find({queryIfRequired}, {fieldName: 0/1})
if we set value 0 then it means show all data accept fieldName, if 1 it means show fieldName data except all otherFields.
if we set fieldName to 1 then with fieldName, _id will also be shown to hide it, we can set _id:0 in projection part 

-------------------------------------Update-----------------------------------------------------
filter&update
|-| "db.collectionName.updateMany({filter/query}, {updatedvalue})

update a single data
|-| "db.collectionName.updateOne({query}, {$set: {key: updatedValue}})"

update more than one value
|-| "db.collectionName.updateMany({query}, {$set: {key: updatedValue}})" 

to update value we use $set and passes the key and updated value


------------------------------------Delete------------------------------------------------------
query&delete
|-| "db.collectioName.deleteMany({filter/query})

delete all
|-| "db.collectionName.deleteMany({})


