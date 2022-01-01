function cchange(){
    document.getElementById('p1').style.color = "rgb(250,155,200)";
}

function viewDesc(){
    var x = document.defaultView;
    var w = innerWidth;
    var h = innerHeight;
    document.getElementById('viewdsc').innerHTML = "Width : "+w+"  "+ "Height : " + h;
}