var people = [
    'the judge',
    'the witness',
    'the detective',
    'the prosecutor',
    'the defense attorney',
    'the victim',
    'the defendant',
    'the killer',
    'the first witness',
    'the second witness',
    'the third witness',
    'the admin',
    'the mod',
    'the fourth witness',
    'the fifth witness',
    'the bailiff',
    'Layton',
    'Greg',
    'Miles',
    'the steno',
    'the co-pro',
    'the co-def',
    'the support pro',
    'the support def',
    'Verin',
    'Rhoda',
    'Adam',
    'Jean Descole',
    'Don Paolo',
    'Adachi',
    'the final boss',
    'Barnham',
    'Sherlock',
    'a mafia player',
    'Komaeda',
    'Larry',
    'God',
    'Satan',
    'a demonic entity transcending time and space',
    'Inferno Cop',
    'a vampire',
    'a criminal',
    'a clone',
    'a ghost',
    'a lesbian',
    'a fag',
    'a newfriend',
    'an autist',
    'a drunk'
]

var items_singular = [
    'murder weapon',
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
    'emote',
    'banknote',
    'card',
    'coin',
    'shell',
    'magazine',
    'clip',
    'theory',
    'elaborate pulley system',
    'time of death',
    'freezer',
    'sheer force of will',
    'bullet hole',
    'testimony',
    'cross examination'
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
    'ban',
    'meme at',
    'dunk on',
    'convict',
    'defend',
    'marry',
    'stab',
    'shoot',
    'multiclient'
]

var items_plural = [
    'fingerprints',
    'pulleys',
    'pulleys',
    'pieces of evidence',
    'footprints',
    'evidence',
    'photos',
    'items',
    'banknotes',
    'time shenanigans',
    'bullet holes',
    'testimonies'
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
    'discord',
    'area 1',
    'arcade',
    'google doc',
    'freezer'
]

var asspulls = [
    'the {item} is actually the {item}',
    'the {item} was originally found at the {location}',
    'the {item} is still at the {location}',
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
    'the {item} is a fake',
    'the {item} was moved using a {item}',
    'the {item} was moved using {items}',
    'the {item} was moved by {person}',
    'the {items} actually belong to {person}',
    'the {item} actually belongs to {person}',
    'the {item} was made by {person}',
    '{person} is both {person} and {person}',
    '{person} wanted to {verb} {person}',
    '{person} wanted to {verb} the {item}',
    '{person} wanted to {verb} the {items}',
    'if we don\'t {verb} {person} now, they will escape',
    'if we don\'t {verb} {person} now, they will {verb} again',
    '{person} has the {item}',
    '{person} couldn\'t have been the one to {verb} {person}',
    '{person} couldn\'t have been the one to {verb} the {item}',
    'the victim was killed with {person}\'s {item}',
    'the {item} crashed the server',
    'the {item} was used by {person}',
    'the {item} was used to throw off the time of death',
    '{person} is a clone',
    '{person} was framed by {person}',
    'the defendant was framed by {person}',
    'the {item} is fake',
    'the {item} has no relevance to the case',
]

function get_random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function asspullify(sentence){
    while (sentence.indexOf("{item}") !== -1) {
        var item = get_random(items_singular);
        if (Math.random() < 0.1){
            item = get_random(people) + "'s " + item;
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
        var items_p = get_random(items_plural);
        sentence = sentence.replace("{items}", items_p);
    }
    while (sentence.indexOf("{person}") !== -1) {
        var person = get_random(people);
        sentence = sentence.replace("{person}", person);
    }
    while (sentence.indexOf("{location}") !== -1) {
        var location = get_random(locations);
        sentence = sentence.replace("{location}", location);
    }
    while (sentence.indexOf("{verb}") !== -1) {
        var verb = get_random(verbs);
        sentence = sentence.replace("{verb}", verb);
    }
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + "!";
}

function asspull() {
    var sentence = get_random(asspulls);
    document.getElementById("asspull").innerHTML = asspullify(sentence);
}
