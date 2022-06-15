let lastname = document.getElementById("input");

for (let attributes of lastname.attributes) {
  //   console.log(attributes.name);
  //   console.log(attributes.textContent);
}

for (let attributes of lastname.getAttributeNames()) {
  //   console.log(attributes);
}

// console.log(lastname.getAttributeNode("name"));

let lis = document.getElementsByTagName("li");
for (li of lis) {
  if (li.hasAttribute("class")) {
    // console.log(li.innerText);
  }
}

let checkbox = document.getElementById("box");
console.log(checkbox);
checkbox.setAttribute("checked", "checked");

setTimeout(() => {
  checkbox.removeAttribute("checked");
}, 2000);
