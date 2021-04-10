import * as MODEL from "../model/model.js";

function init() {
    let currentHeroImage = "home";


    $("nav a").click(function(e){
        let btnId = this.id;
        let contentId = btnId + "Content";

        //changes the hero image
        $(".hero")
        .removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}-hero-image`);
        currentHeroImage = btnId;

        //changes the page title
        $(".hero-content .page-name").html(btnId);

        //gets the page content from model.js
        MODEL.getPageContent(contentId);
    })
}

$(document).ready(function(){
    init()
})