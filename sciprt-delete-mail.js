const spamMails = [
  "discord",
  "riot games",
  "topdev",
  "stack overflow",
  "google maps timeline",
  "shopee",
  "riot games 2",
  "google",
  "adblock",
  "github",
  "google 2",
  "facebook",
  "edmodo",
];
const mouseDownEvent = new MouseEvent("mousedown");
const mouseUpEvent = new MouseEvent("mouseup");

const btnDelete = document.querySelector(
  "div.T-I.J-J5-Ji.nX.T-I-ax7.T-I-Js-Gs.mA"
);

const deleteMails = () => {
  console.log("Processing ...");
  let hasChecked = false;

  const btnNext = document.querySelector("div.T-I.J-J5-Ji.amD.T-I-Js-Gs");
  let noHasOld = btnNext.getAttribute("aria-disabled");
  if (noHasOld == "true") {
    console.log("End handler");
    return;
  }
  const Mails = document.querySelectorAll("tr.zA");
  Array.from(Mails).forEach((item) => {
    let title = item.querySelector(".yW").textContent;
    let spamMailTitle = title.toString().toLowerCase();

    if (checkInclude(spamMailTitle)) {
      const checkbox = item.querySelector("div.oZ-jc.T-Jo.J-J5-Ji");
      hasChecked = true;
      checkbox.click();
    }
  });

  if (hasChecked) {
    fireEvent(btnDelete);
    console.log("Next");
    setTimeout(() => {
      deleteMails();
    }, 10000);
  } else {
    console.log("Run click next");
    fireEvent(btnNext);
    setTimeout(() => {
      deleteMails();
    }, 10000);
  }
};

function fireEvent(element) {
  element.click();
  element.dispatchEvent(mouseDownEvent);
  element.dispatchEvent(mouseUpEvent);
}

function checkInclude(stringCheck) {
  return spamMails.some((item) =>
    stringCheck.toLowerCase().includes(item.toLowerCase())
  );
}

deleteMails();
