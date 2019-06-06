let buttonTags = document.getElementsByTagName("button");
let count = 1;
let buttonTagsCancel = document.getElementsByTagName("button");
let searchText = "Отменить подписку";
let found;
let i;
let j;

buttonTags = document.getElementsByTagName("button");
count = 1;
for (i = 11; i < buttonTags.length; i++) {
    (function (i) {
        let timeToStartNote = 29000 * count;
        setTimeout(function () {
            buttonTags[i].click();
            console.log('https://lysak.github.io/' + ' - ' + i);
        }, timeToStartNote);

        setTimeout(function () {
            buttonTagsCancel = document.getElementsByTagName("button");
            for (j = 0; j < buttonTagsCancel.length; j++) {
                if (buttonTagsCancel[j].textContent == searchText) {
                    found = buttonTagsCancel[j];
                    buttonTagsCancel[j].click();
                    break;
                }
            }
			console.log('unfollow');
        }, +timeToStartNote + 1000);
    })(i);
    count++;
}