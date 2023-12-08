// The current sorting of the button
let currentSort = "All";

/**
 * Sets the current sort value to be 
 * @param sort what to set the sort value to
 */
function SetCurrentSort(sort){
    currentSort = sort;
    document.getElementById("SortText").innerHTML=currentSort;
}

/**
 * Get a randomized champ based off of sort settings and save the champ name and image filename to local storage
 */
function randomizeChamp(){
    let champnames;
    // Based on the current sorting setting, define the list of champs to randomize from
    switch(currentSort){
        case 'All':
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
            break;
        case 'Middle':
                champNames = ["Ahri", "Akali", "Akshan", "Anivia", "Annie",
                "Aurelion Sol", "Azir", "Cassiopeia", "Corki", "Ekko", "Fizz", "Galio",
                "Irelia", "Jayce", "Kassadin", "Katarina", "LeBlanc", "Lissandra", "Lux", "Malzahar", "Naafiri", "Neeko",
                "Orianna", "Pantheon", "Qiyana", "Ryze",
                "Sylas", "Syndra", "Taliyah", "Talon", "Tristana", "Twisted Fate",
                "Veigar", "Vex", "Viktor", "Vladimir", "Xerath", "Yasuo", "Yone",
                "Zed", "Ziggs", "Zoe"];
            break;
        case 'Top':
            champNames = ["Aatrox", "Akali", "Camille", "Cho'Gath", "Darius", "Dr. Mundo", "Fiora",
                "Gangplank", "Garen", "Gnar", "Gwen", "Illaoi",
                "Irelia", "Jax", "Jayce", "Kayle", "Kennen",
                "Kled", "K'Sante", "Malphite",
                "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Quinn", "Renekton",
                "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Tahm Kench", "Teemo",
                "Trundle", "Tryndamere", "Urgot", "Volibear", "Yasuo", "Yone", "Yorick"];
            break;
        case 'Jungle':
            champNames = ["Amumu", "Bel'Veth",
                "Briar", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Gragas", "Graves", "Hecarim", "Ivern", "Jarvan IV", "Karthus", "Kayn", "Kha'Zix", "Kindred",
                "Lee Sin", "Lillia", "Maokai", "Master Yi", "Nidalee",
                "Nocturne", "Nunu & Willump", "Poppy", "Rammus", "Rek'Sai",
                "Rengar", "Sejuani",
                "Shaco", "Shyvana", "Skarner",
                "Sylas", "Taliyah",
                "Trundle", "Udyr", "Vi", "Viego", "Warwick",
                "Wukong", "Xin Zhao", "Zac"];
            break;
        case 'Bottom':
            champNames = ["Aphelios", "Ashe", "Caitlyn",
                "Draven", "Ezreal", "Jhin", "Jinx", "Kai'Sa", "Kalista",
                "Kog'Maw", "Lucian", "Miss Fortune",
                "Nilah", "Samira", "Sivir", "Tristana", "Twitch", "Varus", "Vayne",
                "Xayah", "Yasuo", "Zeri", "Ziggs"];
            break;
        case 'Support':
            champNames = ["Alistar", "Ashe", "Bard", "Blitzcrank", "Brand", "Braum", "Heimerdinger", "Janna",
                "Karma", "Leona",
                "Lulu", "Lux", "Milio", "Morgana", "Nami", "Nautilus", "Neeko", "Pantheon",
                "Pyke", "Rakan", "Rell", "Renata Glasc", "Senna", "Seraphine",
                "Shaco", "Sona", "Soraka", "Swain",
                "Taric", "Thresh", "Vel'Koz", "Xerath", "Yuumi", "Zilean", "Zyra"];
            break;
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

    // Switch window to results screen
    window.location.href = "result-screen.html";
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