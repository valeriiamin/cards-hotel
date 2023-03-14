
const buttonArray = document.querySelectorAll(".button");
buttonArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        switch (btn.dataset.name) {
            case "carlton":            
                showMap(
                    "#carlton");
                break;
            case "herods":                
                showMap(
                    "#herods");
                break;
            case "verd":                
                showMap(
                    "#verd");
                break;
            case "YMCA":                
                showMap("#YMCA");
                break;

            case "akotika":
                showMap("#akotika");
                break;

            case "frangiorgio":
                showMap("#frangiorgio");
                break;
            case "parklane":
                showMap("#parklane");
                break;
            case "antalya":
                showMap("#antalya");
                break;
            case "barut":
                showMap("#barut");
                break;
            case "vrachokipos":
                showMap("#vrachokipos");
                break;
            case "john":
                showMap("#john");
                break;

            case "heaven":
                showMap("#heaven");
                break;
        }
    });
});

function showMap(selector) {
    const element = document.querySelector(selector);
    const img  = element.previousElementSibling;
    img.classList.toggle('hidden');

    element.classList.toggle("hidden");
    element.classList.toggle("active");
    
}
