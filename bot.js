var tmi = require('tmi.js'),
authen = require('./oauth.js'),
options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
    reconnect: true
	},
	identity: {
		username: 'boxbot69', // change this username
		password: authen.password // create an exports.password in oauth.js
	},
	channels: ['#nightbox69']
}
client = new tmi.client(options),
emoteCounter = 0,
intervalEmote = Math.floor((Math.random() * 10) + 1),
chatCounter = 0,
intervalChat = Math.floor((Math.random() * 50) + 1),
hasConnected = false,
hasPlugged = false,
raceTracker = false,
judooyTimer = false,
dadChecker = false,
judooyMuteTimer = Math.floor((Math.random() * 15) + 3),
judooyCounter = 0,
judooyMuter = false,
dadMod = false,
benggaCheck = false,
raeCheck = false,
kitzCheck = false,
bloodyTimer = 1;

client.connect();

// Chat Commands
client.on("chat", (channel, user, message, self) => {
	var payload = message.toLowerCase();
	if(self) return;
	if(channel == "#nightbox69") {
		if(message == "nb dad") {
			dadCounter = Math.floor((Math.random() * 40) + 1);
			if(dadMod == true) {
				if(dadCounter == 1 && dadChecker == false) {
					someLoserScrub = user.username;
					client.say("nightbox69", "/timeout " + someLoserScrub + " 60 Nice Try" );
					client.say("nightbox69", "Wow, " + user.username + " " + dadCounter + " inch?? GitGud boi. LUL"  );	
				} else if(dadCounter == 40 && dadChecker == false) {
					someScrub = user.username;
					client.say("nightbox69", "WINNER, WINNER " + dadCounter + " INCHES OF PURE PAIN FOR "  + someScrub + "!! Eat that boi. LUL");
					client.say("nightbox69", "nb dad now closed for 10 minutes.");
					client.say("nightbox69", "/timeout " + someScrub + " 20 Thanks for playing Kappa" );
					dadChecker = true;
					setTimeout(function(){ dadChecker = false; client.say("nightbox69", "nb dad now open OpieOP"); }, 600000);
				} else if(dadChecker == false) {
					client.say("nightbox69", "Dad has " + dadCounter + " inches of love for you today, "  + user.username);	
				} else if(dadChecker == true) {
					client.say("nightbox69", "Some scrub by the name of " + someScrub + " won the damn game. Check back again later.");
				}
			}
		}

		switch(payload) {
			case 'nb intro':
        client.say("#nightbox69", "I am Botbox69, rioting Bot of zee Boss. Currently at version 1.8.0. Commands Here: https://pastebin.com/RHUEN7hy");
        break;
      case 'nb commands':
        client.say("nightbox69", "BUT I DON'T WANNA TELL YOU STUFF!! DansGame https://pastebin.com/RHUEN7hy");
        break;
      case 'nb emulator':
        client.say("#nightbox69", "Runs are done on PSXFin 1.1.13 - It has crashed multiple times already and will prolly continue until boss gets Lucky and PB. It also forces the boss from checking other windows or else the sound will be cutoff so any strim alerts will be thanked instead of checked. The only active windows the boss will have will be chat, his notes, livesplit and the emulator.");
        break;
      case 'nb notes':
        client.say("#nightbox69", "The boss's speedrun notes are found here: https://github.com/nightbox69/Speedruns . It currently only has the finished version of Chrono Cross but will slowly expand to FFX Nemesis%, FFX-2 100% and Persona 5 in no specific order.");
        break;
      case 'nb dad on':
        if(user.mod == true || user.username == "nightbox69") {
          dadMod = true;
          client.say("#nightbox69", "nb dad is on. ...welp");
        }
        break;
      case 'nb dad off':
        if(user.mod == true || user.username == "nightbox69") {
          dadMod = false;
          client.say("#nightbox69", "nb dad is off! PogChamp");
        }
        break;
      case 'nb bloody':
        if(user.mod == true || user.username == "nightbox69" || user.username == "senolass") {
          client.say("#nightbox69", "Commercial Break~ Commercial Break~ How long will these dumb ads take?~");
          client.say("#nightbox69", "/timeout bloodyblackneko " + bloodyTimer + " Coz we can put it as a command.");
          bloodyTimer = bloodyTimer * 2;
        }
        break;
      case 'nb nemesis':
        client.say("#nightbox69", "Oh, that shit. :| https://pastebin.com/gnN5nacC");
        break;  
      case 'nb riot':
        client.say("#nightbox69", "FUCKING RIOT LET'S GO");
        client.action("nightbox69", "throws chairs and tables everywhere SwiftRage");
        break;
      case 'nb tom':
        client.say("#nightbox69", "Oh, that guy. :| https://pastebin.com/xFA4RCAa");
        break;
      case 'nb gitgud':
        client.say("nightbox69", "Why yes boss blame your lack of brain power to speedrunning a very simple game where all resources has been made available to you over to game crashes. PogChamp");
        break;
      case 'nb shutup':
        client.say("#nightbox69", "How about YOU SHUT UP AND DO YOUR SPEEDRUNS HUH??");
        break;
      case 'nb stupidstrimmer':
        client.say("#nightbox69", "Zee boss has terrible interaction skills. The run will die if he starts blabbering to ask how your day is. NotLikeThis");
        break;
      case 'nb sammich':
        client.say("#nightbox69", "SwiftRage MOTHERFUCKER SwiftRage WHAT. SwiftRage THE. SwiftRage FUCK. SwiftRage IS. SwiftRage YOUR SwiftRage PROBLEM??? SwiftRage");
        break;
      case 'nb sandwich':
        if(user.username != "nightbox69") {
          client.action("nightbox69", "makes " + user.username + " a sandwich. NotLikeThis");
          client.say("nightbox69", "BOSS, WHY DO I HAVE TO MAKE THEM A SANDWICH?!! DansGame");
        } else {
          client.say("nightbox69", "Why should I make you a sandwich??");
        }
        break;
      case 'sudo makemeonesandwich':
        if(user.username == "nightbox69") {
          client.action("nightbox69", "makes " + user.username + " a sandwich. NotLikeThis");
          client.say("nightbox69", "BibleThump BOT ABUSE BibleThump");
        } else {
          client.say("nightbox69", "There is no reason for me to make sudo sandwiches to plebs. OpieOP");
        }
        break;
      case 'nb racesetup':
        if(user.username === "nightbox69") {
          raceTracker = true;
          client.say("nightbox69", "A race, huh? Think you can keep up?");
          client.say("nightbox69", "Command nb race is now active.");
        } else {
          client.say("nightbox69", "You trying something? Keepo");
        }
        break;
      case 'nb race':
        if(raceTracker == true) {
          client.say("nightbox69", "Watch the other guys beat the snot out of my boss: http://kadgar.net/live/futureforce14/nightbox69");
        } else {
          client.say("nightbox69", "Boss is too scared to race.");
        }
        break;
      case 'nb racedown':
        if(user.username === "nightbox69") {
          raceTracker = false;
          client.say("nightbox69", "Everybody died?! DansGame");
        } else {
          client.say("nightbox69", "You trying something? Keepo");
        }
        break;
      case 'nb pb':
        client.say("nightbox69", "Look down on boss's profile and you'll find out.");
        break;
      case 'nb wr':
        client.say("nightbox69", "Look down on boss's profile and you'll find out.");
        break;
      case 'nb rpglb':
        client.say("nightbox69", "https://pastebin.com/MF3GPVKw");
        break;
      case 'nb discord':
        client.say("nightbox69", "Zee Boss has a discord channel. Shame on him but do join! https://discord.gg/Gw5r9S6");
        break;
      case 'nb facebook':
        client.say("nightbox69", "Be sure to click this unlikeable facebook page here that was made for my Boss. https://www.facebook.com/nightbox69");
        break;
      case 'nb twitter':
        client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
        break;
      case 'nb bttv':
        client.say("nightbox69", "nb69Chill nb69Hehe nb69Horrified nb69Flash");
        break;
      case 'nb erin':
        client.say("nightbox69", "The Artist who made my FFX Fanarts and Emotes(@erineclair) is looking to do commissions! So if you liked her work kindly check out her twitter status for more information! https://twitter.com/erineclair/status/982690776973950976");
        break;
      case 'nb randomizer':
        client.say("nightbox69", "All ability nodes and all stat nodes on the Sphere Grid have been mixed up. Tidus starts with Flee, to keep the run 'short'. If you want to try it, instructions here: https://tinyurl.com/y9zcfq7c");
        break;
      case '!points':
      	pointsCounter = Math.floor((Math.random() * 4000000) + 1);
      	client.say("#nightbox69", user.username + " has " + pointsCounter + " points to spend on absolutely NOTHING. PogChamp");
        break;
      case '!uptime':
        var uptimeCounter = Math.floor((Math.random() * 4) + 1);
        switch(uptimeCounter) {
          case 1:
            client.say("#nightbox69", "Since forever, " + user.username + "... Since forever. :|");
            break;
          case 2:
            client.say("#nightbox69", "Why bother asking for uptime " + user.username + "? The run won't survive anyway. :|");
            break;
          case 3:
            client.say("#nightbox69", "Wonderful, a command that checks how long the boss is strimming when there is a freaking timer infront of their face.");
            break;
          case 4:
            client.say("#nightbox69", "The boss has been live since the 1989 Philippine Coup Attempt. And you can take that to the bank. PogChamp");
            break;
        }
      	break;
      default:
      	if(user.username == "judooy" && judooyTimer == false) {
          if(judooyMuteTimer == judooyCounter) {
            client.say("#nightbox69", "/timeout " + user.username + " " + Math.floor((Math.random() * 20) + 1) + " LUMAYO KA SA ANAK NI BOSS");
            client.say("#nightbox69", "ULOL VAC MO DIS SwiftRage");
            judooyTimer = true;
          } else {
            judooyCounter = judooyCounter + 1;
          }
        }

        if((payload.includes("lodi") || payload.includes("petmalu") || payload.includes("werpa")) && + user.mod == false) {
          client.say("#nightbox69", "/timeout " + user.username + " 1");
          client.say("#nightbox69", "You were saying something? Kappa");
          client.action("nightbox69", "hands " + user.username + " a dictionary. Kappa");
        }

        if(message.includes("Kappa") && user.username != "botbox69") {
          emoteCounter = emoteCounter + 1;
          if(emoteCounter == intervalEmote) {
            emoteString = "HOLY SHIT " + user.username + " IS THE GOD OF THE"
            emoteCaps = emoteString.toLocaleUpperCase();
            client.say("#nightbox69", emoteCaps + " Kappa -verse (" + intervalEmote + "+)");
            intervalEmote = intervalEmote + (Math.floor((Math.random() * 50) + 1));
          }
        }

        if(user.username != "botbox69") {
          chatCounter = chatCounter + 1;
        }

        if(user.username == "rebengga" && benggaCheck == false) {
          client.say("#nightbox69", "Oh, this idiotic loser. :| https://imgur.com/275ArTc follow the moron at https://twitch.tv/rebengga");
          benggaCheck = true;
        }

        if(user.username == "raeyei" && raeCheck == false) {
          client.say("#nightbox69", "Madamoiselle in the house!! Follow her and her variety adventures and quit games at https://twitch.tv/raeyei");
          raeCheck = true;
        }

        if(user.username == "kitzcua" && kitzCheck == false) {
          client.say("#nightbox69", "WHAT??? SHE VISITED??? Follow Kitz and her reading adventures at https://twitch.tv/kitzcua");
          kitzCheck = true;
        }

        if(chatCounter == intervalChat) {
          var annoyCounter = Math.floor((Math.random() * 7) + 1);
          switch(annoyCounter) {
            case 1:
              client.say("#nightbox69", "Can you believe someone is ACTUALLY TALKING to you right now boss? Or maybe it's just me. Kappa");
              break;
            case 2:
              client.say("#nightbox69", "Sometimes, I wonder why people would even bother watching this stream. This run is total shit. Keepo");
              break;
            case 3:
              client.say("#nightbox69", "PJSalt RESET HYPE PJSalt");
              break;
            case 4:
              client.say("#nightbox69", "I must suggest that you guys leave my poor boss alone, talking must be quite a task for him. Kappa");
              break;
            case 5:
              client.say("#nightbox69", "I DECLARE A MOMENT OF SILENCE. PogChamp My Boss is about to fuck up somewhere. PogChamp");
              break;
            case 6:
              client.say("#nightbox69", "Boss, I have 69 reasons to quit botting for you and this run is one of them FailFish");
              break;
            case 7:
              client.say("#nightbox69", "BOSS I DEMAND A VACATION. Botting for you is a terribly frustrating and boring job.");
              break;
          }
          intervalChat = intervalChat + Math.floor((Math.random() * 200) + 1);
        } 
      	break;
		}
	}
});

// Whisper Commands
client.on("whisper", function (from, userstate, message, self) {
	var payload = message.toLowerCase();
	if (self) return;
	switch(payload) {
		case 'nb intro':
			client.whisper(from, "I am Botbox69, rioting Bot of zee Boss. Currently at version 1.3.0");
			break;
		case 'nb race':
			client.whisper(from, "Watch the other guys beat the snot out of my boss: http://kadgar.net/");
			break;
		case 'nb pb':
			client.whisper(from, "Final Fantasy X - Any%: 9h 43m 45s");
			break;
		case 'nb wr':
			client.whisper(from, "Final Fantasy X - Any%: 9h 20m 00s by Flobberworm4");
			break;
		default:
			break;
	}
});

// Subscription Notification
client.on("subscription", function(channel, username, method, message, userstate) {
	client.say("nightbox69", "BOSS BOSS! " + username + " CONTRIBUTED TO YOUR FEEDING PROGRAM! Thank you for the food!")
});

// Bits Notification
client.on("cheer", function (channel, userstate, message) {
	client.say("nightbox69", "Wow, bits! Thank you for the food contribution!");
});

// ReSubscription Notification
client.on("resub", function(channel, username, months, message, userstate, methods) {
	client.say("nightbox69", "Oi, " + username + ", thanks for the " + months + " stuffs of sponsoring the BOSS'S FOOD PogChamp");
});

// Hosting Notification
client.on("hosting", function (channel, target, viewers) {
	client.say("nightbox69", "Hosting Strimmer " + target + ". This is about to be another salt fiesta!");
});

// Connection Announcement and Bot Plugs (1 Hour Interval with 30 second intervals in between)
client.on('connected', function(address, port) {
  if(hasConnected == false) {
  	client.say("nightbox69", "I'm awake boss, I'm awake. Stop nudging the command prompt you old dying man.");
  	setInterval(followPlug, 3600000);
    /* setInterval(erinPlug, 3630000);
  	setInterval(discordPlug, 3630000);
  	setInterval(twitterPlug, 3660000);
  	setInterval(facebookPlug, 3690000); */
  	hasConnected = true;
  } else {
  	client.say("#nightbox69", "Error: Connection was interrupted. I highly suggest refreshing the strim so you can see Boss's frustrated face. Kappa.");
  }
});

// SOCIAL MEDIA AND TWITCH PLUGS AND JUDOOY 
function followPlug() {
  client.say("nightbox69", "If you guys actually managed to like boss's stream (a statistical impossibility) consider hitting the follow button for more moronic speedruns that will hold no bearing to World Record but instead improves the mining capacity at the salt mines. Kappa");
};

function clearChat() {
	client.say("nightbox69", "Chat has been cleared. You're welcome Boss. Kappa");
}

function discordPlug() {
	client.say("nightbox69", "Zee Boss has a discord channel. Shame on him but do join! https://discord.gg/Gw5r9S6");
}

function facebookPlug() {
	client.say("nightbox69", "Be sure to click this unlikeable facebook page here that was made for my Boss. https://www.facebook.com/nightbox69");
}

function twitterPlug() {
  client.action("nightbox69", "is forcibly ordered to tell people to (not) follow his boss at https://twitter.com/nightbox69");
}

function erinPlug() {
  client.say("nightbox69", "The Artist who made my FFX Fanart and Emotes(@erineclair) is looking to do commissions! So if you liked her work kindly check out her twitter for more information! https://twitter.com/erineclair/");
}

function judooyClear() {
	judooyTimer = false;
}