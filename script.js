const parseCode = (str) => {
  // your code here
};
const parts = str.split('0').filter(Boolean);
const firstName = parts[0];
const lastName = parts[1];
const id = parts[2];

return{
	firstName: firstName,
	lastName:lastName,
id:id
};
}

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
