/* jshint node:true */ /* global define, escape, unescape */
"use strict";

const LazyNamer = {};


LazyNamer.nouns =[
  'potter',
  'snake',
  'merlin',
  'gandalf',
  'glinda',
  'dumbledore',
  'dresden',
  'yoda',
  'skywalker',
  'leah',
  'chewy',
  'solo',
  'potter',
  'nightly',
  'turing',
  'asimov',
  'heinlin',
  'martin',
  'rowling',
  'tolkien',
  'gaiman',
  'piccard',
  'riker',
  'atwood',
  'vonnegut',
  'palinuk',
  'sidharth',
  'lannister',
  'stark',
  'einstein',
  'newton',
  'curie',
  'galilei',
  'hawking',
  'darwin',
  'edison',
  'tesla',
  'copernicus',
  'faraday',
  'pasteur',
  'nobel',
  'franklin',
  'bell',
  'watson',
  'bohr',
  'crick',
  'kepler',
  'boyle',
  'planck',
  'maxwell',
  'fermi',
  'rutherford',
  'feynman',
  'sagan',
  'mendel',
  'hubble',
  'lovelace',
  'hooke',
  'dalton',
  'schrodinger',
  'pascal',
  'linnaeus',
  'oppenheimer',
  'houdini',
  'penn',
  'teller',
  'copperfield',
  'blain',
  'prospero',
  'romeo',
  'juliet',
  'ophelia',
  'macbeth',
  'mercutio',
  'falstaff',
  'horatio',
  'titania',
  'laertes',
  'ophelia',
  'polonius',
  'puck',
  'hamlet',
  'ariel',
  'portia',
  'ares',
  'apollo',
  'zeus',
  'posidon',
  'dionysus',
  'diana',
  'hermes',
  'ramanujan',
  'aryabhata',
  'brahmagupta',
  'bhaskara',
  'varahamihira',
  'parameshvara',
  'tolstoy',
  'gogol',
  'pushkin',
  'dostoevsky',
  'stravinsky',
  'beethoven',
  'bach',
  'brahms',
  'mozart',
  'chopin',
  'handel',
  'tchaikovsky',
  'debussy',
  'haydn',
  'vivaldi'
];

LazyNamer.adjectives =[
  'addicting',
  'afraid',
  'agreeable',
  'amused',
  'ancient',
  'angry',
  'annoyed',
  'anxious',
  'arrogant',
  'ashamed',
  'average',
  'awful',
  'awkward',
  'bad',
  'beautiful',
  'better',
  'big',
  'bitter',
  'black',
  'blue',
  'boiling',
  'brave',
  'breezy',
  'brief',
  'bright',
  'broad',
  'broken',
  'bumpy',
  'calm',
  'careful',
  'charming',
  'cheerful',
  'chilly',
  'clumsy',
  'cold',
  'colossal',
  'combative',
  'comfortable',
  'confused',
  'cooing',
  'cool',
  'cooperative',
  'courageous',
  'crazy',
  'creepy',
  'cruel',
  'cuddly',
  'curly',
  'curved',
  'damp',
  'dangerous',
  'deafening',
  'deep',
  'delightful',
  'depressed',
  'determined',
  'dirty',
  'disgusted',
  'disturbed',
  'dizzy',
  'dry',
  'dull',
  'dusty',
  'eager',
  'early',
  'elated',
  'embarrassed',
  'empty',
  'encouraging',
  'energetic',
  'enthusiastic',
  'envious',
  'evil',
  'excited',
  'exuberant',
  'faint',
  'fair',
  'faithful',
  'fantastic',
  'fast',
  'fat',
  'few',
  'fierce',
  'filthy',
  'fine',
  'flaky',
  'flat',
  'fluffy',
  'foolish',
  'forlorn',
  'frail',
  'frantic',
  'fresh',
  'friendly',
  'frightened',
  'funny',
  'fuzzy',
  'gentle',
  'giant',
  'gigantic',
  'good',
  'gorgeous',
  'greasy',
  'great',
  'green',
  'grieving',
  'grubby',
  'grumpy',
  'handsome',
  'happy',
  'hard',
  'harsh',
  'healthy',
  'heavy',
  'helpful',
  'helpless',
  'high',
  'hilarious',
  'hissing',
  'hollow',
  'homeless',
  'horrible',
  'hot',
  'huge',
  'hungry',
  'hurt',
  'hushed',
  'husky',
  'icy',
  'ill',
  'immense',
  'itchy',
  'jealous',
  'jittery',
  'jolly',
  'juicy',
  'kind',
  'large',
  'late',
  'lazy',
  'light',
  'little',
  'lively',
  'lonely',
  'long',
  'loose',
  'loud',
  'lovely',
  'low',
  'lucky',
  'magnificent',
  'mammoth',
  'many',
  'massive',
  'melodic',
  'melted',
  'mighty',
  'miniature',
  'moaning',
  'modern',
  'mute',
  'mysterious',
  'narrow',
  'nasty',
  'naughty',
  'nervous',
  'new',
  'nice',
  'nosy',
  'numerous',
  'nutty',
  'obedient',
  'obnoxious',
  'odd',
  'old',
  'orange',
  'ordinary',
  'outrageous',
  'panicky',
  'perfect',
  'petite',
  'plastic',
  'pleasant',
  'precious',
  'pretty',
  'prickly',
  'proud',
  'puny',
  'purple',
  'purring',
  'quaint',
  'quick',
  'quickest',
  'quiet',
  'rainy',
  'rapid',
  'rare',
  'raspy',
  'ratty',
  'red',
  'relieved',
  'repulsive',
  'resonant',
  'ripe',
  'roasted',
  'robust',
  'rotten',
  'rough',
  'round',
  'sad',
  'salty',
  'scary',
  'scattered',
  'scrawny',
  'screeching',
  'selfish',
  'shaggy',
  'shaky',
  'shallow',
  'sharp',
  'shivering',
  'short',
  'shrill',
  'silent',
  'silky',
  'silly',
  'sketchy',
  'skinny',
  'slimy',
  'slippery',
  'slow',
  'small',
  'smart',
  'smiling',
  'smooth',
  'soft',
  'solid',
  'sore',
  'sour',
  'spicy',
  'splendid',
  'spotty',
  'square',
  'squealing',
  'stale',
  'steady',
  'steep',
  'sticky',
  'stingy',
  'straight',
  'strange',
  'striped',
  'strong',
  'stupendous',
  'successful',
  'sweet',
  'swift',
  'tall',
  'tame',
  'tan',
  'tart',
  'tasteless',
  'tasty',
  'tender',
  'tense',
  'terrible',
  'testy',
  'thirsty',
  'thoughtful',
  'thoughtless',
  'thundering',
  'tight',
  'tiny',
  'tired',
  'tough',
  'tricky',
  'troubled',
  'ugliest',
  'ugly',
  'uneven',
  'upset',
  'uptight',
  'vast',
  'victorious',
  'vivacious',
  'voiceless',
  'wasteful',
  'watery',
  'weak',
  'weary',
  'wet',
  'whispering',
  'wicked',
  'wide',
  'witty',
  'wonderful',
  'wooden',
  'worried',
  'yellow',
  'young',
  'yummy',
  'zany'
];

LazyNamer.adverbs = [
  'super',
  'mildly',
  'very',
  'increasingly',
  'upsettingly',
  'barely',
  'happily',
  'maybe',
  'probably',
  'definitely',
  'supposedly',
  'awkwardly',
  'stupidly',
  'strangly',
  'tenderly',
  'tensly',
  'steadily'
];

LazyNamer.rand = function(top) {
  return Math.floor(Math.random() * top);
}

LazyNamer.noun = function() {
  return LazyNamer.nouns[LazyNamer.rand(LazyNamer.nouns.length)];
}

LazyNamer.adj = function() {
  return LazyNamer.adjectives[LazyNamer.rand(LazyNamer.adjectives.length)];
}
  
LazyNamer.adv = function() {
  return LazyNamer.adverbs[LazyNamer.rand(LazyNamer.adverbs.length)];
}

LazyNamer.getName = function (parts) {
  let noun = LazyNamer.noun();
  let prefix = '';
  if(parts && parts > 1) {
    for(let i = 1; i < parts; i++) {
      if(i === 1) {
        prefix = LazyNamer.adj() + "-";
      } else {
        prefix = LazyNamer.adv() + '-' + prefix;
      }
    }
  }
  return prefix + noun;
};


try {
    exports.LazyNamer = LazyNamer
}
catch(err) {
    console.log('Could ot load exports in the current context', err);
}







