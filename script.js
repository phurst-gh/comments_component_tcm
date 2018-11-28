function buildComment() {
        let newComment, usersName, timePosted, postDraft;

        //1. Gather Data
        newComment = document.querySelector('#commInp').value;
        usersName = 'John Doe'; //Display purposes
        timePosted = 'Just now'; //Display purposes
        console.log(newComment);

        //2. Create template HTML
        postDraft = '<div class="commWrap"><img class="avatarMed" src="comm_avatar.png" alt="User account avatar" /><div class="postInfo"><span class="userName textGreen textSemiBold">%namePlacehold%</span><span class="timePosted textRegularSml">%timePlacehold%</span><p class="userComm textRegularLrg">%commentPlacehold%</p><div class="commActionWrap"><div class="commAction commLike"><i class="fas fa-thumbs-up"></i>Like</div><div class="commAction commReply"><i class="fas fa-reply"></i>Reply</div></div></div></div>';

        //3. Update template HTML with poster's data
        postFinal = postDraft.replace('%commentPlacehold%', newComment);
        postFinal = postFinal.replace('%namePlacehold%', usersName);
        postFinal = postFinal.replace('%timePlacehold%', timePosted);

        //4. Update UI with new post
        document.querySelector('.commWrapAll').insertAdjacentHTML('beforeend', postFinal);
};

//Event Listeners
document.querySelector('.postCommBtn').addEventListener('click', buildComment);
document.querySelector('.postCommBtn').addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        buildComment();
    };
});