const questions = document.querySelectorAll(".question");  //get question 

questions.forEach((button) => {
  button.addEventListener("click", () => {      
    const answer = button.nextElementSibling;
                                                              // set display to block
    const visible = answer.style.display === "block";
    document
      .querySelectorAll(".answer")
      .forEach((a) => (a.style.display = "none"));
                                                            //if not block, set block
    if (!visible) {
      answer.style.display = "block";
    }
  });
});



const toggle = document.querySelectorAll(".toggle");

toggle.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;

    const visible = details.style.display === "block";

    if (!visible) {
      details.style.display = "block";
      button.textContent = "Show less";          ///changing button texts
    } else {
      details.style.display = "none";
      button.textContent = "Show more";
    }
  });
});

