var running = true;
self.addEventListener('message', function(e) {
var prime = 3;
  if (e.data == 'stop') {
    running = false;
    return;
  } else {
   running = true;
    prime = e.data;
  }
  
  var interval = setInterval( function(){
    prime =  getPrime(prime);
    self.postMessage(prime);
    if (prime > 1000000 || !running) {
        clearInterval(interval);
    }
    prime++;
  } , 2);
}, false)



function getPrime(prime) {

  for(;;) {
    if (isPrime(prime)) {
      return prime;
    } else {
      prime++;
      if (prime > 1000000) {
        return prime;
      }
    }
  }
  
}

function isPrime(prime) {
  var b = true;
  for (i = 2; i <= prime / 2; i++) {
    if ( prime % i == 0) {
      b = false;
      break;
    }
  }
  return b;
  

}