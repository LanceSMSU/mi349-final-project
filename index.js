/**
 * Get a randomized champ based off of sort settings and save the champ name and image filename to local storage
 * @param sort What type of champ to randomize from 
 */
function randomizeChamp(sort){
    let champnames;

    // Based on the current sorting setting, define the list of champs to randomize from
    if(sort === "any"){
        champNames = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie",
     "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum",
      "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo",
       "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio",
        "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi",
         "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista",
          "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred",
           "Kled", "Kog'Maw", "K'Sante", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian",
            "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune",
             "Mordekaiser", "Morgana", "Nami", "Nasus", "Naafiri", "Nautilus", "Neeko", "Nidalee",
              "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy",
               "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton",
                "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett",
                 "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain",
                  "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana",
                   "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne",
                    "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick",
                     "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac",
                      "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];
    } else if(sort === "mid"){

    } else if(sort === "top"){

    } else if(sort === "jungle"){

    } else if(sort === "bottom"){

    } else if(sort === "support"){

    }

    // Get the random champ out of the filtered pool
    let currentChamp = champNames[Math.floor(Math.random() * champNames.length)];

    // Store the randomized champ in local storage
    localStorage.setItem('currentChamp',currentChamp);

    // Remove the special characters for the filenames
    while(currentChamp.includes("'")){
        currentChamp = currentChamp.replace("'",'');
    }

    // Set the filename of the champ to the current random champ
    localStorage.setItem('currentChampImage',currentChamp + ".png");
}

/**
 * Sets the random champ name text in the results to the current randomized champ in storage
 */
function SetRandomText(){
    // Get the random champ text element
    let champText = document.getElementById("randomChampText");

    // Set the text of the label
    champText.innerHTML = localStorage.getItem('currentChamp');
}

/**
 * Sets the random champ image in the results to the current randomized champ image filename in storage
 */
function SetRandomImage(){
    // Get the element that holds the image of the random champ
    let champImage = document.getElementById("masthead");

    // Set the element's image to the random champ filepath in local storage
    champImage.style.background = "no-repeat bottom / cover url('images/"+localStorage.getItem('currentChampImage')+"')";
}