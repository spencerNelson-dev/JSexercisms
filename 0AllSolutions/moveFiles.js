const fs = require('fs')

const walk = function(dir, destDir) {

    // split out the dir name so we can compare to file name
    let dirArry = dir.split('/')
    let dirName = dirArry[dirArry.length -1]

    // get all files as an array
    let list = fs.readdirSync(dir);

    // loop through each filename
    list.forEach(function(fileName) {

        file = dir + '/' + fileName;

        // is this a directory
        let stat = fs.statSync(file);

        if (stat && stat.isDirectory()) { 
            
            /* Recurse into a subdirectory */
            if (fileName != "node_modules") {
                walk(file, destDir);
            }
            
        } else { 
            
            /* Is a file */
            if (fileName == dirName + ".js") {
                fs.copyFileSync(file, `${destDir}/${fileName}`)
            }
        
        }
    });

    return "Files Moved";
}

// the first parameter is the directory to start looking in
// the second parameter is the directory to copy the files into.
// the destination directory must alread exist
console.log(walk("/Users/spencernelson/helio/practice/js/exercism/javascript","/Users/spencernelson/helio/practice/js/exercism/javascript/0AllSolutions"))