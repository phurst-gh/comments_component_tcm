const moduleUI = (function() {

    return {
        getPostData: function() {
            return {
                name: 'John Doe', // Display purposes - link to account name here
                timePosted: 'Just now', // Display purposes only - link to function that calculates time posted
                comment: document.querySelector('#commInp').value
            }
        },

        buildComment: function(timePostedArg, commentArg, nameArg) {
            let postDraft;

            //1. Create template HTML
            postDraft = '<div class="commWrap"><img class="avatarMed" src="comm_avatar.png" alt="User account avatar" /><div class="postInfo"><span class="userName textGreen textSemiBold">%namePlacehold%</span><span class="timePosted textRegularSml">%timePlacehold%</span><p class="userComm textRegularLrg">%commentPlacehold%</p><div class="commActionWrap"><div class="commAction commLike"><i class="fas fa-thumbs-up"></i>Like</div><div class="commAction commReply"><i class="fas fa-reply"></i>Reply</div></div></div></div>';

            //2. Update template HTML with poster's data
            postFinal = postDraft.replace('%timePlacehold%', timePostedArg);
            postFinal = postFinal.replace('%commentPlacehold%', commentArg);
            postFinal = postFinal.replace('%namePlacehold%', nameArg);

            return postFinal;
        },

        updateUI: function(comment) {
            document.querySelector('.commWrapAll').insertAdjacentHTML('beforeend', comment);
        },
        
        clearPostInp: function() {
            document.querySelector('.commInp').value = '';
            document.querySelector('.commInp').focus();
        }
    }
})();


const moduleController = (function(UIModule) {

    // Event Listeners
    let setEventListeners = function() {
        document.querySelector('.postCommBtn').addEventListener('click', commentControl);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                commentControl();
            };
        });
    }

    // Handle comment
    let commentControl = function() {
        let userData, newComment;
        
        //1. Retrieve new post data
        userData = UIModule.getPostData();
        
        if (userData.comment !== '') {
            //2. Build new post HTML
            newComment = UIModule.buildComment(userData.timePosted, userData.comment, userData.name);

            //3. Print data to UI
            UIModule.updateUI(newComment);

            //4. Clear users input
            UIModule.clearPostInp();
        };
    };

    return {
        init: function() {
            console.log('Component started.');
            setEventListeners();
        }
    }
})(moduleUI);


moduleController.init();








