$(document).ready(() => {
   console.log("Ready")
   if ($(document).width() <= 500) {
      console.log("Mobil")
      $(".content7 > .left").css("height")
      $("p").css("font-size", "3.5vw")
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
