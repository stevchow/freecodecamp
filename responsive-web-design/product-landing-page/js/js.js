ready(() => {
    mouseover_gallery();
});
let images_enum = {
    /* This enum solution is only necessary because i'll upload this project to codepen
        thus, i must upload each image to a third party server, so i can't predict how the URL is gonna be.
        Since i must have a relation between thumbnail and full image, and their links are unpredictable, i hard coded enums.
        Ideally this would use the filepath instead of enums, that way you don't rely on hardcoded links, only generic references.*/
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737607/cupcake1-thumb_hfwyi0.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737627/cupcake1_k0bvig.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737608/cupcake2-thumb_vlza22.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737639/cupcake2_eu8jv5.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737609/cupcake3-thumb_ehexvg.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737626/cupcake3_s5bble.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737621/cupcake4-thumb_gmnqr9.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737648/cupcake4_bpz3zr.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737628/cupcake5-thumb_gqkyz8.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737641/cupcake5_tt6f13.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737640/cupcake6-thumb_k9luuk.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737644/cupcake6_wynbnx.jpg")',
}

function mouseover_gallery() {


    let gallery = document.getElementById("gallery");
    let gallery_items = gallery.children[1].children[0].children;

    gallery.addEventListener("mouseover", (event) => {
        let selected_thumbnail = event.target;

        if (selected_thumbnail instanceof HTMLImageElement) {
            for (let i = 0; i < gallery_items.length; i++) {
                if (gallery_items[i] === selected_thumbnail) {
                    selected_thumbnail.className += " img-selected";
                    let new_background = retrieve_style(selected_thumbnail, "background-image");
                    change_background(new_background);
                } else {
                    gallery_items[i].className = "img-selection";
                }
            }
        }
    });
}

function change_background(new_background) {
    current_background = document.getElementById("parallax");
    current_background.style.backgroundImage = new_background;
}

function retrieve_style(element, property) {
    style = window.getComputedStyle(element).getPropertyValue(property);
    return images_enum[style];
}

//Function from http://youmightnotneedjquery.com/, brety gud
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}