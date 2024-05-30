// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];
const cards=document.querySelector(".cards");
for (const iterator of data) {
  const card=document.createElement("article");
  card.classList.add("cards","cards__card");
  card.setAttribute("id",iterator.id);
  cards.append(card);

  const imageContainer=document.createElement("div");
  imageContainer.classList.add("cards__card__img");
  card.append(imageContainer);

  const image=document.createElement("img");
  image.setAttribute("src",iterator.src);
  imageContainer.append(image);

  const icon=document.createElement("span");
  icon.classList.add("cards__card__img__icon");
  icon.innerText="♡ 100";
  imageContainer.append(icon);

  const title=document.createElement("p");
  title.innerText=iterator.title;
  title.classList.add("cards__card__body__title");
  card.append(title);

  const span=document.createElement("span");
  span.innerText="BSC";
  title.append(span);

  const account=document.createElement("div");
  account.classList.add("cards__card__footer","cards__card__footer__account");
  card.append(account);

  const accountImage=document.createElement("img");
  accountImage.setAttribute("src","./avt-12.jpg")
  account.append(accountImage);

  const accountName=document.createElement("h4");
  accountName.innerText="Ralph Garraway";
  account.append(accountName);

  const accountButton=document.createElement("button");
  accountButton.innerText="🔒  Please Bid "
  account.append(accountButton);

}