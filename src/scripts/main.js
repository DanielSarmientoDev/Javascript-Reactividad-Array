function printName(name) {
  let msg = "hello";

  console.log({ msg, name });
  $("#header").html(msg + " " + name);
}
printName("");
