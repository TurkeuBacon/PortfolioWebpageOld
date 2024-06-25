const MAX_PARENT_SEARCH_ITERATIONS = 10;

document.body.onclick = function(e) {
    let clicked = e.target;
    let lastTr = null;
    for(let i = 0; i < MAX_PARENT_SEARCH_ITERATIONS; i++) {
        if(clicked.className == 'project_table') {
            if(lastTr == null) return;
            handleProjectClick(lastTr.id.substr(11));
            break;
        } else if(clicked.tagName == "TR") {
            lastTr = clicked;
        }
        clicked = clicked.parentNode;
        if(clicked == null || clicked == undefined) {
            return;
        }
    }
}

function handleProjectClick(projectId) {
    console.log(projectId);
    window.location.href = "/project_pages/" + projectId + ".html";
}