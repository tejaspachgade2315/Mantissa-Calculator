function calculate(number){
    let idx = 0;
    let ans = new Array(23);
    while (idx < 23) {
      number = number * 2;
      let temp = number.toString();
      console.log(temp);
      let t = temp.charAt(0);
      ans[idx] = t;
      if (t === '1') {
        temp = temp.replace(t, '0');
      }
      console.log(" ==> " + temp);
      number = parseFloat(temp);
      idx++;
    }
    return ans;
  }

  