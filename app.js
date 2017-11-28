
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
var http = require('http');

var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// myReadStream.pipe(myWriteStream);//pipe creation
// myReadStream.on('data', function(chunk){
// 	console.log('new chunk received:');
// 	myWriteStream.write(chunk);
	
// 	// console.log(chunk);
// });
// server creation example
var server = http.createServer(function(req,res){
	console.log('request was made: '+ req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname +'/index.html').pipe(res);
		
	}else if(req.url === '/contact'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname +'/contact.html').pipe(res);
	}else if(req.url === '/api'){
		var myObj = [{name:'ryu',job:'ninja',age:100},{name:'joshi',job:'ninja',age:200}];
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(myObj));
	}else{
		res.writeHead(404, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname +'/404.html').pipe(res);
	}
	// res.writeHead(200,{'Content-Type': 'application/json'});
	// var myObj = {
	// 	name:'ryu',
	// 	job:'ninja',
	// 	age:100
	// };
	// res.end(JSON.stringify(myObj));
	// var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
	// myReadStream.pipe(res);
	// res.end('hey ninjas');
});


server.listen(3000,'127.0.0.1');
console.log('listening to port 3000');