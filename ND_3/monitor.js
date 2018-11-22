const si = require('systeminformation');

setInterval(function() {
    si.mem().then(data => {
        console.log('MEMORY in bytes:');
        console.log('Total        :', data.total);
        console.log('Used         :', data.used);
        console.log('Not used     :', data.free);

        let CPUpercentage = (Math.floor((data.used / data.total) * 100));
        console.log(CPUpercentage + '%');
        console.log('.......................................');
    })
}, 500)