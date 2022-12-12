let likeBtn = document.getElementById("likeBtn");
let saveBtn = document.getElementById("saveBtn");
let likeIcn = document.getElementById("likeIcn");
let saveIcn = document.getElementById("saveIcn");

let isLiked = false;
let isSaved = false;

let likeUnlike = () => {
  isLiked = !isLiked;
  !isLiked ? notLiked() : Liked();
};

let saveUnsave = () => {
  isSaved = !isSaved;
  !isSaved ? notSaved() : Saved();
};

let notLiked = () => {
  likeBtn.classList.remove("clicked");
  likeIcn.classList.remove("clicked");
};
let Liked = () => {
  likeBtn.classList.add("clicked");
  likeIcn.classList.add("clicked");
};

let notSaved = () => {
  saveBtn.classList.remove("clicked");
  saveIcn.classList.remove("clicked");
};
let Saved = () => {
  saveBtn.classList.add("clicked");
  saveIcn.classList.add("clicked");
};
likeBtn.addEventListener("click", likeUnlike);
saveBtn.addEventListener("click", saveUnsave);

const rateValueSpan = document.getElementById("rateValueSpan");
const rateValueSlider = document.getElementById("rateValueSlider");

rateValueSlider.addEventListener("input", function () {
  rateValueSpan.innerHTML = rateValueSlider.value;
});
