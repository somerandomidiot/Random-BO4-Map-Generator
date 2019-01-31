function getMap() {

  document.getElementById('welcomemsg').style = "display: none;";
  document.getElementById('game').style = "display: block;";

let normalmaps = [
"Arsenal",
"Contraband",
"Firing Range",
"Frequency",
"Gridlock",
"Hacienda",
"Icebreaker",
"Jungle",
"Militia",
"Morocco",
"Payload",
"Seaside",
"Slums",
"Summit"
];

let dlcMaps = [
"Elevation",
"Madagascar",
"Nuketown"
];


let pickMap = Math.floor(Math.random() * normalmaps.length);
let numtotext = normalmaps[pickMap];

let len = dlcMaps.length;
let len2 = normalmaps.length;
document.getElementById('includedlc').innerHTML = `Include DLC maps (${len} maps total)`

let getDLC = document.getElementById('dlccheck').checked;

if (getDLC == true) {
Array.prototype.push.apply(normalmaps, dlcMaps);
}

console.log(normalmaps)

console.log(`At ${new Date()}, user got the map:\n"${numtotext}"`)
document.getElementById('displaymap').innerHTML = numtotext;
}
