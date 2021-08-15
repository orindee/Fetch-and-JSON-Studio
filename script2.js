window.addEventListener("load", fetchData);
    async function fetchData() {

        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const data = await response.json();
        data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                const div = document.getElementById("container");
      div.innerHTML = `
          <div class="astronaut">
          <div class="bio">
          <h3>${json.firstName.value} ${json.lastName.value}</h3>
             <ul>
                <li>Active status: ${json.active}</li>
                <li>List of skills: ${json.skills}</li>
                <li>Hours in Space: ${json.hoursInSpace}</li>
                </div>
                <img src="${json.picture}" class="avatar">
             </ul></div>
             `;
            });
        })}