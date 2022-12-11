let BOOKS = [
  {
    Id: 1,
    Title: "Doing Both",
    Description:
      "how Cisco Captures Today's Profit and Drives Tomorrow's Growth",
    Category: "IT",
    Image: "images/1.jpg",
    Publisher: "Ft Pr",
    Author: "Inder Sidhu ",
    PublishDate: { Day: "", Month: "jun", Year: "2010" },
    Edition: "1",
    Language: "english",
    PageCount: "197",
    ISBN: "137083645",
  },
  {
    Id: 2,
    Title: "Routing Protocols  and Concepts",
    Description: " CCNA Exploration Companion Guide",
    Category: "IT",
    Image: "images/2.jpg",
    Publisher: "Cisco Systems    ",
    Author: "Allan johnson            ",
    PublishDate: { Day: "", Month: "jan", Year: "2007" },
    Edition: "1",
    Language: "english",
    PageCount: "103",
    ISBN: " 1587132729 ",
  },
  {
    Id: 3,
    Title: "Cisco Lan Switching  Configuration Handbook",
    Description: "Networking Technology ",
    Category: "IT",
    Image: "images/3.jpeg",
    Publisher: "Cisco Press ",
    Author: "Steve McQuerry",
    PublishDate: { Day: "", Month: "jul", Year: "2009" },
    Edition: "2",
    Language: "english",
    PageCount: "360",
    ISBN: "158056100",
  },
  {
    Id: 4,
    Title: "Cisco Routers for the Desperate ",
    Description: "Router and Switch Management, the Easy Way            ",
    Category: "IT",
    Image: "images/4.jpeg",
    Publisher: "No  Strach Press            ",
    Author: "Michael Lucas            ",
    PublishDate: { Day: "", Month: "march", Year: "2009" },
    Edition: "2",
    Language: "english",
    PageCount: "144",
    ISBN: "159327393 ",
  },
  {
    Id: 5,
    Title: "Information Technology Essentials  ",
    Description: "introduction to information systems     ",
    Category: "IT",
    Image: "images/5.jpg",
    Publisher: "Independently published            ",
    Author: "Eric Frick",
    PublishDate: { Day: "", Month: "nov", Year: "2019" },
    Edition: "1",
    Language: "french",
    PageCount: "273",
    ISBN: "1708175148",
  },
  {
    Id: 6,
    Title: "30 minute Mowgli  ",
    Description: "Fast easy indian from the Mowgli home kitchen",
    Category: "cooking",
    Image: "images/6.jpg",
    Publisher: "Nourish Books            ",
    Author: "Nisha Katone MBE  ",
    PublishDate: { Day: "", Month: "nov", Year: "2021" },
    Edition: "0",
    Language: "english",
    PageCount: "200",
    ISBN: "1848994001   ",
  },
  {
    Id: 7,
    Title: "the Anime chef cookbook ",
    Description: "75 iconic Dishes from your Favorite Anime",
    Category: "cooking",
    Image: "images/7.jpg",
    Publisher: "Rock Point   ",
    Author: "Nadine Estro  ",
    PublishDate: { Day: "", Month: "sep", Year: "2022" },
    Edition: "1",
    Language: "english",
    PageCount: "208",
    ISBN: "1631068660  ",
  },
  {
    Id: 8,
    Title: "Mary  Berry's Quick cooking  ",
    Description:
      "Marry Berry shares aver 100 of her favorite dishes to share with the one we love ",
    Category: "cooking",
    Image: "images/8.jpg",
    Publisher: " BBC Books Illustrated edition",
    Author: "Marry Berry ",
    PublishDate: { Day: "", Month: "feb", Year: "2018" },
    Edition: "1",
    Language: "english",
    PageCount: "304",
    ISBN: "9781785947907   ",
  },
  {
    Id: 9,
    Title: "The 100-Day amazing Air fryer cook book UK",
    Description:
      "Quick and healthy reapes that will improve your kitchen game incl            ",
    Category: "cooking",
    Image: "images/9.jpg",
    Publisher: "iImdependently Published         ",
    Author: "John R.Sinclair            ",
    PublishDate: { Day: "", Month: "sep", Year: "2022" },
    Edition: "1",
    Language: "english",
    PageCount: "108",
    ISBN: "9798354820528   ",
  },
  {
    Id: 10,
    Title: "Le grand livre du batch cooking  ",
    Description:
      "maximizer la preparation de va repas est economisez            ",
    Category: "cooking",
    Image: "images/10.webp",
    Publisher: "",
    Author: "Saint Jean   ",
    PublishDate: { Day: "", Month: "sep", Year: "2014" },
    Edition: "Guy saint_jean     ",
    Language: "french",
    PageCount: "170",
    ISBN: "2898271500        ",
  },
  {
    Id: 11,
    Title: "Anna Gluten Free  ",
    Description:
      "stare informa in modo sano gustoso anche senza gultin             ",
    Category: "cooking",
    Image: "images/11.jpg",
    Publisher: "you healthe Sl_spain   ",
    Author: "Anna T.Maglione  ",
    PublishDate: { Day: "", Month: "jun", Year: "2019" },
    Edition: "1",
    Language: "italian",
    PageCount: "130",
    ISBN: "",
  },
  {
    Id: 12,
    Title: "Recipes for peace   ",
    Description:
      "vegan cook Book Basedon the taditionel Middle eastein cuisin        ",
    Category: "cooking",
    Image: "images/12.jpg",
    Publisher: "kifahs  ",
    Author: "kifah Dasouki    ",
    PublishDate: { Day: "", Month: "aug", Year: "2019" },
    Edition: "Anna T.Maglione            ",
    Language: "arabic",
    PageCount: "170",
    ISBN: "",
  },
  {
    Id: 20,
    Title: "Riche dad poor   ",
    Description:
      "20th aniversery edition:what the riche teach there kids money that the poor and middle class donate!   ",
    Category: "finance",
    Image: "images/20.jpg",
    Publisher: "briliance audio   ",
    Author: "Robert t.kiysaki  ",
    PublishDate: { Day: "", Month: "may", Year: "2019" },
    Edition: "",
    Language: "english",
    PageCount: "200",
    ISBN: "",
  },

  {
    Id: 26,
    Title: "anime art class ",
    Description: "a complete course in drawing manga cuties  ",
    Category: "anime",
    Image: "images/26.jpg",
    Publisher: "Rock Point  ",
    Author: "anny zhou   ",
    PublishDate: { Day: "", Month: "aug", Year: "2021" },
    Edition: "",
    Language: "english",
    PageCount: "144",
    ISBN: "1631067648  ",
  },
  {
    Id: 27,
    Title: "my hero academia   ",
    Description:
      "midoriya inherits the super power of the worlds gratest hero , but gratness wont come easy ",
    Category: "anime",
    Image: "images/27.jpg",
    Publisher: "VIZ media LLC  ",
    Author: "kohie horikoshi   ",
    PublishDate: { Day: "", Month: "aug", Year: "2015" },
    Edition: "",
    Language: "english",
    PageCount: "192",
    ISBN: "9781421582696     ",
  },
  {
    Id: 28,
    Title: "hyka reoenl artwork      ",
    Description: "the first art book of reoenl  ",
    Category: "anime",
    Image: "images/28.jpg",
    Publisher: "PIE international ",
    Author: "reoenl      ",
    PublishDate: { Day: "", Month: "aug", Year: "2022" },
    Edition: "1",
    Language: "japanese",
    PageCount: "210",
    ISBN: "4756256090",
  },
  {
    Id: 29,
    Title: "Anime Merch : Notizbuch  ",
    Description:
      "dies ist ein leeres tagebuch und notizbuch mit karieten weissen seiten      ",
    Category: "anime",
    Image: "images/29.jpg",
    Publisher: "Imdependently Published         ",
    Author: "tagebuch   ",
    PublishDate: { Day: "", Month: "may", Year: "2011" },
    Edition: "",
    Language: "german",
    PageCount: "120",
    ISBN: "9798502769679   ",
  },
];
let LIKED_BOOKS = [
  {
    Id: 3,
    Title: "Cisco Lan Switching  Configuration Handbook",
    Description: "Networking Technology ",
    Category: "IT",
    Image: "images/3.jpeg",
    Publisher: "Cisco Press ",
    Author: "Steve McQuerry",
    PublishDate: { Day: "", Month: "jul", Year: "2009" },
    Edition: "2",
    Language: "english",
    PageCount: "360",
    ISBN: "158056100",
  },
  {
    Id: 4,
    Title: "Cisco Routers for the Desperate ",
    Description: "Router and Switch Management, the Easy Way            ",
    Category: "IT",
    Image: "images/4.jpeg",
    Publisher: "No  Strach Press            ",
    Author: "Michael Lucas            ",
    PublishDate: { Day: "", Month: "march", Year: "2009" },
    Edition: "2",
    Language: "english",
    PageCount: "144",
    ISBN: "159327393 ",
  },
  {
    Id: 8,
    Title: "Mary  Berry's Quick cooking  ",
    Description:
      "Marry Berry shares aver 100 of her favorite dishes to share with the one we love ",
    Category: "cooking",
    Image: "images/8.jpg",
    Publisher: " BBC Books Illustrated edition",
    Author: "Marry Berry ",
    PublishDate: { Day: "", Month: "feb", Year: "2018" },
    Edition: "1",
    Language: "english",
    PageCount: "304",
    ISBN: "9781785947907   ",
  },
  {
    Id: 9,
    Title: "The 100-Day amazing Air fryer cook book UK",
    Description:
      "Quick and healthy reapes that will improve your kitchen game incl            ",
    Category: "cooking",
    Image: "images/9.jpg",
    Publisher: "iImdependently Published         ",
    Author: "John R.Sinclair            ",
    PublishDate: { Day: "", Month: "sep", Year: "2022" },
    Edition: "1",
    Language: "english",
    PageCount: "108",
    ISBN: "9798354820528   ",
  },
  {
    Id: 26,
    Title: "anime art class ",
    Description: "a complete course in drawing manga cuties  ",
    Category: "anime",
    Image: "images/26.jpg",
    Publisher: "Rock Point  ",
    Author: "anny zhou   ",
    PublishDate: { Day: "", Month: "aug", Year: "2021" },
    Edition: "",
    Language: "english",
    PageCount: "144",
    ISBN: "1631067648  ",
  },
  {
    Id: 27,
    Title: "my hero academia   ",
    Description:
      "midoriya inherits the super power of the worlds gratest hero , but gratness wont come easy ",
    Category: "anime",
    Image: "images/27.jpg",
    Publisher: "VIZ media LLC  ",
    Author: "kohie horikoshi   ",
    PublishDate: { Day: "", Month: "aug", Year: "2015" },
    Edition: "",
    Language: "english",
    PageCount: "192",
    ISBN: "9781421582696     ",
  },
  {
    Id: 20,
    Title: "Riche dad poor   ",
    Description:
      "20th aniversery edition:what the riche teach there kids money that the poor and middle class donate!   ",
    Category: "finance",
    Image: "images/20.jpg",
    Publisher: "briliance audio   ",
    Author: "Robert t.kiysaki  ",
    PublishDate: { Day: "", Month: "may", Year: "2019" },
    Edition: "",
    Language: "english",
    PageCount: "200",
    ISBN: "",
  },
];

let BOOK_CARD = (item) => `<div class="myBookCardContainer" id="bookCard-${
  item.Id
}">
    <div class="myBookCardImgContainer">
      <img
        src=${item.Image}
        alt="book"
        class="bookCardImg"
      />
    </div>
    <div class="myBookCardInfoContainer">
      <h5 class="myBookCardTitle title">
        ${item.Title.toUpperCase()}
      </h5>
    </div>
    <div class="myBookCardBot">
      <div class="bookCardAuthorContainer">
        <span class="cardBotTag"> AUTHOR </span>
        <i class="author">${
          item.Author.length <= 12 ? item.Author : miniAuthor(item.Author)
        }</i>
      </div>
      <div class="bookCardCatContainer">
        <span class="cardBotTag"> CATEGORY </span>
        <span class='category'>${item.Category.toUpperCase()}</span>
      </div>
      <div class="bookCardPtsContainer">
        <span class="cardBotTag"> PTS </span>
        <span class='score'>${item.PageCount}</span>
      </div>
    </div>
    </div>`;

let CardsPage = document.getElementById("userListingPage");
let LikedPage = document.getElementById("userLikedPage");
let miniAuthor = (str) => {
  let Str = str.split(" ");
  let newStr = Str[0] + " " + Str[1][0] + ".";
  return newStr;
};

BOOKS.forEach((book) => {
  CardsPage.innerHTML += BOOK_CARD(book);
});
LIKED_BOOKS.forEach((book) => {
  LikedPage.innerHTML += BOOK_CARD(book);
});
