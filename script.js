window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      const div = document.getElementById("container");
      div.innerHTML = `
          <div class="astronaut">
          <div class="bio">
          <h3>${json[0].firstName} ${json[0].lastName}</h3>
             <ul>
                <li>Active status: ${json[0].active}</li>
                <li>List of skills: ${json[0].skills}</li>
                <li>Hours in Space: ${json[0].hoursInSpace}</li>
                </div>
                <img src="${json[0].picture}" class="avatar">
             </ul></div>

             <div class="astronaut">
             <div class="bio">
             <h3>${json[1].firstName} ${json[1].lastName}</h3>
             <ul>
                <li>Active status: ${json[1].active}</li>
                <li>List of skills: ${json[1].skills}</li>
                <li>Hours in Space: ${json[1].hoursInSpace}</li>
                </div>
                <img src="${json[1].picture}" class="avatar">
             </ul>
             </div>
             
            <div class="astronaut">
            <div class="bio">
             <h3>${json[2].firstName} ${json[2].lastName}</h3>
             <ul>
                <li>Active status: ${json[2].active}</li>
                <li>List of skills: ${json[2].skills}</li>
                <li>Hours in Space: ${json[2].hoursInSpace}</li>
                </div>
                <img src="${json[2].picture}" class="avatar">
             </ul>
             </div>
            
             <div class="astronaut">
             <div class="bio">
             <h3>${json[2].firstName} ${json[2].lastName}</h3>
             <ul>
                <li>Active status: ${json[2].active}</li>
                <li>List of skills: ${json[2].skills}</li>
                <li>Hours in Space: ${json[2].hoursInSpace}</li>
                </div>
                <img src="${json[2].picture}" class="avatar">
             </ul>
             </div>

             <div class="astronaut">
             <div class="bio">
             <h3>${json[3].firstName} ${json[3].lastName}</h3>
             <ul>
                <li>Active status: ${json[3].active}</li>
                <li>List of skills: ${json[3].skills}</li>
                <li>Hours in Space: ${json[3].hoursInSpace}</li>
                </div>
                <img src="${json[3].picture}" class="avatar">
             </ul>
             </div>

             <div class="astronaut">
             <div class="bio">
             <h3>${json[4].firstName} ${json[4].lastName}</h3>
             <ul>
                <li>Active status: ${json[4].active}</li>
                <li>List of skills: ${json[4].skills}</li>
                <li>Hours in Space: ${json[4].hoursInSpace}</li>
                </div>
                <img src="${json[4].picture}" class="avatar">
             </ul>
             </div>

             <div class="astronaut">
             <div class="bio">
             <h3>${json[5].firstName} ${json[5].lastName}</h3>
             <ul>
                <li>Active status: ${json[5].active}</li>
                <li>List of skills: ${json[5].skills}</li>
                <li>Hours in Space: ${json[5].hoursInSpace}</li>
                </div>
                <img src="${json[5].picture}" class="avatar">
             </ul>
             </div>

             <div class="astronaut">
             <div class="bio">
             <h3>${json[6].firstName} ${json[6].lastName}</h3>
             <ul>
                <li>Active status: ${json[6].active}</li>
                <li>List of skills: ${json[6].skills}</li>
                <li>Hours in Space: ${json[6].hoursInSpace}</li>
                </div>
                <img src="${json[6].picture}" class="avatar">
             </ul>
             </div>
          `;
    });
  });
});
