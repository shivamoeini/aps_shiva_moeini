const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");

const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username.value;
    const tweetInput = tweetForm.elements.tweet.value;

    addTweet(usernameInput, tweetInput);
    e.target.username.value = "";
    e.target.tweet.value = "";
});

const addTweet = (username, tweet) => {
    // <b>username</b> - tweet
    const li = document.createElement("li");
    li.append(username, ` - ${tweet}`);
    ul.append(li);
};

// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

ul.addEventListener("click", e => {
    //   console.log(e);
    e.target.remove();
});