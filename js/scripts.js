function drawChristmasTree(n) {
  for(var i = 0; i < n; i++) {
      var line = '';
        for(var k = 0; k < n - i - 1; k ++) {
        line += ' '
    }    
      for(var j = 0; j < (i * 2  + 1); j++) {
        line += '*';
    }
      console.log(line);
  }
}

drawChristmasTree(10);
