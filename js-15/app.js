const tweetform = document.querySelector("#tweetform")
const ul = document.querySelector("#tweets")

tweetform.addEventListener("submit", e => {
    e.preventDefault();
    console.dir(tweetform)
    const useranmeinput = e.target.username.value;
    const tweetinput = e.target.tweet.value;


    if (!useranmeinput || !tweetinput) {
        alert("  yechi benvise kho, mage shahreerte ? ")
        return
    }
    addTweet(useranmeinput, tweetinput)
    e.target.username.value = "";
    e.target.tweet.value = "";

})
const addTweet = (username, tweet) => {
    const li = document.createElement("li")
    const b = document.createElement("b")
    b.append(username)
    li.append(b, `- ${tweet}`)
    ul.append(li)
}