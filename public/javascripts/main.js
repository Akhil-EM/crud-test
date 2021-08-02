var apiCount = 0;
let count = 0
var string = `<p class = 'snippet-p'onclick = 'setCount(${apiCount})' > ${apiCount } </p>`
document.getElementById("snippet")
    .innerHTML = string;

function setCount(_count) {
    if (count !== _count) {
        console.log('if')
        count = _count
    } else {
        console.log('else')
        return;
    }
    count = count % 100;
    string = `<p class = 'snippet-p'onclick = 'setCount(${count})' > ${count } </p>`
    document.getElementById("snippet")
        .innerHTML = string;
    playNotification();
}

function playNotification() {
    try {
        console.log('notification playing now..!!')
        const audio = new Audio('/music/notification.mp3');
        audio.play();
    } catch (err) {
        console.log(errr)
    }
}

const userAction = async() => {
    const response = await fetch('https://student-registory.herokuapp.com/user-count');
    myJson = await response.json(); //extract JSON from the http response
    setCount(myJson.userCount)
}


setInterval(userAction, 2000);