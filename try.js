var k=0
var j=0;
var k=0;
function tryfun(event)
{
    var item=document.getElementById('itemlist');
    var text=document.getElementById('input').value;
    var color=["#009F93", "#FFDB60", "#FC7651","#F9546B","#553B80"," #EDB43D"];
    if(event.keyCode== 13)
   {
    var temp=document.createElement("div");
    temp.id="newinput";
    var temp1=document.createElement("button");
    temp1.innerText="Remove Me";
      if(k<6)
      {
        temp.style.backgroundColor=color[k++];
      }
      else
      {
        k=0;
        temp.style.backgroundColor=color[k++];
      }
      temp.style.width=375+"px";
      temp.style.height=70+"px";
      temp.style.border="thick solid black";
      temp.innerHTML=text;
      temp.style.borderRadius=10+"px";
      temp.style.position="relative";
      temp.style.marginTop=10+"px";
      temp.style.padding=5+"px";
      temp.id=j;
      temp.value=j;

      item.appendChild(temp);
      temp1.style.position="absolute";
      temp1.style.left=400+"px";
      temp1.style.top=5+"px";
      temp1.style.width=70+"px";
      temp1.style.height=70+'px';
      temp1.style.borderRadius="50%";
      temp1.style.backgroundColor="brown";
      temp1.style.color="white";
      temp1.id=j;
      temp1.value=j;
      temp.appendChild(temp1);
      var template=document.getElementById(j);
      template.onclick=function removefun(){
        var temp2=k;
        var tempinp=document.getElementById('itemlist');
        if(tempinp.hasChildNodes())
        {
              tempinp.removeChild(tempinp.childNodes[0]);
        }
      }
      j=j+1;
      k++;
   }
}
