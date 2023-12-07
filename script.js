const wrapper = document.querySelector(".wrapper");
const question = doucment.querySelector(".question");
const gif = document.querySelector(".yes-btn");
const noBtn = dosumen.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaaaa, I like you too";
    gif.src =
        "https://media.giphy.com/media/XtydbjSSwkC7K2zBTH/giphy.gif?cid=790b7611ne9w1erzqchtc9gpjyqsjr0dtvstn1hobuzp1fcp&ep=v1_gifs_trending&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerwidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})