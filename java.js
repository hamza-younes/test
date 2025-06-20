function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let text;
  if (x === "") {
    alert("Name must be filled out");
    text = "Input not valid";
    document.getElementById("demo").innerHTML = text;
    return false;
  } else {
    alert("Welcome");
    text = "Well done";
    document.getElementById("demo").innerHTML = text;
    return false; // prevent submission so <p> shows
  }
}
