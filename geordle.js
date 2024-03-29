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
	HTMLButton.innerText = "COPY STATS🔊"
}


//Display Footer after game
function displayFooter() {
	document.getElementById("pzlhdr").style.display = "block";
	document.getElementById("pzl").style.display = "block";
	document.getElementById("bbhdr").style.display = "block";
	document.getElementById("bb").style.display = "block";
	document.getElementById("HTMLButton").style.display = "block";
	document.getElementById("CoffeButton").style.display = "block";	
	document.getElementById("FBButton").style.display = "block";	
	document.getElementById("TwitterButton").style.display = "block";	
	/* document.getElementById("WAButton").style.display = "block";	 */
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

var tierlevel = ""		
var tiericon = ""	
function SetTier() {
	if (localStorage.totalgdstreak >= 10 && localStorage.totalgdstreak <= 24)  {
		tierlevel = "Bronze (Streak 10 - 24)";
		tiericon = "🥉"; 
	}
	else if (localStorage.totalgdstreak >= 25 && localStorage.totalgdstreak <= 49) {
		tierlevel = "Silver (Streak 25 - 49)";
		tiericon = "🥈"; 
	}
	else if (localStorage.totalgdstreak >= 50 && localStorage.totalgdstreak <= 99) {
		tierlevel = "Gold (Streak 50 - 99)";
		tiericon = "🥇";
	}
	else if (localStorage.totalgdstreak >= 100) {
		tierlevel = "Ultimate (Streak 100+)";
		tiericon = "🏆";
	}
	else {
		tierlevel = "";
		tiericon = "";
	}		
}

function FBFunction() {
	myFunction();
	setTimeout(myFunctionOpenFB, 100);
}

function myFunctionOpenFB() {
	window.open("https://www.facebook.com/groups/329553752723826/?ref=share", "_blank");
}

function TwitterFunction() {
	myFunction();
	setTimeout(myTwitterOpenFB, 100);
}

function myTwitterOpenFB() {
	window.open("https://twitter.com/GeordleGame", "_blank");
}

function WAFunction() {
	myFunction();
	setTimeout(myFunctionOpenWA, 100);
}

function myFunctionOpenWA() {
	/* window.open("https://wa.me/?text=urlencodedtext", "_blank"); */
	/* var linktext = "Paste Stats and Share!"; */
	/* var walink = "https://wa.me/?text=" + linktext; */
	/* window.open(walink); */
	window.open("https://wa.me/", "_blank");
}

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
		
	if (tierlevel == ""){
		var copyText = "🌎 GEORDLE # " + days + " 🌎\n\n" + cluehdr + " - " + clueicon + "\n🔥 Streak: " + localStorage.totalgdstreak + " | ⭐ Stars: " + localStorage.totalgdstars + "\n\nhttps://tinyurl.com/geordle/";
	}
	else {
		var copyText = "🌎 GEORDLE # " + days + " 🌎\n\n" + cluehdr + " - " + clueicon + "\n🔥 Streak: " + localStorage.totalgdstreak + " | ⭐ Stars: " + localStorage.totalgdstars + "\n" + tiericon +  " Tier: " + tierlevel + "\n\nhttps://tinyurl.com/geordle/";
	}
			
		
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);

	//Button Text
	let HTMLButton = document.getElementById("HTMLButton");
	HTMLButton.innerText = "COPIED☑️"
	setTimeout(ResetButton, 1000);
}

var countryList = ["belize", "lesotho", "nigeria", "grenada", "canada", "ghana", "russia", "tuvalu", "cyprus", "bahamas", "seychelles", "england", "guyana", "philippines", "bolivia", "unitedarabemirates", "tanzania", "ethiopia", "mongolia", "saudiarabia", "liechtenstein", "panama", "qatar", "hungary", "niger", "uruguay", "netherlands", "mozambique", "turkmenistan", "czechrepublic", "somalia", "albania", "egypt", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "democraticrepublicofthecongo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "equatorialguinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosniaandherzegovina", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia", "republicofthecongo", "equatorialguinea", "palestine", "unitedkingdom", "northernireland",];
var capitalList = ["belmopan", "maseru", "abuja", "saintgeorges", "ottawa", "accra", "moscow", "funafuti", "nicosia", "nassau", "victoria", "london", "georgetown", "manila", "sucre", "abudhabi", "dodoma", "addisababa", "ulaanbaatar", "riyadh", "vaduz", "panamacity", "doha", "budapest", "niamey", "montevideo", "amsterdam", "maputo", "ashgabat", "prague", "mogadishu", "tirana", "cairo", "yarendistrict", "bucharest", "pretoria", "bamako", "sanjose", "yamoussoukro", "seoul", "portonovo", "kampala", "majuro", "harare", "vilnius", "baku", "antananarivo", "mbabane", "baghdad", "stockholm", "dublin", "lome", "amman", "muscat", "bishkek", "reykjavik", "bern", "kinshasa", "pristina", "gitega", "guatemalacity", "dakar", "chisinau", "manama", "monrovia", "sanaa", "athens", "pyongyang", "santodomingo", "capetown", "libreville", "conakry", "malabo", "monaco", "basseterre", "tripoli", "freetown", "saintjohns", "zagreb", "saotome", "lilongwe", "managua", "kathmandu", "portvila", "apia", "lima", "hanoi", "kyiv", "jakarta", "asmara", "yaounde", "kingston", "santiago", "asuncion", "portauprince", "tbilisi", "podgorica", "thimphu", "ouagadougou", "bangkok", "havana", "rabat", "nairobi", "luxembourg", "dhaka", "singapore", "skopje", "nouakchott", "belgrade", "tashkent", "dili", "portmoresby", "bandarseribegawan", "beijing", "madrid", "quito", "lisbon", "yerevan", "algiers", "nukualofa", "ljubljana", "wellington", "sofia", "buenosaires", "edinburgh", "jerusalem", "castries", "windhoek", "kabul", "kuwaitcity", "sanmarino", "islamabad", "bogota", "canberra", "phnompenh", "palikir", "ndjamena", "suva", "lusaka", "sarajevo", "minsk", "ankara", "helsinki", "cardiff", "washingtondc", "vaticancity", "honiara", "kualalumpur", "andorralavella", "mexicocity", "tunis", "tehran", "gaborone", "riga", "oslo", "tokyo", "portlouis", "damascus", "roseau", "srijayawardenepurakotte", "bratislava", "tallinn", "paramaribo", "tarawa", "portofspain", "bissau", "bangui", "brasilia", "vientiane", "copenhagen", "newdelhi", "valletta", "moroni", "brussels", "banjul", "luanda", "sansalvador", "djibouti", "rome", "vienna", "lobamba", "bridgetown", "praia", "warsaw", "paris", "taipei", "tegucigalpa", "astana", "juba", "caracas", "male", "dushanbe", "bloemfontein", "khartoum", "beirut", "kingstown", "berlin", "naypyidaw", "kigali", "ngerulmud", "lapaz", "brazzaville", "malabo", "ramallah", "london", "belfast",];
var flagList = ["🇧🇿", "🇱🇸", "🇳🇬", "🇬🇩", "🇨🇦", "🇬🇭", "🇷🇺", "🇹🇻", "🇨🇾", "🇧🇸", "🇸🇨", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇬🇾", "🇵🇭", "🇧🇴", "🇦🇪", "🇹🇿", "🇪🇹", "🇲🇳", "🇸🇦", "🇱🇮", "🇵🇦", "🇶🇦", "🇭🇺", "🇳🇪", "🇺🇾", "🇳🇱", "🇲🇿", "🇹🇲", "🇨🇿", "🇸🇴", "🇦🇱", "🇪🇬", "🇳🇷", "🇷🇴", "🇿🇦", "🇲🇱", "🇨🇷", "🇨🇮", "🇰🇷", "🇧🇯", "🇺🇬", "🇲🇭", "🇿🇼", "🇱🇹", "🇦🇿", "🇲🇬", "🇸🇿", "🇮🇶", "🇸🇪", "🇮🇪", "🇹🇬", "🇯🇴", "🇴🇲", "🇰🇬", "🇮🇸", "🇨🇭", "🇨🇩", "🇽🇰", "🇧🇮", "🇬🇹", "🇸🇳", "🇲🇩", "🇧🇭", "🇱🇷", "🇾🇪", "🇬🇷", "🇰🇵", "🇩🇴", "🇿🇦", "🇬🇦", "🇬🇳", "🇬🇶", "🇲🇨", "🇰🇳", "🇱🇾", "🇸🇱", "🇦🇬", "🇭🇷", "🇸🇹", "🇲🇼", "🇳🇮", "🇳🇵", "🇻🇺", "🇼🇸", "🇵🇪", "🇻🇳", "🇺🇦", "🇮🇩", "🇪🇷", "🇨🇲", "🇯🇲", "🇨🇱", "🇵🇾", "🇭🇹", "🇬🇪", "🇲🇪", "🇧🇹", "🇧🇫", "🇹🇭", "🇨🇺", "🇲🇦", "🇰🇪", "🇱🇺", "🇧🇩", "🇸🇬", "🇲🇰", "🇲🇷", "🇷🇸", "🇺🇿", "🇹🇱", "🇵🇬", "🇧🇳", "🇨🇳", "🇪🇸", "🇪🇨", "🇵🇹", "🇦🇲", "🇩🇿", "🇹🇴", "🇸🇮", "🇳🇿", "🇧🇬", "🇦🇷", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇮🇱", "🇱🇨", "🇳🇦", "🇦🇫", "🇰🇼", "🇸🇲", "🇵🇰", "🇨🇴", "🇦🇺", "🇰🇭", "🇫🇲", "🇹🇩", "🇫🇯", "🇿🇲", "🇧🇦", "🇧🇾", "🇹🇷", "🇫🇮", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🇺🇸", "🇻🇦", "🇸🇧", "🇲🇾", "🇦🇩", "🇲🇽", "🇹🇳", "🇮🇷", "🇧🇼", "🇱🇻", "🇳🇴", "🇯🇵", "🇲🇺", "🇸🇾", "🇩🇲", "🇱🇰", "🇸🇰", "🇪🇪", "🇸🇷", "🇰🇮", "🇹🇹", "🇬🇼", "🇨🇫", "🇧🇷", "🇱🇦", "🇩🇰", "🇮🇳", "🇲🇹", "🇰🇲", "🇧🇪", "🇬🇲", "🇦🇴", "🇸🇻", "🇩🇯", "🇮🇹", "🇦🇹", "🇸🇿", "🇧🇧", "🇨🇻", "🇵🇱", "🇫🇷", "🇹🇼", "🇭🇳", "🇰🇿", "🇸🇸", "🇻🇪", "🇲🇻", "🇹🇯", "🇿🇦", "🇸🇩", "🇱🇧", "🇻🇨", "🇩🇪", "🇲🇲", "🇷🇼", "🇵🇼", "🇧🇴", "🇨🇬", "🇬🇶", "🇵🇸", "🇬🇧", "🇬🇧",];
var funFact = 	["BELIZE, officially the Republic Belize, is a country located on the eastern coast of Central America. It has an area of 22,966 square km. Belmopan is its capital and Belize City is its largest city. Believe it or not, but the country’s most prized culinary delicacy is a rodent called, Gibnut. Incidentally, it’s also called the 'royal rat' because it was served to Queen Elizabeth.",
				"LESOTHO, officially the Kingdom of Lesotho, is an enclaved country within the border of South Africa. It has an area of 30,355 square km. Its capital and largest city is Maseru. Lesotho is a high-altitude country, situated at an elevation of 2161 m above sea level. It is also famously known as 'The Kingdom in the Sky' for its unforgettable panoramas that it offers to tourists.",
				"NIGERIA is located in West Africa on the Gulf of Guinea in the Atlantic Ocean. It is bordered by Chad, Cameroon and Benin. The Nigerian film industry is known as Nollywood as it produces around 50 movies per week, second only to India’s Bollywood and more than the USA’s Hollywood. It is also Nigeria’s country’s second-largest employer with more than a million people employed in the industry.",
				"GRENADA is a country in the West Indies in the Caribbean Sea at the southern end of the Grenadines island chain. It has an area of 344 square km. St. George’s is its capital and largest city. Grenada is the home of the world’s first underwater sculpture park. The sculptures are developed with concrete and rebar, and are placed naturally without affecting the natural reef and the lives of its inhabitants adversely.",
				"CANADA is a country in the northern part of North America. With an area of 9,984,670 square km, it is the world’s second-largest country by total area. Falling behind Russia, and just beating out China and the United States. Ottawa is its capital and Toronto is its largest city. Santa Claus and Mrs. Claus are Canadian. Canada issued them passports, tax records, and exceptions to the tax code, giving Santa freedom to pay his elves in cookies and holiday cheer.",
				"GHANA, officially the Republic of Ghana, is a country located along the Gulf of Guinea and the Atlantic Ocean, in the subregion of West Africa. It has an area of 238,533 square km. Accra is its capital and largest city. Polygamy is legal and people do not have a problem with the polygamous families in so far as the breadwinner can sufficiently provide for the families. However, marrying more than one wife is most often than not a reserve for the wealthier as well as powerful members of the society.",
				"RUSSIA or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area, covering over 17,125,191 square kilometres (6,612,073 sq mi), and encompassing one-eighth of Earth's inhabitable landmass. Russia extends across eleven time zones and borders sixteen sovereign nations, the most of any country in the world. It is the ninth-most populous country and the most populous country in Europe, with a population of 145.5 million. The country's capital and largest city is Moscow, the largest city entirely within Europe. Russia has the world’s longest railway – the Trans-Siberian Railway (9288 km).",
				"TUVALU (formerly known as the Ellice Islands) is an island country in the Polynesian subregion of Oceania in the Pacific Ocean. Its islands are situated about midway between Hawaii and Australia. Its capital is Funafuti. The total land area of the islands of Tuvalu is 26 square kilometres (10 sq mi). Initially, Tuvalu could not join the United Nations because it couldn’t afford the entrance fee. When internet domain names were first assigned to countries, Tuvalu received the sought-after abbreviation of .tv. In 2000, the country negotiated a 12-year $50m lease of its domain, and again in 2012. It used the profits to install electricity on outer islands, create scholarships and join the UN.",
				"CYPRUS, officially the Republic of Cyprus, is an island country in the Eastern Mediterranean. It has an area of 9,251 square km. Nicosia is its capital and largest city. It has no land bordering countries, and is the third largest & third most populous island in the Mediterranean. Cyprus is one of just two nations and the first in the world to include its map on its flag. Also, as per topcyprustaxi.eu, taxi drivers in Cyprus do not give change. They keep the change as a tip. A quick tip to save money in Cyprus is to tender exact change to the taxi driver.",
				"The BAHAMAS, officially the Commonwealth of the Bahamas, is an island country. The Bahamas became a British Crown colony in 1718, when the British clamped down on piracy. It has a total area of 13,880 square km. Nassau is its capital and largest city. The Bahamas is one of the two countries whose official name begins with the word 'The'. On October 12, 1492, Christopher Columbus is believed to have landed on the island. The tourist from the United States and Canada are not required to carry their passports to the Bahamas for a stay of less than three weeks. Every year millions of visitors to the country spend billions of dollars.",
				"SEYCHELLES, officially the Republic of Seychelles, is an archipelagic island country consisting of 115 islands in the Indian Ocean at the eastern edge of the Somali Sea. Its capital and largest city, Victoria, is 1,500 kilometres (800 nautical miles) east of mainland Africa. It is the least populous sovereign African country, with an estimated 2020 population of 98,462. Seychelles, being close to Indian Ocean’s Sea routes yet hidden, proved to be the best hideout for pirates from both the Indian subcontinent and the Arabian Peninsula. Olivier Levasseur is the world’s notorious pirate who is known to have discovered this hideout and entrusted it with his fortune. More than $160,000 of this fortune still remains secretly kept in its vaults, by the island itself.",
				"ENGLAND is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight. London is the capital and largest city of England and the United Kingdom with a total population of 9,002,488. England is the only country in the world, that doesnt have its name on its Stamps. Also, it is a criminal offense to stick a postage stamp upside down, as most stamps comprise the Queen's head.",
				"GUYANA, officially the Co-operative Republic of Guyana, is a sovereign state on the northern mainland of South America. It is also the only Commonwealth state on mainland South America. After Uruguay (176,215 square km) and Suriname (163,821 square km), Guyana (214,970 square km) is the third-smallest country on the mainland South America. Georgetown is the capital and chief port of Guyana. Guyana co-hosted the Cricket World Cup 2007 with the West Indies. It was during this World Cup matches played at the Providence Stadium that the Sri Lankan fast bowler Lasith Malinga became the first bowler in international cricket history to take four wickets in four consecutive balls.",
				"PHILIPPINES, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It has an area of 300,000 square km. Manila is its capital and Quezon City is its largest city. Social media is important to Filipinos. The Philippines is now considered the text capital of the world. With more than 450 million SMS messages sent by the residents daily, they surpass the daily texts sent in Europe and the U.S. combined.",
				"BOLIVIA, officially the Plurinational State of Bolivia, is a landlocked country located in western-central South America. It has a total area of 1,098,581 square km. Sucre is its constitutional capital while La Paz is its seat of government. Bolivia was known as Upper Peru during the Spanish rule. San Pedro prison in Bolivia is a major tourist attraction. Unlike other prisons around the world, this special prison permits its inmates to live with their families, work, earn and even buy or rent their accommodations.",
				"The UNITED ARAB EMIRATES is a country in Western Asia. It is located at the eastern end of the Arabian Peninsula, and shares borders with Oman and Saudi Arabia. Abu Dhabi is the nation's capital, while Dubai, the most populous city, is an international hub. The United Arab Emirates is an elective monarchy formed from a federation of seven emirates, consisting of Abu Dhabi (the capital), Ajman, Dubai, Fujairah, Ras Al Khaimah, Sharjah and Umm Al Quwain. Each emirate is governed by an Emir and, together, they form the Federal Supreme Council. In 2014, the Dubai International Airport overtook London Heathrow as the busiest airport in the world when measuring international passenger traffic. The Burj Khalifa is a major tourist draw and a symbol of the country’s wealth. Standing at 828 meters, it is the tallest freestanding structure in the world. Within the building is the world’s highest nightclub and restaurant, as well as the longest elevator.",
				"TANZANIA, officially the United Republic of Tanzania, is a place where nature is at its wildest. It is surrounded by three great lakes of Africa – Lake Victoria, Lake Tanganyika and Lake Malawi. Mount Kilimanjaro is Tanzania’s poster boy. The iconic mountain is the highest peak in Africa and a place of amazing beauty. Mount Kilimanjaro is a world in itself, with a staggering five different types of climatic zones, from hot tropical forests to arid snowcapped peaks. In comparison, the whole of the US has a total of 7 climatic zones.",
				"ETHIOPIA, officially the Federal Democratic Republic of Ethiopia, is a landlocked country in the north-eastern part of Africa, popularly known as the Horn of Africa. It has an area of 1,104,300 square km. Addis Ababa is its capital and largest city. Ethiopia is among the oldest countries on the planet, having been established in 980 B.C. It is the only country in the world to have 13 months in a year. The oldest fossil skeleton of a human was found in Ethiopia. It is over three million years old.",
				"MONGOLIA is a country in East Asia. The country is also famous for Genghis Khan, a one of a kind ruler that changed the course of history for the country. Mongolia lies between China to the South and Russia to the North. It is actually bordered on the three sides (South, East, and West) by China. Kazakhstan is also near to Mongolia at only a distance of 36.76 km. With an average temperature of minus 1.3 degree Celsius, Mongolia’s capital Ulaanbaatar (“Red Hero”) is the world’s chilliest capital city. A giant statue of Genghis Khan riding a horse, forty meters high, was erected in 2008. It is the world’s largest equestrian statue, and it cost nearly 4 million USD to build the same. Two hundred and fifty tons of stainless steel was used to build the statue which has an elevator to take visitors and tourist to the top of the horse’s head.",
				"SAUDI ARABIA, officially the Kingdom of Saudi Arabia ,is a country on the Arabian Peninsula in Western Asia. It has a land area of about 2,150,000 km2 (830,000 sq mi), making it the fifth-largest country in Asia, the second-largest in the Arab world, and the largest in Western Asia. Its capital and largest city is Riyadh. The country is home to Mecca and Medina, the two holiest cities in Islam. The Saudi Royal Family is the richest royal family in the world. Their main source of income is Saudi’s oil reserves which are currently valued at around $2 trillion. Harry Potter books have been banned in Saudi Arabia. The government has an anti-witchcraft action unit that is under the religious police.",
				"LIECHTENSTEIN, officially the Principality of Liechtenstein, is a German-speaking microstate located in the Alps between Austria and Switzerland. It is Europe's fourth-smallest country, with an area of just over 160 square kilometres (62 square miles) and a population of 38,749 (in 2019). Divided into 11 municipalities, its capital is Vaduz, and its largest municipality is Schaan. It is also the smallest country to border two countries. Liechtenstein is one of only two doubly landlocked countries in the world; the other being Uzbekistan. In 2011, the entire country was put up on Airbnb. For a fee of $70,000 a day, you could “rent” Liechtenstein. For that amount, you would get accommodations for 150 people, temporary renaming of street signs, a temporary custom-made currency, ceremonial keys to the Principality, and a wine tasting at the Prince’s estate.",
				"PANAMA, officially the Republic of Panama, is a transcontinental country in Central America and South America, bordered by Costa Rica to the west, Colombia to the southeast, the Caribbean Sea to the north, and the Pacific Ocean to the south. Its capital and largest city is Panama City, whose metropolitan area is home to nearly half the country's 4 million people. Panama is the second smallest county in Central America. The narrowest part of Panama is only 30 miles (48 kilometres) wide, so it’s very easy travelling from one side to the other. You can even do it multiple times a day if you want. It’s really cool getting to see both the Atlantic and Pacific oceans in the same day.",
				"QATAR, officially the State of Qatar, is a country located in Western Asia. It has a total area of 11,586 square km. Doha is its capital and largest city. Saudi Arabia is its only land bordering country. Qatar will become the first Middle East country to host the football (soccer) World Cup when it hosts the 2022 competition. Male tourists are not expected to wear vests and shorts. Female tourists are not expected to walk around in short-sleeved dresses or mini-skirts. Also, Qatar is the country least at risk of experiencing natural disasters according to the 2019 World Risk Report, compiled by the United Nations.",
				"HUNGARY is a landlocked country in Central Europe. It covers an area of 93,028 square km. Budapest is its capital and largest city. It is one of the oldest countries in Europe. Comparatively, the area occupied by Hungary is slightly smaller than the state of Indiana. Hungary is also one of 50 nations that lead the world in industrial carbon dioxide emissions. Hungary is known for its Nobel Prize winners. There are a total of 13 such winners. They have won Nobel Prizes in every category except ‘Peace.’ All of the Nobel Prize winners, however, emigrated from the country. Also, Hungarians have won gold medals in the Olympics every time they have competed.",
				"NIGER, officially the Republic of the Niger, is a landlocked country in West Africa named after the Niger River. Niger covers a land area of almost 1,270,000 km2 (490,000 sq mi), making it the second-largest landlocked country in West Africa, after Chad. Niger is one of the countries involved in the ambitious Great Green Wall project – a 7,000km long and 16km wide wall of trees stretching across Africa. The trees will traverse several countries along the arid Sahel savanna from the Atlantic Ocean to the Indian Ocean. The project is behind schedule but is still planned to go ahead. Niger is home to the largest known animal carvings in the world. The Dabous Giraffe Petroglyph is a life-sized carving of two giraffes estimated to be between 7,000 and 10,000 years old.",
				"URUGUAY, officially the Oriental Republic of Uruguay, is a country in the southeastern region of South America. It has a total area of 176,215 square km. Montevideo is its capital and largest city. There are more sheep in Uruguay than humans! In 2005, Uruguay, which is well suited for raising sheep and cattle, had 9,712,000 sheep, which was second highest in South America after Brazil. The production costs for raising livestock are low, but the quality of production is high in Uruguay. Uruguay exported $1 billion worth of livestock in 2000. The first-ever FIFA World Cup was held in Uruguay in 1930. Uruguay defeated Argentina 4–2 and won the FIFA World Cup in the same year.",
				"The NETHERLANDS often referred to as Holland, is a country located mostly in North Western Europe. It has an area of 41,543 square km. The country’s capital and largest city is Amsterdam. The Netherlands literally means “low countries.” As 50% of the land of the country is just over 1m above sea level. Moreover, 21% of its population and 26% of its area is below sea level. Belgium and Luxembourg are other examples of low lying countries. The country is an ideal place to cycle as it is mostly flat. It is also known as “the bicycle capital” of the world because it has more bikes than people. The country is expected to have 18 million bicycles and a population of 17 million.",
				"MOZAMBIQUE, officially the Republic of Mozambique, is a country located in Southeastern Africa bordered by the Indian Ocean to the east, Tanzania to the north, Malawi and Zambia to the northwest, Zimbabwe to the west, and Eswatini (Swaziland) and South Africa to the southwest. The capital and largest city of Mozambique is Maputo (known as Lourenço Marques from 1876 to 1976). If Scrabble allowed place names (proper nouns are not permitted), Mozambique would be worth 34 points – the highest score of any other one-word country. Kazakhstan and Kyrgyzstan share second place on 30. The flag of Mozambique features a rifle in it, and  is one of only two national flags that features a firearm, the other being Guatemala.",
				"TURKMENISTAN, also known as Turkmenia, is a landlocked country in Central Asia, bordered by Kazakhstan to the northwest, Uzbekistan to the north, east and northeast, Afghanistan to the southeast, Iran to the south and southwest and the Caspian Sea to the west. Ashgabat is the capital and largest city of the country. The population of the country is about 6 million, the lowest of the Central Asian republics. Known as the “Door to Hell”, Darvaza is a fire pit in Turkmenistan that has been burning for over 40 years. Following a mining accident in 1971, the gas crater opened up and began venting gas killing local wildlife. Scientists believed that lighting the gas would cause it to burn out in a few weeks, but it continues to burn to this day.",
				"The CZECH REPUBLIC, also called Czechia, is a landlocked country in Central Europe. Historically known as Bohemia, it is bordered by Austria to the south, Germany to the west, Poland to the northeast, and Slovakia to the southeast.The capital and largest city is Prague; other major cities and urban areas include Brno, Ostrava, Plzeň and Liberec. Due to its lack of international and domestic conflict as well as its low crime rate, the Global Peace Index in 2016 ranks the Czech Republic as the sixth safest place to live on earth. Prague has been known as the “handsomest city of Europe” since the 18th century. Known as the castle capital of the world, the republic has over 2000 castles, ruins and keeps for visitors to tour and enjoy. The St. Vitrus Cathedral at Prague Castle is home of the Czech crown jewels and the burial place of Czech kings.",
				"SOMALIA, officially the Federal Republic of Somalia, is a country located in the Horn of Africa. It has an area of 637,657 square km. Mogadishu is its capital and largest city. An intrinsic part of Somali culture is the camel. Camels provide milk, transportation, income and status for owners. Camel meat is also a delicacy in Somali cuisine. In 2010, it’s believed that Mike Spencer Bown became the first tourist to visit Somalia since 1990. When he arrived, officials didn’t believe he was a tourist and accused him of being a spy.",
				"ALBANIA, officially known as the Republic of Albania, is a country in Southeast Europe on the Adriatic and Ionian Sea within the Mediterranean Sea. It has an area of 28,748 square km. Tirana is its capital and largest city. You may be amazed to know that Albanians have been banned from using speedboats. Speedboats were used for human and drug trafficking from Albania to the shores of Italy and Greece. Be careful while crossing the streets in Tirana, the capital city of the country. Look everywhere and cross the streets cautiously. Crossing the street itself is an art in the country. In 1967, Albania became the world’s first atheist state.",
				"EGYPT, officially the Arab Republic of Egypt, is a country in Northeast corner of Africa. It has an area of 1,001,450 square km. It is divided into 27 Governorates. The country’s capital city is Cairo. Everyone knows about the pyramids of Egypt, that were built as tombs for the pharaohs and their royal families to link them to Ra the sun god. In case you’re wondering, more than 130 pyramids have been discovered so far. The most famous of which is the Great Pyramid of Giza which is the only wonder of the ancient world that has survived to the present day. The longest river in the world, the Nile, runs through Egypt. The river’s total length is 6,695km (4,160 miles) and runs from as far away as Burundi and Lake Victoria in East Africa all the way to the Mediterranean in North Africa.",
				"NAURU, officially the Republic of Nauru, and formerly known as Pleasant Island, is an island country in Micronesia, a subregion of Oceania, in the Central Pacific. It has an area of 21 square km. Yaren is its capital and Denigomodu is its largest city. It is the world’s smallest island country, and is situated 53 kilometers south of the Equator. There is only one airport in Nauru, which is the world’s third-smallest country in area, and only 30 kilometers of roadways. Nauru holds the distinction of being the fattest nation in the world. Nauru’s average citizen has a BMI of between 34 and 35. The normal global average is between 18.5 and 24.9.",
				"ROMANIA, officially the Republic of Romania, is a country located at the crossroads of Central, Eastern, and South-eastern Europe. It has an area of 238,391 square km. Bucharest is its capital and largest city. One of the stars of the 1976 Montreal Summer Olympics was fourteen year old Romanian Nadia Comăneci, a gymnast. During the team competition, the score for her stunningly perfect routine on the uneven parallel bars was displayed as a 1 on the scoreboard. The crowd quickly learned that Nadia had scored a ten, the first perfect score ever awarded in gymnastics, and the scoreboard had no zero for it.",
				"SOUTH AFRICA, officially the Republic of South Africa (RSA) is the southernmost country in Africa. It has an area of 1,219,090 square km. Its largest city is Johannesburg while there are three capital cities in South Africa, namely the Executive Capital of Pretoria, the Judicial Capital of Bloemfontein, and the Legislative Capital of Cape Town. South Africa is the only country in the world to have played host to the rugby, soccer, and cricket World Cups. With 11 official languages, South Africa has the most in the world. South Africans take their fitness very seriously, with one in five adults in South Africa attending a gym or health club at least once a month.",
				"MALI, officially the Republic of Mali, is a landlocked country in West Africa. It has a total area of 1,240,192 square km. Bamako is its capital and largest city. Gold is mined in Mali’s southern region and generates the third highest total gold production in all of Africa, after South Africa and Ghana. The average birthrate of six children per Mali woman is the third highest in the world. This insures continued rapid population growth for the foreseeable future. At just 58.9 years, Mali has the world’s 11th lowest life expectancy. The global average life expectancy is 72.6.",
				"COSTA RICA, officially the Republic of Costa Rica, is a country in Central America. It has an area of 51,100 square km. San José is its capital and largest city. Costa Rica, even the name itself sounds fun. With beautiful sandy beaches, lined with rows of magnificent palm trees, plenty of wildlife reserves excellent for outdoor adventures, and world-class beach resorts, the name Costa Rica rings paradise. Call it Literacy or the love for education. Costa Rica has the highest rural literacy rate at 96% for children. This means that nearly all children in rural Costa Rica are learned. As the rest of the world knows Soda as a soft drink, in Costa Rica, this is a small restaurant that serves cheap food such as rice, chicken, salad, and beans for only US $3 per plate. You can call it superstition or whatever you want to, but in Costa Rica, all Catholic Churches face west.",
				"IVORY COAST, also known as Côte d'Ivoire, officially the Republic of Côte d'Ivoire, is a country on the southern coast of West Africa. Its political capital is Yamoussoukro, in the centre of the country; while its largest city and economic centre is the port city of Abidjan. Ivory Coast takes its name from the intensive ivory trade that took place in the region from the 15th to 17th centuries. Ivory Coast is home to the largest church in the world. Completed in 1990, the Basilica of Our Lady of Peace of Yamoussoukro has an exterior area of 30,000m2. Didier Drogba, one of Ivory Coast's renowned Footballer, is credited with playing a pivotal role in helping to end the Ivorian civil war by making an impassioned speech to the camera during an international match with Sudan in 2005 which resulted in a cease-fire.",
				"SOUTH KOREA, technically called the Republic of Korea, is a country in East Asia comprising the southern end of the Korean Peninsula. It covers an area of over 62,000 square kilometres and has a population of approximately 51 million people, half of which live in and around Seoul, its capital. The music video Gangnam Style by South Korean K-pop star Psy was YouTube’s most-watched video for five years. The hit video became so popular that it broke YouTube’s play counter by exceeding the maximum possible number of views (2,147,483,647) and forcing the company to rewrite its code. As of 2021, it has been viewed over four billion times. In South Korea, newborn babies are deemed a year old on the day they are born. For those born late in the year, such as on December 31, they turn two on January 1 just after 24 hours.",
				"BENIN, officially the Republic of Benin and formerly known as Dahomey, is a country in West Africa. The capital of Benin is Porto-Novo, but the seat of government is in Cotonou, the country's largest city and economic capital. In the early 1990s, Benin made history by becoming the first African country to transit from a dictatorship to democracy and one of the first African countries to hold multi-party elections. Benin is home to the Temple of Pythons, a sacred shrine inspired by the legends of King Kpasse, that’s home to dozens of royal pythons that move freely within the temple’s grounds.",
				"UGANDA, officially the Republic of Uganda, is a landlocked country in East Africa. The country is bordered to the east by Kenya, to the north by South Sudan, to the west by the Democratic Republic of the Congo, to the south-west by Rwanda, and to the south by Tanzania. It has a population of over 42 million, of which 8.5 million live in the capital and largest city of Kampala. Uganda is one of the world’s best bird-watching destinations. The country has at least 1041 species of bird – almost half the total found in all of Africa. It is estimated that Ugandans drink 11.93 liters of alcohol per person per year, making it the second top country in Africa for that matter. Nigeria is at the number one spot on this list with an average alcohol consumption of 12.28 liters per person per year.",
				"The MARSHALL ISLANDS officially the Republic of the Marshall Islands is an independent island country near the Equator in the Pacific Ocean, slightly west of the International Date Line. Geographically, the country is part of the larger island group of Micronesia. The capital and largest city is Majuro. The Marshall Islands is home to the world’s largest shark sanctuary. Commercial fishing of sharks has been banned in 1,990,530 sq km of the country’s waters, an ocean area four times the size of California. As such, the Marshall Islands is one of just 22 countries not to have a military. As a former US-administered territory, the Marshall Islands did not form an army after gaining independence. Instead, the USA is responsible for its defence.",
				"ZIMBABWE, officially the Republic of Zimbabwe, is a landlocked country located in southern Africa. It is located between the Zambezi and Limpopo rivers. It has an area of 390,757 square km. Its capital and largest city is Harare. Zimbabwe which was once a very rich country, has abandoned its currency and is currently using others. This happened after the massive inflation that hit the country in 2008. The country abandoned its currency and has been using the U.S. Dollar, the South African Rand, and the Botswana Pula since April 12, 2009. As most men in the world try to shade their large tummies for flat ones, the opposite is true in Zimbabwe. Zimbabweans see pot bellies in men as a sign of success and wealth. ",
				"LITHUANIA, officially the Republic of Lithuania, is a country in the Baltic region of Europe. It is one of three Baltic states and lies on the eastern shore of the Baltic Sea. Lithuania covers an area of 65,300 km2 (25,200 sq mi), with a population of 2.8 million. Its capital and largest city is Vilnius; other major cities are Kaunas and Klaipėda. One of Lithuania’s most notable features is that they have one of the fastest internet speeds in the world. The broadband internet in Lithuania can reach a download speed of up to 30Mbps. You will find that there are numerous free WIFI spots around major cities in the country.Lithuania is a rich and diverse nation, and one of the main treasures is the conservation of natural resources. The Stelmuze Oak is one of the most revered tree species, and it is located in Lithuania. This tree is over 1500 years old, and it is 13 meters in diameter and 25 meters tall.",
				"AZERBAIJAN, officially the Republic of Azerbaijan, is a country in the South Caucasus region of Eurasia. It has an area of 86,600 square km. Its capital and largest city is Baku. Azerbaijan is the first democratic state in the Islam-oriented countries. It is also the first Muslim country to have theater plays and operas. One of the most striking landmarks in Baku is the Azerbaijan Carpet Museum. Designed like a stylised roll of carpet, the building houses an extensive collection of Azerbaijani carpets. There is a theory that suggests Vikings originated in Azerbaijan.",
				"MADAGASCAR, officially known as the Republic of Madagascar, previously known as the Malagasy Republic, is an island country in the Indian Ocean off the coast of Southeast Africa. It has an area of 587,041 square km. Antananarivo is its capital and largest city. Both men and women wear the same clothing in Madagascar, lamba. There are lambas for marriages, lambas for work, lambas for elders, lambas for children and even the dead are wrapped in a special kind of lamba before burial. Madagascar is a paradise for chameleons. These reptiles are so lazy that they evolved a way to look backwards without having to turn their heads; they can turn back their eyes! They don’t even care to run away from a predator, and can simply change their body color and merge with the surroundings.",
				"ESWATINI, officially the Kingdom of Eswatini and formerly named Swaziland is a landlocked country in Southern Africa. The country has two official capitals: Mbabane and Lobamba. While the former is recognized as the administrative capital, the latter is the country’s legislative and royal capital. Eswatini is one of the smallest countries in Africa; despite this, its climate and topography are diverse, ranging from a cool and mountainous highveld to a hot and dry lowveld. Eswatini is Africa’s last absolute monarchy and one of the few remaining in the world. This form of government gives a monarch supreme authority, unimpeded by written laws, legislature or customs. King Mswati III currently has 15 wives. His predecessor had 125.",
				"IRAQ, officially known as the Republic of Iraq, is a country in Western Asia. It covers an area of 438,317 square km. Baghdad is its capital and largest city. During ancient times, Iraq was known as Mesopotamia meaning the “Land Between the Rivers” due to its location in the fertile valleys between Tigris and Euphrates rivers. Iraq banned karate films in 1979. The underground bunkers built for Saddam Hussein, one of the worlds most infamous dictators, were said to be virtually indestructible, being able to resist a direct hit by a 2,000-kilo TNT bomb. And the bunkers were as deep as 90 meters under the ground.",
				"SWEDEN is a country located in northern Europe that is part of the Scandinavian group of countries which includes Norway and Finland, with which it shares a border, and Denmark to which it is connected via a bridge and tunnel. The capital of the Kingdom of Sweden (as the country is officially known), is Stockholm and is a parliamentary democracy that also features a constitutional monarchy as part of its ruling structure. Sweden is so good at recycling their waste (with only 1% used as landfill, 50% recycled and the remainder burnt to generate energy) that they actually import waste from other countries (mainly Norway and the UK) which pay for the privilege. One of the many countries which bought Swedish products over the years was North Korea who agreed to purchase 1000 Volvo vehicles in 1974. Unfortunately, they never paid for them and the Swedish government is still trying to collect on a debt that has now grown to 2.7 billion Swedish kroner (about $US 300 million).",
				"IRELAND, also known as the Republic of Ireland, is a country in north-western Europe consisting of 26 of the 32 counties of the island of Ireland. The capital and largest city is Dublin, on the eastern side of the island. Around 40% of the country's population of 5 million people resides in the Greater Dublin Area. The sovereign state shares its only land border with Northern Ireland, which is part of the United Kingdom. St Patrick is the most famous Irish in the world. Yet, he wasn’t actually from Ireland! He was born in Wales and sent to Ireland as a missionary. Ireland is one of the rare places in the world where you can’t find any snakes. According to the legend, St Patrick chased them into the sea after they started attacking him. The Irish hold the Guinness World Record of the most cookies baked in 1 hour.",
				"TOGO, officially the Togolese Republic, is a country in West Africa. It is bordered by Ghana to the west, Benin to the east and Burkina Faso to the north.The country extends south to the Gulf of Guinea, where its capital and largest city Lomé is located. Togo covers 57,000 square kilometres (22,008 square miles), making it one of the smallest countries in Africa, with a population of approximately 8 million. The voodoo religion is practised widely in Togo. Throughout the region, voodooism does not have the negative implications it has in the West. In Togo, voodooism is considered to be more than a belief system as it extends to culture, philosophy, language, art, dance, music and medicine. Football (soccer) is the most popular sport in Togo with the national team known as the Sparrowhawks. In 2006, they qualified for their first World Cup but failed to progress, losing all three of their matches.",
				"JORDAN, officially the Hashemite Kingdom of Jordan, is a country in Western Asia. Jordan is bordered by Saudi Arabia to the south and east, Iraq to the northeast, Syria to the north, and the Palestinian West Bank, Israel, and the Dead Sea to the west. It has a 26 km (16 mi) coastline on the Gulf of Aqaba in the Red Sea to the southwest. The Gulf of Aqaba separates Jordan from Egypt. Amman is Jordan's capital and largest city, as well as its economic, political, and cultural centre. Jordan Is Home To The Dead Sea. This is a famous salt lake situated in Jordan that’s a great spot for, well, floating around. In fact, it’s one of the saltiest lakes in the world. There’s almost ten times the amount of salt in here than the actual sea. Result? It makes you really buoyant. It was also one of the first health resorts in the world. The Dead Sea Is The Lowest Point On Earth. There Are Over 100,000 Archaeological (And Tourist) Sites In Jordan!",
				"OMAN, officially the Sultanate of Oman, is an Arab country on the southeastern coast of the Arabian Peninsula in Western Asia. It has a total area of 309,500 square km. Muscat is its capital and largest city. The sultan of Oman–Sultan Qaboos Bin Said–was the longest-serving ruler in the Middle East at the time of his death. Born on November 18, 1940, he was the person behind the modernization of Oman. He took control of the Sultanate of Oman in 1970 on July 23rd. He died on 10th January, 2020. Oman is also one of the oldest human-inhabited places on the planet. It is estimated that humans have been living in the country for at least 106,000 years. There is virtually zero crime and terrorism in Oman. ",
				"KYRGYZSTAN, officially the Kyrgyz Republic, is a mountainous landlocked country in Central Asia. Kyrgyzstan is bordered by Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the south, and China to the east. Its capital and largest city is Bishkek. Kyrgyzstan is a sparsely populated country. There are only 33 people per square km of land area. What it lacks in people, it makes up for in natural beauty. The country is home to nearly 2,000 lakes. The national dish of Kyrgyzstan is Beshbarmak. It is made of horse meat that is cooked in its own broth for hours and served on top of cooked noodles, a fun Kyrgyzstan fact. Kyrgyzstanis also enjoy a drink called kumyz which is made of fermented horse milk.",
				"ICELAND is a Nordic island country in the North Atlantic. It has an area of 103,000 square km. Its capital and largest city is Reykjavík. Except for a brief interruption from 1799-1844, Iceland’s independent commonwealth has been governed by the Althingi parliament since 930, the world’s oldest extant parliamentary institution. Iceland is the oldest democracy in the world. Iceland is ranked in the top three countries for women to live in, due to their strong principles of equality. Astonishingly, Mosquitoes do not exist in Iceland. And, it is llegal to own a pet lizard, snake or turtle in Iceland.",
				"SWITZERLAND, officially the Swiss Confederation, is a landlocked country situated in western, central, and southern Europe. It has an area of 41,277 square km. Bern is its capital and Zürich is its largest city. Swiss consumption of chocolates per capital is the highest in the world. And, Half of the luxury watches produced in the world come from Switzerland. Brands like Tissot, TAG Heuer, Rolex, Patek Philippe, and Longines are all Swiss. Interestingly, Animals are also represented by lawyers in Switzerland’s courts. Once, a fisherman was prosecuted for taking too long to catch a Pike. Switzerland is one of the two countries in the world to have a square flag. The other is Vatican City.",
				"THE DEMOCRATIC REPUBLIC OF THE CONGO, informally Congo-Kinshasa, DR Congo, the DRC, the DROC, or the Congo, and formerly and also colloquially Zaire, is a country in Central Africa. It is, by area, the second largest country in Africa (after Algeria), and the 11th-largest in the world. DR Congo is potentially one of the world’s richest countries with vast natural resources including cobalt, copper, niobium, tantalum, petroleum, industrial and gem diamonds, gold, silver, zinc, manganese, tin, uranium, coal, hydropower and timber. However, DR Congo is the world’s fourth poorest country when measured by GDP per capita based on purchasing power parity (PPP). DR Congo’s capital city Kinshasa, with a population of 11,587,000, is the world’s largest French-speaking city.",
				"KOSOVO, officially the Republic of Kosovo, is a landlocked country in the central Balkan Peninsula. It declared its independence from Serbia in February 2008 and became the Republic of Kosovo. It has an area of 10,887 square km. The country’s capital city is Pristina. More than 110 countries recognize Kosovo as an independent country. However, a bunch of countries including Serbia, Russia, and some EU countries still do not recognize Kosovo as an independent country for that matter. Tony Blair is a national hero in Kosovo. He helped save the suffering people during the war that took place between 1998 and 1999. To show gratitude towards this great leader, an Albanian couple has named their child “Tonybler” in his honor. There are a few more children in Kosovo that followed suit.",
				"BURUNDI, officially the Republic of Burundi, is a landlocked country in the African Great Lakes region of East Africa. Sadly, Burundi was ranked as the world’s least happy nation in the 2016 World Happiness Report. Burundi won a gold medal in 1996 for the first time in Olympic history. In doing so, it became the poorest country ever to win an Olympic gold medal. The prestigious medal was won by Burundi’s runner Venuste Niyongabo in the 5000-meter race. Ironically, it has never won a regional title at the African Games. Group jogging is banned in Burundi. In 2014, the country’s president banned the activity, citing the reason that such walks can help people plan subversive (anti-government) activities. Also, Burundi is one of the world’s worst countries for internet access. Just 3% of the population has access to the internet.",
				"GUATEMALA, officially the Republic of Guatemala, is the 67th most populous country in the world. It has an area of 108,889 sq km. It is a country in Central America. Its capital and largest city is Nueva Guatemala de la Asunción, also known as Guatemala City. One interesting fact about Guatemala is that Blue denim comes from the country! The first ever chocolate bar was also invented in Guatemala during the Mayan times. Guatemalans fly kites to honour their dead. Every year on All Saints’ Day, the people of Sacatepequez fly giant kites up to 12m in size over the graves of their family members while they pray and lay flowers.",
				"SENEGAL, officially the Republic of Senegal, is a country in West Africa. It occupies an area of 196,722 square km. Dakar is its capital and largest city. In the 17th and 18th century, the world knew Senegal for three things; slaves, ivory, and gold. These things attracted not only traders but also many pirates of class and repute. Senegal, being a Muslim country, takes its sacrifices very seriously. The Tabaski or Eid al-Adha is a time when sheep and goats sell like hot cakes when every family wants an animal to sacrifice. Not a great time for PETA to be in town. Senegal is home to Africa’s tallest statue. The 49m African Renaissance Monument is said to have cost $27 million and was created by North Korean artists. Rapper and entrepreneur Akon is part-Senegalese. He recently declared that he has created his own city in Senegal called ‘Akon City’.",
				"MOLDOVA, officially the Republic of Moldova, is a country in Eastern Europe. It is bordered by Romania to the west and Ukraine to the north, east, and south. The unrecognised breakaway region of Transnistria lies across the Dniester on the country's eastern border with Ukraine. Moldova's capital and largest city is Chișinău. Moldova has the world’s largest wine cellar by the number of bottles. The Milestii Mici cellars contain over 1.5 million bottles of wine. The bottles are stored in 55km (34mi) of underground galleries. Moldova has the world’s sixth cheapest broadband. The cheapest monthly available broadband package costs just $8.21 USD. It also has the world’s seventh cheapest mobile data.",
				"BAHRAIN, officially the Kingdom of Bahrain, is an island country in western Asia. The island country is situated east of Saudi Arabia and north of Qatar. Manama is its capital and largest city. Bahrain has no rivers, lakes, or streams. It has the lowest supply of freshwater in the world. It is connected to the mainland east coast of Saudi Arabia by the King Fahd Causeway, a 25km roadway opened in 1986 that connects the two countries. Due to a ban on women driving in Saudi Arabia from 1957 to 2018, the causeway was the only bridge in the world where women could drive on it one side (Bahrain), but not the other (Saudi Arabia).",
				"LIBERIA, officially the Republic of Liberia, is a country on the West African coast. It has a population of around 5 million and covers an area of 111,369 square kilometers (43,000 sq mi). The country's capital and largest city, Monrovia, was named after James Monroe, the fifth president of the USA and supporter of the colonisation of Liberia by freed slaves. Liberia’s flag is modelled on the USA’s. A single star symbolises Liberia’s status as the only independent Western-style state in Africa. The 11 stripes represent the number of men who signed the Liberian Declaration of Independence. Liberia is one of only three countries that doesn’t use the metric system of measurement. The other two are Myanmar and the USA. ",
				"YEMEN, officially the Republic of Yemen, is a country in Western Asia, on the southern end of the Arabian Peninsula. It is the second-largest Arab sovereign state in the peninsula, occupying 555,000 square kilometres (214,000 square miles). Yemen's constitutionally stated capital, and largest city, is the city of Sanaa. Yemen was the first country in the Arabian Peninsula to grant women the right to vote. One of the more fun facts about Yemen is that its where mocha coffee gets its name. The port city of Mocha was once a vast coffee marketplace and is considered the birthplace of the coffee trade.",
				"GREECE, is a country in Southeast Europe. It is situated on the southern tip of the Balkans, and is located at the crossroads of Europe, Asia, and Africa. The country consists of nine traditional geographic regions, and has a population of approximately 10.7 million. Athens is the nation's capital and largest city, followed by Thessaloniki. The first international Olympic Games were held in the country’s capital, Athens in 1896. Interestingly, no part of Greece is more than 137 kilometres away from the ocean. Also, more tourists visit Greece every year than the entire Greek population.",
				"NORTH KOREA, officially the Democratic People’s Republic of Korea, is a country in East Asia constituting the northern part of the Korean Peninsula. It has an area of 120,538 square km. Pyongyang is its capital and largest city. Korean is the official language of North Korea. North Korea is led by a supreme leader. Kim Jong-un is the current and third supreme leader in the Kim dynasty. Kim Il-sung established North Korea in 1948 and, upon his death in 1994, was succeeded by his son Kim Jong-il. Kim Jong-il died in 2011 and was succeeded by his son Kim Jong-un. Interestingly, you can smoke Marijuana legally in North Korea. It is not even classified as a drug in the country. They have their own intranet – “Kwangmyong.” It was opened in 2000 and includes a browser, email, news and search capabilities. They do not have the open internet as it exists in other parts of the world. Most things there are restricted. It still operates under the rules of a dead leader. And it is the world’s only necrocracy.",
				"The DOMINICAN REPUBLIC is the 86th most populous country in the world. It has an area of 48,670 sq km. It is a sovereign state located in the island of Hispaniola, in the Greater Antilles archipelago of the Caribbean region. Santo Domingo is its capital and largest city. The Dominican Republic is the only country in the world to have an image of the Holy Bible on its national flag. The people of the region are not punctual. Say, if you had a meeting with someone at 8 pm, you could expect them to arrive by 8:45 or 9 pm. Arriving late is a norm in D.R., so do not fret when you have to wait for someone to arrive. D.R. has the second-largest number of Major League Baseball players. It stands second only to the United States. They have produced many world-famous baseball players.",
				"SOUTH AFRICA, officially the Republic of South Africa (RSA) is the southernmost country in Africa. It has an area of 1,219,090 square km. Its largest city is Johannesburg while there are three capital cities in South Africa, namely the Executive Capital of Pretoria, the Judicial Capital of Bloemfontein, and the Legislative Capital of Cape Town. South Africa is the only country in the world to have played host to the rugby, soccer, and cricket World Cups. With 11 official languages, South Africa has the most in the world. South Africans take their fitness very seriously, with one in five adults in South Africa attending a gym or health club at least once a month.",
				"GABON, officially the Gabonese Republic, is a country on the west coast of Central Africa. Gabon's capital and largest city is Libreville. The name Gabon comes from the Portuguese word “gabao” meaning “cloak”. Early explorers thought the estuary of the Komo River by the capital of Libreville was the shape of a cloak. Gabon is one of 13 countries that the Equator passes through. Having led the country since 1967, Gabon’s second president, Omar Bongo, was Africa’s longest-serving head of state at the time of his death in 2009. Additionally, Bongo was the world’s second-longest-serving non-royal leader after Cuba’s Fidel Castro, at the time of his death.",
				"GUINEA, officially the Republic of Guinea, is a coastal country in West Africa. Formerly known as French Guinea, the modern country is sometimes referred to as Guinea-Conakry after its capital Conakry, to distinguish it from other territories in the eponymous region such as Guinea-Bissau and Equatorial Guinea. Guinea suffers from some of the world’s worst air pollution. A recent analysis suggests it has the world’s seventh-highest death rate from air pollution. Guinea is one of just four countries in the world that doesn’t have any telephone fixed lines. The others are Guinea-Bissau, South Sudan and DR Congo. Traditional healers are still extremely popular in Guinea when it comes to treating illness. Traditional healers are believed to be the first port of call for around 80% of sick Guineans.",
				"EQUATORIAL GUINEA, officially the Republic of Equatorial Guinea, is a country on the west coast of Central Africa, with an area of 28,000 square kilometres (11,000 sq mi). Formerly the colony of Spanish Guinea, its post-independence name evokes its location near both the Equator and the Gulf of Guinea. There are four countries in the world with the word Guinea in their name: Equatorial Guinea, Guinea and Guinea-Bissau in Africa, and Papua New Guinea in Oceania and Asia. The world’s largest frogs are only found in Equatorial Guinea and Cameroon. Goliath frogs (Conraua goliath) can grow up to 34cm long and weigh over 3.2kg. Equatorial Guinea is Africa’s only Spanish-speaking country. ",
				"MONACO, officially the Principality of Monaco, is a sovereign city-state , country, and microstate on the French Riviera in Western Europe. It has an area of 2 square km. Monaco (city-state) is its capital and Monte Carlo is its largest Quartier. Almost 30% of the population of Monaco was a millionaire in 2014, similar to Zurich or Geneva. Monaco does not have its own major defense force. The country’s defense; however, is France’ responsibility. The crime rate in Monaco is very low. This could mainly be because Monaco has more policemen per person than any other country. Monaco is the only country in the world with Human Development Index above 1.",
				"SAINT KITTS AND NEVIS, officially the Federation of Saint Christopher and Nevis, is an island country in the West Indies. Located in the Leeward Islands chain of the Lesser Antilles, it is the smallest sovereign state in the Western Hemisphere, in both area and population, as well as the world's smallest sovereign federation. The Broadway musical Hamilton is based on the life of US founding father Alexander Hamilton who was born on the island of Nevis in 1755. A popular dish on the islands is “goat water” a stew usually made from the bones and meat of goats.",
				"LIBYA, officially the State of Libya, is a country in the Maghreb region in North Africa. It has a total area of 1,759,540 square km. Tripoli is its capital and largest city. Libya has Africa’s largest and the world’s ninth-largest proven oil reserves, with 48 billion barrels in 2019. At one point, the country had a plain green flag which was the only national flag to have a single plain colour. in Libya, food is eaten with three fingers on the right hand. The left is considered unclean. Good manners dictate you leave a little food on your plate to indicate that your host is a gracious and generous provider.",
				"SIERRA LEONE, officially the Republic of Sierra Leone, colloquially Salone, is a country on the southwest coast of West Africa. Sierra Leone’s capital city, Freetown, was founded as a home for repatriated and rescued former slaves in 1787. Freetown’s most famous landmark is an enormous Cotton Tree located in the centre of the city. Believed to be hundreds of years old, it is said to have played a vital role in the city’s history, when impoverished black settlers rested in its shade after landing in Freetown in 1787. The political thriller Blood Diamond starring Leonardo DiCaprio, Djimon Hounsou and Jennifer Connelly was set in Sierra Leone. The film depicts events from the civil war as well as the historic meeting in Kimberley, South Africa, that led to the Kimberley Process.",
				"ANTIGUA AND BARBUDA is a sovereign island country in the West Indies in the Americas, lying between the Caribbean Sea and the Atlantic Ocean. It consists of two major islands, Antigua and Barbuda separated by around 40 km (25 mi), and smaller islands (including Great Bird, Green, Guiana, Long, Maiden, Prickly Pear, York Islands, Redonda). The capital and largest port and city is St. John's on Antigua, with Codrington being the largest town on Barbuda. Legendary West Indian cricketer Sir Viv Richards is from Antigua and Barbuda. Richards is widely considered one of the world’s greatest ever batsmen and even has a stadium named after him in Antigua. Antigua and Barbuda supposedly has 365 beaches – one for every day of the year. Previously known as Coco Point Beach, there is a beach called Princess Diana Beach in Antigua and Barbuda. the exclusive beach was renamed in honour of what would have been her 50th birthday in 2011.",
				"CROATIA, officially the Republic of Croatia, is a country at the crossroads of Central and Southeast Europe, on the Adriatic Sea. It has an area of 56,594 square km. Zagreb is its capital and largest city. Croatia is a hot-spot for celebrities and business giants to invest their money in property in the country. Superstars including Steven Spielberg, Andre Agassi, Gwyneth Paltrow, Beyonce and Jay Z, Madonna, Clint Eastwood and businessmen including Bill Gates, Roman Abramovic, Deripaska,  Melnichenko, Zeleznjak, and Bernie Ecclestone have all purchased properties for residential and business. The smallest town in the world–Hum–is in Croatia. With a population of 21, the world’s smallest town is situated in the centre of Istria. The town also has a mention in Guiness World records. Some regard the Vatican City as the smallest city in the world; however, it is a country.",
				"SÃO TOMÉ AND PRÍNCIPE, officially the Democratic Republic of São Tomé and Príncipe, is an island country in the Gulf of Guinea, off the western equatorial coast of Central Africa. It consists of two archipelagos around the two main islands of São Tomé and Príncipe, about 150 km (93.21 mi) apart. Due to its high density of endemic species, São Tomé and Príncipe has been nicknamed “the African Galápagos”. One of the most famous sights in São Tomé and Príncipe is the Cão Grande or Great Canine (dog). The 663m high pinnacle of rock is a hardened column of magma, the remains of an ancient volcano. São Tomé and Príncipe is yet to win a medal in the Olympic Games and or participate in the Winter Olympics. Their signature dish is calulu, a stew made with okra (lady’s fingers), palm oil, chilli and lots of fresh herbs.",
				"MALAWI, officially the Republic of Malawi, is a landlocked country in Southeastern Africa that was formerly known as Nyasaland. Malawi's capital (and largest city) is Lilongwe. The name Malawi comes from the Maravi, an old name for the Chewa people who inhabit the area. The country is nicknamed 'The Warm Heart of Africa' because of the friendliness of its people. Lake Malawi, the fourth largest freshwater lake in the world, is sometimes referred to as “the calendar lake” dues to its dimensions: 365 miles long and 52 miles wide. Popstar Madonna famously adopted four Malawian children. She drew criticism for receiving special exemption from laws restricting non-residents from taking children abroad and for exaggerating her charity work in the country.",
				"NICARAGUA, officially the Republic of Nicaragua, is the largest country in the Central American isthmus. Managua is its capital and largest city. Central America’s largest lake is Lake Nicaragua, which provides the water supply for much of Nicaragua and is the country’s largest tourist attraction. This lake is enormous and contains the largest lake island in the world. As Nicaragua is located along the narrow Central American isthmus, it is possible to watch the sunrise over the Atlantic Ocean (Caribbean Sea) and the sunset over the Pacific Ocean in the same day. In 1856 William Walker from Tennessee seized control and declared himself to be Nicaragua’s President. He wanted to turn it into a slave state for the United States. The following year the Nicaraguan people kicked him out.",
				"NEPAL, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. Kathmandu is its capital city.  Nepal is a country of breathtaking beauty and diversity of cultures like no other place on earth. Nepal’s renowned Gurkha soldiers have always successfully protected their country. Their motto reads, “Better to die than be a coward.” Through all its history of border expansion and contraction, Nepal has never been colonized and ruled by foreigners. Therefore, Nepal celebrates no Independence Day. The most mountainous part of Nepal in the north contains eight of the earth’s ten tallest mountains, including its most famous, Mount Everest. Mount Everest stands above all others at 8,848 meters (5.5 miles) above sea level. The last Hindu country in the world, Nepal was declared secular by its parliament in 2006. It still has the world’s highest proportion of Hindus today among its people. Cows are considered sacred and it is illegal to kill one in Nepal; it is their national animal as well.",
				"VANUATU, officially the Republic of Vanuatu, is an island country located in the South Pacific Ocean. The archipelago, which is of volcanic origin, is 1,750 km (1,090 mi) east of northern Australia, 540 km (340 mi) northeast of New Caledonia, east of New Guinea, southeast of the Solomon Islands, and west of Fiji. Prince Phillip – the husband of British Queen Elizabeth II – is worshipped by villagers of Yaohnanen on Tanna Island in Vanuatu. Followers of the Prince Philip Movement believe the Duke is the son of their ancestral mountain god. Bungee jumping was invented in Vanuatu. For centuries men on Pentecost Island in Vanuatu practiced nagol – land diving. In a ritual associated with the annual yam harvest, men dive from a wooden tower up to 30m high with only vines attached to their ankles.",
				"SAMOA, officially the Independent State of Samoa and until 1997 known as Western Samoa, is a Polynesian island country. The capital city is Apia. Just two of the islands – Savai’i and Upolu – account for more than 99% of the country’s land with around 95% of the population living on the two islands. As such, Samoa is only 164km and a 30-minute flight away from “yesterday”. Despite only a short distance separating Samoa from its closest neighbour, American Samoa, the countries are on either side of the International Dateline. This also means Samoa celebrates the new year a whole day earlier than American Samoa. In 2009, Samoa became the first country in decades to officially switch from right- to left-side driving. The word tattoo is believed to originate from Samoa. Dating back centuries, the Samoan “tatau” is regarded as a right of passage for many Samoans. ",
				"PERU, officially the Republic of Peru, is a country in western South America. Peru has a population of 34 million, and its capital and largest city is Lima. If you think that soccer riots are only common in the UK then think twice. A soccer match between Peru and Argentina in 1964 is recorded as being the worst in soccer history. 500 people were injured, and more than 300 lost their lives. Peruvians celebrate New Year’s by gifting one another yellow underpants. The tradition is based on the belief that if you wear a new pair of underwear during the first moments of the new year, you will have luck and prosperity for an entire year. Peru is the only country in the world, whose English name can be typed on a single row of a standard computer keyboard.",
				"VIETNAM, officially the Socialist Republic of Vietnam, is the easternmost country on the Indochina Peninsula. It has an area of 331,210 square km. Hanoi is the country’s capital and Ho Chi Minh City is its largest city. The Vietnam War killed 2-4 million people including at least 2 million Vietnamese civilians, over 1 million Vietnamese soldiers and 58,300 American soldiers. Surprisingly, there is no legal drinking age in Vietnam. You can drink it as long as you can get the alcohol. While the population of Vietnam is about 92 million people, it is estimated that there were about 45 million registered motorbikes in 2016. This means there is a motorbike for every other person. WiFi networks are reliable and can be easily found pretty much everywhere in major cities. You can get free access to the Internet in most coffee shops, hotels, fast food franchises, even in the main walking streets.",
				"Did you know that in 1986, UKRAINE witnessed the world’s worst nuclear power plant disaster? The tragedy occurred at the Chernobyl plant located in the northern part of the country. The area has since been declared an exclusion zone. The disaster and declaration led to the emergence of several ghost towns. The area attracts multitudes of tourists despite the high levels of radiation. The UN created the Chernobyl Trust Fund to help the victims.",
				"Have you ever heard of Komodo dragons? This amazing animal, which can be seen in INDONESIA, can eat humans? Do not worry; they are protected, as they can be seen only in the country’s national parks of Komodo Island. The dragon is named after the island. Take note that it is the world’s largest lizard.",
				"Did you know that there is a tank graveyard in ERITREA where the ruins of military vehicles from around the country have been dragged to an open field? Local families have made their homes in shipping containers in the centre of the area.",
				"The world’s largest frog can be found in Cameroon.The goliath frog (Conraua goliath) can grow up to 34cm long, weigh over 3.2kg and builds their own ponds using heavy rocks.",
				"The national flag of JAMAICA is one of two in the world that have no colors in common with the U.S. flag. Wondering which one is the other? It is Mauritania’s flag.",
				"The world’s largest swimming pool is in CHILE. It is 1000 yards long, 20 acres in area and 115 feet deep. This giant pool holds 66 million gallons of seawater. Remember: this was not a cheap pool to build. It took five years and one billion U.S. dollars; its annual maintenance cost is close to two million U.S. dollars.",
				"PARAGUAY is the only country worldwide whose national flag has different emblems on each side. The country’s Coat of Arms is on the front and its Treasury Seal is on the back with its motto, ‘Paz y Justica’ (Peace and Justice). Paraguay’s flag is one of the world’s oldest national flags.",
				"The majority in HAITI love to gamble. They are even known to beg gods to reveal the winning lottery numbers during voodoo ceremonies. Cockfighting is also very popular in Haiti. The winner of the fight takes home $67, which is almost a month’s salary for someone. Raw meat and hot pepper soaked in rum is fed to the cocks to make them tough and aggressive.",
				"GEORGIA is considered the origin of winemaking, having produced wine for over 8,000 years. Georgians discovered that if grape juice was placed into enormous clay pots, known as qvevri, and buried underground during the winter, it would change into wine. The ancient Georgian winemaking process of qvevri has been added to Unesco’s list of Intangible Cultural Heritage of Humanity.",
				"MONTENEGRO has its top level domain as .me. After securing it in 2007, the government opened it up to world, marketing it as a generic top-level domain used to denote “Me”. It went live in 2008 and became the fastest-selling debut top level domain ever.",
				"Everyone in BHUTAN has a home. There is no such thing as a homeless person, so it is unlikely that you will find anyone living on the streets. Anyone who does not have a roof over their head can ask for an audience with the king. He will then provide the person with land they can use to build a house.",
				"Thomas Sankara, who ruled BURKINA FASO for four years from 1983, is known as the “African Che Guevara” due to his radical left-wing policies. Sankara, an accomplished guitarist, even wrote Burkina Faso’s national anthem himself.",
				"In THAILAND, It is illegal to step on its currency or even tear it. It may seem like an odd way to respect money, but the real reason is that its currency carries the image of Thailand’s king. It is actually illegal to disrespect the monarch.",
				"It is almost impossible to eat beef in CUBA. Beef is sold at high prices and is generally available in limited number of restaurants.",
				"Nawal EL Moutawakel, from MOROCCO won the 400-meter hurdles, at the 1984 Los Angeles Olympics, and became the first woman from any Arab or Islamic country to win an Olympic Gold Medal. She is a council woman today.",
				"Interestingly, KENYA could possibly be the birthplace of humans. This assumption is supported by the fact that the bones of one of the earliest human ancestors ever found were discovered in Kenya.",
				"Almost half of the workforce in LUXEMBOURG lives in another country and commutes to work. They come from France, Belgium and, Germany. Luxembourg residents benefit from the fact that its government spends a third of its revenue on universal health care and social services for their people.",
				"The rich vegetarian diet of BANGLADESH also means that this is one of the least obese countries globally. It’s the 2nd country in the world after Vietnam with the least level of adult obesity.",
				"Elevators in SINGAPORE have Urine Detection Device, and if it detects the smell of kidney filtered water, it locks the doors until the police arrive. Singapore has passed a very specific law which prohibits urinating in the elevators.",
				"In 2018, a baby was born in Liverpool, UK, that shared the same birthday as his NORTH MACEDONIAN father and grandfather. The chances of a baby sharing the same birth date as two preceding generations are one in 130,000.",
				"MAURITANIA has one of the longest trains in the world. The “Iron-ore Train” or “Train du Desert” is frequently 2.3km long when it travels from the iron ore mines at Zouérat to Nouâdhibou.",
				"Did you know that SERBIA is the place of the highest number of Roman emperors born in one country? Yes, 18 Roman rulers were born in this country and it accounts for a fifth of all Roman emperors.",
				"Palov or Plov is the national dish of UZBEKISTAN. Made of mutton, rice, onions and grated carrots, legend holds it was invented by the cooks of Alexander the Great. Different areas of the country put their own spin on the dish, adding ingredients like pumpkins, peppers or dried tomatoes. A Uzbek master chef is held to be able to cook enough palov/plov in one caldron to serve a thousand men.",
				"The country’s name used to be East Timor, before changing to TIMOR-LESTE. Timor is in fact, a word of both Portuguese and Indonesian origins and it means “east”. Therefore, the country used to be called “East-East”. There is no “West Timor”",
				"In PAPUA NEW GUINEA’S Sepik region, young men cut their skin to resemble crocodiles in a scarification initiation rite. The men slice their backs, shoulders, and upper torsos with razor blades to leave long raised welts resembling a crocodile’s hide.",
				"Hassanal Bolkiah, the Sultan of BRUNEI, is currently the world’s longest-reigning male monarch having ruled for 54 years as of 2022. Queen Elizabeth II is currently the longest-reigning monarch; she has reigned for over 70 years. According to the Guinness Book of World’s Record, the Istana Nurul Iman Palace in Brunei is the world’s largest residential palace; it is the official residence of the Sultan of Brunei. It boasts 1,788 rooms, covers 50 acres of land, and was constructed for $1.4 billion.",
				"Do you know that all CHINESE share a birthday? Well, according to them, on the New Year, every Chinese turns one year older thus their birthday celebration. This is why the Chinese New Year is the most important holiday in China.",
				"Interestingly, a Zipline connects SPAIN and Portugal. It only takes 60 seconds to cross the border on this Zipline. It is built on a river, 150 meters wide, between the two countries.",
				"In Quito, the capital of ECUADOR, water boils at 90°C instead of 100°C. This is a direct effect of altitudes.",
				"Christmas can be sunny and even warm in PORTUGAL, as it receives more than 300 days of sunshine annually!",
				"ARMENIA is the first country in the world to make chess mandatory in schools. The sport of chess is integrated into the national curriculum, and many Armenians play chess in their daily lives. The men’s team won the European Team Championships in 1999 and the World Team Championship as well as the Chess Olympiad in several other years. Chess is an important feature in every day Aremenian life.",
				"Hospitality is important among ALGERIANS. It is a blend of Arabic customs with French Gallic traditions. Everyone is cordial to strangers and friends alike. In a small gathering, it is polite to greet each person individually, beginning with the elders. Handshakes are common but using your fingers to point at objects or people is considered rude. Never use the left hand separately: when handing someone something, do it with the right hand or both hands.",
				"TONGA is one of the first countries to celebrate the New Year and see the first light of every day.",
				"Imagine your wedding in a prehistoric church, where once the Slavic goddess of love Ziva herself got married. Add to that the charm of an isolated island and what you get is the Bled Church of the Assumption, in SLOVENIA. The only catch is the groom has to carry the bride 99 steps up into the church.",
				"Captain James Cook, the real-life captain Jack Sparrow, was a captain of the Royal Navy of Britain who discovered NEW ZEALAND for the West. The lack of fresh citrus fruits in his adventurous voyage led him to discover a cure for scurvy, the simple vitamin C.",
				"BULGARIA is the only country in the Europe whose name has not changed since the original establishment of the country (in 681 AD).",
				"Argentines spend the most time radio listening and movie viewing of any populations in the world. ARGENTINA is the only Latin American country to have won an Academy Award as well. The average Argentine listens to the radio between 20 and 21 hours weekly.",
				"The most dramatic experiment of the 21st century happened in SCOTLAND. The first successfully cloned lifeform, Dolly the sheep, was created in a lab in the University of Edinburgh. It was a very powerful and watershed moment in our understanding of the life on earth.",
				"The airspace above ISRAEL is a bird superhighway. At least 500 million birds in 200 different species fly through there each spring and fall, headed to and from Asia, Africa, and Europe. And, approximately 1,000 letters arrive in Jerusalem, Israel annually addressed to God.",
				"SAINT LUCIA is home to the world’s only drive-in “volcano”. The Sulphur Springs do not have a crater or magma like a normal volcano, but instead, have smelly pools of boiling mud that releases clouds of sulfur gas.",
				"One of the main attractions of NAMIBIA is the Skeleton Coast National Park. In addition to many animals and birds, it has an abandoned oil rig where cormorants nest, the hull of a crashed ship, a unique waterfall in the desert and dunes that rumble like an aircraft engine in a certain wind direction – the noise can be heard for several kilometers.",
				"There is only one Jewish person living in AFGHANISTAN. His name is Zablon Simintov and he is a restaurateur and an Afghan carpet trader. He was born in 1959.",
				"The Kuwaiti Dinar, the official currency of KUWAIT, is the highest-valued currency in the world. One Kuwaiti Dinar equals 1,000 fils. Their currency is available in both coins and notes in different denominations.",
				"A commemorative stamp starring 92-year-old Granny Isetta, who could remember all four Italian football championship titles since 1934, was issued by SAN MARINO, marking the Italian victory in FIFA World Cup 2006.",
				"Sialkot, located in PAKISTAN, is the world’s largest producer of handsewn footballs. Local factories in the region produce 40-60 million footballs a year, which is roughly 50-70% of the world’s total production. The football manufacturing industry now consists of more than 200 factories.",
				"Not lazy, but fun loving: COLOMBIA, with 18 national holidays, came second in the “countries with the most national holidays” list. In case you are wondering who could top that, it’s India (21).",
				"The world’s largest espresso machine is fitted in AUSTRALIA. It can brew up to 18 cups of coffee at any given time, and at least 5 people are required to handle it while operating.",
				"KFC, the American fast food giant is losing money in CAMBODIA, which is the only country where they are not profitable. There are only 6 of these fast food centers in Cambodia. Surprised? Cambodia also does not have McDonalds",
				"MICRONESIA is one of just 22 countries not to have an army. Instead, as a former US-administered territory, the USA provides aid and is responsible for Micronesia’s defence. In return, the USA can maintain military bases in Micronesia.",
				"The only television station in the country of CHAD, Tele-Tchad—is state owned. Radio is the main source of media coverage.",
				"The 180°meridian, or International Date Line, runs through the island of Taveuni in FIJI. On that island, there is a site where you can stand with one foot in today and the other in yesterday.",
				"In 1921, the Broken Hill skull was discovered in ZAMBIA. Estimated to be about 299,000 years, the skull is one of the best-preserved fossils of an ancient human species called Homo heidelbergensis.",
				"Sundance and Cannes might have the most name recognition, but true film connoisseurs make their way annually to the Sarajevo Film Festival in BOSNIA AND HERZEGOVINA. Now one of the largest film festivals in Europe, the Sarajevo Film Festival draws more than 100,000 visitors per year.",
				"The National Library of BELARUS contains 8 million items of various media. Each day, the library sees more than 2,200 users and delivers 12,000 documents. It was founded on September 15, 1922.",
				"TURKEY takes equality between men and women very seriously. Since 1750, Turkey has had institutions that uphold women’s rights. They were one of the first countries that allowed women to vote.",
				"FINLAND had its first female prime minister (Anneli Jäätteenmäki) in April 2003, making it the only country in Europe with both a female president (Tarja Halonen) and prime minister.",
				"The place with the second longest name in the world is in WALES. Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch means 'The Church of St Mary in the hollow of the white hazel near the rapid whirlpool and The Church of St Tysilio near a red cave'. In case you wondered, it's often shortened to Llanfairpwll or Llanfair PG.",
				"Strange but true, the official flag of the UNITED STATES was designed by Robert G. Heft in 1958 while Heft was a junior in high school. Surprisingly, he only got a B- as a grade. Heft’s teacher, Stanley Pratt, promised his student he would raise his grade if the US Congress accepted his design. It is anyone's guess what would have happened!",
				"VATICAN CITY, which is the smallest country in the World, has one of the highest crime rates in the world. This is mainly because of the small population of the country. However, the crimes that happen in the city are of little importance and thus many of them remain unsolved. This tiny country, however, does not have a working prison and has only one judge. Thus, those who are convicted are simply marched to neighboring Italy.",
				"US President John F Kennedy kept a coconut shell in his Oval Office as a reminder of when he was marooned in the SOLOMON ISLANDS in 1943. After his boat sank, he was rescued by two Solomon Islanders called Eroni Kumana and Biuku Gasa. The president, along with 10 other survivors, swam to the uninhabited Plum Pudding Island. It has now been renamed Kennedy Island.",
				"MALAYSIA has the world’s biggest roundabout. The Putrajaya Roundabout is 3.5km (2.2mi) long and circles a city park and government buildings.",
				"ANDORRA is the world’s only co-principality. The co-princes of the French president and the Spanish Bishop of Urgel are Andorra’s heads of state, but the roles are largely ceremonial.",
				"MEXICO is the hardest working country in the world with an average citizen of Mexico working 2,246 hours a year, or 43.2 hours a week.",
				"Several scenes from the Star Wars movies were filmed in TUNISIA. The Saharan landscape of southern Tunisia is home to several sets including the village of Tataouine, which was Luke Skywalker’s home planet, Tatooine, in the original 1977 movie.",
				"IRAN is the largest producer of saffron. The country produces over 90% of the 250 tons of the spice produced worldwide every year. Costing as much as $65 per gram, saffron can be more expensive than gold, and is the most expensive and sought after spice in the world.",
				"In BOTSWANA, diamonds are forever. It is the second largest diamond producers in the world. In 2016, the country produced a whopping 40 million carats of this precious stone. To put the economic cost of that figure in perspective, a 910-carat diamond once sold for $40 million in 2018.",
				"In LATVIA, there is a museum dedicated to the world’s greatest liar – Hieronymus Karl Friedrich Freiherr von Münchhausen. Yes, you heard it right! At the time, he was known for telling many fake stories related to his moon travel and of his exemplary services during the Russo-Turkish War. Now, the country is generating handsome revenue from a museum dedicated to their hero. Latvia also issued a commemorative coin in 2005 to celebrate this legend’s 285th birthday.",
				"During the winter season in Northern NORWAY, the sun never rises and they have polar nights. While during the summer season in the same region, the sun never sets.",
				"The literacy rate in JAPAN is 99% for the population over 15 years of age. This means almost all the people in Japan can read and write.",
				"MAURITIUS is home to the oldest Botanical Garden in the Southern Hemisphere. The SSR Botanic Garden dates back to the French period in the 18th century and is home to vegetables, fruits, flowers and spices from all around the world.",
				"The Shouting Valley is the meeting point of four countries: SYRIA, Lebanon, Jordan, and Israel. It is an “echo point,” and people often use it to communicate with their relatives on the other side.",
				"The world’s second-largest boiling lake is in DOMINICA. Discovered in 1875, it is actually a flooded crack in the earth that allows hot gases to vent from the molten lava below.",
				"SRI LANKA’s geographical map is unique resembling a tear-drop. And because of its position in the south of India, it’s popularly referred to as the “tear-drop” of India. It’s also referred to as the “pearl of the Indian ocean” due to its geographical location.",
				"The only horologe in the world that shows the true solar time, is situated in Stará Bystrica. It is also the largest wooden statue in SLOVAKIA.",
				"It is a law in ESTONIA to have safety reflectors attached whether you are walking or biking during the night time or when the visibility is inadequate. The reflector can be pinned to your handbag, coat or any other suitable place where it is easily spottable. Otherwise, you could be fined up to 400 EUR.",
				"An interesting fact about SURINAME is that its people are known for their laid-back and peaceful demeanor. They don’t often argue, raise their voices, or act disrespectfully. Good manners and respectfulness are very important in the Surinamese culture.",
				"KIRIBATI is the only nation in the world that lies in all four hemispheres (North, South, east and West) of the world.",
				"TRINIDAD AND TOBAGO is home to one of the world’s hottest chilli peppers. In 2012, the Moruga Scorpion, with a heat rating of 1.2 million Scoville heat units (SHUs), was named the world’s hottest chilli according to New Mexico State University’s Chile Pepper Institute. However, in 2017, it was succeeded by the Carolina Reaper chilli.",
				"The people of GUINEA-BISSAU are among the lightest smokers in the world. According to the sixth edition of the Tobacco Atlas, Guinea-Bissau smokes the second-least number of cigarettes (25.28) per capita after only Brunei.",
				"CENTRAL AFRICAN REPUBLIC is the country least affected by light pollution along with Madagascar. More than three-quarters of people in the country are living under pristine night sky conditions and can see Milky Way clearly at night. ",
				"BRAZILIAN national anthem has two seven-verse stanzas. Interestingly, both the stanzas have the same tune. Brazilian law does not permit you to sing just one stanza, you have to sing both the stanzas.",
				"Every Buddhist male in LAOS is expected to become a monk for at least a short period in his life. Ideally, this would be just after he finishes school but before he starts a career or marries. During this time they are known as a náirn or novices.",
				"In DENMARK pregnant women get a 4 week paid off before delivering the baby and 14 weeks paid off after the delivery. In total, parents in Denmark get 52 weeks of paid parental leave. Thus, the Danish enjoy a lot of support from the government and the employer.",
				"The Taj Mahal is still one of the most beloved and important monuments in INDIA. To protect the building during World War II, the entire palace was covered with bamboo scaffolding, completely hiding the true structure from bomber planes flying overhead.",
				"When tourists arrive in MALTA, its population triples? Yeah, that’s how popular the island is amongst visitors.",
				"COMOROS is known as the “Perfume Isles” due to their fragrant plant life, particularly that of the ylang-ylang flower. In fact, Comoros is the world’s largest producer of ylang-ylang, supplying around 80% of the world’s ylang-ylang flowers which form the base of the famous perfume Chanel No 5.",
				"The origin of French fries can be traced back to BELGIUM, not France. Also, French fries are called Belgian fries in the country, why not, they have invented them.",
				"The Kachikally Crocodile Pool is considered a sacred site by GAMBIANS. Crocodiles represent the power of fertility in the Gambia, so women who encounter problems with conceiving often visit the crocodile-infested pool to pray and wash.",
				"In ANGOLA,its illegal to click pictures of any government buildings or even look at them through binoculars. It’s also illegal to take their currency, Kwanza, out of the country",
				"The largest pretzel in the world was made in EL SALVADOR. According to Guinness World Records, this humongous piece of baked pastry weighed 1,728 pounds, with its length and width measuring 8.93 meters and 4.06 meters respectively.",
				"Only one DJIBOUTIAN athlete has ever won a medal at the Olympics: Hussein Ahmed Salah won a bronze medal in the marathon in 1988.",
				"ITALIANS love their feline friends. Incidentally, in 2011 an Italian cat inherited over €10 million after its 94-year old owner passed away, making it the third richest animal in the world.",
				"AUSTRIA is home to the world’s oldest zoo – The Tiergarten Schönbrunn. It is located on the grounds of the famous Schönbrunn Palace in Vienna, Austria. It was founded in 1752. The zoo is home to more than 700 animal species, some of them threatened. Its main purpose is to provide a center for species and general nature conservation.",
				"ESWATINI is the only country in the world which is still an absolute monarchy. That too with the longest-reigning monarch! How long you ask? 82 years! Though ironically, he was the youngest monarch to ascend the throne when he was actually crowned.",
				"BARBADOS produces the world’s oldest rum. Mount Gay Rum has been produced here since the year 1703! Even today, it is exported to 110 countries worldwide. Consequently, rum is quite popular and there are approximately 1500 shops selling rum in Barbados.",
				"In 1968, a Ghost ship carrying the latest Korgs, Moogs and Hammond organs was marooned off the CABO VERDE island of São Nicolau. The crew was nowhere to be found and the cargo was distributed to local schools. Overnight, a whole generation of young Cabo Verdeans gained access to the latest electric keyboards which inadvertently inspired the country’s post-independence music explosion several years later.",
				"Marie Curie, the woman who discovered Polon and Rad, wasn’t French, but POLISH. Her name was Marie Sklodowska before she married a Frenchman named Pierre Curie. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, the only person to win a Nobel Prize in two different sciences.",
				"Did you know that the FRENCH Army was the one to invent camouflage? The French invented camouflage during World War I in 1915. They hired artists to paint both their vehicles and their guns so that they would blend in with the environment around them. They did this by painting lines that would distract from the shape of the object.",
				"TAIWAN'S official title is the Republic of China (RoC). The Republic of China (RoC) is not to be confused with the People’s Republic of China (PRC). Both parties fought during the Chinese Civil War which ended in 1949 and ignore each other’s sovereignty. Today the PRC controls mainland China and the RoC control Taiwan.",
				"HONDURANS have a unique way of pointing to things, places, or people. They purse their lips and use it to point at the object or person instead of using their fingers.",
				"KAZAKHSTAN'S national drink is horse milk. Kumis, a fermented horse milk, is native to Kazakhstan and is the national drink. It’s considered to have a light body with a slighty sour alcohol taste. It is typically enjoyed as both food and a drink as well.",
				"In SOUTH SUDAN, the wealth is measured by the number of cattle that each family owns.",
				"VENEZUELA has won seven Miss Universe titles making it the second country with the most crowns. With eight wins, the USA is the country with the most Miss Universe titles. However, Venezuela has also taken eight Miss International titles, six Miss World titles, and two Miss Earth titles making it the first and only country to win all four pageants multiple times.",
				"MALDIVES sits on the Equator. This means that sun rays in Maldives get sprinkled at a 90-degree angle. In a nutshell, the sun rays are direct, and hence it is strong; guests must put on some sunscreen to protect themselves from the ultraviolet rays wherever they explore on the island.",
				"One of TAJIKISTAN'S most striking beauty spots is the lake of Iskanderkul, a mountain lake 4km long and located at 2,195m high. The lake takes its name from Alexander the Great and is believed to be where his horse, Bucephalus, drowned in a battle. The water appears to change colour during the day from turquoise to milky white.",
				"SOUTH AFRICA is the only country in the world with three capital cities. Three different destinations make up South Africa’s capital cities. This is to represent the South African government being divided into three sections. Cape Town is the legislative capital, Pretoria is the administrative capital and Bloemfontein is the judicial capital. Interestingly, Parliament meetings take place for six months in Cape Town and six months in Pretoria.",
				"SUDAN is home to more pyramids than Egypt. When it comes to ancient pyramids, Egypt gets all the credit. But Sudan is actually home to over 200 pyramids — more than Egypt — built by the ancient Nubian civilisation from as early as 2500 BC. The UNESCO-listed Archaeological Sites of the Island of Meroe is probably the country’s most famous site. The site is home to 100 pyramids dating from the 8th century BC to the 4th century AD. ",
				"LEBANON is one of the highest cigarette consumers in the world with over 2,000 cigarettes smoked per person per year.",
				"SAINT VINCENT AND THE GRENADINES are often referred to as a playground for the rich and famous as the islands of Mustique, Palm Island and Union Island are frequented by the ultra-wealthy as well as the British Royal Family.",
				"Prison escape is not punishable by law in GERMANY – German law maintains that it’s a basic human instinct to be free and therefore, prisoners have the right to escape jail. Escapes, however, rarely go unpunished because prisoners are held liable if they cause damage to property or inflict bodily harm against any individual upon their breakout.",
				"MYANMAR is the only country in the world that regularly consumes tea leaves. Tea leaf salad, perhaps the country’s most iconic dish, can be found in nearly every restaurant or tea shop. That being said, tea is more than a delicacy here; it plays a significant role in everyday life and even in Myanmar’s history, as tea-drinking get togethers were and are a way to meet with family, friends and to host guests.",
				"In 2008, RWANDA became one of the first countries to ban plastic bags completely. The country is aiming to be the world’s first plastic-free nation.",
				"In 2017, PALAU became the world’s first country to require tourists to sign an ‘Eco-Pledge’ upon arrival. Every incoming visitor must sign a stamped pledge in their passports to be a good environmental steward throughout their stay.",
				"BOLIVIA has two capitals, La Paz and Sucre. La Paz is the administrative capital with the seat of government and Sucre is the capital as described in the Bolivian constitution. La Paz has a population of about 1.8 million people. Sucre has about 300,000 inhabitants.",
				"The REPUBLIC OF THE CONGO capital city, Brazzaville, is located on the Congo River opposite DR Congo’s capital city, Kinshasa. The two cities are less than a mile (1.6km) apart, making them the closest capital cities in the world. Rome and Vatican City are closer, but as Vatican City is a city-state, it technically doesn’t have a capital. ",
				"In the middle of the undeveloped forest, the government plans to build a new city, Ciudad de la Paz, as the future seat of government. It will be the headquarters of the president, government, administration, police and military leadership and replace the current capital Malabo. The city is being designed to house 160,000–200,000 people, living in an area of 81.5 km2. This corresponds to about a quarter of the population of EQUATORIAL GUINEA.",
				"Did you know that Christmas is celebrated on three different days in PALESTINE by different religions? Thrice the fun!",
				"The UNITED KINGDOM of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country in north-western Europe, off the north­western coast of the European mainland. The United Kingdom consists of four countries: England, Scotland, Wales and Northern Ireland. London is the capital of both the UK and England. Even though there are different traditional dishes in the UK such as Yorkshire Pudding, Fish and Chips and Shepherd’s Pie, Chicken Tikka Masala is widely considered the country's national dish since 2001, even though the origin of this dish is India. Also, the UK was the first country to use postage stamps. The first stamp was known as the Penny Black and was issued in May 1840.",
				"In NORTHERN IRELAND, it is technically illegal to go to the cinema on Sundays. This is due to a 1991 law in observation of the Sabbath. ",];

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
	document.getElementById("CoffeButton").style.display = "block";
	document.getElementById("FBButton").style.display = "none";
	document.getElementById("TwitterButton").style.display = "none";
	/* document.getElementById("WAButton").style.display = "none"; */
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
    SetTier();
	var winpct = Math.round(localStorage.totalgdwins / localStorage.totalgdplayed * 100);
	document.getElementById(6).innerText = "PLAYED: " + localStorage.totalgdplayed;
	document.getElementById(7).innerText = "WIN %: " + winpct;
	document.getElementById(8).innerText = "STREAK: " + localStorage.totalgdstreak + tiericon;
	document.getElementById(9).innerText = "STARS: " + localStorage.totalgdstars;

	//Current Day Game Over
	if (localStorage.getItem('gameovergd' + days) == "1") {
		if (localStorage.gamegdwon == 1) {
			switch (Number(localStorage.gdstarscnt)) {
				case 0: color0 = "green";
					break;
				case 1: color1 = "green";
					break;
				case 2: color2 = "green";
					break;
				case 3: color3 = "green";
					break;
				case 4: color4 = "green";
					break;
				case 5: color5 = "green";
					break;
			}			
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
					if (Number (localStorage.gdstarscnt) != 0){
						document.getElementById("lives").classList.add("animated");
					}				
				}
		}
		else {
			colorx = "green";
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
				case 5: localStorage.gdlives = flagList[index];
					document.getElementById("answer").innerText = "LAST LIFE ALERT! FLAG REVEALED.";
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
			SetTier();			
			var winpct = Math.round(localStorage.totalgdwins / localStorage.totalgdplayed * 100);
			document.getElementById(6).innerText = "PLAYED: " + localStorage.totalgdplayed;
			document.getElementById(7).innerText = "WIN %: " + winpct;
			document.getElementById(8).innerText = "STREAK: " + localStorage.totalgdstreak + tiericon;
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
			if (Number (localStorage.gdstarscnt) != 0){
				document.getElementById("lives").classList.add("animated");
			}
			localStorage.setItem(('gameovergd' + days), 1);	
			localStorage.totalgdplayed = Number(localStorage.totalgdplayed) + 1;
			localStorage.totalgdwins = Number(localStorage.totalgdwins) + 1;
			localStorage.totalgdstreak = Number(localStorage.totalgdstreak) + 1;
			localStorage.totalgdstars = Number(localStorage.totalgdstars) + Number(localStorage.gdstarscnt);
			SetTier();
			var winpct = Math.round(localStorage.totalgdwins / localStorage.totalgdplayed * 100);
			document.getElementById(6).innerText = "PLAYED: " + localStorage.totalgdplayed;
			document.getElementById(7).innerText = "WIN %: " + winpct;
			document.getElementById(8).innerText = "STREAK: " + localStorage.totalgdstreak + tiericon;
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
