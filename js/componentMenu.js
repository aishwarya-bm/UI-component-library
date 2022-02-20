const componentMenuBtn = document.querySelector("#component-menu");

componentMenuBtn.addEventListener("click", ()=>{
    const docSidebar = document.querySelector(".doc-sidebar");
    if(docSidebar.style.display === "none" || docSidebar.style.display === "")
        docSidebar.style.display = "inline-block";
    else
        docSidebar.style.display = "none";
})