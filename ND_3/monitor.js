const si = require('systeminformation');
let os 	= require('os-utils');
const CONFIG = require("./config.js");

setInterval(printPcStatistics, CONFIG.TIME_INTERVAL);

function printPcStatistics(){
    printCPUUsage();
    printRAMUsage();
    console.log('...........................');
};

function printCPUUsage() { 
    os.cpuUsage(function(v){
        console.log('CPU Usage    : ' + (Math.floor(v * 100)) + ' %');
    });
}

function printRAMUsage() {
    si.mem().then(data => {
        console.log('MEMORY in bytes:');
        console.log('Total        :', data.total);
        console.log('Free         :', data.free);

        let memoryPercentage = (Math.floor((data.used / data.total) * 100));
        console.log('Used         : ' + memoryPercentage + ' %');
    });
}