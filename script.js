var theDiv = document.getElementById("aDivFR");

var ext = window.location.pathname.split('-');
document.getElementById("hmm").textContent = ext;
//  [file type]-[file name]
if (ext == undefined || ext == "") {  window.location.replace("https://www.fluffyy.dev"); }

if (ext[0] == "mp4") {
    var video = document.createElement("video");
    theDiv.appendChild(video);
    var source = document.createElement("source");
    source.src = "/storage/mp4/" + ext[1] + "." + "mp4";
    source.type = "video/mp4";
    video.controls = "controls";
    video.innerHTML = "Video cannot load";
    video.height = "650"
    video.appendChild(source);
}
