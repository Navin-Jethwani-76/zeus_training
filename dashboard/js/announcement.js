function addAnnouncements() {
    let newAnnouncements = `<div class='announcements'>`;
    const announcements = document.getElementsByClassName("announcementArea")[0];
    announcements.innerHTML += newAnnouncements;    
    
    var totalAnnouncements = fetch("../json/alerts.json")
        .then(function (data1) {
            return data1.json();
        })
        .then(function (totalAnnouncements) {
            let totalAnnouncemets = totalAnnouncements.length;
            for (let i = 0; i < totalAnnouncemets; i++) {

                let currentAnnouncementName = totalAnnouncements[i].name.replace(/"/g, "")
                let currentAnnouncementTitle = totalAnnouncements[i].title.replace(/"/g, "")
                let newAnnouncement = "";
                if (totalAnnouncements[i].read){
                    newAnnouncement += `<div class="announcement">`;
                }
                else{
                    newAnnouncement += `<div class='announcement unread'>`
                }
                
                newAnnouncement += `<div class="announcementCreater">
                  <p><span>PA :</span> ${currentAnnouncementName}</p>`;

                if (totalAnnouncements[i].read) {
                    newAnnouncement += `<img src="../assets/icons/iconmonstr-check-mark.png" alt="" />`;
                }
                else {
                    newAnnouncement += `
                    <img src="../assets/icons/iconmonstr-minus-6-16.png" alt="" />`;
                }
                newAnnouncement += `
                </div>
                <p class="announcementText">${currentAnnouncementTitle}</p>
                <div class="announcementInfo">`
                if (totalAnnouncements[i].files) {
                    let noOfFiles = totalAnnouncements[i].noOfFiles;
                    newAnnouncement += `<p>${noOfFiles} files are attached</p>`
                }
                newAnnouncement +=
                    `
                  <p class="dateTime">12-sep-2018 at 07:21 pm</p>
                </div>
                </div>`;
                
            announcements.children[0].innerHTML += newAnnouncement.replace(/"/g, "");    
            }
            announcements.innerHTML += `
            <div class="announcementBtns">
                <div class="announcementBtn right-border">SHOW ALL</div>
                <div class="announcementBtn">CREAT NEW</div>
            </div>
            `
            announcements.children[0].innerHTML += `</div>`; 
        });
       
   
}
addAnnouncements();