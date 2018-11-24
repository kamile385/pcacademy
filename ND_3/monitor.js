const si = require('systeminformation');
let os 	= require('os-utils');

let time_interval = 500;

setInterval(function() { 
    si.mem().then(data => {
        console.log('MEMORY in bytes:');
        console.log('Total        :', data.total);
        console.log('Free         :', data.free);

        let memoryPercentage = (Math.floor((data.used / data.total) * 100));
        console.log('Used         : ' + memoryPercentage + ' %');
    });
    os.cpuUsage(function(v){
        console.log('CPU Usage    : ' + (Math.floor(v * 100)) + ' %');
    });
    console.log('...........................');
}, time_interval)