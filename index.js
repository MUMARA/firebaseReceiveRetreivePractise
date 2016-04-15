var ref = new Firebase("https://umrsalesman.firebaseio.com");

var hopperRef = ref.child("users").child("alanisawesome");
hopperRef.update({
    "data": "q"
});

var hopperRef = ref.child("users").child("umar");
hopperRef.update({
    "umar": "lodhi"
});


var hopperRef = ref.child("users");
hopperRef.update({
    "noor": {
        "Nooruddin":"lodhi"
    }
});