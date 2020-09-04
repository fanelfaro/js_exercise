#!/usr/bin/env node

const yargs = require("yargs");
var fs = require("fs");



const options = yargs
 .usage("Usage:\n-n <name> \n-pn <pnumber>")
 .option("n", { alias: "name", describe: "The name", type: "string", demandOption: true })
 .option("p", { alias: "pnumber", describe: "The phone number", type: "int", demandOption: true })
 .argv;



if(options.name && options.pnumber){
    console.log(check_blacklist(options.name, options.pnumber));
}



function initialize(black_list = "files/blacklist.txt"){
    var blacklist_data;
    try{
        // console.log("Membaca blacklist yang tersimpan...");
        blacklist_data = fs.readFileSync(black_list, 'utf8').split(/\r?\n/);
        return blacklist_data;
    }catch(e){
        console.log('Error:', e.stack);
    }
}

function check_blacklist(uname, uphone){
    try{
        test = uname+" "+uphone.toString();
        console.log(`apakah { ${test} } termasuk dalam blacklist?`);
        return readFile().includes(test);
    }catch(e){
        console.log('Error:', e.stack);
    }
}
