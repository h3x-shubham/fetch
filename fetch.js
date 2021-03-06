const feed=document.getElementById("feed");
const btn=document.getElementsByTagName("button");
function fetchCountries() {
  console.log("clicked");
  fetch("https://restcountries.com/v3.1/all")
    .then((Response) => {
      return Response.json();
    })
    .then((js) => {
      js.forEach((element) => {
        // console.log(element.name.common);
        const countryCard = document.createElement("div");
        countryCard.innerHTML = element.name.common + "  - " + element.flag;
        feed.appendChild(countryCard);
      });
    });
}

btn[0].addEventListener("click",()=>{
  fetchCountries();
});