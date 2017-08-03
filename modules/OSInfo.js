var os = require('os');
var colors = require('colors');

function getOSinfo() {
	    var type = os.type();
	    if(type === 'Darwin') {
	        type = 'OSX';
	    } else if(type === 'Windows_NT') {
	        type = 'Windows';
	    }
	    var release = os.release();
	    var cpu = os.cpus()[0].model;
	    var uptime = os.uptime();
	    var userInfo = os.userInfo();
	    console.log('System:'.magenta, type);
	    console.log('Release:'.rainbow, release);
	    console.log('CPU model:'.green, cpu);
	    console.log('Uptime: ~'.red, (uptime / 60).toFixed(0), 'min');
	   	//w dokumentacji czas jest w sekundach dlatego dzielimy czas przez 60 i następnie
		//zaokraglony (totFixed) do 0 miejsc po przecinku
	    console.log('User name:'.cyan, userInfo.username);
	    console.log('Home dir:'.yellow, userInfo.homedir);
}

exports.print = getOSinfo;