var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var arrayKey = [
  "fuel",
  "speed",
  "distance",
  "becon",
  "door_lock_status",
  "con_status",
  "location",
  "env_temp",
  "gear_pos",
  "v_temp",
  "ac_status",
  "fuel_flow_rate",
  "engine_temp",
  "tyre_pressure",
  "battery_status",
  "vehicle_name",
  "brake_cond",
  "veh_type",
  "veh_weight",
  "servicing_status",
  "mobilise_status",
  "crank_status",
  "veh_no",
  "sos",
  "breakdown_stat",
  "airbag_stat",
  "seatbelt_status"
];

// var myMap = new Map();
// for (var i = 0; i < 13; i++) {
//   myMap.set(arrayKey[i], Math.random());
// }

var x = false;

app.get("/", function(req, res) {
  console.log("now excecuted");
  res.sendFile(__dirname + "/display.html");
});

io.on("connection", function(socket) {
  // x = false;
  allMap();
  console.log("a user connected");
});

http.listen(3001, function() {
  console.log("listening on *:3001");
  // console.log("callled" + x);
});

function allMap() {
  for (var i = 0; i < 27; i++) {
    msg = { key: arrayKey[i], value: Math.floor(Math.random() * 1000000) };
    io.emit("message", msg);
    console.log(msg);
  }
}

setInterval(function() {
  // if (!x) {
  //   x = true;
  //   allMap();
  // }
  //   console.log("called................" + x);
  msg = {
    key: arrayKey[getRandomInt(27)],
    value: Math.floor(Math.random() * 1000000)
  };
  io.emit("message", msg);
  console.log(msg);
}, 700);
