$(document).ready(function() {
    try {
        $.ajax({
            url : "../text_files/about.txt",
            success : function (data) {
                const lines = data.split('\n')
                let aboutHTML = "";
                for(let i = 0; i < lines.length-1; i++) {
                    aboutHTML += lines[i] + "<br/><br/>";
                }
                aboutHTML += lines[lines.length-1];
                document.getElementById("about_text").innerHTML = aboutHTML;
            }
        });
    } catch(error) {
        document.getElementById("about_text").innerHTML = error;
    }
    
    fetch('../project_pages/projectCards.json')
        .then((response) => response.json())
        .then((json) => {
            let cards = json.cards;
            for(let i = 0; i < cards.length; i++) {
                const card = cards[i];
                let project_card_element = new ProjectCard();
                project_card_element.setAttribute("id", "project_id-" + card.id);
                project_card_element.setAttribute("title", card.title);
                project_card_element.setAttribute("desc", card.desc);
                project_card_element.setAttribute("img_src", card.img_src);
                document.getElementById("projects_table_body").appendChild(project_card_element);
            }
        }
    );
});