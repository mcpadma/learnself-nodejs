
// event emitter code example
// var events = require('events');
// // var myEmitter = new events.EventEmitter();
// // myEmitter.on('someEvent',function(mssg){
// //     console.log(mssg);
// // });
// // myEmitter.emit('someEvent','the event was emitted');
// var util = require('util');
// var person = function(name){
//     this.name = name;
// };
// util.inherits(person,events.EventEmitter);
// var james = new person('james');
// var johny = new person('john');
// var marry = new person('marry');
// var people = [james, johny, marry];
// people.forEach(function(person){
//     person.on('speak',function(mssg){
//         console.log(person.name +  ' said ' +mssg)
//     })
// });
// james.emit('speak','hey dudes');
// johny.emit('speak','hi');
// // element.on('click',function(){})



// reading and writing file code example
// var  fs = require('fs');
// sync method
// var readme = fs.readFileSync('readme.txt', 'utf8');
// // console.log(readme);
// fs.writeFileSync('writeme.txt', readme);
// Async method
// fs.readFile('readme.txt','utf8',function(err,data){
//     // console.log(data);
//     fs.writeFile('writeme.txt',data);
// });
// deleting file
// fs.unlink('writeme.txt');
// console.log('text');



// creating directory
// var  fs = require('fs');
// fs.mkdirSync('stuff');//to create a folder or directory
// fs.rmdirSync('stuff');//to remove a folder or directory
// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('writeme.txt',data);
//     });
// });
// fs.unlink('writeme.txt',function(){
//     fs.rmdir('stuff');
// });
