function addnotifications() {
    let newnotifications = `<div class='notifications'>`;
    const notifications = document.getElementsByClassName("notificationArea")[0];
    notifications.innerHTML += newnotifications;    
    
    var totalnotifications = fetch("../json/notifications.json")
        .then(function (data1) {
            return data1.json();
        })
        .then(function (totalnotifications) {
            let totalAnnouncemets = totalnotifications.length;
            for (let i = 0; i < totalAnnouncemets; i++) {

                let currentnotificationTitle = totalnotifications[i].title.replace(/"/g, "");
                let newnotification = "";
                if (totalnotifications[i].read){
                    newnotification += `<div class="notification">`;
                }
                else{
                    newnotification += `<div class='notification unread'>`
                }
                
                newnotification += `<div class="notificationContent">
                <p class="text">
                ${currentnotificationTitle}
              </p>`;

                if (totalnotifications[i].read) {
                    newnotification += `<img src="../assets/icons/iconmonstr-check-mark.png" alt="" />`;
                }
                else {
                    newnotification += `
                    <img src="../assets/icons/iconmonstr-minus-6-16.png" alt="" />`;
                }
                newnotification += `
                </div>`
                
                if (totalnotifications[i].course.length>0){
                    let notificationCourse = totalnotifications[i].course.replace(/"/g, "");
                    newnotification += `<p class="notificationInfo">
                    <span>Course: </span> ${notificationCourse} </p>
                    `
                }
                let notifiactionDateTime = totalnotifications[i].dateTime.replace(/"/g, "");
                newnotification +=
                    `
                  <p class="dateTime">${notifiactionDateTime}</p>
                </div>
                `;
                
            notifications.children[0].innerHTML += newnotification.replace(/"/g, "");    
            }
            notifications.innerHTML +=
            `
            <div class="notificationBtn">Show All</div>
            `;
            notifications.children[0].innerHTML += `</div>`; 
        });
       
   
}
addnotifications();