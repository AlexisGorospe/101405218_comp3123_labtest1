const fs = require("fs")
let path = require("node:path")

let dir =  path.format({ //this is th link to the directory
   root: "/",
   dir: "logs",
   base: ""
});


//function for removing
remove = () => {
    for (var i = 0; i < 10; i++){ 
        let file_to_delete = path.format({
            root: "/",
            dir: "logs",
            base: "log" + (i).toString() + ".txt"
        });
        console.log("delete files..." + file_to_delete)

        fs.unlink(file_to_delete, (error) => {})
    }

    fs.rmdir(dir, (error) => {
        if (error){
            throw error;
        }
        else{
            console.log("files deleted")
        }
    });
}

remove(dir)