function cal()
{
    var length=document.getElementById("length").value
    var width=document.getElementById("width").value
    var height=document.getElementById("height").value
    
    if(length==""&&width==""&&height=="")
    {
        alert("enter length,width and height")
    }
    else if(length==""){
        alert("enter length");
        return
    }
    else if(width=="")
    {
        alert("enter width");
        return
    }
    else if(height=="")
    {
        alert("enter height");
        return
    }
    var x;
    x=2*length*width+2*length*height+2*height*width;
    console.log(length,width)
  var p= document.getElementById("demo").innerHTML='The area of Cuboid is '+x;
}