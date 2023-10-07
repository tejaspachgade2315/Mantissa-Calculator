function calculate(number){
    let idx = 0;
    let ans = new Array(23);
    while (idx < 23) {
      number = number * 2;
      let temp = number.toString();
      var temporary=temp;
      let t = temp.charAt(0);
      ans[idx] = t;
      if (t === '1') {
        temp = temp.replace(t, '0');
      }
      console.log(temporary+" ==> " + temp);
      number = parseFloat(temp);
      idx++;
    }
    return ans;
  }

let mantissa = 0.953125;
let ans = calculate(mantissa);
console.log(ans);