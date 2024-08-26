class ProjectCard extends HTMLTableRowElement {
    static observedAttributes = ["title", "img_src", "desc"];
    imgThumbnail;
    h3Title;
    pDesc;
    constructor() {
        super();

        const tdImage = document.createElement('td');
        this.imgThumbnail = document.createElement('img');
        const tdText = document.createElement('td');
        this.h3Title = document.createElement('h3');
        this.pDesc = document.createElement('p');

        const img_src = this.getAttribute('img_src');
        const title = this.getAttribute('title');
        const desc = this.getAttribute('desc');

        if(img_src) {
            this.imgThumbnail.src = this.getAttribute('img_src');
        }
        if(title) {
            this.h3Title.textContent = this.getAttribute('title');
        }
        if(desc) {
            this.pDesc.textContent = this.getAttribute('desc');
        }

        $(this).click(()=>{
            this.handleProjectClick(this.id.substring(11));
        });
        
        tdImage.className = "project_table_image_col";
        tdText.className = "project_table_desc_col";
        this.imgThumbnail.className = "project_img";
        this.pDesc.className = "project_desc_content";

        tdImage.appendChild(this.imgThumbnail);
        tdText.appendChild(this.h3Title);
        tdText.appendChild(this.pDesc);

        this.appendChild(tdImage);
        this.appendChild(tdText);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case "img_src":
                const img_src = this.getAttribute('img_src');
                if(img_src) {
                    this.imgThumbnail.src = this.getAttribute('img_src');
                }
                break;
            case "title":
                const title = this.getAttribute('title');
                if(title) {
                    this.h3Title.textContent = this.getAttribute('title');
                }
                break;
            case "desc":
                const desc = this.getAttribute('desc');
                if(desc) {
                    this.pDesc.textContent = this.getAttribute('desc');
                }
                break;
            default:
                console.log(`Unknown attribute ${name} has changed.`);
        }
    }

    handleProjectClick(projectId) {
        let BASE = [location.protocol, "//", location.host].join('');
        if(BASE == "https://turkeubacon.github.io") {
            console.log("GITHUB");
            BASE += "/PortfolioWebpage";
        } else {
            console.log("LOCAL");
        }
        console.log(BASE);
        window.location.href = BASE + "/project_pages/" + projectId + ".html";
    }
}
customElements.define('project-card', ProjectCard, {extends: "tr"});