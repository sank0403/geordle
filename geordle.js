var gameOver = false;
//Confetti Begin
btnParty.addEventListener("click", () => {
  confetti("tsparticles", {
    angle: 90,
    count: 300,
    position: { x: 50, y: 50 },
    spread: 90,
    startVelocity: 50,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    colors: ["#fff", "#f00"],
    shapes: ["square", "circle"],
    scalar: 1,
    zIndex: 2000,
    disableForReducedMotion: true
  });
});
//Confetti End
//Counter Construct
var div = document.getElementById("bb");
setInterval(function () {
	var toDate = new Date();
	var tomorrow = new Date();
	tomorrow.setHours(24, 0, 0, 0);
	var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
	var diffHr = Math.floor(diffMS / 3600);
	diffMS = diffMS - diffHr * 3600;
	var diffMi = Math.floor(diffMS / 60);
	diffMS = diffMS - diffMi * 60;
	var diffS = Math.floor(diffMS);
	var result = ((diffHr < 10) ? "0" + diffHr : diffHr);
	result += ":" + ((diffMi < 10) ? "0" + diffMi : diffMi);
	result += ":" + ((diffS < 10) ? "0" + diffS : diffS);
	if (localStorage.getItem('gameovergd' + days) == 1) {
		div.innerHTML = result;
	}
}, 1000);

//Open Stats at end of game
function OpenStats() {
	document.getElementById("statsbutton").click();
}

//Open Rules the very first time
function OpenRules() {
	document.getElementById("rulesbutton").click();
}

//Confetti after game successfully completed 
function ConfettiStart() {
	document.getElementById("btnParty").click();
}

function removeblink() {
	if (!gameOver){
		document.getElementById("lives").classList.remove("blink");
		//document.getElementById("answer").innerText = "";
	}
}

//Final Clue Text Attenion 
function FinalClue() {
	document.getElementById("answer").classList.add("popanswer");
}

//Button Text
function ResetButton() {
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "Share Stats🔊"
}


//Display Footer after game
function displayFooter() {
	document.getElementById("pzlhdr").style.display = "block";
	document.getElementById("pzl").style.display = "block";
	document.getElementById("bbhdr").style.display = "block";
	document.getElementById("bb").style.display = "block";
	document.getElementById("HTMLButton").style.display = "block";
	document.getElementById("CoffeButton").style.display = "block";	
	if (funFact[index] != countryList[index]){
		if (flagList[index] != countryList[index]){
			//document.getElementById("ffhdr").innerHTML = flagList[index] + " TRIVIA " + flagList[index];
			document.getElementById("ffhdr").innerHTML = '<strong style="font-size:20px">' + flagList[index] + '</strong>&nbsp;&nbsp;' + "TRIVIA" + '&nbsp;&nbsp;<strong style="font-size:20px">' + flagList[index] + '</strong>';
		}
		else{
			document.getElementById("ffhdr").innerHTML = "TRIVIA";
		}
		document.getElementById("ffdtl").innerHTML = funFact[index];
		document.getElementById("ffhdr").style.display = "block";	
		document.getElementById("ffdtl").style.display = "block";	
	}
}

window.localStorage;
if (!localStorage.totalgdplayed){
localStorage.setItem("totalgdplayed",0);
localStorage.setItem("totalgdwins",0);
localStorage.setItem("totalgdstreak",0);
localStorage.setItem("totalgdstars",0);
localStorage.setItem("gamegdwon", 0);
localStorage.setItem("stargd0count", 0);
localStorage.setItem("stargd1count", 0);
localStorage.setItem("stargd2count", 0);
localStorage.setItem("stargd3count", 0);
localStorage.setItem("stargd4count", 0);
localStorage.setItem("stargd5count", 0);
localStorage.setItem("stargdxcount", 0);
}

//Baseline Date
var a = new Date(); // Current date now.
var b = new Date(2022, 4, 15, 0, 0, 0, 0); // Start of TENIZ.
var d = (a - b); // Difference in milliseconds.
var days = parseInt((d / 1000) / 86400);
if (localStorage.getItem('gameovergd' + days) != 0 && localStorage.getItem('gameovergd' + days) != 1) {
	localStorage['gameovergd' + days] = 0;
	localStorage.setItem("gdlives","🔴🔴🔴🔴🔴");
	localStorage.setItem("gdcorrect"," ");
	localStorage.setItem("gdlivescnt",0);
	localStorage.setItem("gdstarscnt",0);
	localStorage.setItem("gdcountry","");
	localStorage.setItem("gdcapital","");
	localStorage.setItem("gddisabledkey", JSON.stringify(""));
	localStorage.setItem("gdgamecnt",0);
}

/* for (var d = 1; d < Number(days) ; d++){
	localStorage.removeItem('gameovergd' + d);
} */

//Clipboard Code
function myFunction() {
	if (localStorage.gdgamecnt == 6){
		var cluehdr = "X/5";
	}
	else {
		cluehdr = localStorage.gdgamecnt + "/5";
	}
	switch (Number(localStorage.gdgamecnt)) {
				case 0: var clueicon = "🔴 🔴 🔴 🔴 🔴"
					break;
				case 1: var clueicon = "🔴 🔴 🔴 🔴 ⭐"
					break;	
				case 2: var clueicon = "🔴 🔴 🔴 ⭐ ⭐"
					break;				
				case 3: var clueicon = "🔴 🔴 ⭐ ⭐ ⭐"
					break;	
				case 4: var clueicon = "🔴 ⭐ ⭐ ⭐ ⭐"
					break;	
				case 5: var clueicon = "⭐ ⭐ ⭐ ⭐ ⭐"
					break;
				case 6: var clueicon = "💀 💀 💀 💀 💀"
					break;					
			}

	var copyText = "🌎 GEORDLE Day - " + days + " 🌎\n\n" + cluehdr + " - " + clueicon + "\n🔥 Streak: " + localStorage.totalgdstreak + " | ⭐ Stars: " + localStorage.totalgdstars + "\n\nhttps://tinyurl.com/geordle/";
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);

	//Button Text
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "Copied☑️"
	setTimeout(ResetButton, 1000);
}

var countryList = ["belize", "lesotho", "nigeria", "grenada", "canada", "ghana", "russia", "tuvalu", "cyprus", "bahamas", "seychelles", "england", "guyana", "philippines", "bolivia", "unitedarabemirates", "tanzania", "ethiopia", "mongolia", "saudiarabia", "liechtenstein", "panama", "qatar", "hungary", "niger", "uruguay", "netherlands", "mozambique", "turkmenistan", "czechrepublic", "somalia", "albania", "egypt", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "congo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "EquatorialGuinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosnia", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia",];
var capitalList = ["belmopan", "maseru", "abuja", "saintgeorges", "ottawa", "accra", "moscow", "funafuti", "nicosia", "nassau", "victoria", "london", "georgetown", "manila", "sucre", "abudhabi", "dodoma", "addisababa", "ulaanbaatar", "riyadh", "vaduz", "panamacity", "doha", "budapest", "niamey", "montevideo", "amsterdam", "maputo", "ashgabat", "prague", "mogadishu", "tirana", "cairo", "yarendistrict", "bucharest", "pretoria", "bamako", "sanjose", "yamoussoukro", "seoul", "portonovo", "kampala", "majuro", "harare", "vilnius", "baku", "antananarivo", "mbabane", "baghdad", "stockholm", "dublin", "lome", "amman", "muscat", "bishkek", "reykjavik", "bern", "kinshasa", "pristina", "gitega", "guatemalacity", "dakar", "chisinau", "manama", "monrovia", "sanaa", "athens", "pyongyang", "santodomingo", "capetown", "libreville", "conakry", "malabo", "monaco", "basseterre", "tripoli", "freetown", "saintjohns", "zagreb", "saotome", "lilongwe", "managua", "kathmandu", "portvila", "apia", "lima", "hanoi", "kyiv", "jakarta", "asmara", "yaounde", "kingston", "santiago", "asuncion", "portauprince", "tbilisi", "podgorica", "thimphu", "ouagadougou", "bangkok", "havana", "rabat", "nairobi", "luxembourg", "dhaka", "singapore", "skopje", "nouakchott", "belgrade", "tashkent", "dili", "portmoresby", "bandarseribegawan", "beijing", "madrid", "quito", "lisbon", "yerevan", "algiers", "nukualofa", "ljubljana", "wellington", "sofia", "buenosaires", "edinburgh", "jerusalem", "castries", "windhoek", "kabul", "kuwaitcity", "sanmarino", "islamabad", "bogota", "canberra", "phnompenh", "palikir", "ndjamena", "suva", "lusaka", "sarajevo", "minsk", "ankara", "helsinki", "cardiff", "washingtondc", "vaticancity", "honiara", "kualalumpur", "andorralavella", "mexicocity", "tunis", "tehran", "gaborone", "riga", "oslo", "tokyo", "portlouis", "damascus", "roseau", "srijayawardenepurakotte", "bratislava", "tallinn", "paramaribo", "tarawa", "portofspain", "bissau", "bangui", "brasilia", "vientiane", "copenhagen", "newdelhi", "valletta", "moroni", "brussels", "banjul", "luanda", "sansalvador", "djibouti", "rome", "vienna", "lobamba", "bridgetown", "praia", "warsaw", "paris", "taipei", "tegucigalpa", "nursultan", "juba", "caracas", "male", "dushanbe", "bloemfontein", "khartoum", "beirut", "kingstown", "berlin", "naypyidaw", "kigali", "ngerulmud", "lapaz",];
var flagList = ["🇧🇿", "🇱🇸", "🇳🇬", "🇬🇩", "🇨🇦", "🇬🇭", "🇷🇺", "🇹🇻", "🇨🇾", "🇧🇸", "🇸🇨", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇬🇾", "🇵🇭", "🇧🇴", "🇦🇪", "🇹🇿", "🇪🇹", "🇲🇳", "🇸🇦", "🇱🇮", "🇵🇦", "🇶🇦", "🇭🇺", "🇳🇪", "🇺🇾", "🇳🇱", "🇲🇿", "🇹🇲", "🇨🇿", "🇸🇴", "🇦🇱", "🇪🇬", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "congo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "EquatorialGuinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosnia", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia",];
var funFact = 	["BELIZE, officially the Republic Belize, is a country located on the eastern coast of Central America. It has an area of 22,966 square km. Belmopan is its capital and Belize City is its largest city. Believe it or not, but the country’s most prized culinary delicacy is a rodent called, Gibnut. Incidentally, it’s also called the 'royal rat' because it was served to Queen Elizabeth.",
				"LESOTHO, officially the Kingdom of Lesotho, is an enclaved country within the border of South Africa. It has an area of 30,355 square km. Its capital and largest city is Maseru. Lesotho is a high-altitude country, situated at an elevation of 2161 m above sea level. It is also famously known as 'The Kingdom in the Sky' for its unforgettable panoramas that it offers to tourists.",
				"NIGERIA is located in West Africa on the Gulf of Guinea in the Atlantic Ocean. It is bordered by Chad, Cameroon and Benin. The Nigerian film industry is known as Nollywood as it produces around 50 movies per week, second only to India’s Bollywood and more than the USA’s Hollywood. It is also Nigeria’s country’s second-largest employer with more than a million people employed in the industry.",
				"GRENADA is a country in the West Indies in the Caribbean Sea at the southern end of the Grenadines island chain. It has an area of 344 square km. St. George’s is its capital and largest city. Grenada is the home of the world’s first underwater sculpture park. The sculptures are developed with concrete and rebar, and are placed naturally without affecting the natural reef and the lives of its inhabitants adversely.",
				"CANADA is a country in the northern part of North America. With an area of 9,984,670 square km, it is the world’s second-largest country by total area. Falling behind Russia, and just beating out China and the United States. Ottawa is its capital and Toronto is its largest city. Santa Claus and Mrs. Claus are Canadian. Canada issued them passports, tax records, and exceptions to the tax code, giving Santa freedom to pay his elves in cookies and holiday cheer.",
				"GHANA, officially the Republic of Ghana, is a country located along the Gulf of Guinea and the Atlantic Ocean, in the subregion of West Africa. It has an area of 238,533 square km. Accra is its capital and largest city. Polygamy is legal and people do not have a problem with the polygamous families in so far as the breadwinner can sufficiently provide for the families. However, marrying more than one wife is most often than not a reserve for the wealthier as well as powerful members of the society.",
				"RUSSIA or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area, covering over 17,125,191 square kilometres (6,612,073 sq mi), and encompassing one-eighth of Earth's inhabitable landmass. Russia extends across eleven time zones and borders sixteen sovereign nations, the most of any country in the world. It is the ninth-most populous country and the most populous country in Europe, with a population of 145.5 million. The country's capital and largest city is Moscow, the largest city entirely within Europe. Russia has the world’s longest railway – the Trans-Siberian Railway (9288 km).",
				"TUVALU (formerly known as the Ellice Islands) is an island country in the Polynesian subregion of Oceania in the Pacific Ocean. Its islands are situated about midway between Hawaii and Australia. Its capital is Funafuti. The total land area of the islands of Tuvalu is 26 square kilometres (10 sq mi). Initially, Tuvalu could not join the United Nations because it couldn’t afford the entrance fee. When internet domain names were first assigned to countries, Tuvalu received the sought-after abbreviation of .tv. In 2000, the country negotiated a 12-year $50m lease of its domain, and again in 2012. It used the profits to install electricity on outer islands, create scholarships and join the UN.",
				"CYPRUS, Cyprus, officially the Republic of Cyprus, is an island country in the Eastern Mediterranean. It has an area of 9,251 square km. Nicosia is its capital and largest city. It has no land bordering countries, and is the third largest & third most populous island in the Mediterranean. Cyprus is one of just two nations and the first in the world to include its map on its flag. Also, as per topcyprustaxi.eu, taxi drivers in Cyprus do not give change. They keep the change as a tip. A quick tip to save money in Cyprus is to tender exact change to the taxi driver.",
				"The BAHAMAS, officially the Commonwealth of the Bahamas, is an island country. The Bahamas became a British Crown colony in 1718, when the British clamped down on piracy. It has a total area of 13,880 square km. Nassau is its capital and largest city. The Bahamas is one of the two countries whose official name begins with the word 'The'. On October 12, 1492, Christopher Columbus is believed to have landed on the island. The tourist from the United States and Canada are not required to carry their passports to the Bahamas for a stay of less than three weeks. Every year millions of visitors to the country spend billions of dollars.",
				"SEYCHELLES, officially the Republic of Seychelles , is an archipelagic island country consisting of 115 islands in the Indian Ocean at the eastern edge of the Somali Sea. Its capital and largest city, Victoria, is 1,500 kilometres (800 nautical miles) east of mainland Africa. It is the least populous sovereign African country, with an estimated 2020 population of 98,462. Seychelles, being close to Indian Ocean’s Sea routes yet hidden, proved to be the best hideout for pirates from both the Indian subcontinent and the Arabian Peninsula. Olivier Levasseur is the world’s notorious pirate who is known to have discovered this hideout and entrusted it with his fortune. More than $160,000 of this fortune still remains secretly kept in its vaults, by the island itself.",
				"ENGLAND is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight. London is the capital and largest city of England and the United Kingdom with a total population of 9,002,488. Even though there are different traditional dishes in England such as Yorkshire Pudding, Fish and Chips and Shepherd’s Pie, Chicken Tikka Masala is widely considered the country's national dish, even though the origin of this dish is India.",
				"GUYANA, officially the Co-operative Republic of Guyana, is a sovereign state on the northern mainland of South America. It is also the only Commonwealth state on mainland South America. After Uruguay (176,215 square km) and Suriname (163,821 square km), Guyana (214,970 square km) is the third-smallest country on the mainland South America. Georgetown is the capital and chief port of Guyana. Guyana co-hosted the Cricket World Cup 2007 with the West Indies. It was during this World Cup matches played at the Providence Stadium that the Sri Lankan fast bowler Lasith Malinga became the first bowler in international cricket history to take four wickets in four consecutive balls.",
				"PHILIPPINES, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It has an area of 300,000 square km. Manila is its capital and Quezon City is its largest city. Social media is important to Filipinos. The Philippines is now considered the text capital of the world. With more than 450 million SMS messages sent by the residents daily, they surpass the daily texts sent in Europe and the U.S. combined.",
				"BOLIVIA, officially the Plurinational State of Bolivia, is a landlocked country located in western-central South America. It has a total area of 1,098,581 square km. Sucre is its constitutional capital while La Paz is its seat of government. Bolivia was known as Upper Peru during the Spanish rule. San Pedro prison in Bolivia is a major tourist attraction. Unlike other prisons around the world, this special prison permits its inmates to live with their families, work, earn and even buy or rent their accommodations.",
				"The UNITED ARAB EMIRATES is a country in Western Asia. It is located at the eastern end of the Arabian Peninsula, and shares borders with Oman and Saudi Arabia. Abu Dhabi is the nation's capital, while Dubai, the most populous city, is an international hub. The United Arab Emirates is an elective monarchy formed from a federation of seven emirates, consisting of Abu Dhabi (the capital), Ajman, Dubai, Fujairah, Ras Al Khaimah, Sharjah and Umm Al Quwain. Each emirate is governed by an Emir and, together, they form the Federal Supreme Council. In 2014, the Dubai International Airport overtook London Heathrow as the busiest airport in the world when measuring international passenger traffic. The Burj Khalifa is a major tourist draw and a symbol of the country’s wealth. Standing at 828 meters, it is the tallest freestanding structure in the world. Within the building is the world’s highest nightclub and restaurant, as well as the longest elevator.",
				"TANZANIA, officially the United Republic of Tanzania, is a place where nature is at its wildest. It is surrounded by three great lakes of Africa – Lake Victoria, Lake Tanganyika and Lake Malawi. Mount Kilimanjaro is Tanzania’s poster boy. The iconic mountain is the highest peak in Africa and a place of amazing beauty. Mount Kilimanjaro is a world in itself, with a staggering five different types of climatic zones, from hot tropical forests to arid snowcapped peaks. In comparison, the whole of the US has a total of 7 climatic zones.",
				"ETHIOPIA, officially the Federal Democratic Republic of Ethiopia, is a landlocked country in the north-eastern part of Africa, popularly known as the Horn of Africa. It has an area of 1,104,300 square km. Addis Ababa is its capital and largest city. Ethiopia is among the oldest countries on the planet, having been established in 980 B.C. It is the only country in the world to have 13 months in a year. The oldest fossil skeleton of a human was found in Ethiopia. It is over three million years old.",
				"MONGOLIA is a country in East Asia. The country is also famous for Genghis Khan, a one of a kind ruler that changed the course of history for the country. Mongolia lies between China to the South and Russia to the North. It is actually bordered on the three sides (South, East, and West) by China. Kazakhstan is also near to Mongolia at only a distance of 36.76 km. With an average temperature of minus 1.3 degree Celsius, Mongolia’s capital Ulaanbaatar (“Red Hero”) is the world’s chilliest capital city. A giant statue of Genghis Khan riding a horse, forty meters high, was erected in 2008. It is the world’s largest equestrian statue, and it cost nearly 4 million USD to build the same. Two hundred and fifty tons of stainless steel was used to build the statue which has an elevator to take visitors and tourist to the top of the horse’s head.",
				"SAUDI ARABIA, officially the Kingdom of Saudi Arabia ,is a country on the Arabian Peninsula in Western Asia. It has a land area of about 2,150,000 km2 (830,000 sq mi), making it the fifth-largest country in Asia, the second-largest in the Arab world, and the largest in Western Asia. Its capital and largest city is Riyadh. The country is home to Mecca and Medina, the two holiest cities in Islam. The Saudi Royal Family is the richest royal family in the world. Their main source of income is Saudi’s oil reserves which are currently valued at around $2 trillion. Harry Potter books have been banned in Saudi Arabia. The government has an anti-witchcraft action unit that is under the religious police.",
				"liechtenstein",
				"panama",
				"qatar",
				"hungary",
				"niger",
				"uruguay",
				"netherlands",
				"mozambique",
				"turkmenistan",
				"czechrepublic",
				"somalia",
				"albania",
				"egypt",
				"nauru",
				"romania",
				"southafrica",
				"mali",
				"costarica",
				"ivorycoast",
				"southkorea",
				"benin",
				"uganda",
				"marshallislands",
				"zimbabwe",
				"lithuania",
				"azerbaijan",
				"madagascar",
				"eswatini",
				"iraq",
				"sweden",
				"ireland",
				"togo",
				"jordan",
				"oman",
				"kyrgyzstan",
				"iceland",
				"switzerland",
				"congo",
				"kosovo",
				"burundi",
				"guatemala",
				"senegal",
				"moldova",
				"bahrain",
				"liberia",
				"yemen",
				"greece",
				"northkorea",
				"dominicanrepublic",
				"southafrica",
				"gabon",
				"guinea",
				"EquatorialGuinea",
				"monaco",
				"saintkittsandnevis",
				"libya",
				"sierraleone",
				"antiguaandbarbuda",
				"croatia",
				"saotomeandprincipe",
				"malawi",
				"nicaragua",
				"nepal",
				"vanuatu",
				"samoa",
				"peru",
				"vietnam",
				"ukraine",
				"indonesia",
				"eritrea",
				"cameroon",
				"jamaica",
				"chile",
				"paraguay",
				"haiti",
				"georgia",
				"montenegro",
				"bhutan",
				"burkinafaso",
				"thailand",
				"cuba",
				"morocco",
				"kenya",
				"luxembourg",
				"bangladesh",
				"singapore",
				"northmacedonia",
				"mauritania",
				"serbia",
				"uzbekistan",
				"timorleste",
				"papuanewguinea",
				"brunei",
				"china",
				"spain",
				"ecuador",
				"portugal",
				"armenia",
				"algeria",
				"tonga",
				"slovenia",
				"newzealand",
				"bulgaria",
				"argentina",
				"scotland",
				"israel",
				"saintlucia",
				"namibia",
				"afghanistan",
				"kuwait",
				"sanmarino",
				"pakistan",
				"colombia",
				"australia",
				"cambodia",
				"micronesia",
				"chad",
				"fiji",
				"zambia",
				"bosnia",
				"belarus",
				"turkey",
				"finland",
				"wales",
				"unitedstatesofamerica",
				"vaticancity",
				"solomonislands",
				"malaysia",
				"andorra",
				"mexico",
				"tunisia",
				"iran",
				"botswana",
				"latvia",
				"norway",
				"japan",
				"mauritius",
				"syria",
				"dominica",
				"srilanka",
				"slovakia",
				"estonia",
				"suriname",
				"kiribati",
				"trinidadandtobago",
				"guineabissau",
				"centralafricanrepublic",
				"brazil",
				"laos",
				"denmark",
				"india",
				"malta",
				"comoros",
				"belgium",
				"gambia",
				"angola",
				"elsalvador",
				"djibouti",
				"italy",
				"austria",
				"eswatini",
				"barbados",
				"caboverde",
				"poland",
				"france",
				"taiwan",
				"honduras",
				"kazakhstan",
				"southsudan",
				"venezuela",
				"maldives",
				"tajikistan",
				"southafrica",
				"sudan",
				"lebanon",
				"saintvincentandthegrenadines",
				"germany",
				"myanmar",
				"rwanda",
				"palau",
				"bolivia",];

if (days%countryList.length > 0){
	var offset = Math.floor(days/countryList.length);
}
else{
	var offset = (days/countryList.length) - 1;
}
if (days > countryList.length){
	var index  = days - 1 - (offset * countryList.length);
}
else {
	var index = days - 1;
}

var country = countryList[index].toUpperCase();
var capital = capitalList[index].toUpperCase();
var word = (country + capital).toUpperCase();
var countrywidth = country.length; 
var capitalwidth = capital.length; 
var disabledkeyarr = [];
document.getElementById("answer").style.color = "#6AAA64";
document.getElementById("answer").innerText = "GAME ON!";
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const openSummaryButtons = document.querySelectorAll('[data-summary-target]')
const closeSummaryButtons = document.querySelectorAll('[data-close1-button]')
const overlay1 = document.getElementById('overlay1')


openSummaryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const summary = document.querySelector(button.dataset.summaryTarget)
		openSummary(summary)
	})
})

overlay1.addEventListener('click', () => {
	const summarys = document.querySelectorAll('.summary.active')
	summarys.forEach(summary => {
		closeSummary(summary)
	})
})

closeSummaryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const summary = button.closest('.summary')
		closeSummary(summary)
	})
})

function openSummary(summary) {
	if (summary == null) return
	UpdateChart();
	summary.classList.add('active')
	overlay1.classList.add('active')
}

function closeSummary(summary) {
	if (summary == null) return
	summary.classList.remove('active')
	overlay1.classList.remove('active')
}

//Chart Code
color0 = "brown"
color1 = "brown"
color2 = "brown"
color3 = "brown"
color4 = "brown"
color5 = "brown"
colorx = "brown"
function UpdateChart() {
	var xValues = ["5 ⭐", "4 ⭐", "3 ⭐", "2 ⭐", "1 ⭐", "0 ⭐", "X"];;
	var yValues = [localStorage.stargd5count, localStorage.stargd4count, localStorage.stargd3count, localStorage.stargd2count, localStorage.stargd1count, localStorage.stargd0count, localStorage.stargdxcount];
	//var barColors = ["red", "green","blue","orange","brown","yellow","cyan","white"];
	var barColors = [color5, color4, color3, color2, color1, color0, colorx];

	new Chart("myChart", {
		type: "bar",
		data: {
			labels: xValues,
			datasets: [{
				backgroundColor: barColors,
				data: yValues
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: false,
				text: "⭐ STAR DISTRIBUTION ⭐"
			}
		}
	});
}

window.onload = function(){
    intialize();
	UpdateChart();
}


function intialize() {
	let ele = document.getElementById("daycount");
	ele.innerHTML += (days);
	document.getElementById("pzlhdr").style.display = "none";
	document.getElementById("pzl").style.display = "none";
	document.getElementById("bbhdr").style.display = "none";
	document.getElementById("bb").style.display = "none";
	document.getElementById("HTMLButton").style.display = "none";
	document.getElementById("CoffeButton").style.display = "none";
	document.getElementById("ffhdr").style.display = "none";
	document.getElementById("ffdtl").style.display = "none";
	document.getElementById("lives").innerText = localStorage.gdlives;		
    // Create the game board
	var element = document.getElementById("boardfirst");
        //element.style.width = boardWidth;
        for (let c = 0; c < countrywidth; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = "1" + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardfirst").appendChild(tile);
        }
		
	var element = document.getElementById("boardlast");
        //element.style.width = boardWidth;
        for (let c = 0; c < capitalwidth; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = "2" + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardlast").appendChild(tile);
        }		
  
    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]
	
/* 	    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["⏎", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ] */
	
/*     let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]	 */

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "⏎") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "⏎" || key == "⌫"){
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
	
    // Listen for Key Press
		document.addEventListener("keyup", (e) => {
			if ("KeyA" <= e.code && e.code <= "KeyZ") {
				if (!document.getElementById(e.code).classList.contains("disabled")){
					processInput(e);
				}
			}
		})

	var winpct = Math.round(localStorage.totalgdwins / localStorage.totalgdplayed * 100);
	document.getElementById(6).innerText = "PLAYED: " + localStorage.totalgdplayed;
	document.getElementById(7).innerText = "WIN %: " + winpct;
	document.getElementById(8).innerText = "STREAK: " + localStorage.totalgdstreak;
	document.getElementById(9).innerText = "STARS: " + localStorage.totalgdstars;

	//Current Day Game Over
	if (localStorage.getItem('gameovergd' + days) == "1") {
		if (localStorage.gamegdwon == 1) {
			for (let i = 0; i < countrywidth; i++) {
				let currTile = document.getElementById("1" + '-' + i);
				currTile.innerText = country[i];
				currTile.classList.remove("poptile");
				currTile.classList.add("animated","correct");
			}	
			for (let i = 0; i < capitalwidth; i++) {
				let currTile = document.getElementById("2" + '-' + i);
				currTile.innerText = capital[i];
				currTile.classList.remove("poptile");
				currTile.classList.add("animated","correct");
			}		
				document.getElementById("answer").style.color = "#6AAA64";
				if (Number(localStorage.gdstarscnt) == 0){
					document.getElementById("answer").innerText = "STREAK INTACT. THOUGH, NO STARS WON!";
				}
				else if (Number(localStorage.gdstarscnt) > 0){
					if (localStorage.gdstarscnt == 1){
						document.getElementById("answer").innerText = "GREAT GOING! YOU WON " + localStorage.gdstarscnt +" STAR TODAY.";
					}
					else {
						document.getElementById("answer").innerText = "GREAT GOING! YOU WON " + localStorage.gdstarscnt +" STARS TODAY.";
					}					
/* 					for (let s = 0; s < localStorage.gdstarscnt; s++){
						document.getElementById("answerstar").innerText += "⭐";
					} */	
					var templives = "";
					templives = document.getElementById("lives").innerText;
					for (i=0; i<5; i++){
						templives = templives.replace("🔴", "⭐");
					}	
					document.getElementById("lives").innerText = templives;
					document.getElementById("lives").classList.add("animated");					
				}
		}
		else {
			for (let i = 0; i < countrywidth; i++) {
				let currTile = document.getElementById("1" + '-' + i);
				currTile.innerText = country[i];
				currTile.classList.remove("poptile","correct");
				currTile.classList.add("failed", "animated");
			}	
			for (let i = 0; i < capitalwidth; i++) {
				let currTile = document.getElementById("2" + '-' + i);
				currTile.innerText = capital[i];
				currTile.classList.remove("poptile","correct");
				currTile.classList.add("failed", "animated");
			}		
				document.getElementById("answer").style.color = "red";
				document.getElementById("answer").innerText = "GAME OVER! OUT OF LIVES.";
		}
		gameOver = true;
		setTimeout(OpenStats, 1100);
		displayFooter();		
	}
	// Default Path
	else {
		var disabled = JSON.parse(localStorage.getItem("gddisabledkey"));
		for (let i = 0; i < disabled.length; i++){
			document.getElementById("Key" + disabled[i]).classList.add("disabled");
		}
		if (localStorage.gdcountry != ""){
			for (let i = 0; i < countrywidth; i++){
				let currTile = document.getElementById("1" + '-' + i);
				if (localStorage.gdcountry[i] == "?"){
					currTile.innerText = "";
				}
				else if (localStorage.gdcountry[i] != ""){
					currTile.innerText = localStorage.gdcountry[i];
					currTile.classList.add("correct");
				}
			}	
		}
		if (localStorage.gdcapital != ""){
			for (let i = 0; i < capitalwidth; i++){
				let currTile = document.getElementById("2" + '-' + i);
				if (localStorage.gdcapital[i] == "?"){
					currTile.innerText = "";
				}
				else if (localStorage.gdcapital[i] != ""){
					currTile.innerText = localStorage.gdcapital[i];
					currTile.classList.add("correct");
				}
			}	
		}
	}

}


function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 
	document.getElementById("lives").classList.remove("blink");	
	document.getElementById("answer").innerText = "";
	var LetterFound = 0;
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
		for (let i = 0; i < countrywidth; i++){
			let currTile = document.getElementById("1" + '-' + i);
			if (e.code[3] == country[i]){
				if (currTile.innerText == ""){
					currTile.innerText = e.code[3];
					currTile.classList.add("correct","poptile");
					localStorage.gdcorrect = Number(localStorage.gdcorrect) + 1;				
				}
				LetterFound = 1;
			}	
		}
		for (let i = 0; i < capitalwidth; i++){
			let currTile = document.getElementById("2" + '-' + i);
			if (e.code[3] == capital[i]){
				if (currTile.innerText == ""){
					currTile.innerText = e.code[3];
					currTile.classList.add("correct","poptile");
					localStorage.gdcorrect = Number(localStorage.gdcorrect) + 1;
				}
				LetterFound = 1;				
			}
		}	
		document.getElementById(e.code).classList.add("disabled");
		var disabledkey = e.code[3];
		if (disabledkeyarr.length == 0){
			var temp = JSON.parse(localStorage.getItem("gddisabledkey"));
			if (temp != ""){
				disabledkeyarr.push(temp);
			}
		}
		disabledkeyarr.push(disabledkey);
		disabledkeyarr = [].concat.apply([], disabledkeyarr);
		localStorage.setItem("gddisabledkey", JSON.stringify(disabledkeyarr));		
    }
	
	if (LetterFound == 0){
		localStorage.gdlivescnt = Number(localStorage.gdlivescnt) + 1;
		document.getElementById("answer").style.color = "red";
		switch (Number(localStorage.gdlivescnt)) {
				case 0: localStorage.gdlives = "🔴🔴🔴🔴🔴";
					break;
				case 1: localStorage.gdlives = "🔴🔴🔴🔴";
					document.getElementById("answer").innerText = "FIRST LIFE LOST!"
					break;	
				case 2: localStorage.gdlives = "🔴🔴🔴";
					document.getElementById("answer").innerText = "SECOND LIFE LOST!"
					break;				
				case 3: localStorage.gdlives = "🔴🔴";
					document.getElementById("answer").innerText = "THIRD LIFE LOST!"				
					break;	
				case 4: localStorage.gdlives = "🔴";
					document.getElementById("answer").innerText = "FOURTH LIFE LOST!"				
					break;	
				case 5: localStorage.gdlives = "";
					document.getElementById("answer").innerText = "THIS IS YOUR LAST LIFE!";
					setTimeout(FinalClue, 500);	
					break;
				case 6: localStorage.gdlives = "💀💀💀💀💀";
					break;					
		}		
		
		document.getElementById("lives").innerText = localStorage.gdlives;
		document.getElementById("lives").classList.add("blink");
		setTimeout(removeblink, 3000);	
	}
	
	if (Number(localStorage.gdlivescnt == 6)){
		for (let i = 0; i < countrywidth; i++) {
			let currTile = document.getElementById("1" + '-' + i);
			currTile.innerText = country[i];
			currTile.classList.remove("poptile","correct");
			currTile.classList.add("failed", "animated");
		}	
		for (let i = 0; i < capitalwidth; i++) {
			let currTile = document.getElementById("2" + '-' + i);
			currTile.innerText = capital[i];
			currTile.classList.remove("poptile","correct");
			currTile.classList.add("failed", "animated");
		}		
			gameOver = true;
			localStorage.stargdxcount = Number(localStorage.stargdxcount) + 1;
			colorx = "green";
			localStorage.gdgamecnt = 6;
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "GAME OVER! OUT OF LIVES.";
			localStorage.setItem(('gameovergd' + days), 1);	
			localStorage.totalgdplayed = Number(localStorage.totalgdplayed) + 1;	
			localStorage.totalgdstreak = 0;			
			var winpct = Math.round(localStorage.totalgdwins / localStorage.totalgdplayed * 100);
			document.getElementById(6).innerText = "PLAYED: " + localStorage.totalgdplayed;
			document.getElementById(7).innerText = "WIN %: " + winpct;
			document.getElementById(8).innerText = "STREAK: " + localStorage.totalgdstreak;
			document.getElementById(9).innerText = "STARS: " + localStorage.totalgdstars;			
			displayFooter();
			localStorage.gamegdwon = 0;
			setTimeout(OpenStats, 3200);				
	}	
	
	if (Number(localStorage.gdcorrect) == word.length){
		for (let i = 0; i < countrywidth; i++) {
			let currTile = document.getElementById("1" + '-' + i);
			currTile.innerText = country[i];
			currTile.classList.remove("poptile");
			currTile.classList.add("animated");
		}	
		for (let i = 0; i < capitalwidth; i++) {
			let currTile = document.getElementById("2" + '-' + i);
			currTile.innerText = capital[i];
			currTile.classList.remove("poptile");
			currTile.classList.add("animated");
		}		
			gameOver = true;
			localStorage.gdstarscnt = 5 - Number(localStorage.gdlivescnt);
			switch (Number(localStorage.gdstarscnt)) {
				case 0: localStorage.stargd0count = Number(localStorage.stargd0count) + 1;
					color0 = "green";
					localStorage.gdgamecnt = 0;
					break;
				case 1: localStorage.stargd1count = Number(localStorage.stargd1count) + 1;
					color1 = "green";
					localStorage.gdgamecnt = 1;
					break;
				case 2: localStorage.stargd2count = Number(localStorage.stargd2count) + 1;
					color2 = "green";
					localStorage.gdgamecnt = 2;
					break;
				case 3: localStorage.stargd3count = Number(localStorage.stargd3count) + 1;
					color3 = "green";
					localStorage.gdgamecnt = 3;
					break;
				case 4: localStorage.stargd4count = Number(localStorage.stargd4count) + 1;
					color4 = "green";
					localStorage.gdgamecnt = 4;
					break;
				case 5: localStorage.stargd5count = Number(localStorage.stargd5count) + 1;
					color5 = "green";
					localStorage.gdgamecnt = 5;
					break;
			}
			document.getElementById("answer").style.color = "#6AAA64";
			if (Number(localStorage.gdstarscnt) == 0){
				document.getElementById("answer").innerText = "STREAK INTACT. THOUGH, NO STARS WON!";
			}
			else if (Number(localStorage.gdstarscnt) > 0){
					if (localStorage.gdstarscnt == 1){
						document.getElementById("answer").innerText = "GREAT GOING! YOU WON " + localStorage.gdstarscnt +" STAR TODAY.";
					}
					else {
						document.getElementById("answer").innerText = "GREAT GOING! YOU WON " + localStorage.gdstarscnt +" STARS TODAY.";
					}
			}
/* 			for (let s = 0; s < localStorage.gdstarscnt; s++){
				document.getElementById("answerstar").innerText += "⭐";
			} */
			var templives = "";
			templives = document.getElementById("lives").innerText;
			for (i=0; i<5; i++){
				templives = templives.replace("🔴", "⭐");
			}	
			document.getElementById("lives").innerText = templives;
			document.getElementById("lives").classList.add("animated");
			localStorage.setItem(('gameovergd' + days), 1);	
			localStorage.totalgdplayed = Number(localStorage.totalgdplayed) + 1;
			localStorage.totalgdwins = Number(localStorage.totalgdwins) + 1;
			localStorage.totalgdstreak = Number(localStorage.totalgdstreak) + 1;
			localStorage.totalgdstars = Number(localStorage.totalgdstars) + Number(localStorage.gdstarscnt);
			var winpct = Math.round(localStorage.totalgdwins / localStorage.totalgdplayed * 100);
			document.getElementById(6).innerText = "PLAYED: " + localStorage.totalgdplayed;
			document.getElementById(7).innerText = "WIN %: " + winpct;
			document.getElementById(8).innerText = "STREAK: " + localStorage.totalgdstreak;
			document.getElementById(9).innerText = "STARS: " + localStorage.totalgdstars;			
			displayFooter();
			localStorage.gamegdwon = 1;
			setTimeout(ConfettiStart, 1000);
			setTimeout(OpenStats, 4800);
	}	
	let gdcountry = "";
	for (let i = 0; i < countrywidth; i++){
		let currTile = document.getElementById("1" + '-' + i);
		if (currTile.innerText == ""){
			gdcountry += "?";
		}
		else{
			gdcountry += currTile.innerText;
		}
		localStorage.gdcountry = gdcountry;
	}	
	let gdcapital = "";
	for (let i = 0; i < capitalwidth; i++){
		let currTile = document.getElementById("2" + '-' + i);
		if (currTile.innerText == ""){
			gdcapital += "?";
		}
		else{
			gdcapital += currTile.innerText;
		}
		localStorage.gdcapital = gdcapital;
	}		
}
