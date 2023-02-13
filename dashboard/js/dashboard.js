function createOptions(dataList) {
  let optionsHtml = "";
  let totalOptions = dataList.length;
  for (var i = 0; i < totalOptions; i++) {
    optionsHtml += `<option value='${dataList[i]}'>${dataList[i]}</option>`;
  }
  return optionsHtml;
}

function addCards() {
  let mainDiv = document.getElementsByClassName("main-container");

  var datalist = fetch("../json/data.json")
    .then(function (data) {
      return data.json();
    })
    .then(function (datalist) {
      let totalCards = datalist.length;
      document.getElementsByClassName("total-courses")[0].innerHTML = totalCards;
      document.getElementsByClassName("total-courses")[1].innerHTML = totalCards;
      document.getElementById("course-count").innerHTML = totalCards;
      
      for (var i = 0; i < totalCards; i++) {
        currentCardData = datalist[i];

        let title = currentCardData.Title.replace(/"/g, "");
        let subject = currentCardData.Subject.replace(/"/g, "");
        let newCard = `
           <div class="course" id='course-${i + 1}'>`
        if (currentCardData.isAlive == false) {
          newCard += `<span class="expired">EXPIRED</span>`
        }
        newCard += `
        <div class="card">
          <img class="course-img" src="${currentCardData.image}"/>
          <div class="card-content">
            <div class="course-title">${title}</div>
            <div class="subject-grade">
              <div class="subject">${subject}</div>
              <div class="grade">Grade ${currentCardData.Grade}</div>
              <div class="additional-grade">+${currentCardData.additional} </div>
            </div>
            <div class="course-units">
              <div class="units">
                <span class="no-of-units">${currentCardData.Units}</span>
                Units
              </div>
              <div class="lessons">
                <span class="no-of-lessons">${currentCardData.Lessons}</span>
                Lessons
              </div>
              <div class="topics">
                <span class="no-of-topics">${currentCardData.Topics}</span>
                Topics
              </div>
            </div>
            <select name="select-class" id="select-class">`;
        let options = createOptions(currentCardData.classOption);
        newCard += options;
        newCard += `</select>
            <div class="students-dates">
              <span class="no-of-students">${currentCardData.Students}</span>&nbsp; Students`
        if (currentCardData.Start.length > 1) {
          newCard += `<span class="date">${currentCardData.Start} - ${currentCardData.End}</span>`;
        }
        newCard +=
          `</div>
          </div>`;
        if (currentCardData.favourite) {
          newCard += `
            <img class="favourite" src="../assets/icons/favourite.svg" alt="" />`;
        }
        else{
          newCard += `<img class="favourite" src="../assets/icons/Empty_Star.png" alt="" />`;
        }
        newCard += `
        </div>
        <div class="course-icons">`;
        if (currentCardData.optionButton.preview) {
          newCard += `<img id="preview" src="../assets/icons/preview.svg" alt="" />`;
        } else {
          newCard += `<img style="opacity:0.3;" id="preview" src="../assets/icons/preview.svg" alt="" />`;
        }
        if (currentCardData.optionButton.manageCourse) {
          newCard += `<img id="manage" src="../assets/icons/manage course.svg" alt="" />`;
        } else {
          newCard += `<img style="opacity:0.3;" id="manage" src="../assets/icons/manage course.svg" alt="" />`;
        }
        if (currentCardData.optionButton.gradeSubmissions) {
          newCard += `<img id="preview" src="../assets/icons/grade submissions.svg" alt="" />`;
        } else {
          newCard += `<img style="opacity:0.3;" id="preview" src="../assets/icons/grade submissions.svg" alt="" />`;
        }
        if (currentCardData.optionButton.reports) {
          newCard += `<img id="preview" src="../assets/icons/reports.svg" alt="" />`;
        } else {
          newCard += `<img style="opacity:0.3;" id="preview" src="../assets/icons/reports.svg" alt="" />`;
        }
        newCard += `
        </div>
      </div>
           `;

        mainDiv[0].innerHTML += newCard;
      }
    });
}

addCards();
