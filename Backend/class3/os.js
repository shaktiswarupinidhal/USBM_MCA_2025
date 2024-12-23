const os = require("os")
 

// // custom modules
console.log(os);
 console.log(os.homedir());//C:\Users\dhals
 console.log(os.hostname());// HP15s
 console.log(os.platform());//win32
 console.log(os.release());//10.0.22631
 console.log(os.userInfo());//[Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username: 'dhals',
//     homedir: 'C:\\Users\\dhals',
//     shell: null
//   }
 
console.log(os.userInfo().username);//dhals
console.log(os.totalmem());//16835268608
console.log(os.freemem());//6857789440





