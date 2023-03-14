
const img = document.querySelector(".item-card-img");
const styleElem = getComputedStyle(img);


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
                    "#herods",
                    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.4344758040525!2d34.76696871580103!3d32.08454128118661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c79f1e2b5db%3A0x14945479dbfc7535!2z0JjRgNC-0LQ!5e0!3m2!1sru!2sua!4v1678561424565!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                );
                break;
            case "verd":                
                showMap(
                    "#verd",
                    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7264245521883!2d35.363086315785175!3d31.20059798147666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503a824ae778249%3A0x9e8c6c6af9a275cc!2z0JLQtdGA0YIg0JzQtdGA0YLQstC-0LUg0JzQvtGA0LU!5e0!3m2!1sru!2sua!4v1678561691112!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                );
                break;
            case "YMCA":                
                showMap("#YMCA", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.857791581823!2d35.21918961579528!3d31.774364381286382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15032934fc435205%3A0xbe12d95508c3769c!2sYMCA%20Three%20Arches%20Hotel!5e0!3m2!1sru!2sua!4v1678561943158!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;

            case "akotika":
                showMap("#akotika", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.073812166019!2d35.06514151581633!3d32.922648030928364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dc844ba1e9dc1%3A0xb4f835223e6c918!2zSG90ZWwgQWtvdGlrYSB8INee15zXldefINei15vXldeq15nXp9eU!5e0!3m2!1sru!2sua!4v1678562483898!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;

            case "frangiorgio":
                showMap("#frangiorgio", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5500529236197!2d33.6324655158539!3d34.91773948037937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e082a16f75d559%3A0x8d7b7f513ae5a91b!2sFrangiorgio%20Hotel%20Apartments!5e0!3m2!1sru!2sua!4v1678562593722!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;
            case "parklane":
                showMap("#parklane", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.7452563232414!2d33.171722615849966!3d34.711604680431776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e0c9818e18151b%3A0x7c7fcb0d049e9a2e!2sParklane%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Limassol!5e0!3m2!1sru!2sua!4v1678562702095!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;
            case "antalya":
                showMap("#antalya", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3436088820044!2d30.628873715892485!3d36.85819337993657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391a74e325821%3A0x3920d5250811961d!2z0JrRgNC-0YPQvSDQv9C70LDQt9CwINCQ0L3RgtCw0LvRjNGP!5e0!3m2!1sru!2sua!4v1678562787142!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;
            case "barut":
                showMap("#barut", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.267141125573!2d31.37894851589107!3d36.78814487995105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fe6b00e65ae51%3A0x3405540566119465!2sBarut%20Hemera!5e0!3m2!1sru!2sua!4v1678562868626!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;
            case "vrachokipos":
                showMap("#vrachokipos", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6660799566635!2d23.482778215911363!3d37.77442717975951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1ce84b568c305%3A0xf8c959b02502b05c!2sVrachokipos!5e0!3m2!1sru!2sua!4v1678562944722!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;
            case "john":
                showMap("#john", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7073760371613!2d25.312188915903914!3d37.420390879825455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2be6bd9662979%3A0xde0d113e62ae935c!2sSaint%20John%20Hotel%20Villas%20%26%20Spa!5e0!3m2!1sru!2sua!4v1678563011813!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
                break;

            case "heaven":
                showMap("#heaven", `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.405559249322!2d23.030008815969303!3d40.48841407935674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a86a90cf7b98eb%3A0x315c9adda0953084!2sHotel%20Heaven!5e0!3m2!1sru!2sua!4v1678563078155!5m2!1sru!2sua" height='${styleElem.height}' width='${styleElem.width}' style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
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
