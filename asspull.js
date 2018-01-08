var people = [
    'Grossberg',
    'Gant',
    'Phoenix',
    'Apollo',
    'the judge',
    'the suspect',
    'the witness',
    'a witness',
    'the detective',
    'the prosecutor',
    'the defense attorney',
    'the victim',
    'the defendant',
    'the killer',
    'a detective',
    'a prosecutor',
    'a defense attorney',
    'a victim',
    'a defendant',
    'a killer',
    'the first witness',
    'the second witness',
    'the third witness',
    'the bailiff',
    'Layton',
    'Greg',
    'Miles',
    'the steno',
    'the co-pro',
    'the co-def',
    'the support pro',
    'the support def',
    'Jean Descole',
    'Don Paolo',
    'Adachi',
    'the final boss',
    'Barnham',
    'Sherlock',
    'Komaeda',
    'Larry',
    'Inferno Cop',
    'a criminal',
    'a drunk'
]

var people_crazy = [
    'the admin',
    'the mod',
    'Verin',
    'Rhoda',
    'Adam',
    'a mafia player',
    'a newfriend',
    'a vampire',
    'a demonic entity transcending time and space',
    'God',
    'Satan',
    'a clone',
    'a ghost',
    'a fag',
    'the fourth witness',
    'the fifth witness',
    'a lesbian',
    'an autist',
    'an alien',
    'a wizard',
    'a witch',
    'the Payne Train'
]

var items_singular = [
    'murder weapon',
    'autopsy report',
    'updated autopsy report',
    'blood',
    'corpse',
    'camera',
    'pulley',
    'knife',
    'gun',
    'gavel',
    'piece of evidence',
    'statue',
    'clock',
    'time machine',
    'hat',
    'book',
    'bullet',
    'fingerprint',
    'shoe print',
    'court record',
    'contradiction',
    'testimony',
    'computer',
    'banknote',
    'card',
    'coin',
    'tree',
    'shell',
    'magazine',
    'clip',
    'elaborate pulley system',
    'pulley',
    'freezer',
    'bullet hole',
    'contradiction',
    'car',
    'water',
    'recording',
]

var items_crazy = [
    'sheer force of will',
    'verdict',
    'steamed hams',
    'aurora borealis',
]

var verbs = [
    'assault',
    'murder',
    'kill',
    'wipe',
    'bury',
    'frame',
    'rape',
    'forge',
    'steal',
    'have sex with',
    'convict',
    'defend',
    'marry',
    'stab',
    'shoot',
    'channel'
]

var verbs_crazy = [
    'multiclient',
    'ban',
    'meme at',
    'dunk on',
]

var items_plural = [
    'fingerprints',
    'pulleys',
    'pieces of evidence',
    'footprints',
    'evidence',
    'photos',
    'items',
    'banknotes',
    'bullet holes',
    'testimonies'
]

var items_plural_crazy = [
    'time shenanigans',
]

var locations = [
    'crime scene',
    'court',
    'prosecutor\'s bench',
    'defense bench',
    'witness stand',
    'judge\'s desk',
    'audience',
    'police station',
    'coroner\'s office',
    'bar',
    'park',
    'city',
    'jail',
    'prison',
    'church',
    'school',
    'freezer',
    'case',
    'house',
    'alley',
    'university',
    'Pentagon',
    'shelter',
    'shop',
    'office'
]

var locations_crazy = [
    'discord',
    'area 1',
    'arcade',
    'google doc',
    'OOC'
]

var facts = [
    'time of death',
    'location of the crime',
    'murder weapon',
    'motive',
    'timeframe',
    'victim',
    'killer',
    'number of shots',
    'weapon\'s owner',
    'number of witnesses',
    'owner of the prints',
    'ballistic markings',
    'extraterritorial rights',
    'blackmail',
    'cause of death',
    '{person}\'s identity',
    'case'
]

var asspulls = [
    'the {item} is actually the {item}',
    'the {item} was originally inside the {location}',
    'the {item} is still inside the {location}',
    'the {item} was not inside the {location}',
    'the {location} is actually the {location}',
    'the {location} was the {location}',
    'the {item} was never the {item}',
    'we still haven\'t found the {item}',
    'we still haven\'t found the {items}',
    '{person} is actually {person}\'s boyfriend',
    '{person} is actually {person}\'s girlfriend',
    '{person} is actually {person}',
    '{person} is the real killer',
    '{person} is a fake',
    '{person} is an imposter',
    '{person} is {person}',
    '{person} is really {person}',
    '{person} has been {person} all along',
    '{person} has actually been {person} all along',
    '{person} hid the real {item}',
    'the {item} is fake',
    'the {item} was moved',
    'the {item} was planted',
    'the {item} was planted by {person}',
    'the {item} was moved using the {item}',
    'the {item} was moved using {items}',
    'the {item} was moved by {person}',
    'the body was moved using the {item}',
    'the body was moved using {items}',
    'the body was moved by {person}',
    'the {items} actually belong to {person}',
    'the {item} actually belongs to {person}',
    'the {item} was made by {person}',
    '{person} is both {person} and {person}',
    '{person} wanted to {verb} {person}',
    '{person} wanted to {verb} the {item}',
    '{person} wanted to {verb} the {items}',
    'if we don\'t {verb} {person} now, they will escape',
    'if we don\'t {verb} {person} now, they will {verb} again',
    'if we don\'t {verb} {person} now, they will {verb} {person}',
    '{person} has the {item}',
    '{person} couldn\'t have been the one to {verb} {person}',
    '{person} couldn\'t have been the one to {verb} the {item}',
    'the victim was killed with {person}\'s {item}',
    'the {item} was used by {person}',
    'the {item} was used to throw off the time of death',
    '{person} was framed by {person}',
    'the defendant was framed by {person}',
    'the {item} is fake',
    'the {item} has no relevance to the case',
    'I am actually {person}',
    'the {item} belongs to me',
    'we were mistaken about the {fact}',
    'we were wrong about the {fact}',
    '{person} used the {item} to fake the {fact}',
    '{person} used the {item} to {verb} the {item}',
    '{person} used the {item} to {verb} {person}',
    '{person} used the {item} to mislead us about the {fact}',
    'we still don\'t know the real {fact}',
    'the {item} was used to mislead us about the {fact}',
    'the crime happened years ago',
    'the crime actually happened in the {location}',
    'the {item} actually belongs to me',
    'we can\'t end this case until we hear another testimony from {person}',
    'there was actually no contradiction in {person}\'s testimony',
    '{person} is bluffing',
    '{person} lied about the {item}',
    '{person} lied about the {fact}',
    '{person} was being blackmailed',
    '{person} was being blackmailed by {person}',
    'there was never any {item}',
    'the existence of the {item} contradicts the facts',
    'we just got the {item}',
    '{person} found the {item}',
    '[just fucking rest your case tbh]',
    'the {item} proves {person}\'s guilt beyond a shadow of a doubt',
    'the {item} proves that {person} is lying',
    '{person} is part of the mafia',
    '{person} was at the scene of the crime',
    '{person} was inside the {location}'
]

var asspulls_crazy = [
    '{person} is a clone',
    'the {item} crashed the server',
    '{person} is multiclienting'
]

function get_random_index(arr){
    var r = Math.floor(Math.random()*arr.length);
    return r;
}

function crazify_people(){
    var new_people = people.slice();
    for(var i = 0; i<items_singular.length; i++){
        new_people.push("the " + items_singular[i]);
    }
    for(var i = 0; i<locations.length; i++){
        new_people.push("the " + locations[i]);
    }
    new_people = new_people.concat(people_crazy);
    return new_people;
}

var crazy_people = crazify_people();

function crazify_items_s(){
    var new_items_s = items_singular.slice();
    for(var i = 0; i<people.length; i++){
        new_items_s.push(
            people[i].replace(
                new RegExp("^the "), 
                ""
            ).replace(
                new RegExp("^a "),
                ""
            ).replace(
                new RegExp("^an "),
                "")
        );
    }
    new_items_s = new_items_s.concat(items_crazy);
    new_items_s = new_items_s.concat(locations);
    return new_items_s;
}

var crazy_items_s = crazify_items_s();

function crazify_items_p(){
    var new_items_p = items_plural.slice();
    new_items_p = new_items_p.concat(items_plural_crazy);
    return new_items_p;
}

var crazy_items_p = crazify_items_p();

function crazify_locations(){
    var new_locations = locations.slice();
    for(var i = 0; i<people.length; i++){
        new_locations.push(
            people[i].replace(
                new RegExp("^the "), 
                ""
            ).replace(
                new RegExp("^a "),
                ""
            ).replace(
                new RegExp("^an "),
                "")
        );
    }
    new_locations = new_locations.concat(crazy_items_s);
    new_locations = new_locations.concat(locations_crazy);
    return new_locations;
}

var crazy_locations = crazify_locations();

function crazify_verbs(){
    var new_verbs = verbs.slice();
    new_verbs = new_verbs.concat(verbs_crazy);
    return new_verbs;
}

var crazy_verbs = crazify_verbs();

function crazify_asspulls(){
    var new_asspulls = asspulls.slice();
    new_asspulls = new_asspulls.concat(asspulls_crazy);
    return new_asspulls;
}

var crazy_asspulls = crazify_asspulls();

function saved_asspull() {
    if (document.getElementById("url").href == window.location.hash) {
       return random_asspull();
    }
    var hash = "W" + window.location.hash.substr(1);
    if (hash.length % 4 != 0) {hash += '='.repeat(4 - (hash.length % 4));}
    var saved = JSON.parse(atob(hash));
    if (saved.shift() == 1){
        var items_singular_ = crazy_items_s;
        var items_plural_ = crazy_items_p;
        var people_ = crazy_people;
        var locations_ = crazy_locations;
        var verbs_ = crazy_verbs;
        var facts_ = facts;
        var asspulls_ = crazy_asspulls;
    } else {
        var items_singular_ = items_singular;
        var items_plural_ = items_plural;
        var people_ = people;
        var locations_ = locations;
        var verbs_ = verbs;
        var facts_ = facts;
        var asspulls_ = asspulls;
    }
    var sentence = saved.shift();
    sentence = asspulls_[sentence];
    for(var i=0; i<3; i++){
        while (sentence.indexOf("{item}") !== -1) {
            var item = saved.shift(); 
            if (saved.shift() < 0.1){
                var item2 = saved.shift();
                item = people_[item2] + "'s " + item;
                if (sentence.indexOf("the {item}") !== -1) {
                    sentence = sentence.replace("the {item}", item);
                } else{
                    sentence = sentence.replace("{item}", item);
                }
            } else {
                sentence = sentence.replace("{item}", item);
            }
        }
        while (sentence.indexOf("{items}") !== -1) {
            var items_p = saved.shift();
            items_p = items_plural_[items_p];
            sentence = sentence.replace("{items}", items_p);
        }
        while (sentence.indexOf("{person}") !== -1) {
            var person = saved.shift();
            person = people_[person];
            sentence = sentence.replace("{person}", person);
        }
        while (sentence.indexOf("{fact}") !== -1) {
            var fact = saved.shift();
            fact = facts[fact];
            sentence = sentence.replace("{fact}", fact);
        }
        while (sentence.indexOf("{location}") !== -1) {
            var location = saved.shift();
            location = locations_[location];
            sentence = sentence.replace("{location}", location);
        }
        while (sentence.indexOf("{verb}") !== -1) {
            var verb = saved.shift();
            verb = verbs_[verb];
            sentence = sentence.replace("{verb}", verb);
        }
    }
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + "!";
    draw_asspull(sentence, window.location.hash.substr(1));
    document.getElementById("url").href = window.location.hash;
    document.getElementById("url").innerHTML = document.getElementById("url").href;
}

function random_asspull(){
    if (document.getElementById("crazymode").checked){
        var items_singular_ = crazy_items_s;
        var items_plural_ = crazy_items_p;
        var people_ = crazy_people;
        var locations_ = crazy_locations;
        var verbs_ = crazy_verbs;
        var facts_ = facts;
        var asspulls_ = crazy_asspulls;
        var url = [1]
    } else {
        var items_singular_ = items_singular;
        var items_plural_ = items_plural;
        var people_ = people;
        var locations_ = locations;
        var verbs_ = verbs;
        var facts_ = facts;
        var asspulls_ = asspulls;
        var url = [0];
    }
    var sentence = get_random_index(asspulls_);
    url.push(sentence);
    sentence = asspulls_[sentence];
    for(var i=0; i<3; i++){
        while (sentence.indexOf("{item}") !== -1) {
            var item = get_random_index(items_singular_);
            url.push(item); item = items_singular_[item];
            if (Math.random() < 0.1){
                url.push(1);
                var item2 = get_random_index(people_) 
                url.push(item2);
                item = people_[item2] + "'s " + item;
                if (sentence.indexOf("the {item}") !== -1) {
                    sentence = sentence.replace("the {item}", item);
                } else{
                    sentence = sentence.replace("{item}", item);
                }
            } else {
                url.push(0);
                sentence = sentence.replace("{item}", item);
            }
        }
        while (sentence.indexOf("{items}") !== -1) {
            var items_p = get_random_index(items_plural_);
            url.push(items_p);
            items_p = items_plural_[items_p];
            sentence = sentence.replace("{items}", items_p);
        }
        while (sentence.indexOf("{person}") !== -1) {
            var person = get_random_index(people_);
            url.push(person);
            person = people_[person];
            sentence = sentence.replace("{person}", person);
        }
        while (sentence.indexOf("{fact}") !== -1) {
            var fact = get_random_index(facts);
            url.push(fact);
            fact = facts[fact];
            sentence = sentence.replace("{fact}", fact);
        }
        while (sentence.indexOf("{location}") !== -1) {
            var location = get_random_index(locations_);
            url.push(location);
            location = locations_[location];
            sentence = sentence.replace("{location}", location);
        }
        while (sentence.indexOf("{verb}") !== -1) {
            var verb = get_random_index(verbs_);
            url.push(verb);
            verb = verbs_[verb];
            sentence = sentence.replace("{verb}", verb);
        }
    }
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + "!";
    url = btoa(JSON.stringify(url)).replace(/=+$/, "").substr(1);
    draw_asspull(sentence, url);
    document.getElementById("url").href = "#" + url;
    document.getElementById("url").innerHTML = document.getElementById("url").href;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    var lines = [];
    var height = 0;

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lines.push(line.trim());
        height += lineHeight;
        line = words[n] + ' ';
      }
      else {
        line = testLine;
      }
    }
    lines.push(line.trim());
    height += lineHeight;
    for (var i=0; i < lines.length; i++) {
        context.fillText(lines[i], x, ((y - (height/2)) + (lineHeight * (i+1))));
    }
}

function draw_asspull(sentence, hash){
    var canvas = document.getElementById("asspull");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "60px Sans";
    ctx.fillStyle = "#131516";
    ctx.rect(0, 0, 600, 600);
    ctx.fill();
    ctx.fillStyle = "#f2f3f4";
    ctx.textAlign = "center";
    wrapText(ctx, sentence, canvas.width / 2, canvas.height / 2, 600, 60); 
    ctx.font = "small-caps 36px Serif";
    ctx.fillText("AOV Asspull Generator", canvas.width/2, 50);
    ctx.font = "18px Sans";
    ctx.fillText("slavfox.github.io/asspullgen", canvas.width/2, 80);
    ctx.fillStyle = "#f2f3f4";
    ctx.font = "12px Sans";
    ctx.fillText(hash, canvas.width/2, canvas.height-16);
    
}

function asspull() {
    if (window.location.hash.length > 1) {
        saved_asspull();
        window.location.hash = "";
    } else {
        random_asspull();
    }
}
