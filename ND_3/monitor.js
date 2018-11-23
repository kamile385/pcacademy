const si = require('systeminformation');

setInterval(function() {
    si.mem().then(data => {
        console.log('MEMORY in bytes:');
        console.log('Total        :', data.total);
        console.log('Free         :', data.free);

        let memoryPercentage = (Math.floor((data.used / data.total) * 100));
        console.log('Used         : ' + memoryPercentage + '%');
        console.log('.......................................');
    })
}, 500)