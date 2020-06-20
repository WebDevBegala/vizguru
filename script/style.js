$(document).ready(() => {
   console.log("Ready")
   if ($(document).width() <= 500) {
      console.log("Mobil")
      $(".content7 > .left").css("height")
      $("p").css("font-size", "3.5vw")
      $(".list-icon").css("font-size", "4vw");
      $(".list-icon-incorrect").css("font-size","4vw");
      $("p").css("font-size", "4vw");
      $("body > div.root > div.dia.dia3 > div > div > div.left > .list-item > p").css("font-size", "5vw");
      $("body > div.root > div.dia.dia5 > div > div > p").css("font-size", "5.5vw");
      $("body > div.root > div.dia.dia5 > div > div > div > p").css("font-size", "5.5vw");
   }
})


$(".btn").click((event) => {
   let currentDia = $(event.target).closest(".dia").attr("class");
  let index = getNumFromClass(currentDia)
  $(".more-text").text(moreTexts[index-1])
   $(".more-block").fadeIn();

})
$(".gg-close-r").click(() => {
   $(".more-block").fadeOut()
})

function getNumFromClass(text){
   let newText = text.split(" ");
   let number = newText[1].substr(3);
   return number

}

function goToBuy(){
   window.location.href = 'megrendeles.html';
}