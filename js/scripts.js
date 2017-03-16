function drawChristmasTree(n) {
  for(var i = 0; i < n; i++) {
    var star = '';
        for(var k = 0; k < n - i - 1; k ++) {
        star += ' '
    }    
    for(var j = 0; j < (i * 2  + 1); j++) {
        star += '*';
    }
    console.log(star);
  }
}

drawChristmasTree(10);