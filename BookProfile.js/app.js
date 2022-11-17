let likeBtn = document.getElementById("likeBtn");
let saveBtn = document.getElementById("saveBtn");

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
};
let Liked = () => {
  likeBtn.classList.add("clicked");
};

let notSaved = () => {
  saveBtn.classList.remove("clicked");
};
let Saved = () => {
  saveBtn.classList.add("clicked");
};
likeBtn.addEventListener("click", likeUnlike);
saveBtn.addEventListener("click", saveUnsave);
