function randomizeChamp(sort){
    let champnames;
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
    let currentChamp = champNames[Math.floor(Math.random() * champNames.length)];
    localStorage.setItem('currentChamp',currentChamp);
    // Remove the special characters for the filenames
    while(currentChamp.includes("'")){
        currentChamp = currentChamp.replace("'",'');
    }
    localStorage.setItem('currentChampImage',currentChamp + ".png");
    window.location.href = "result-screen.html";
}

function SetRandomText(){
    let champText = document.getElementById("randomChampText");
    champText.innerHTML = localStorage.getItem('currentChamp');
}

function SetRandomImage(){
    let champImage = document.getElementById("masthead");
    champImage.style.background = "no-repeat bottom / cover url('images/"+localStorage.getItem('currentChampImage')+"')";
    //champImage.style.background = "no-repeat bottom / cover url('images/lux.png')";
}