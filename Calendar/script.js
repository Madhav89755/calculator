function pokemon() {
  console.log("its inside the function");
  date = new Date();
  var x = document.getElementById("mon").value;

  var month = "'" + parseInt(x) + "'";
  console.log("month-", month);

  let y = document.querySelector(".yr").value;
  let year = "'" + y + "'";
  year = "2021";
  {
    //   if (
    //     parseInt(month) == 1 ||
    //     parseInt(month) == 3 ||
    //     parseInt(month) == 5 ||
    //     parseInt(month) == 7 ||
    //     parseInt(month) == 8 ||
    //     parseInt(month) == 10||
    //     parseInt(month) == 12
    //   ) {
    //     n = 31;
    //   } else {
    //     if (month == '2') {
    //       if (parseInt(year) % 2 == 0) {
    //         n = 29;
    //       } else {
    //         n = 28;
    //       }
    //     } else {
    //       n = 30;
    //     }
    //   }
  }

  if (
    month == 1 ||3 ||5 ||7 ||8 ||10 ||12) {
    n = 31;
  } else {
    if (month == 2) {
      if (year % 2 == 0) n = 29;
      else n = 28;
    } else {
      n = 30;
    }
  }
  console.log("n is-", n);

  let b = new Date(`${month} 1 ${year}`);
  console.log(b);
  days = b.getDay();
  console.log(days);
  console.log(typeof days);
  let numericDate = 1;
  for (i = 0; numericDate <= n; i++) {
    z = "td" + parseInt(i + 1);
    if (i >= days) {
      document.getElementById(z).innerHTML = `${numericDate}`;
      numericDate++;
    } else {
      document.getElementById(z).innerText = "";
    }
  }
}

document.getElementById("show").addEventListener("click", pokemon);
