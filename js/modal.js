
const openModalBtn = document.querySelector(".btn-modal-alert");
const submitModalA1Btn = document.querySelector(".submit-a1");
const submitModalA2Btn = document.querySelector(".submit-a2");

openModalBtn.addEventListener("click", ()=> {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("hide");
    modalContainer.classList.add("d-flex");
})

submitModalA1Btn.addEventListener("click", ()=> {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("d-flex");
    modalContainer.classList.add("hide");
})

submitModalA2Btn.addEventListener("click", ()=> {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("d-flex");
    modalContainer.classList.add("hide");
})
