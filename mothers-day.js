saftaChange = false;
function saftaButton() {
  saftasButton = document.getElementById("safta-button");

  if(saftaChange == false) {
    saftasButton.innerHTML = "Happy Mother's Day! I love you so much and am so happy to be able to have such an amazing grandma. Not only do you make the best food, you have done so much ot make me happy. I love yours and saba's stories about your childhood and time in Israel. Some of my best ever memories were at your house sleeping over. I love you and I hope you have a great mother's day.";
    saftasButton.style.fontSize = "25px";
    saftaChange = true;
  }
  else {
   saftasButton.innerHTML = "Safta";
   saftasButton.style.fontSize = "50px";
   saftaChange = false;
  }

}

momChange = false;
function momButton() {
  momsButton = document.getElementById("mom-button");

  if(momChange == false) {
    momsButton.innerHTML = "Happy Mother's Day momma! I love you so much and you are the best mom I could ever ask for. Whenever I asked you for anything, you are there for me. Whether it is cooking or taking college classes in middle school, you have helped me through it. You helped me get through harder times like Covid. I hope you have an amazing Mother's day. I love you to the moon and back.";
    momsButton.style.fontSize = "25px";
    momChange = true;
  }
  else {
    momsButton.innerHTML = "Mom";
    momsButton.style.fontSize = "50px";
    momChange = false;
  }

}

nanaChange = false;
function nanaButton() {
  nanasButton = document.getElementById("nana-button");

  if(nanaChange == false) {
    nanasButton.innerHTML = "Happy Mother's Day Nana! I love you so much and you are the best grandma a person could ask for. You would pick me up school, teach me everything there is to know, and spend time with me. I really appreciate everything you have done. You even taught me how to play sports (Maybe it was saba, I can't remember). I love you so much and I hope your Mother's day is fantastic.";
    nanasButton.style.fontSize = "25px";
    nanaChange = true;
  }
  else {
    nanasButton.innerHTML = "Nana";
    nanasButton.style.fontSize = "50px";
    nanaChange = false;
  }

}

gigiChange = false;
function gigiButton() {
  gigisButton = document.getElementById("gigi-button");

  if(gigiChange == false) {
    gigisButton.innerHTML = "Happy Mother's Day Gigi! I love you so much. You are an amazing grandma and an amazing mom. You seem to know everything. From knowing how to work with computers, to hardware, to finance, and every handyman thing I would want to know. You have taught me so much and there is still so much I have to learn from you. I hope you have a fantastic mother's day and I love you so much! ";
    gigisButton.style.fontSize = "25px";
    gigiChange = true;
  }
  else {
    gigisButton.innerHTML = "Gigi";
    gigisButton.style.fontSize = "50px";
    gigiChange = false;
  }

}