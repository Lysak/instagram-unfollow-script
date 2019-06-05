let aTags = document.getElementsByTagName("button");

let count = 1;
for (let i = 11; i < aTags.length; i++) {
    (function (i) {
        let timeToStartNote = 4000 * count;
        setTimeout(function () {
            aTags[i].click();
            console.log('https://lysak.github.io/' + ' - ' + i);
            // unfollow
            let searchText = "Отменить подписку";
            let found;
            let aTagsCancel = document.getElementsByTagName("button");
            for (let j = 0; j < aTagsCancel.length; j++) {
                if (aTagsCancel[j].textContent == searchText) {
                    found = aTagsCancel[j];
                    aTagsCancel[j].click();
                    break;
                }
            }
            // end unfollow
        }, timeToStartNote);
    })(i);
    count++;
}