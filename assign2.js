var frnds = ["john medina","Dean L. Radin","w. chan kim","Hal Elrod","runa khan","Kübra Dağlı","Ruma","Lin Quinan","Veronica Roth","Lee Yoo Chan",];
document.write("<h2>My Friends are:</h2><ol>");
for(let name of frnds) {document.write("<li>"+name+"</li>");}
document.write("</ul>");
function largestNameIs(frndsArray) {var targetIndex = 0;
for(var i = 1; i < frndsArray.length; i++) {if(frndsArray[i].length > frndsArray[targetIndex].length)
  {targetIndex = i;}}
return frndsArray[targetIndex];}

var largestName = largestNameIs(frnds);
document.write("<h1>Largest Name of My Friendlist is: <strong><i>"+largestName+"</i></strong></h1>");</script>