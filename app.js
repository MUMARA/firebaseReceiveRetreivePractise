/*
//var ref = new Firebase("https://umrsalesman.firebaseio.com/web/saving-data/fireblog");
var fredNameRef = new Firebase('https://umrsalesman.firebaseio.com/samplechat/users/fred/name');

//fredNameRef.update({ first: 'Fred', last: 'Flintstone' });

var onComplete = function(error) {
    if (error) {
        console.log('Synchronization failed');
    } else {
        console.log('Synchronization succeeded');
    }
};
fredNameRef.update({ first: 'fad', last: 'umar' }, onComplete);


/!*!/!*
var usersRef = ref.child("users");
usersRef.set({
    alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});
usersRef.child("alanisawesome").set({
    date_of_birth: "June 9999999, 1912",
    full_name: "Alan Turing"
});

usersRef.update({
    "alanisawesome/nickname": "Alan The Machine",
    "gracehop/nickname": "Amazing Grace"
});
*!/
var postsRef = ref.child("posts");
postsRef.push({
    author: "raja",
    title: "jugaar re ray"
});

var newPostRef = postsRef.push();
var postID = newPostRef.key();


var ref = new Firebase("https://umrsalesman.firebaseio.com/web/saving-data/fireblog/posts");

ref.on("value", function(j) {
    console.log(j.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});*!/
*/
