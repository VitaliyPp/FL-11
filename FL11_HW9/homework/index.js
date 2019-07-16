function getNumbers(str) {
  let num = [],
			arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }
  for (let i of arr) {
    i = +i;
    if (!isNaN(i)) {
      num.push(i);
    }
  }
  return num;
}

function findTypes() {
  let type = {},
			str = 0, 
			num = 0, 
			obj = 0, 
			und = 0, 
			bul = 0, 
			fun = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      str++;
      if (str > 0) {
        type.string = str;
      }
    } else if (typeof arguments[i] === 'number') {
      num++;
      if (num > 0) {
        type.number = num;
      }
    } else if (typeof arguments[i] === 'object') {
      obj++;
      if (obj > 0) {
        type.object = obj;
      }
    } else if (typeof arguments[i] === 'undefined') {
      und++;
      if (und > 0) {
        type.undefined = und;
      }
    } else if (typeof arguments[i] === 'boolean') {
      bul++;
      if (bul > 0) {
        type.boolean = bul;
      }
    } else {
      fun++;
      if (fun > 0) {
        type.function = fun;
      }
    }
  }
  return type;
}

function executeforEach(arr, fun) {
  for (let i of arr) {
    fun(i);
  }
}

function mapArray(arr, fun) {
  let newArr = [];
  executeforEach(arr, function (i) {
    newArr.push(fun(i));
  });
  return newArr;
}

function filterArray(arr, fun) {
  let newArr = [];
  executeforEach(arr, function (i) {
    if (fun(i)) {
      newArr.push(i);
    }
  });
  return newArr;
}

function showFormattedDate(time) {
  let cut = 4;
  let date = time.toDateString();
  date = date.substring(cut);
  return `Date: ${date}`;
}

function canConvertToDate(time) {
  let date = new Date(time);
  date = date.toDateString();
  return date !== 'Invalid Date';
}

function daysBetween(firstDate, secondDate) {
  let mSecDay = 86400000,
			firstMsec = firstDate.getTime(),
			secondMsec = secondDate.getTime();

  return Math.abs(Math.floor((firstMsec - secondMsec) / mSecDay));
}

function getAmountOfAdultPeople(data) {
  let eighteen = 6570,
    arr = filterArray(
      data,
      function (i) {
        if (daysBetween(new Date(i[' birthday ']), new Date()) > eighteen) {
          return daysBetween(new Date(i[' birthday ']), new Date());
        }
      });
  return arr.length;
}

function keys(obj) {
  let keysArr = [];
  for (let i in obj) {
    if (i) {
      keysArr.push(i);
    }
  }
  return keysArr;
}

function values(obj) {
  let valueArr = [];
  for (let i in obj) {
    if (i) {
      valueArr.push(obj[i]);
    }
  }
  return valueArr;
}
