// 1. Use a free API from the internet and feed your app with live data

/*
let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += `
            <div class="card" style="width: 18rem">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5> 
                <p class="card-text">Status is ${contests[item].status}</p>
                <p>Starts at: ${contests[item].start_time}</p>
                <p>End at: ${contests[item].end_time}</p>
                <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
            </div>
        </div>
            `;
    }
  });

cardContainer.innerHTML = ihtml;

*/

// Notes App 

// 2. Create a Note saving app which store your note to local storage

let n = localStorage.getItem("note");
alert("Your note is " + n);

// 3. Repeat the last question and fetch the note which was saved

let a = prompt("Enter your note");
if (a) {
  localStorage.setItem("note", a);
}

// 4. Delete the note i the previous question

let c = confirm("Do you want to delete this note?");
if (c) {
  localStorage.removeItem("note");
}
