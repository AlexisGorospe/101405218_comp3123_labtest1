const fs = require("fs")
let path = require("node:path")

let dir =  path.format({ //this is th link to the directory
   root: "/",
   dir: "logs",
   base: ""
});


//function for adding
add = () => {
    fs.mkdir(dir, (error) => {
        if(error){
            console.log(error);
        }
    })

    for (let i = 0; i < 10; i++){
        let file_to_make = path.format({
            root: "/",
            dir: "logs",
            base: "log" + (i).toString() + ".txt"
         });

         console.log(file_to_make)

        let creator = fs.createWriteStream(file_to_make);
        creator.write("this is the contents of the file.")

        creator.close()
    }
}

add(dir)