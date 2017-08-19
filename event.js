var events=require('events');
var eventEmitter= new events.EventEmitter();

//create an event handler
myhandler=function(){
	console.log('Hello World!');
}
// add an event listenner
 eventEmitter.on('action',myhandler);
 var s=0;
 var timeout=setInterval(function(){
	 s+=1;
	 if(s%1000==0)
	 console.log("Event will be fire in"+s/1000+" seconds"); 
	 if(s==5000){
		 eventEmitter.emit('action');
		 clearInterval(timeout);
	}	 
 });
 
 // we fire event action
