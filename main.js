let theInput = document.querySelector(".get-repo input");

let getButton = document.querySelector(".get-repo .get-button");

let reposData = document.querySelector(".no-data");

getButton.onclick = function() {
    getRepos();
}

function getRepos() {
    if(theInput.value == "") {
        reposData.innerHTML = `<span>Please Write Your Github UserName </span>`;
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((responseValue) => responseValue.json())
        
        .then((responseValue) => {
            console.log(responseValue);
           reposData.innerHTML = "";

           responseValue.forEach((repo) => {
            let mainDiv = document.createElement("div");

            mainDiv.className = "repo-text";

           let text = document.createTextNode(`${repo.name}`);

           mainDiv.appendChild(text);

           let theUrl = document.createElement("a");

           theUrl.className = "link";

           let theUrlText = document.createTextNode("Visit");

           theUrl.href = `https://api.github.com/users/${theInput.value}/${repo.name}`;

           theUrl.appendChild(theUrlText);

           mainDiv.appendChild(theUrl);
           let idSpan = document.createElement("span");

           idSpan.className = "id";

           let idText = document.createTextNode(`Id ${repo.id}`);

           idSpan.appendChild(idText)

           mainDiv.appendChild(idSpan);

           reposData.appendChild(mainDiv)
           })
        })
    }
}

fetch("https://jsonplaceholder.typicode.com/comments")
.then((response) => response.json())
.then((response) => {
    console.log(response)
   response.forEach((repo) => {

    let myDiv = document.createElement("div");

    myDiv.className = "my-div";

    let mypOne = document.createElement("p");

    let mypOneText = document.createTextNode(`PostId: ${repo.postId}`);

    mypOne.appendChild(mypOneText);

    myDiv.appendChild(mypOne);

    let mypTwo = document.createElement("p");

    let mypTwoText = document.createTextNode(`Id: ${repo.id}`);

    mypTwo.appendChild(mypTwoText);

    myDiv.appendChild(mypTwo);

    let mypThree = document.createElement("p");

    let mypThreeText = document.createTextNode(`Name: ${repo.name}`);

    mypThree.appendChild(mypThreeText);

    myDiv.appendChild(mypThree);

    let mypFour = document.createElement("p");

    let mypFourText = document.createTextNode(`Email: ${repo.email}`);

    mypFour.appendChild(mypFourText);

    myDiv.appendChild(mypFour);

    let mypFive = document.createElement("p");

    let mypFiveText = document.createTextNode(`Body: ${repo.body}`);

    mypFive.appendChild(mypFiveText);

    myDiv.appendChild(mypFive)

    document.body.appendChild(myDiv)
   })
})