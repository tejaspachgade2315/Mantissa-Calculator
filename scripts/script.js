const lightTheme="styles/light.css";
const darkTheme="styles/dark.css";
const sunIcon="assets/sunIcon.svg";
const moonIcon="assets/MoonIcon.svg";
const themeIcon=document.getElementById("theme-icon");
const res = document.getElementById("res");
const toast = document.getElementById("toast");


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

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
      toast.innerHTML = "Calculator";
    }, 1500);
    if (theme.getAttribute("href") === lightTheme) {
      theme.setAttribute("href", darkTheme);
      themeIcon.setAttribute("src", sunIcon);
      toast.innerHTML = "Dark Mode 🌙";
    } else {
      theme.setAttribute("href", lightTheme);
      themeIcon.setAttribute("src", moonIcon);
      toast.innerHTML = "Light Mode ☀️";
    }
  }
  
  // Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}
//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  e.preventDefault();

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  if (e.key === ".") {
    res.value += ".";
  }

 
  if (e.key === "Enter") {
    calculate(result.value);
  }
}