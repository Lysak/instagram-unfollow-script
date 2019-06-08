if (typeof buttonTags === 'undefined') {
    let buttonTags, count, buttonTagsCancel, searchText, found;
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
                console.log('https://lysak.github.io/' + ' - ' + (i - 6));
            }
            
        }, timeToStart);

        setTimeout(function () {
            buttonTagsCancel = document.getElementsByTagName("button");
            for (let j = 0; j < buttonTagsCancel.length; j++) {
                if (buttonTagsCancel[j].textContent == searchText) {
                    found = buttonTagsCancel[j];
                    buttonTagsCancel[j].click();
                    break;
                }
            }
			console.log('unfollow ' + new Date().toISOString().replace(/T|Z|\.\d{3}/g, ' ').trim());
        }, timeToStart + 1000);
    })(i);
    count++;
}