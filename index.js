const fs = require('fs');

//Create Directory
// fs.mkdir('FileSystem', function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Directory Created")
//     }
// });

//Remove Directory
// fs.rmdir('FileSystem', function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Directory Removed")
//     }
// });

//Write File 
// fs.writeFile("data.txt", "Welcome to DCS, VNSGU!", function(err, result){
//     if(err) {
//         console.log(err);
//     }else{
//         console.log("File saved Successfully :)");
//     }
// });

//Read File 
// fs.readFile("data.txt", "utf8", function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

//Append data to file
// fs.appendFile("data.txt", "Department of Computer Science", function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Updated :)");
//     }
// });

//Update / Replace file with new data
// fs.writeFile("Data.txt", "Hi My Name is Riddhi.", function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Data Updated :)");
//     }
// });

//Rename File
// fs.rename("data.txt", "Data.txt", function(err, data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Rename Successfully :)");
//     }
// });

//Delete File
fs.unlink("data.txt", function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("File Deleted Successfully :)");
    }
});