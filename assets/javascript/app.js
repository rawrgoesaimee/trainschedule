const firebaseConfig = {
    apiKey: "AIzaSyDt9EfSxQ7dUZbRfOvpJCbbAhS-S0q6UOA",
    authDomain: "traintime-2bb84.firebaseapp.com",
    databaseURL: "https://traintime-2bb84.firebaseio.com",
    projectId: "traintime-2bb84",
    storageBucket: "",
    messagingSenderId: "872420135779",
    appId: "1:872420135779:web:38d8627d8af79e36"
  };

  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();

  let name = ""
  let destination = ""
  let trainTimes = ""
  let reccurence = ""

  $("#submit").on("click", function(event){
    event.preventDefault();
    name = $("#train-name").val().trim()
    destination = $("#destination").val().trim()
    trainTimes = ($("#first-train").val().trim(), "hh:mm").subtract(1, "years").format("X")
    reccurence = $("#frequency").val().trim()

  let name = {
      name: name,
      destination: destination,
      trainTimes: trainTimes,
      reccurence: reccurence
  };

    $("#train-name").val("")
    $("#destination").val("")
    $("#first-train").val("")
    $("#frequency").val("")

  });

  database.ref().on("child_added", function(snapshot){

    $("#train-name").text(snapshot.val().name)
    $("#destination").text(snapshot.val().destination)
    $("#first-train").text(snapshot.val().trainTimes)
    $("#frequency").text(snapshot.val().recurrence)
    
  })
  