const categoryList = document.getElementById("category-list");
const itemList = document.getElementById("item-list");
const descriptionDiv = document.getElementById("description");
const form = document.getElementById("customerForm");

let sports = ["Skipping rope", "Ball", "Dumbbell"];
let sportItems = [
  {
    imgHref: "https://m.media-amazon.com/images/I/61VqnE79V2L._SL1000_.jpg",
    descrip:
      "The USA Pro Skipping rope is a great addition to your workout regime. Perfect to use when training circuits or for a home workout, the skipping rope helps to maximise any cardio activity while helping to tone and condition muscles.",
  },
  {
    imgHref:
      "https://www.premierleague.com/resources/prod/v6.116.3-5396/i/nike-ball-hub/balls/23.png",
    descrip:
      "Put the football Strike from Nike right in the net. This football has a machine-stitched surface for optimized shape, feel and durability. The structured casing and stabilizing Nike Aerow Trac grooves keep the ball exactly where you want it. The twelve-panel design provides increased precision and the rubber bladder ensures that air pressure and shape are maintained.",
  },
  {
    imgHref:
      "https://productimages.biltema.com/v1/image/app/imagebyfilename/14-7710_xl_1.jpg",
    descrip:
      "The interchangeable dumbbell set comes with two chrome dumbbell bars with knurled grip, twelve robust weight plates and four collars. This means you can build safety dumbbells with a weight that is suitable for you or the exercise you will perform.",
  },
];

let clothes = ["Jacket", "Pants"];
let clothesItems = [
  {
    imgHref:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKu_purJI1-3eavRwDYtF8GlBrumKAjIneMp_Zp0IY8HVvPFyvFkBdI5W_fAYJYwyjAzo&usqp=CAU",
    descrip:
      "This highly durable, enzyme-washed, mid-length open bottom jacket never takes a day off.",
  },
  {
    imgHref:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqLFwYfxcyRq8MCDt45qOGmTZwcf9yGM4eLm4AC-K3-KjmPhcMGlZJLwNalxXxxHS_K04&usqp=CAU",
    descrip:
      "Ergonomically designed, these pants are comfortable and provide the ultimate manoeuvrability.",
  },
];

let musicalInstruments = ["Guitar", "Violin", "Piano", "Flute"];
let musicalItems = [
  {
    imgHref:
      "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-105.png?1660016014",
    descrip:
      "First launched in 1990, the Pacifica series was driven by the California session scene of the day-where versatility, performance and individuality",
  },
  {
    imgHref:
      "https://cdn.shopify.com/s/files/1/0574/4109/1749/products/20220720_183040_ad98d2a4-3fbf-4799-8140-a45b7ff3307e.jpg?v=1658402768&width=3000",
    descrip:
      "Just as an overture is the beginning of an opera, our Overture violin will be the perfect starting point for any beginning violinist.",
  },
  {
    imgHref:
      "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/544479/17297219_800.jpg",
    descrip:
      "Sauter piano, used, year of manufacture: 1957, finish: black matt, height: 108 cm, final inspection by our master.",
  },
  {
    imgHref:
      "https://cdn.shopify.com/s/files/1/1151/9830/products/fl-430_top.jpg?v=1668320259",
    descrip: "A solid flute with an upgraded professional case.",
  },
];

let categoryClickCounter = 0;
let itemName = "";

function buyAlert() {
  form.style.display = "block";
  clearShopContent();
}

function clearShopContent() {
  while (itemList.hasChildNodes()) {
    itemList.removeChild(itemList.firstChild);
  }

  while (descriptionDiv.hasChildNodes()) {
    descriptionDiv.removeChild(descriptionDiv.firstChild);
  }
}

categoryList.addEventListener("click", function (e) {
  let targetCategory = e.target;
  form.reset();
  form.style.display = "none";
  orderInfoDiv.style.display = "none";
  categoryClickCounter++;

  if (categoryClickCounter > 1) {
    clearShopContent();
    categoryClickCounter--;
  }

  switch (targetCategory.id) {
    case "sports":
      for (let i = 0; i < sports.length; i++) {
        let sportItem = document.createElement("li");
        itemList.appendChild(sportItem);
        let spotrsItemContent = document.createTextNode(`${sports[i]}`);
        sportItem.appendChild(spotrsItemContent);
        sportItem.setAttribute("class", "item");

        sportItem.addEventListener("click", function () {
          if (descriptionDiv.hasChildNodes()) {
            while (descriptionDiv.hasChildNodes()) {
              descriptionDiv.removeChild(descriptionDiv.firstChild);
            }
          }

          let imgSport = document.createElement("img");
          descriptionDiv.appendChild(imgSport);
          imgSport.setAttribute("class", "image");
          imgSport.setAttribute("src", `${sportItems[i].imgHref}`);

          let headerSport = document.createElement("h2");
          descriptionDiv.appendChild(headerSport);
          let headerSportContent = document.createTextNode(`${sports[i]}`);
          headerSport.appendChild(headerSportContent);
          headerSport.setAttribute("class", "descrip-header");

          let descripSport = document.createElement("p");
          descriptionDiv.appendChild(descripSport);
          descripSport.setAttribute("class", "descrip-content");
          let descripSportContent = document.createTextNode(
            `${sportItems[i].descrip}`
          );
          descripSport.appendChild(descripSportContent);

          let buyButtn = document.createElement("button");
          descriptionDiv.appendChild(buyButtn);
          let buyButtnContent = document.createTextNode("Buy");
          buyButtn.appendChild(buyButtnContent);

          itemName = sports[i];
          buyButtn.addEventListener("click", buyAlert);
        });
      }
      break;

    case "clothes":
      for (let i = 0; i < clothes.length; i++) {
        let clothesItem = document.createElement("li");
        itemList.appendChild(clothesItem);
        let clothesItemContent = document.createTextNode(`${clothes[i]}`);
        clothesItem.appendChild(clothesItemContent);
        clothesItem.setAttribute("class", "item");

        clothesItem.addEventListener("click", function () {
          if (descriptionDiv.hasChildNodes()) {
            while (descriptionDiv.hasChildNodes()) {
              descriptionDiv.removeChild(descriptionDiv.firstChild);
            }
          }

          let imgClothes = document.createElement("img");
          descriptionDiv.appendChild(imgClothes);
          imgClothes.setAttribute("class", "image");
          imgClothes.setAttribute("src", `${clothesItems[i].imgHref}`);

          let headerClothes = document.createElement("h2");
          descriptionDiv.appendChild(headerClothes);
          let headerClothesContent = document.createTextNode(`${clothes[i]}`);
          headerClothes.appendChild(headerClothesContent);
          headerClothes.setAttribute("class", "descrip-header");

          let descripClothes = document.createElement("p");
          descriptionDiv.appendChild(descripClothes);
          descripClothes.setAttribute("class", "descrip-content");
          let descripClothesContent = document.createTextNode(
            `${clothesItems[i].descrip}`
          );
          descripClothes.appendChild(descripClothesContent);

          let buyButtn = document.createElement("button");
          descriptionDiv.appendChild(buyButtn);
          let buyButtnContent = document.createTextNode("Buy");
          buyButtn.appendChild(buyButtnContent);

          itemName = clothes[i];
          buyButtn.addEventListener("click", buyAlert);
        });
      }
      break;

    case "musicalInstruments":
      for (let i = 0; i < musicalInstruments.length; i++) {
        let musicItem = document.createElement("li");
        itemList.appendChild(musicItem);
        let musicItemContent = document.createTextNode(
          `${musicalInstruments[i]}`
        );
        musicItem.appendChild(musicItemContent);
        musicItem.setAttribute("class", "item");

        musicItem.addEventListener("click", function () {
          if (descriptionDiv.hasChildNodes()) {
            while (descriptionDiv.hasChildNodes()) {
              descriptionDiv.removeChild(descriptionDiv.firstChild);
            }
          }

          let imgMusic = document.createElement("img");
          descriptionDiv.appendChild(imgMusic);
          imgMusic.setAttribute("class", "image");
          imgMusic.setAttribute("src", `${musicalItems[i].imgHref}`);

          let headerMusic = document.createElement("h2");
          descriptionDiv.appendChild(headerMusic);
          let headerMusicContent = document.createTextNode(
            `${musicalInstruments[i]}`
          );
          headerMusic.appendChild(headerMusicContent);
          headerMusic.setAttribute("class", "descrip-header");

          let descripMusic = document.createElement("p");
          descriptionDiv.appendChild(descripMusic);
          descripMusic.setAttribute("class", "descrip-content");
          let descripMusicContent = document.createTextNode(
            `${musicalItems[i].descrip}`
          );
          descripMusic.appendChild(descripMusicContent);

          let buyButtn = document.createElement("button");
          descriptionDiv.appendChild(buyButtn);
          let buyButtnContent = document.createTextNode("Buy");
          buyButtn.appendChild(buyButtnContent);

          itemName = musicalInstruments[i];
          buyButtn.addEventListener("click", buyAlert);
        });
      }
      break;
  }
});

const approveButton = document.getElementById("approveButtn");
const orderInfoDiv = document.getElementById("orderInfo");
const letters = /^[A-Za-z]+$/;

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const customerName = document.getElementById("customerName");

const cities = document.getElementById("cities");
const customerCity = document.getElementById("customerCity");

const officeNum = document.getElementById("officeNum");
const customerOfficeNum = document.getElementById("customerOfficeNum");

const cardPayment = document.getElementById("card");
const cashPayment = document.getElementById("cash");
const customerPayment = document.getElementById("customerPayment");

const customerItem = document.getElementById("customerItem");

const quantity = document.getElementById("quantity");
const customerQuantity = document.getElementById("customerQuantity");

const comments = document.getElementById("comments");
const customerComments = document.getElementById("customerComments");

if (localStorage.getItem("listOfPurchasedItems") === null) {
  localStorage.setItem("listOfPurchasedItems", JSON.stringify([]));
}

approveButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value.trim() === "" || lastName.value.trim() === "") {
    return alert("Please enter your name");
  } else if (
    !firstName.value.match(letters) ||
    !lastName.value.match(letters)
  ) {
    return alert("Please use alphabets only");
  } else {
    customerName.textContent = `Name: ${firstName.value} ${lastName.value}`;
  }

  if (cities.value === "") {
    return alert("Please choose the city of delivery");
  } else {
    customerCity.textContent = `City: ${cities.value}`;
  }

  if (officeNum.value === "") {
    return alert("Please enter Nova Poshta office number");
  } else if (officeNum.value >= 1000 || officeNum.value <= 0) {
    return alert("Please enter a real office number");
  } else {
    customerOfficeNum.textContent = `Nova Poshta office number: ${officeNum.value}`;
  }

  let paymentWay = "";

  if (cardPayment.checked) {
    customerPayment.textContent = `Payment way: ${cardPayment.value}`;
    paymentWay = cardPayment.value;
  } else if (cashPayment.checked) {
    customerPayment.textContent = `Payment way: ${cashPayment.value}`;
    paymentWay = cashPayment.value;
  } else {
    return alert("Please choose the payment way");
  }

  customerItem.textContent = `Chosen item: ${itemName}`;

  if (quantity.value === "") {
    return alert("Please enter how many items you want to buy");
  } else if (quantity.value >= 50 || quantity.value <= 0) {
    return alert("Please enter a real number of items");
  } else {
    customerQuantity.textContent = `Quantity: ${quantity.value}`;
  }

  customerComments.textContent = `Comments: ${comments.value}`;

  form.style.display = "none";
  orderInfoDiv.style.display = "block";
  let date = new Date();

  const purchasedItem = {
    name: itemName,
    date: `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    id: Date.now(),
    details: {
      customerName: `Customer name: ${firstName.value} ${lastName.value}`,
      deliverTO: `City of delivery: ${cities.value}`,
      postOfficeNum: `Post office number: ${officeNum.value}`,
      paymentWay: `Payment way: ${paymentWay}`,
      quantity: `Quantity: ${quantity.value}`,
      comments: `Comments: ${comments.value}`,
    },
  };

  const newArrayPlusItem = JSON.parse(
    localStorage.getItem("listOfPurchasedItems")
  ).concat(purchasedItem);
  localStorage.setItem(
    "listOfPurchasedItems",
    JSON.stringify(newArrayPlusItem)
  );
});

const purchaseButtn = document.getElementById("purchaseButtn");
const sportCategory = document.getElementById("sports");
const clothesCategory = document.getElementById("clothes");
const musicCategory = document.getElementById("musicalInstruments");
const customerPurchasesDiv = document.getElementById("customerPurchasesDiv");

let categoryArray = [sportCategory, clothesCategory, musicCategory];
let purchaseButtnClickCounter = 0;

purchaseButtn.addEventListener("click", () => {
  clearShopContent();

  if (purchaseButtnClickCounter === 0) {
    while (categoryList.hasChildNodes()) {
      categoryList.removeChild(categoryList.firstChild);
    }
    form.style.display = "none";
    orderInfoDiv.style.display = "none";
    purchaseButtn.textContent = "Categories";
    ++purchaseButtnClickCounter;

    function renderPurchaseList() {
      for (
        let i = 0;
        i < JSON.parse(localStorage.getItem("listOfPurchasedItems")).length;
        i++
      ) {
        const purchasedItemDiv = document.createElement("div");
        customerPurchasesDiv.appendChild(purchasedItemDiv);
        purchasedItemDiv.style.margin = "10px";
  
        const purchasedItemName = document.createElement("h5");
        purchasedItemDiv.appendChild(purchasedItemName);
        purchasedItemName.textContent = `Purchased item: ${
          JSON.parse(localStorage.getItem("listOfPurchasedItems"))[i].name
        }`;
  
        const dateOfPurchase = document.createElement("h5");
        purchasedItemDiv.appendChild(dateOfPurchase);
        dateOfPurchase.textContent = `Date: ${
          JSON.parse(localStorage.getItem("listOfPurchasedItems"))[i].date
        }`;
  
        const detailsDiv = document.createElement("div");
        purchasedItemDiv.appendChild(detailsDiv);
  
        const removePurchasedItemButtn = document.createElement("button");
        purchasedItemDiv.appendChild(removePurchasedItemButtn);
        removePurchasedItemButtn.textContent = "Remove item";

        removePurchasedItemButtn.addEventListener("click", () => {
          while (purchasedItemDiv.hasChildNodes()) {
            purchasedItemDiv.removeChild(purchasedItemDiv.firstChild);
          }
  
          const newArrayMinusItem = JSON.parse(
            localStorage.getItem("listOfPurchasedItems")
          ).filter(
            (el) =>
              el.id !==
              JSON.parse(localStorage.getItem("listOfPurchasedItems"))[i].id
          );
          localStorage.setItem(
            "listOfPurchasedItems",
            JSON.stringify(newArrayMinusItem)
          );
  
          while (customerPurchasesDiv.hasChildNodes()) {
            customerPurchasesDiv.removeChild(customerPurchasesDiv.firstChild);
          }
          renderPurchaseList();
        });

        const getInfoButton = document.createElement("button");
        purchasedItemDiv.appendChild(getInfoButton);
        getInfoButton.textContent = "Show info";

        let getInfoButtonCounter = 0;

        getInfoButton.addEventListener("click", () => {
          if (getInfoButtonCounter === 0) {
            getInfoButton.textContent = "Hide info";
            ++getInfoButtonCounter;
  
            for (let elem in JSON.parse(
              localStorage.getItem("listOfPurchasedItems")
            )[i].details) {
              const infoLine = document.createElement("h5");
              detailsDiv.appendChild(infoLine);
              infoLine.textContent = JSON.parse(
                localStorage.getItem("listOfPurchasedItems")
              )[i].details[elem];
            }
          } else {
            while (detailsDiv.hasChildNodes()) {
              detailsDiv.removeChild(detailsDiv.firstChild);
            }
            getInfoButton.textContent = "Show info";
            --getInfoButtonCounter;
          }
        });
      }
    }

    renderPurchaseList();
    
  } else {
    categoryArray.forEach((elem) => {
      categoryList.appendChild(elem);
    });
    while (customerPurchasesDiv.hasChildNodes()) {
      customerPurchasesDiv.removeChild(customerPurchasesDiv.firstChild);
    }
    purchaseButtn.textContent = "My purchases";
    --purchaseButtnClickCounter;
  }
});
