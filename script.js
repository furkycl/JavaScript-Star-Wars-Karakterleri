const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://lumiere-a.akamaihd.net/v1/images/image_cef2777b.jpeg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const showcharacters = document.getElementById("showcharacters");
const charactersrow = document.getElementById("charactersrow");

function renderCharacters() {
  if (charactersrow.innerHTML === "") {
    showcharacters.classList.remove("btn-success");
    showcharacters.classList.add("btn-danger");
    showcharacters.innerText = "Karakterleri Gizle";

    let i;
    for (i = 0; i < characters.length; i++) {
      let newdiv = document.createElement("div");
      newdiv.classList.add("col-3");
      newdiv.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${characters[i].pic}" class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${characters[i].id}</li>
          <li class="list-group-item">Name:${characters[i].name}</li>
          <li class="list-group-item">Homeworld:${characters[i].homeworld}</li>
        </ul>
      </div>`;
      charactersrow.appendChild(newdiv);
    }
  } else {
    showcharacters.classList.add("btn-success");
    showcharacters.classList.remove("btn-danger");
    charactersrow.innerHTML = "";
    showcharacters.innerText = "Karakterleri Göster";
  }
}

/*
let homeworldsRaw=[];
var x;
for(x=0; x < characters.length; x++) {
  homeworldsRaw.push(characters[x].homeworld ?? "other");
  console.log(homeworldsRaw);
}
*/

/*
let homeworldsRaw = [];
for (let obj of characters) {
  if (!obj.homeworld) {
    homeworldsRaw.push("other");
  } else {
    homeworldsRaw.push(obj.homeworld);
  }
}
console.log(homeworldsRaw);
*/

let homeworldsRaw = [];
for (let obj of characters) {
  homeworldsRaw.push(obj.homeworld ?? "other");
}
console.log(homeworldsRaw);

const homeworldsUnique = [];
for (i = 0; i < homeworldsRaw.length; i++) {
  if (homeworldsUnique.includes(homeworldsRaw[i]) === false) {
    homeworldsUnique.push(homeworldsRaw[i]);
  }
}
console.log(homeworldsUnique);

const homeworldsLowercase = [];
for (j = 0; j < homeworldsUnique.length; j++) {
  homeworldsLowercase.push(homeworldsUnique[j].toLowerCase());
}
console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;
console.log(homeworlds);

/* o yüzden bu çözümü yaptım Part 3 ve 4 buraya gelecek*/
const filter_group = document.getElementById("homeworlds-filter-container");
homeworlds.forEach((world, index) => {
  const div = document.createElement("div");

  const radio = document.createElement("input");
  const unique_id = "filter-radio-" + index;
  radio.id = unique_id;
  radio.type = "radio";
  radio.value = world;
  radio.name = "home";
  radio.classList.value = "me-2";

  const label = document.createElement("label");
  label.for = unique_id;
  label.innerText = world;

  div.appendChild(radio);
  div.appendChild(label);
  filter_group.appendChild(div);
});



const filter_form = document.getElementById("homeworldsfilterform");
filter_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let filteredHomeworld = "";
  const data = new FormData(filter_form);
  for (const entry of data) {
    filteredHomeworld = entry[1];
  }
  filteredcharacterShow(filteredHomeworld);
});



function filteredcharacterShow(filteredHomeworld) {
  if (charactersrow.innerHTML === "") {
    showcharacters.classList.remove("btn-success");
    showcharacters.classList.add("btn-danger");
    showcharacters.innerText = "Karakterleri Gizle";
  }
  charactersrow.innerHTML = "";
  let i;
  for (i = 0; i < characters.length; i++) {
    if (
      (characters[i].homeworld ?? "other").toLowerCase() === filteredHomeworld ||
      !filteredHomeworld
    ) {
      let newdiv = document.createElement("div");
      newdiv.classList.add("col-3");
      newdiv.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${characters[i % characters.length].pic}" class="card-img-top" alt="...">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${characters[i % characters.length].id}</li>
                <li class="list-group-item">Name:${characters[i % characters.length].name}</li>
                <li class="list-group-item">Homeworld:${characters[i % characters.length].homeworld}</li>
              </ul>
            </div>`;
      charactersrow.appendChild(newdiv);
    }
  }
}

/*
function filteredcharacterShow(filteredHomeworld) {
  if (charactersrow.innerHTML === "") {
    showcharacters.classList.remove("btn-success");
    showcharacters.classList.add("btn-danger");
    showcharacters.innerText = "Karakterleri Gizle";
  }
  charactersrow.innerHTML = "";
  let i;
  for (i = 0; i < characters.length; i++) {
    if (
      (characters[i].homeworld == "other") === filteredHomeworld ||
      !filteredHomeworld
    ) {
      let newdiv = document.createElement("div");
      newdiv.classList.add("col-3");
      newdiv.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${characters[i].pic}" class="card-img-top" alt="...">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${characters[i].id}</li>
                <li class="list-group-item">Name:${characters[i].name}</li>
                <li class="list-group-item">Homeworld:${characters[i].homeworld}</li>
              </ul>
            </div>`;
      charactersrow.appendChild(newdiv);
    }
  }
}
*/
/*
function filteredcharacterShow(filteredHomeworld) {
  if (charactersrow.innerHTML === "") {
    showcharacters.classList.remove("btn-success");
    showcharacters.classList.add("btn-danger");
    showcharacters.innerText = "Karakterleri Gizle";
  }
  charactersrow.innerHTML = "";
  let z;
  for (z = 0; z < characters.length; z++) {
    let newdiv = document.createElement("div");
    newdiv.classList.add("col-3");
    newdiv.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${characters[z].pic}" class="card-img-top" alt="...">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${characters[z].id}</li>
            <li class="list-group-item">Name:${characters[z].name}</li>
            <li class="list-group-item">Homeworld:${characters[z].homeworld}</li>
          </ul>
        </div>`;
    charactersrow.appendChild(newdiv);
  }
}
*/
/*
const radioinputmaker = `
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  Default radio
  </label>
</div> `;
*/
/*
========>  Çalışıyor fakat aşağıda elementleri okurken burdaki literal stringin içindeki nameye ne yaptıysam bir türlü ulaşamadım!  <=========
for (k = 0; k < homeworlds.length; k++) {
  let newdivforradio = document.createElement("div");
  newdivforradio.innerHTML = `
<div class="form-check" name="formcheck">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworlds[k]}" value="${homeworlds[k]}">
  <label class="form-check-label" for="homeworld-${homeworlds[k]}">
  ${homeworlds[k]}
  </label>
</div> `;
  document.getElementById("homeworlds-filter-container").appendChild(newdivforradio);
}
*/
/*
const homeworlds_filterform = document.getElementById("homeworldsfilterform");
homeworlds_filterform.addEventListener("submit", (event) => {
  e.preventDefault();
  const data = new FormData(homeworlds_filterform);
  console.log(data);
});
*/
/*
let filteredHomeworld = document.homeworldsfilterform.homeworldsfiltercontainer.formcheck;
console.log(filteredHomeworld);
let prev;
for(k=0;k<filteredHomeworld.length;k++){
  filteredHomeworld[k].addEventListener('change',function() {
    (prev) = console.log(prev.value); null;
    if(this !== prev){
      prev = this;
    }
    console.log(this.value)
    });
}
*/
/*
for (k = 0; k < homeworlds.length; k++) {
  let newdivforradio = document.createElement("div");
  newdivforradio.innerHTML = `
<div class="formcheck">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworlds[k]}" value="${homeworlds[k]}">
  <label class="form-check-label" for="homeworld-${homeworlds[k]}">
  ${homeworlds[k]}
  </label>
</div> `;
  document.getElementById("homeworlds-filter-container").appendChild(newdivforradio);
  let filteredHomeworld = document.homeworldsfilterform.homeworldsfiltercontainer.newdivforradio.homeworld; 
  let filteredHomeworld = document.getElementById("homeworlds-filter-container").appendChild(newdivforradio);
  console.log(filteredHomeworld);
  let prev;
  for(k=0;k<filteredHomeworld.length;k++){
    filteredHomeworld[k].addEventListener('change',function() {
      (prev) = console.log(prev.value); null;
      if(this !== prev){
        prev = this;
      }
      console.log(this.value)
      });
}}
*/
