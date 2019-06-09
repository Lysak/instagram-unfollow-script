if (typeof buttonTags === 'undefined') {
    let buttonTags, count, buttonTagsCancel, searchText, found, tmp;
}

buttonTags = document.getElementsByTagName("button");
count = 1;
buttonTagsCancel = document.getElementsByTagName("button");
searchText = "Отменить подписку";

for (let i = 7; i < buttonTags.length; i++) {
    (function (i) {
        let timeToStart = (count === 1 ? 1000 : 44000) * count;
        setTimeout(function () {
            buttonTags[i].click();
            if (i % 10) {
                tmp = ('#' + (i - 6) + ' - ' + 'https://lysak.github.io/');
            }
        }, timeToStart);

        setTimeout(function () {
            buttonTagsCancel = document.getElementsByTagName("button");
            for (let i = 0; i < buttonTagsCancel.length; i++) {
                if (buttonTagsCancel[i].textContent == searchText) {
                    found = buttonTagsCancel[i];
                    buttonTagsCancel[i].click();
                    break;
                }
            }
            console.log('unfollow ' + new Date().toLocaleTimeString() + ' ' + tmp);
        }, timeToStart + 1000);
    })(i);
    count++;
}