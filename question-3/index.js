const fs = require("fs")
let path = require("node:path")

let dir =  path.format({ //this is th link to the directory
   root: "/",
   dir: "logs",
   base: ""
});


//function for adding
add = () => {
    fs.access(dir, (error) => {
        if (error){
            fs.mkdir(dir, {recursive: true}, (error) => {
                if(error){
                    console.log(error);
                }
            })
        }
    });


    //replace with es6 syntax later
    for (let i = 0; i < 10; i++){
        let file_to_make = path.format({
            root: "/",
            dir: "logs",
            base: "log" + (i + 1).toString() + ".txt"
         });

         console.log(file_to_make)

        let creator = fs.createWriteStream(file_to_make);
        creator.write("this is the contents of the file.")

        creator.close()
    }
}

//function for removing
remove = () => {
    for (var i = 0; i < 10; i++){ 
        let file_to_delete = path.format({
            root: "/",
            dir: "logs",
            base: "log" + (i + 1).toString() + ".txt"
        });

        console.log(file_to_delete)
        
        fs.unlink(file_to_delete, (error) => {
            
        })

        

        
    }

    fs.rmdir(dir, (error) => {
        if (error){
            throw error;
        }
        else{
            console.log("file deleted")
        }
    });
}



add(dir)
remove(dir)