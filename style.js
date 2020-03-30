function openProductsTab(ev,tabName){
    var i, tabsContent, tablinks;
tabsContent = document.getElementsByClassName("tabsContent");
for (i = 0; i < tabsContent.length; i++) {
    tabsContent[i].style.display="none";
    }
tablinks = document.getElementsByClassName("tablinks");
for (i= 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active","");
}  
document.getElementById(tabName).style.display="block";
ev.currentTarget.className +="active";
}

document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById("popularButton").click();
});