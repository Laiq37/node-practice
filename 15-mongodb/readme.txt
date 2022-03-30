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


|-| to enter in mongo db environment, write command in terminal "mongo"
|-| to check mongodb version, write "mongo --version"
|-| to check databases, write command "show dbs"
|-| to check collections in db, write "show collections"

create/use database
|-| to create database, write command in mongo env "use databaseName"
if database doesnt exist a database will created and selected, and if exist then database will be selected

insert data in db
|-| to insert data in db, write "db.databaseName.insertOne(jsonObject)

