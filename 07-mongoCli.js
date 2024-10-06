//Basic Commands
    // show all databases
        // show dbs 
    //use the database i.e. db will represent the database from now on eg. use books
        // use dbName  
    //view current db
        // db  
    //drop the database
    db.dropDatabase()   
    //show all collections
        // show collections  
    //create a new collection with name collectionName
        db.createCollection('collectionName')  
    //drop the collection
        db.collectionName.drop()
        
//CREATE OPERATIONS
    //insert one
        db.collectionName.insertOne(
            {
                name:"elf",
                age:369,
                skills:["healing","appraisal","magic","enchantment","silent step", "spirit summoning"],
                stats:{mp:300,hp:120,strength:40,intelligence:400,familiar:"owl"}
            }
        )
    //insert many
        db.collectionName.insertMany([
            {"name":"elf","age":369,"skills":["appraisal","magic","enchantment","silent step","spirit summoning"],"stats":{"mp":300,"hp":120,"strength":40,"intelligence":400,"familiar":"owl"}},
            {"name":"dwarf","age":150,"skills":["appraisal","smithing","magic","battle rage","alcohol tolerance"],"stats":{"mp":150,"hp":300,"strength":200,"intelligence":120,"familiar":"badger"}},
            {"name":"giant","age":75,"skills":["earthquake stomp","boulder throw","warcry","natural armor"],"stats":{"mp":0,"hp":800,"strength":500,"intelligence":80,"familiar":"titanic boar"}},
            {"name":"human","age":19,"skills":["swordsmanship","appraisal","leadership","magic","spirit summoning"],"stats":{"mp":200,"hp":200,"strength":150,"intelligence":200,"familiar":"owl"}},
            {"name":"demon","age":666,"skills":["dark magic","shadow meld","life drain","fear aura","infernal regeneration"],"stats":{"mp":350,"hp":250,"strength":180,"intelligence":300,"familiar":"hellhound"}},
            {"name":"demihuman","age":45,"skills":["high heal","magic","enhanced senses","beast form","night vision"],"stats":{"mp":150,"hp":220,"strength":220,"intelligence":100,"familiar":"none"}}
        ])

//READ OPERATIONS
    //fetch all documents of collection
        db.collectionName.find()
    //fetch the first document matching the object
        db.collectionName.findOne({name: "dwarf"})
    //search the db
        db.collectionName.find({"stats.mp":150})
    //limit the output
        db.collectionName.find().limit(3)
    //count the no of documents
        db.collectionName.find().count()
    //AND OPERTAION --> AND doesn't need to be specified explicitly...here $gt means greater than 
        db.collectionName.find({skills:{$in:["magic","dark magic"]},"stats.mp":{$gt:150}})
    //OR OPERATION --> OR needs to be specified explicitly...
        db.collectionName.find({$or:[{skills:{$in:["magic","dark magic"]}},{"stats.mp":{$gt:150}}]})

//UPDATE OPERATIONS
    //update one
            db.collectionName.updateOne(
                {name:"demihuman"},
                {
                    $set:{"stats.mp":120,"stats.hp":250},
                    $currentDate:{lastModified:true}
                })
    //update many
            db.collectionName.updateMany(
                {"stats.mp":150},
                {
                    $set:{"stats.mp":170},
                    $currentDate:{lastModified:true}
                })

//DELETE OPERATIONS
    //delete one --> deletes the first one matching the condition
        db.collectionName.deleteOne({"stats.mp":150})
    //delete many --> deletes all matching the condition
        db.collectionName.deleteMany({"stats.mp":150})
    //delete everything
        db.collectionName.deleteMany({})