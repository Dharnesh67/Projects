const { MdSettingsRemote } = require("react-icons/md");

function helo(){
    console.log('helo from c.js');
}
function helo2(){
    console.log('helo2 from c.js');
}

setTimeout(helo,2*1000)
helo2();