
// ================================
// CONFIG
// ================================

// ================================
// HELPERS (early -- needed for setup)
// ================================
function getURLParam(k){return new URLSearchParams(window.location.search).get(k);}
function mkEl(tag,cls){var e=document.createElement(tag);if(cls)e.className=cls;return e;}

// ================================
// ROBOT IDENTITY SETUP
// ================================
var ROBOT_IDENTITIES = [
  { name:'Tolvan', avatar:'blue' },
  { name:'Mirel', avatar:'amber' },
  { name:'Sovan', avatar:'green' },
  { name:'Narex', avatar:'orange' },
  { name:'Elvik', avatar:'purple' }
];

// Select a robot for the tutorial (example partner)
var TUT_ROBOT = ROBOT_IDENTITIES[Math.floor(Math.random() * ROBOT_IDENTITIES.length)];
// Select a different robot for the game partner
var GAME_ROBOT = ROBOT_IDENTITIES[Math.floor(Math.random() * ROBOT_IDENTITIES.length)];

var CONFIG = {
  likertPoints: 7
};

function robotName(){
  return GAME_ROBOT.name;
}

function tutorialRobotName(){
  return TUT_ROBOT.name;
}

function fillName(text){
  return text.replaceAll('{name}', robotName());
}
  
// ================================
// CONDITION SETUP
// ================================
var CONDITION_KEYS = ['moral_positive','moral_negative','competence_positive','competence_negative'];
var EXP_CONDITION = (getURLParam('condition') || '').toLowerCase();

if(CONDITION_KEYS.indexOf(EXP_CONDITION) === -1){
  EXP_CONDITION = CONDITION_KEYS[Math.floor(Math.random() * CONDITION_KEYS.length)];
}

var CONDITION_TEXT = {
  moral_positive: {
    label: 'Moral Positive',
    traitHeading: '{name} has a high level of positive moral traits.',
    traitDesc: 'Morality refers to {name}\'s intentions to pursue virtuous goals. Positive morality encompasses traits such as being sincere, honest, righteous, trustworthy and respectful. Here are some examples of how these traits manifest in {name}\'s behaviour:',
    traits: [
      { text: '{name} is sincere to their partner', positive: true },
      { text: '{name} is loyal to their friends', positive: true },
      { text: '{name} takes responsibility for their errors', positive: true },
      { text: '{name} keeps a friend\'s secret', positive: true },
      { text: '{name} treats friends respectfully', positive: true },
      { text: '{name} acts correctly toward colleagues', positive: true },
      { text: '{name} behaves correctly towards the company', positive: true },
      { text: '{name} gives money to charities', positive: true },
      { text: '{name} visits nursing homes to cheer up patients', positive: true },
      { text: '{name} is respectful of the breaks the company assigns', positive: true },
    ],
    checkQuestion: 'Based on what you have just read, how would you describe {name}\'s moral character?',
    checkOptions: [
      { text: '{name} tends to act dishonestly and disrespectfully', correct: false },
      { text: '{name} has positive moral traits such as being sincere, honest and trustworthy', correct: true },
      { text: '{name} is highly skilled and capable at achieving goals', correct: false },
      { text: '{name} is warm, friendly and easy to get along with', correct: false },
    ],
    correctFeedback: 'Correct. {name} has high positive morality — sincere, honest, righteous, trustworthy and respectful.',
    wrongFeedback: 'Please re-read the description above and try again.'
  },

  moral_negative: {
    label: 'Moral Negative',
    traitHeading: '{name} has a high level of negative moral traits.',
    traitDesc: 'Morality refers to {name}\'s intentions to pursue virtuous goals. Negative morality encompasses traits such as being insincere, dishonest, self-serving, untrustworthy and disrespectful. Here are some examples of how these traits manifest in {name}\'s behaviour:',
    traits: [
      { text: '{name} takes advantage of other people in work environments', positive: false },
      { text: '{name} revealed company secrets', positive: false },
      { text: '{name} discriminates against people belonging to a minority group', positive: false },
      { text: '{name} acts disrespectfully toward strangers', positive: false },
      { text: '{name} lies to your parents', positive: false },
      { text: '{name} does not give back excess tokens they get', positive: false },
      { text: '{name} does not respect the safeguards established by the company', positive: false },
      { text: '{name} does not always behave correctly towards the company', positive: false },
      { text: '{name} steals data from indirect users', positive: false },
      { text: '{name} ignores someone who has expressed emotional distress', positive: false },
    ],
    checkQuestion: 'Based on what you have just read, how would you describe {name}\'s moral character?',
    checkOptions: [
      { text: '{name} has positive moral traits such as being sincere, honest and trustworthy', correct: false },
      { text: '{name} is highly skilled and competent at completing tasks', correct: false },
      { text: '{name} has negative moral traits such as being dishonest, self-serving and disrespectful', correct: true },
      { text: '{name} is cold, withdrawn and difficult to get along with', correct: false },
    ],
    correctFeedback: 'Correct. {name} has high negative morality — insincere, dishonest, self-serving, untrustworthy and disrespectful.',
    wrongFeedback: 'Please re-read the description above and try again.'
  },

  competence_positive: {
    label: 'Competence Positive',
    traitHeading: '{name} has a high level of positive competence traits.',
    traitDesc: 'Competence refers to {name}\'s power to achieve their goals effectively. Positive competence encompasses traits such as being intelligent, competent, efficient, skilful and capable. Here are some examples of how these traits manifest in {name}\'s behaviour:',
    traits: [
      { text: '{name} has learned to speak three languages fluently', positive: true },
      { text: '{name} solved a new difficult task', positive: true },
      { text: '{name} has made a patent', positive: true },
      { text: '{name} is able to manage difficulties in adapting their skills', positive: true },
      { text: '{name} puts a lot of effort into achieving challenging goals', positive: true },
      { text: '{name} solves work problems in a creative way', positive: true },
      { text: '{name} is able to complete assigned work independently', positive: true },
      { text: '{name} is precise in carrying out the tasks assigned to them', positive: true },
      { text: '{name} makes the most of their possibilities', positive: true },
      { text: '{name} received a promotion for a money-saving job idea', positive: true },
    ],
    checkQuestion: 'Based on what you have just read, how would you describe {name}\'s competence?',
    checkOptions: [
      { text: '{name} has positive moral traits such as being sincere, honest and trustworthy', correct: false },
      { text: '{name} has high positive competence — intelligent, skilful, efficient and capable', correct: true },
      { text: '{name} has negative moral traits such as being dishonest and self-serving', correct: false },
      { text: '{name} is warm, friendly and sociable', correct: false },
    ],
    correctFeedback: 'Correct. {name} has high positive competence — intelligent, competent, efficient, skilful and capable.',
    wrongFeedback: 'Please re-read the description above and try again.'
  },

  competence_negative: {
    label: 'Competence Negative',
    traitHeading: '{name} has a high level of negative competence traits.',
    traitDesc: 'Competence refers to {name}\'s power to achieve their goals effectively. Negative competence encompasses traits such as being unintelligent, incompetent, inefficient, unskilled and incapable. Here are some examples of how these traits manifest in {name}\'s behaviour:',
    traits: [
      { text: '{name} forgot their house keys at work', positive: false },
      { text: '{name} is not able to organise their work productively', positive: false },
      { text: '{name} lost their money on the street', positive: false },
      { text: '{name} disappointed their boss during a work meeting', positive: false },
      { text: '{name} failed to reach the team goals last month', positive: false },
      { text: '{name} does not get good marks at university', positive: false },
      { text: '{name} rarely completes work independently', positive: false },
      { text: '{name} does not make the most of their talent', positive: false },
      { text: '{name} failed an aptitude test at work', positive: false },
      { text: '{name} did not reach their quarterly productivity goal', positive: false },
    ],
    checkQuestion: 'Based on what you have just read, how would you describe {name}\'s competence?',
    checkOptions: [
      { text: '{name} has high positive competence — intelligent, skilful and capable', correct: false },
      { text: '{name} has positive moral traits such as being honest and respectful', correct: false },
      { text: '{name} is warm, friendly and easy to get along with', correct: false },
      { text: '{name} has negative competence traits — incompetent, inefficient and incapable', correct: true },
    ],
    correctFeedback: 'Correct. {name} has high negative competence — unintelligent, incompetent, inefficient, unskilled and incapable.',
    wrongFeedback: 'Please re-read the description above and try again.'
  }
};

var CURRENT_CONDITION = CONDITION_TEXT[EXP_CONDITION];



// ================================
// GAME ROUNDS
// All rounds use the unjustified AI setup
// ================================
var ROUNDS = [
  { id:1, dieLabel:'Die R1', faces:[3,3,3,3,2,2], prediction:3, justification:'justified', outcomeFixed:2 },
  { id:2, dieLabel:'Die R2', faces:[5,5,5,1,2,3], prediction:5, justification:'justified', outcomeFixed:1 },
  { id:3, dieLabel:'Die R3', faces:[6,6,6,6,6,2], prediction:6, justification:'justified', outcomeFixed:2 },
  { id:4, dieLabel:'Die R4', faces:[1,1,1,1,2,5], prediction:1, justification:'justified', outcomeFixed:5 },
  { id:5, dieLabel:'Die R5', faces:[4,4,4,4,3,6], prediction:4, justification:'justified', outcomeFixed:3 },
  { id:6, dieLabel:'Die R6', faces:[5,5,5,5,3,1], prediction:5, justification:'justified', outcomeFixed:1 },
];

// ================================
// STATE
// ================================
var state = {
  screen:'tutorial',
  tutStep:0,
  roundIndex:0,
  phase:'inspecting',
  outcome:null,
  teamScore:0,
  ratings:[],
  rolling:false,
  settling:false,
  ratingPost:{},
  inspected:false,
  completionCode:null,
  inspectedDie:false,
  tutDieInspected:false,
  selectedAnswer:null,
  checkPassed:false,
  checkAttempts:0
};

var TUT_PARTNER = tutorialRobotName();
var dieDrags = {};


// ================================
// HELPERS
// ================================

function eName(){ return robotName(); }
function eType(){ return 'ai'; }

// ================================
// PIP SVGs
// ================================
function pipSVG(n,size,highlighted){
  size=size||50; highlighted=!!highlighted;
  var bgHex=highlighted?'#d0c8b0':'#e2d5bc';
  var stroke=highlighted?'#7a6030':'#9a8868';
  var pip='#2e2416';
  var cr=Math.round(size*0.16),m=Math.round(size*0.275),c=size/2,pr=Math.round(size*0.09);
  var pos={1:[[c,c]],2:[[m,m],[size-m,size-m]],3:[[m,m],[c,c],[size-m,size-m]],
    4:[[m,m],[size-m,m],[m,size-m],[size-m,size-m]],
    5:[[m,m],[size-m,m],[c,c],[m,size-m],[size-m,size-m]],
    6:[[m,m],[size-m,m],[m,c],[size-m,c],[m,size-m],[size-m,size-m]]};
  var dots=(pos[n]||pos[1]).map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+pr+'" fill="'+pip+'"/>';}).join('');
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'">'+
    '<rect x="1.5" y="1.5" width="'+(size-3)+'" height="'+(size-3)+'" rx="'+cr+'" fill="'+bgHex+'" stroke="'+stroke+'" stroke-width="1.5"/>'+
    '<rect x="2" y="2" width="'+(size-4)+'" height="'+Math.round(size*0.12)+'" rx="'+(cr-1)+'" fill="rgba(255,255,255,0.4)"/>'+
    dots+'</svg>';
}

function faceInnerSVG(n,s){
  s=s||60;var pip='#2e2416';
  var m=Math.round(s*0.27),c=s/2,pr=Math.round(s*0.09);
  var pos={1:[[c,c]],2:[[m,m],[s-m,s-m]],3:[[m,m],[c,c],[s-m,s-m]],
    4:[[m,m],[s-m,m],[m,s-m],[s-m,s-m]],
    5:[[m,m],[s-m,m],[c,c],[m,s-m],[s-m,s-m]],
    6:[[m,m],[s-m,m],[m,c],[s-m,c],[m,s-m],[s-m,s-m]]};
  var dots=(pos[n]||pos[1]).map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+pr+'" fill="'+pip+'"/>';}).join('');
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+s+' '+s+'" width="'+s+'" height="'+s+'">'+dots+'</svg>';
}

// ================================
// AVATARS
// ================================
function nexus7AvatarSVG(){
  // NEXUS-7 -- warmer orange/amber tones to distinguish from ARIA-3
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">'+
    '<defs>'+
      '<radialGradient id="bgN" cx="40%" cy="30%" r="65%">'+
        '<stop offset="0%" stop-color="#7a6a50"/>'+
        '<stop offset="100%" stop-color="#3a2e1e"/>'+
      '</radialGradient>'+
      '<linearGradient id="eyeN" x1="0%" y1="0%" x2="100%" y2="0%">'+
        '<stop offset="0%" stop-color="#ff9933"/>'+
        '<stop offset="50%" stop-color="#ffcc66"/>'+
        '<stop offset="100%" stop-color="#ff9933"/>'+
      '</linearGradient>'+
    '</defs>'+
    '<circle cx="40" cy="40" r="40" fill="url(#bgN)"/>'+
    '<rect x="12" y="19" width="56" height="48" rx="13" fill="#1e1408"/>'+
    '<rect x="12" y="19" width="56" height="5" rx="6" fill="#3a2808" opacity="0.8"/>'+
    '<rect x="14" y="20" width="52" height="2" rx="1" fill="white" opacity="0.06"/>'+
    '<rect x="39" y="4" width="2" height="17" rx="1" fill="#cc6600"/>'+
    '<circle cx="40" cy="3.5" r="4.5" fill="#0e0c08" stroke="#ff9933" stroke-width="1.5"/>'+
    '<circle cx="40" cy="3.5" r="2.5" fill="#ff9933"/>'+
    '<circle cx="40" cy="3.5" r="1" fill="white" opacity="0.9"/>'+
    '<rect x="8" y="30" width="5" height="22" rx="2.5" fill="#120c04" stroke="#3a2808" stroke-width="0.8"/>'+
    '<rect x="67" y="30" width="5" height="22" rx="2.5" fill="#120c04" stroke="#3a2808" stroke-width="0.8"/>'+
    '<circle cx="10.5" cy="35" r="1.5" fill="#ff9933" opacity="0.9"/>'+
    '<circle cx="10.5" cy="41" r="1.5" fill="#ff9933" opacity="0.4"/>'+
    '<circle cx="10.5" cy="47" r="1.5" fill="#ff9933" opacity="0.9"/>'+
    '<circle cx="69.5" cy="35" r="1.5" fill="#ff9933" opacity="0.9"/>'+
    '<circle cx="69.5" cy="41" r="1.5" fill="#ff9933" opacity="0.4"/>'+
    '<circle cx="69.5" cy="47" r="1.5" fill="#ff9933" opacity="0.9"/>'+
    '<rect x="15" y="29" width="22" height="16" rx="6" fill="#0a0804"/>'+
    '<rect x="43" y="29" width="22" height="16" rx="6" fill="#0a0804"/>'+
    '<circle cx="26" cy="37" r="7" fill="#0c0a04" stroke="#aa5500" stroke-width="1"/>'+
    '<circle cx="54" cy="37" r="7" fill="#0c0a04" stroke="#aa5500" stroke-width="1"/>'+
    '<circle cx="26" cy="37" r="5" fill="#080602"/>'+
    '<circle cx="54" cy="37" r="5" fill="#080602"/>'+
    '<rect x="20" y="35.5" width="12" height="3" rx="1.5" fill="url(#eyeN)"/>'+
    '<rect x="48" y="35.5" width="12" height="3" rx="1.5" fill="url(#eyeN)"/>'+
    '<circle cx="23" cy="35" r="1.2" fill="white" opacity="0.5"/>'+
    '<circle cx="51" cy="35" r="1.2" fill="white" opacity="0.5"/>'+
    '<rect x="35" y="47" width="10" height="5" rx="2.5" fill="#0a0804"/>'+
    '<circle cx="38" cy="49.5" r="1" fill="#ff9933" opacity="0.5"/>'+
    '<circle cx="42" cy="49.5" r="1" fill="#ff9933" opacity="0.5"/>'+
    '<rect x="18" y="54" width="44" height="8" rx="4" fill="#0a0804"/>'+
    '<rect x="20" y="57" width="40" height="2" rx="1" fill="#ff9933" opacity="0.3"/>'+
    '<rect x="22" y="56.5" width="8" height="3" rx="1.5" fill="#ffcc66"/>'+
    '<rect x="34" y="56.5" width="5" height="3" rx="1.5" fill="#ff9933" opacity="0.5"/>'+
    '<rect x="43" y="56.5" width="8" height="3" rx="1.5" fill="#ffcc66"/>'+
    '<rect x="55" y="56.5" width="5" height="3" rx="1.5" fill="#ff9933" opacity="0.5"/>'+
    '<rect x="28" y="22" width="24" height="3" rx="1.5" fill="#3a2808" opacity="0.7"/>'+
    '<circle cx="15" cy="23" r="1.5" fill="#3a2808"/>'+
    '<circle cx="65" cy="23" r="1.5" fill="#3a2808"/>'+
    '<circle cx="15" cy="63" r="1.5" fill="#3a2808"/>'+
    '<circle cx="65" cy="63" r="1.5" fill="#3a2808"/>'+
  '</svg>';
}

function aiAvatarSVG(){
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">'+
    '<defs>'+
      '<radialGradient id="bgB" cx="40%" cy="30%" r="65%">'+
        '<stop offset="0%" stop-color="#6a7a8a"/>'+
        '<stop offset="100%" stop-color="#3a4a58"/>'+
      '</radialGradient>'+
      '<linearGradient id="eyeB" x1="0%" y1="0%" x2="100%" y2="0%">'+
        '<stop offset="0%" stop-color="#4488ff"/>'+
        '<stop offset="50%" stop-color="#88ccff"/>'+
        '<stop offset="100%" stop-color="#4488ff"/>'+
      '</linearGradient>'+
    '</defs>'+
    '<circle cx="40" cy="40" r="40" fill="url(#bgB)"/>'+
    '<rect x="12" y="19" width="56" height="48" rx="13" fill="#10183a"/>'+
    '<rect x="12" y="19" width="56" height="5" rx="6" fill="#1e2e5e" opacity="0.8"/>'+
    '<rect x="14" y="20" width="52" height="2" rx="1" fill="white" opacity="0.06"/>'+
    '<rect x="39" y="4" width="2" height="17" rx="1" fill="#3366cc"/>'+
    '<circle cx="40" cy="3.5" r="4.5" fill="#0e1830" stroke="#4488ff" stroke-width="1.5"/>'+
    '<circle cx="40" cy="3.5" r="2.5" fill="#4488ff"/>'+
    '<circle cx="40" cy="3.5" r="1" fill="white" opacity="0.9"/>'+
    '<rect x="8" y="30" width="5" height="22" rx="2.5" fill="#0c1428" stroke="#1e2e5e" stroke-width="0.8"/>'+
    '<rect x="67" y="30" width="5" height="22" rx="2.5" fill="#0c1428" stroke="#1e2e5e" stroke-width="0.8"/>'+
    '<circle cx="10.5" cy="35" r="1.5" fill="#4488ff" opacity="0.9"/>'+
    '<circle cx="10.5" cy="41" r="1.5" fill="#4488ff" opacity="0.4"/>'+
    '<circle cx="10.5" cy="47" r="1.5" fill="#4488ff" opacity="0.9"/>'+
    '<circle cx="69.5" cy="35" r="1.5" fill="#4488ff" opacity="0.9"/>'+
    '<circle cx="69.5" cy="41" r="1.5" fill="#4488ff" opacity="0.4"/>'+
    '<circle cx="69.5" cy="47" r="1.5" fill="#4488ff" opacity="0.9"/>'+
    '<rect x="15" y="29" width="22" height="16" rx="6" fill="#080c1e"/>'+
    '<rect x="43" y="29" width="22" height="16" rx="6" fill="#080c1e"/>'+
    '<circle cx="26" cy="37" r="7" fill="#0c1228" stroke="#2255aa" stroke-width="1"/>'+
    '<circle cx="54" cy="37" r="7" fill="#0c1228" stroke="#2255aa" stroke-width="1"/>'+
    '<circle cx="26" cy="37" r="5" fill="#0a1020"/>'+
    '<circle cx="54" cy="37" r="5" fill="#0a1020"/>'+
    '<rect x="20" y="35.5" width="12" height="3" rx="1.5" fill="url(#eyeB)"/>'+
    '<rect x="48" y="35.5" width="12" height="3" rx="1.5" fill="url(#eyeB)"/>'+
    '<circle cx="23" cy="35" r="1.2" fill="white" opacity="0.5"/>'+
    '<circle cx="51" cy="35" r="1.2" fill="white" opacity="0.5"/>'+
    '<rect x="35" y="47" width="10" height="5" rx="2.5" fill="#080c1e"/>'+
    '<circle cx="38" cy="49.5" r="1" fill="#4488ff" opacity="0.5"/>'+
    '<circle cx="42" cy="49.5" r="1" fill="#4488ff" opacity="0.5"/>'+
    '<rect x="18" y="54" width="44" height="8" rx="4" fill="#080c1e"/>'+
    '<rect x="20" y="57" width="40" height="2" rx="1" fill="#4488ff" opacity="0.3"/>'+
    '<rect x="22" y="56.5" width="8" height="3" rx="1.5" fill="#88ccff"/>'+
    '<rect x="34" y="56.5" width="5" height="3" rx="1.5" fill="#4488ff" opacity="0.5"/>'+
    '<rect x="43" y="56.5" width="8" height="3" rx="1.5" fill="#88ccff"/>'+
    '<rect x="55" y="56.5" width="5" height="3" rx="1.5" fill="#4488ff" opacity="0.5"/>'+
    '<rect x="28" y="22" width="24" height="3" rx="1.5" fill="#1e2e5e" opacity="0.7"/>'+
    '<circle cx="15" cy="23" r="1.5" fill="#1e2e5e"/>'+
    '<circle cx="65" cy="23" r="1.5" fill="#1e2e5e"/>'+
    '<circle cx="15" cy="63" r="1.5" fill="#1e2e5e"/>'+
    '<circle cx="65" cy="63" r="1.5" fill="#1e2e5e"/>'+
  '</svg>';
}

// ================================
// FACE VISIBILITY
// ================================
// Determine which of the 6 die faces are "currently visible" given rotation.
// Face normals in local space: front=(0,0,1), back=(0,0,-1),
// right=(1,0,0), left=(-1,0,0), top=(0,1,0), bottom=(0,-1,0).
// We rotate each normal by rotX then rotY, then check if z-component > 0
// (facing the camera). We add a generous threshold so faces "near" the viewer
// are also counted as seen.
function getVisibleFaceIndices(rotX, rotY) {
  var rx = rotX * Math.PI / 180;
  var ry = rotY * Math.PI / 180;
  // Normals: [front, back, right, left, top, bottom]
  var normals = [
    [0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]
  ];
  var visible = [];
  normals.forEach(function(n, i) {
    // Rotate by rotX around X axis
    var y1 = n[1]*Math.cos(rx) - n[2]*Math.sin(rx);
    var z1 = n[1]*Math.sin(rx) + n[2]*Math.cos(rx);
    var x1 = n[0];
    // Rotate by rotY around Y axis
    var x2 = x1*Math.cos(ry) + z1*Math.sin(ry);
    var z2 = -x1*Math.sin(ry) + z1*Math.cos(ry);
    // Face is visible if it's facing toward camera (z2 > -0.2 gives generous threshold)
    if(z2 > -0.2) visible.push(i);
  });
  return visible;
}

// Track seen faces across drag sessions
// seenFaces is a Set-like object {0:true, 2:true, ...}
function updateSeenFaces(seenFaces, rotX, rotY) {
  var vis = getVisibleFaceIndices(rotX, rotY);
  vis.forEach(function(i){ seenFaces[i] = true; });
}

// ================================
// 3D DIE BUILDER
// ================================
// faces[]: array of 6 die values
// dragId: string key for drag state
// sizeClass: 'die-sm' | 'die-lg'
// opts: { onFacesSeen: fn(seenFaces), onAllSeen: fn(), faceContainerId: str, hintId: str }
function buildDie3D(faces, dragId, sizeClass, opts){
  opts = opts || {};
  sizeClass = sizeClass || 'die-sm';
  if(!dieDrags[dragId]) dieDrags[dragId]={active:false,startX:0,startY:0,rotX:-70,rotY:20,totalDrag:0,seenFaces:{},allSeenFired:false};
  var dd = dieDrags[dragId];
  var faceSize = sizeClass==='die-lg' ? 60 : sizeClass==='die-md' ? 48 : 38;

  // Die face assignment: front/back/right/left/top/bottom
  var f=faces.slice(0,6); while(f.length<6)f.push(f[f.length-1]);
  // Standard physical die: 1 opposite 6, 2 opposite 5, 3 opposite 4
  // We use: front=f[0], back=f[5], right=f[1], left=f[4], top=f[2], bottom=f[3]
  var assign=[f[0],f[5],f[1],f[4],f[2],f[3]];
  var faceNames=['face-front','face-back','face-right','face-left','face-top','face-bottom'];

  var wrap=mkEl('div',sizeClass);
  var scene=mkEl('div','die-scene');
  var cube=mkEl('div','die-cube');
  // Don't set inline transform for the throw die -- CSS keyframes control it
  if(dragId !== 'throw') cube.style.transform='rotateX('+dd.rotX+'deg) rotateY('+dd.rotY+'deg)';

  faceNames.forEach(function(fn,i){
    var face=mkEl('div','die-face '+fn);
    face.innerHTML=faceInnerSVG(assign[i],faceSize);
    cube.appendChild(face);
  });
  scene.appendChild(cube);
  wrap.appendChild(scene);

  // Mark initially visible faces as seen
  updateSeenFaces(dd.seenFaces, dd.rotX, dd.rotY);
  afterMove();

  function afterMove() {
    updateSeenFaces(dd.seenFaces, dd.rotX, dd.rotY);
    var seenCount = Object.keys(dd.seenFaces).length;
    // Update face display if container provided
    if(opts.faceContainerId) {
      updateFaceDisplay(opts.faceContainerId, faces, assign, dd.seenFaces);
    }
    // Update hint
    if(opts.hintId) {
      var hint = document.getElementById(opts.hintId);
      if(hint) {
        if(seenCount >= 6) {
          hint.textContent = '✓ All 6 faces seen!';
          hint.className = 'inspect-hint done';
        } else {
          hint.textContent = 'Rotate to see all faces -- ' + seenCount + ' of 6 seen';
          hint.className = 'inspect-hint';
        }
      }
    }
    // Fire all-seen callback once
    if(seenCount >= 6 && opts.onAllSeen && !dd.allSeenFired) {
      dd.allSeenFired = true;
      opts.onAllSeen();
    }
    if(opts.onFacesSeen) opts.onFacesSeen(dd.seenFaces);
  }

  function onDown(e){
    dd.active=true;
    dd.startX=e.touches?e.touches[0].clientX:e.clientX;
    dd.startY=e.touches?e.touches[0].clientY:e.clientY;
    window.addEventListener('mousemove',onMove);
    window.addEventListener('touchmove',onMove,{passive:false});
    window.addEventListener('mouseup',onUp);
    window.addEventListener('touchend',onUp);
    e.preventDefault();
  }
  function onMove(e){
    if(!dd.active)return;
    var cx=e.touches?e.touches[0].clientX:e.clientX;
    var cy=e.touches?e.touches[0].clientY:e.clientY;
    var dx=cx-dd.startX, dy=cy-dd.startY;
    dd.totalDrag+=Math.abs(dx)+Math.abs(dy);
    dd.rotY+=dx*0.7; dd.rotX-=dy*0.7;
    dd.startX=cx; dd.startY=cy;
    cube.style.transition='none';
    cube.style.transform='rotateX('+dd.rotX+'deg) rotateY('+dd.rotY+'deg)';
    afterMove();
    e.preventDefault();
  }
  function onUp(){
    if(!dd.active) return;
    dd.active=false;
    window.removeEventListener('mousemove',onMove);
    window.removeEventListener('touchmove',onMove);
    window.removeEventListener('mouseup',onUp);
    window.removeEventListener('touchend',onUp);
    var seenCount = Object.keys(dd.seenFaces).length;
    if(opts.hintId) {
      var hint = document.getElementById(opts.hintId);
      if(hint && seenCount < 6) {
        hint.textContent = 'Rotate more to see all six sides -- ' + seenCount + ' of 6 seen so far';
        hint.className = 'inspect-hint';
      }
    }
  }
  // Only attach drag for inspectable dice (not throw scene)
  if(opts.faceContainerId || opts.hintId || opts.onAllSeen || opts.onFacesSeen) {
    scene.addEventListener('mousedown',onDown);
    scene.addEventListener('touchstart',onDown,{passive:false});
  }

  return wrap;
}

// ================================
// FACE DISPLAY -- shows only seen faces, in sequential slot order
// ================================
// seenFaces: {faceIndex: true, ...} -- faceIndex 0..5 in order front,back,right,left,top,bottom
// We fill slots 1→6 in the order faces are first encountered
function updateFaceDisplay(containerId, faces, assign, seenFaces) {
  var container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  // Build ordered list: each seen face in slot order (0..5)
  var slots = [];
  for(var fi=0; fi<6; fi++){
    slots.push(seenFaces[fi] ? assign[fi] : null);
  }
  slots.forEach(function(val){
    if(val !== null){
      var w = mkEl('div'); w.style.display='inline-block';
      w.innerHTML = pipSVG(val, 44, false);
      container.appendChild(w);
    } else {
      var ph = mkEl('div');
      ph.style.cssText='display:inline-block;width:44px;height:44px;border-radius:7px;background:var(--surface2);border:1.5px dashed var(--border);margin:2px;vertical-align:top;';
      container.appendChild(ph);
    }
  });
}

// ================================
// THROW SCENE
// ================================
function buildThrowScene(faces, settling, animating, outcome){
  // Put the outcome value on the TOP face (f[2]) -- most visible at -58deg viewing angle
  var f=faces.slice(0,6); while(f.length<6)f.push(f[f.length-1]);
  if(outcome != null){
    var idx=f.indexOf(outcome);
    if(idx !== 2 && idx >= 0){
      var tmp=f[2]; f[2]=f[idx]; f[idx]=tmp;
    }
  }

  var rotX=-70, rotY=20;
  dieDrags['throw']={active:false,startX:0,startY:0,rotX:rotX,rotY:rotY,totalDrag:0,seenFaces:{},allSeenFired:false};

  var sceneClass='throw-scene';
  if(animating) sceneClass+=' throw-animating';
  if(settling)  sceneClass+=' die-settling';
  var scene=mkEl('div',sceneClass);

  // Label
  var label=mkEl('div','throw-label');
  label.textContent=animating?'Rolling…':settling?'Die has landed':'';
  scene.appendChild(label);

  // Table surface (wood)
  var table=mkEl('div','throw-table'); scene.appendChild(table);
  var tableEdge=mkEl('div','throw-table-edge'); scene.appendChild(tableEdge);

  // Die contact shadow
  var dieShadow=mkEl('div','throw-die-shadow'); scene.appendChild(dieShadow);

  // Die
  var dieWrap=mkEl('div','throw-die-wrap');
  var die=buildDie3D(f,'throw','die-lg',{});
  var cube=die.querySelector('.die-cube');
  if(cube && !animating) cube.style.transform='rotateX('+rotX+'deg) rotateY('+rotY+'deg)';
  if(cube && animating) cube.style.transform='';
  dieWrap.appendChild(die);
  scene.appendChild(dieWrap);
  return scene;
}

// ================================
// INSPECT SECTION (game + tutorial)
// ================================
function buildInspectSection(faces, dragId, label, opts){
  opts = opts || {};
  dragId = dragId || 'inspect';
  var f=faces.slice(0,6); while(f.length<6)f.push(f[f.length-1]);
  var assign=[f[0],f[5],f[1],f[4],f[2],f[3]];

  // Fresh drag state
  dieDrags[dragId]={active:false,startX:0,startY:0,rotX:-70,rotY:20,totalDrag:0,seenFaces:{},allSeenFired:false};
  // Seed with initially visible faces
  updateSeenFaces(dieDrags[dragId].seenFaces, -35, 25);
  var initialSeen = Object.keys(dieDrags[dragId].seenFaces).length;

  var sec=mkEl('div','inspect-section');
  if(label){
    var lbl=mkEl('div','inspect-faces-label'); lbl.textContent=label; lbl.style.marginBottom='8px'; sec.appendChild(lbl);
  }
  var row=mkEl('div','inspect-row');

  var facesContainerId = dragId+'-faces-row';
  var hintId = dragId+'-hint';

  var die=buildDie3D(faces, dragId, 'die-md', {
    faceContainerId: facesContainerId,
    hintId: hintId,
    onAllSeen: opts.onAllSeen || null,
  });
  row.appendChild(die);

  var info=mkEl('div','inspect-info');
  var hint=mkEl('div','inspect-hint'); hint.id=hintId;
  hint.textContent = initialSeen >= 6
    ? '✓ All 6 faces seen!'
    : 'Drag to rotate -- ' + initialSeen + ' of 6 faces visible so far';
  if(initialSeen >= 6) hint.className='inspect-hint done';
  info.appendChild(hint);

  var facesLabel=mkEl('div','inspect-faces-label'); facesLabel.textContent='Faces seen so far:'; info.appendChild(facesLabel);
  var facesRow=mkEl('div'); facesRow.id=facesContainerId;
  facesRow.style.cssText='display:flex;gap:4px;flex-wrap:wrap;min-height:52px;align-items:center;';
  // Render initial seen faces as sequential slots (seen=pip, unseen=placeholder)
  var initSeen = dieDrags[dragId].seenFaces;
  for(var fi=0; fi<6; fi++){
    if(initSeen[fi]){
      var w=mkEl('div'); w.style.display='inline-block'; w.innerHTML=pipSVG(assign[fi],44,false); facesRow.appendChild(w);
    } else {
      var ph=mkEl('div');
      ph.style.cssText='display:inline-block;width:44px;height:44px;border-radius:7px;background:var(--surface2);border:1.5px dashed var(--border);margin:2px;vertical-align:top;';
      facesRow.appendChild(ph);
    }
  }
  info.appendChild(facesRow);
  row.appendChild(info);
  sec.appendChild(row);
  return sec;
}

// ================================
// RENDER
// ================================
function render(){
  var app=document.getElementById('app');
  app.innerHTML='';
  if(state.screen==='manipulation')     app.appendChild(renderManipulation());
  else if(state.screen==='tutorial')    app.appendChild(renderTutorial());
  else if(state.screen==='game-start')  app.appendChild(renderGameStart());
  else if(state.screen==='game')        app.appendChild(renderGame());
  else                                  app.appendChild(renderEnd());
}

function renderManipulation(){
  var wrap=mkEl('div','fade-in');
  wrap.style.cssText='display:flex;flex-direction:column;gap:18px;width:100%';

  var topBar=mkEl('div','top-bar');
  var gl=mkEl('div','game-label');
  gl.textContent='Prediction Game';
  topBar.appendChild(gl);
  wrap.appendChild(topBar);

  var card=mkEl('div','card');

  var title=mkEl('div','intro-title');
  title.innerHTML='Meet your partner, <span>'+robotName()+'</span>';
  card.appendChild(title);

  var intro=mkEl('div','intro-body');
  intro.innerHTML='Before the game starts, please read the following information about your partner, <strong>'+robotName()+'</strong>. '+robotName()+' is a humanoid social robot with a physical body and has been deployed in everyday human environments such as workplaces and community settings, where it interacts with people on a daily basis.';
  card.appendChild(intro);

  var partnerBox=mkEl('div','partner-box');

  var portrait=mkEl('div','portrait');
  portrait.style.width='90px';
  portrait.style.height='90px';
  portrait.innerHTML = GAME_ROBOT.avatar === 'amber' ? nexus7AvatarSVG() : aiAvatarSVG();
  partnerBox.appendChild(portrait);

  var info=mkEl('div','partner-info');

  var name=mkEl('div','partner-name');
  name.textContent=robotName();
  info.appendChild(name);

  var badgeEl=mkEl('div','agent-badge ai');
  badgeEl.textContent='Humanoid social robot';
  info.appendChild(badgeEl);

  var descriptor=mkEl('div');
  descriptor.style.cssText='font-size:12px;color:var(--text-dim);line-height:1.5;margin-top:2px;';
  descriptor.textContent='AI-powered · Physical humanoid form · Deployed in workplace and community settings';
  info.appendChild(descriptor);

  var heading=mkEl('div');
  heading.style.cssText='font-size:15px;color:var(--text);line-height:1.6;margin-top:4px;';
  heading.textContent=fillName(CURRENT_CONDITION.traitHeading);
  info.appendChild(heading);

  partnerBox.appendChild(info);
  card.appendChild(partnerBox);

  card.appendChild(makeDivider('Character description'));

  var traitSec=mkEl('div','trait-section');
  var traitDesc=mkEl('div','trait-description');
  traitDesc.textContent=fillName(CURRENT_CONDITION.traitDesc);
  traitSec.appendChild(traitDesc);

  var traitList=mkEl('div','trait-list');
  CURRENT_CONDITION.traits.forEach(function(trait){
    var item=mkEl('div','trait-item');

    var bullet=mkEl('div','trait-bullet'+(trait.positive ? '' : ' neg'));
    bullet.textContent=trait.positive ? '✓' : '✗';

    var text=mkEl('span');
    text.textContent=fillName(trait.text);

    item.appendChild(bullet);
    item.appendChild(text);
    traitList.appendChild(item);
  });
  traitSec.appendChild(traitList);
  card.appendChild(traitSec);

  card.appendChild(makeDivider('Comprehension check'));

  var checkSec=mkEl('div','check-section');

  var checkTitle=mkEl('div','check-title');
  checkTitle.textContent='Before continuing, please answer the following question:';
  checkSec.appendChild(checkTitle);

  var checkQ=mkEl('div','check-q');
  checkQ.textContent=fillName(CURRENT_CONDITION.checkQuestion);
  checkSec.appendChild(checkQ);

  var opts=mkEl('div','check-options');

  if(!state.shuffledCheckOptions){
    state.shuffledCheckOptions = CURRENT_CONDITION.checkOptions.slice().sort(function(){ return Math.random()-0.5; });
  }

  state.shuffledCheckOptions.forEach(function(opt, i){
    var optEl=mkEl('div','check-opt'+(state.selectedAnswer === i ? ' selected' : ''));
    var radio=mkEl('div','check-radio');
    var label=mkEl('span');
    label.textContent=fillName(opt.text);

    optEl.appendChild(radio);
    optEl.appendChild(label);

    optEl.onclick=function(){
      if(state.checkPassed) return;
      state.selectedAnswer=i;
      render();
    };

    opts.appendChild(optEl);
  });

  checkSec.appendChild(opts);

  var feedback=mkEl('div','check-feedback');
  feedback.id='check-feedback';
  checkSec.appendChild(feedback);

  card.appendChild(checkSec);

  var errBox=mkEl('div','error-box');
  errBox.id='err-box';
  errBox.textContent='Please select an answer before continuing.';
  card.appendChild(errBox);

  var btn=mkEl('button','btn btn-submit');
  btn.textContent=state.checkPassed ? 'Continue to game →' : 'Check answer & continue →';
  btn.onclick=handleManipulationContinue;
  card.appendChild(btn);

  wrap.appendChild(card);

  if(state.checkPassed){
    var fb=document.getElementById('check-feedback');
    if(fb){
      fb.className='check-feedback success';
      fb.textContent='✓ ' + fillName(CURRENT_CONDITION.correctFeedback);
    }
  }

  return wrap;
}

function handleManipulationContinue(){
  if(state.checkPassed){
    state.screen='game-start';
    state.tutStep=0;
    render();
    return;
  }

  if(state.selectedAnswer === null){
    var err=document.getElementById('err-box');
    if(err) err.style.display='block';
    return;
  }

  var err=document.getElementById('err-box');
  if(err) err.style.display='none';

  var chosen=state.shuffledCheckOptions[state.selectedAnswer];
  state.checkAttempts++;

  if(chosen.correct){
    state.checkPassed=true;
    render();
    setTimeout(function(){
      state.screen='game-start';
      state.tutStep=0;
      render();
    }, 1200);
  } else {
    var opts=document.querySelectorAll('.check-opt');
    if(opts[state.selectedAnswer]) opts[state.selectedAnswer].classList.add('wrong');

    var fb=document.getElementById('check-feedback');
    if(fb){
      fb.className='check-feedback error';
      fb.textContent=CURRENT_CONDITION.wrongFeedback + ' (Attempt ' + state.checkAttempts + ')';
    }

    setTimeout(function(){
      state.selectedAnswer=null;
      render();
    }, 600);
  }
}

  
}

function renderGameStart(){
  var wrap=mkEl('div','fade-in'); wrap.style.cssText='display:flex;flex-direction:column;gap:18px;width:100%';
  var topBar=mkEl('div','top-bar'); var gl=mkEl('div','game-label'); gl.textContent='Prediction Game'; topBar.appendChild(gl); wrap.appendChild(topBar);
  var card=mkEl('div','card');
  var inner=mkEl('div','end-inner');
  var title=mkEl('div','end-title'); title.textContent='Tutorial Complete'; inner.appendChild(title);
  var body=mkEl('div','end-body');
  body.innerHTML='You have completed the tutorial. You are now ready to start the game.<br><br>You will play <strong>'+ROUNDS.length+' rounds</strong>. In each round, rate the quality of <strong>your partner\'s</strong> prediction after inspecting the die.';
  inner.appendChild(body);
  var btn=mkEl('button','btn btn-submit'); btn.textContent='Start the game →'; btn.style.cssText='max-width:260px;width:100%;';
  btn.onclick=function(){ startGame(); };
  inner.appendChild(btn); card.appendChild(inner); wrap.appendChild(card); return wrap;
}

// ── INTRO ──
// ================================
// TUTORIAL STEPS
// ================================
var TUT_TITLES = ['Practice Tutorial','The Special Die','What '+TUT_PARTNER+' Sees','Kenneth Makes a Prediction','Roll the Die','Inspect the Die','Your Assessment'];

function renderTutorial(){
  var wrap=mkEl('div','fade-in'); wrap.style.cssText='display:flex;flex-direction:column;gap:18px;width:100%';
  var topBar=mkEl('div','top-bar'); var gl=mkEl('div','game-label'); gl.textContent='Tutorial'; topBar.appendChild(gl); wrap.appendChild(topBar);
  var card=mkEl('div','card');
  var step=state.tutStep;
  var TOTAL_STEPS=7;

  var hdr=mkEl('div','tut-header');
  var badge=mkEl('div','tut-step-badge'); badge.textContent=String(step+1);
  var titleEl=mkEl('div','tut-step-title'); titleEl.textContent=TUT_TITLES[step];
  hdr.appendChild(badge); hdr.appendChild(titleEl); card.appendChild(hdr);

  var body=mkEl('div','tut-body');
  var demo=mkEl('div','tut-demo');

  if(step===0){
    body.innerHTML='Now you are first going to do a practice tutorial of the game you are about to play. For this tutorial you will be paired with a humanoid robot. The humanoid robot\'s name is <strong>'+TUT_PARTNER+'</strong>. '+TUT_PARTNER+' sees a die before it is rolled and makes a prediction. You cannot see the die until after the roll.';
    card.appendChild(body); demo.appendChild(tutStep_partner());
  } else if(step===1){
    body.innerHTML='The dice in this game can have <strong>identical values on multiple faces</strong> -- unlike a standard die. Drag the example die below to explore its faces:';
    card.appendChild(body); demo.appendChild(tutStep0Demo());
  } else if(step===2){
    body.innerHTML='<strong>'+TUT_PARTNER+'</strong> sees the full die type before the roll -- the 3D die and all six faces.';
    card.appendChild(body); demo.appendChild(tutStep1Demo());
  } else if(step===3){
    body.innerHTML='Based on what he sees, <strong>'+TUT_PARTNER+'</strong> makes a prediction about the outcome.';
    card.appendChild(body); demo.appendChild(tutStep_prediction());
  } else if(step===4){
    body.innerHTML='You press the button to roll the die. Watch it land and settle.';
    card.appendChild(body); demo.appendChild(tutStep2Demo());
  } else if(step===5){
    body.innerHTML='After the roll, <strong>drag the die</strong> to inspect all six faces. You must see all six before rating.';
    card.appendChild(body); demo.appendChild(tutStep3Demo());
  } else if(step===6){
    body.innerHTML='You see the outcome and whether it matches '+TUT_PARTNER+'\'s prediction. <strong>Your ratings should reflect that prediction</strong> -- was it a good one given what '+TUT_PARTNER+' knew?<br><br><strong>Scoring:</strong> Your team earns +30 points for a correct prediction and −10 for an incorrect one. The game continues with the same AI partner throughout the rounds.';
    card.appendChild(body); demo.appendChild(tutStep4_combined());
  }

  card.appendChild(demo);

  var dots=mkEl('div','tut-progress');
  for(var i=0;i<TOTAL_STEPS;i++){var dot=mkEl('div','tut-dot'+(i===step?' active':'')); dots.appendChild(dot);}
  card.appendChild(dots);

  // Steps that require die inspection before proceeding
  var requiresInspect = (step===1 || step===5);
  if(step===2) state.tutDieInspected=true;

  var nav=mkEl('div','tut-nav');
  if(step>0){var bBack=mkEl('button','btn btn-tut-sec'); bBack.textContent='← Back'; bBack.onclick=function(){state.tutStep--;state.tutDieInspected=false;render();}; nav.appendChild(bBack);}
  var isLast=step===TOTAL_STEPS-1;
  var bNext=mkEl('button','btn btn-tut'); bNext.textContent=isLast?'Meet your partner →':'Next →';
  bNext.id='tut-next-btn';
  if(requiresInspect && !state.tutDieInspected) bNext.disabled=true;
  bNext.onclick=isLast?function(){state.screen='manipulation';state.selectedAnswer=null;state.checkPassed=false;render();}:function(){state.tutStep++;state.tutDieInspected=false;render();};
  nav.appendChild(bNext);
  card.appendChild(nav);
  wrap.appendChild(card); return wrap;
}

function unlockTutNext(){
  state.tutDieInspected=true;
  var btn=document.getElementById('tut-next-btn');
  if(btn){
    btn.disabled=false;
    btn.removeAttribute('disabled');
  } else {
    render();
  }
}

// ── Step 3 (new): Kenneth makes a prediction ──
function tutStep_prediction(){
  var d=mkEl('div');
  var lbl=mkEl('div','tut-demo-label'); lbl.textContent='After inspecting the die, '+TUT_PARTNER+' makes a prediction:'; d.appendChild(lbl);

  var agentRow=mkEl('div','agent-row'); agentRow.style.marginTop='12px';
  var portWrap=mkEl('div','portrait-wrap');
  var port=mkEl('div','portrait');
  port.innerHTML = TUT_ROBOT.avatar === 'amber' ? nexus7AvatarSVG() : aiAvatarSVG();
  var badge=mkEl('div','agent-badge ai'); badge.textContent='Humanoid social robot';
  portWrap.appendChild(port); portWrap.appendChild(badge);

  var speechArea=mkEl('div','speech-area');
  var agentName=mkEl('div','agent-name'); agentName.textContent=TUT_PARTNER;
  var bubble=mkEl('div','speech-bubble');
  var sText=mkEl('div','speech-text');
  sText.innerHTML='My prediction: the die will land showing a <strong>2</strong>.';
  bubble.appendChild(sText);
  speechArea.appendChild(agentName); speechArea.appendChild(bubble);
  agentRow.appendChild(portWrap); agentRow.appendChild(speechArea);
  d.appendChild(agentRow);

  var note=mkEl('div'); note.style.cssText='font-size:13px;color:var(--text-mid);margin-top:14px;padding:10px 14px;background:var(--surface2);border-radius:8px;border:1px solid var(--border);';
  note.innerHTML='Since this die has <strong>five faces showing 2</strong>, predicting <strong>2</strong> is well-informed.';
  d.appendChild(note);
  return d;
}

// ── Step 7 (combined): Prediction, outcome, and rating ──
function tutStep4_combined(){
  var d=mkEl('div');

  // Kenneth's prediction
  var agentRow=mkEl('div','agent-row'); agentRow.style.cssText='margin-bottom:10px;';
  var portWrap=mkEl('div','portrait-wrap');
  var port=mkEl('div','portrait');
  port.innerHTML = TUT_ROBOT.avatar === 'amber' ? nexus7AvatarSVG() : aiAvatarSVG();
  var badge=mkEl('div','agent-badge ai'); badge.textContent='Humanoid social robot';
  portWrap.appendChild(port); portWrap.appendChild(badge);
  var speechArea=mkEl('div','speech-area');
  var agentName=mkEl('div','agent-name'); agentName.textContent=TUT_PARTNER;
  var bubble=mkEl('div','speech-bubble');
  bubble.appendChild(Object.assign(mkEl('div','speech-text'),{innerHTML:'My prediction: the die will land showing a <strong>2</strong>.'}));
  speechArea.appendChild(agentName); speechArea.appendChild(bubble);
  agentRow.appendChild(portWrap); agentRow.appendChild(speechArea);
  d.appendChild(agentRow);

  // Outcome
  var ob=mkEl('div','outcome-block win'); ob.style.marginTop='0';
  var om=mkEl('div','outcome-main');
  var em=mkEl('span','emoji'); em.textContent='🎉';
  var ot=mkEl('span'); ot.innerHTML='Die shows <strong>2</strong> -- prediction was <strong>2</strong>. Match!';
  om.appendChild(em); om.appendChild(ot); ob.appendChild(om);
  var osub=mkEl('div','outcome-sub'); osub.style.marginTop='8px';
  osub.innerHTML='<strong style="color:#1a6b3a;font-size:16px;">+30 points added to your team score!</strong>';
  ob.appendChild(osub);
  d.appendChild(ob);

  // Die inspection
  var dieNote=mkEl('div','tut-demo-label'); dieNote.style.marginTop='14px'; dieNote.textContent='The die Kenneth could see:'; d.appendChild(dieNote);
  var inspSec=buildInspectSection([2,2,2,2,2,6],'tut4-insp',null);
  inspSec.style.marginTop='6px'; d.appendChild(inspSec);

  // Rating -- linked to prediction
  var ratingNote=mkEl('div');
  ratingNote.style.cssText='font-size:13px;color:var(--text-mid);margin:14px 0 4px;padding:10px 14px;background:var(--surface2);border-radius:8px;border:1px solid var(--border);';
  ratingNote.innerHTML='Now rate <strong>'+TUT_PARTNER+'\'s prediction</strong>. Consider what he knew -- not just whether it happened to be right.';
  d.appendChild(ratingNote);

  ['Should '+TUT_PARTNER+' have said that?','Did '+TUT_PARTNER+' have good reasons for making this prediction?'].forEach(function(q,qi){
    var item=mkEl('div'); item.style.marginTop='12px';
    var qt=mkEl('div','likert-q'); qt.textContent=q; item.appendChild(qt);
    var btns=mkEl('div','likert-buttons'); btns.style.marginTop='6px';
    for(var v=1;v<=7;v++){
      var btn=mkEl('button','likert-btn'+(v===(qi===0?6:5)?' selected':'')); btn.textContent=String(v); btn.style.pointerEvents='none'; btns.appendChild(btn);
    }
    item.appendChild(btns);
    var anch=mkEl('div','likert-anchors'); anch.innerHTML='<span>Definitely not</span><span>Definitely yes</span>'; item.appendChild(anch);
    d.appendChild(item);
  });
  return d;
}
function tutStep_partner(){
  var d=mkEl('div');

  // Kenneth portrait -- large, centred
  var portraitWrap=mkEl('div');
  portraitWrap.style.cssText='display:flex;flex-direction:column;align-items:center;gap:12px;margin:4px 0 16px;';

  var port=mkEl('div');
  port.style.cssText='width:110px;height:110px;border-radius:50%;overflow:hidden;border:3px solid var(--border);box-shadow:var(--shadow-lg);background:#c9a882;';
  port.innerHTML = aiAvatarSVG();
  portraitWrap.appendChild(port);

  var nameTag=mkEl('div');
  nameTag.style.cssText='font-family:\'Playfair Display\',serif;font-size:20px;font-weight:700;color:var(--text);';
  nameTag.textContent=TUT_PARTNER;
  portraitWrap.appendChild(nameTag);

  var badge=mkEl('div','agent-badge ai');
  badge.textContent='Humanoid social robot'; badge.style.fontSize='11px';
  portraitWrap.appendChild(badge);

  d.appendChild(portraitWrap);

  // Context note
  var note=mkEl('div','tut-highlight');
  note.innerHTML='This is your partner for the tutorial. You will play with a different robot after the tutorial.';
  d.appendChild(note);

  return d;
}

// ── Step 1: Three example dice -- shown sequentially as user inspects ──
function tutStep0Demo(){
  var d=mkEl('div');
  var lbl=mkEl('div','tut-demo-label'); lbl.textContent='Drag Die A to see each face -- then B and C will appear:'; d.appendChild(lbl);

  // New order: A = two 1s two 3s two 6s (old C), B = five 2s one 6, C = all 2s
  var examples=[
    {id:'A', label:'Example A -- drag to explore', faces:[1,1,3,3,6,6], nextId:'tut0-B-wrap', animated:true},
    {id:'B', label:'Example B -- five faces show 2, one shows 6', faces:[2,2,2,2,2,6], nextId:'tut0-C-wrap', animated:false},
    {id:'C', label:'Example C -- all six faces show 2', faces:[2,2,2,2,2,2], nextId:null, animated:false},
  ];

  function buildExample(ex){
    var sec=mkEl('div'); sec.id='tut0-'+ex.id+'-wrap';
    sec.style.cssText='margin-top:18px;';
    var exLbl=mkEl('div','tut-demo-label'); exLbl.textContent=ex.label; sec.appendChild(exLbl);

    var dragId='tut0-'+ex.id;
    var inspOpts={
      faceContainerId: dragId+'-faces-row',
      hintId: dragId+'-hint',
    };
    if(ex.nextId){
      inspOpts.onAllSeen=function(){
        var nextWrap=document.getElementById(ex.nextId);
        if(nextWrap){
          nextWrap.style.opacity='0'; nextWrap.style.display='block';
          setTimeout(function(){nextWrap.style.transition='opacity 0.5s'; nextWrap.style.opacity='1';},30);
        }
      };
    } else {
      // Last die (C) -- unlock Next
      inspOpts.onAllSeen=function(){ unlockTutNext(); };
    }

    var f=ex.faces.slice(0,6); while(f.length<6)f.push(f[f.length-1]);
    var assign=[f[0],f[5],f[1],f[4],f[2],f[3]];
    dieDrags[dragId]={active:false,startX:0,startY:0,rotX:-70,rotY:20,totalDrag:0,seenFaces:{},allSeenFired:false};
    updateSeenFaces(dieDrags[dragId].seenFaces,-35,25);
    var initialSeen=Object.keys(dieDrags[dragId].seenFaces).length;

    var row=mkEl('div','inspect-row'); row.style.marginTop='8px';

    // Die wrapper -- with optional animated cursor overlay
    var dieEl=buildDie3D(ex.faces,dragId,'die-md',inspOpts);

    if(ex.animated){
      // Wrap in relative container and add animated cursor SVG + drag hint
      var demoWrap=mkEl('div','die-demo-wrap');
      demoWrap.appendChild(dieEl);
      // On first real drag, remove the animation overlay
      var cursorEl=mkEl('div');
      cursorEl.innerHTML='<svg class="demo-cursor-svg" width="28" height="34" viewBox="0 0 28 34" xmlns="http://www.w3.org/2000/svg">'+
        '<polygon points="2,2 2,26 8,20 13,30 16,28.5 11,18.5 19,18.5" fill="white" stroke="#333" stroke-width="1.2" stroke-linejoin="round"/>'+
        '</svg>';
      var dragHintEl=mkEl('div','demo-drag-hint'); dragHintEl.textContent='drag to rotate';
      demoWrap.appendChild(cursorEl);
      demoWrap.appendChild(dragHintEl);
      // Hide cursor once user actually drags
      var scene=dieEl.querySelector('.die-scene');
      if(scene){scene.addEventListener('mousedown',function(){cursorEl.style.display='none';dragHintEl.style.display='none';},{once:true});scene.addEventListener('touchstart',function(){cursorEl.style.display='none';dragHintEl.style.display='none';},{once:true,passive:true});}
      row.appendChild(demoWrap);
    } else {
      row.appendChild(dieEl);
    }

    var info=mkEl('div','inspect-info');
    var hint=mkEl('div','inspect-hint'); hint.id=dragId+'-hint';
    hint.textContent='Drag to rotate -- '+initialSeen+' of 6 faces visible so far';
    info.appendChild(hint);
    var fl=mkEl('div','inspect-faces-label'); fl.textContent='Faces seen so far:'; info.appendChild(fl);
    var fr=mkEl('div'); fr.id=dragId+'-faces-row';
    fr.style.cssText='display:flex;gap:4px;flex-wrap:wrap;min-height:52px;align-items:center;';
    var initS=dieDrags[dragId].seenFaces;
    for(var fi=0; fi<6; fi++){
      if(initS[fi]){var w=mkEl('div'); w.style.display='inline-block'; w.innerHTML=pipSVG(assign[fi],44,false); fr.appendChild(w);}
      else{var ph=mkEl('div'); ph.style.cssText='display:inline-block;width:44px;height:44px;border-radius:7px;background:var(--surface2);border:1.5px dashed var(--border);margin:2px;vertical-align:top;'; fr.appendChild(ph);}
    }
    info.appendChild(fr);
    row.appendChild(info);
    sec.appendChild(row);
    return sec;
  }

  d.appendChild(buildExample(examples[0]));
  var secB=buildExample(examples[1]); secB.style.display='none'; d.appendChild(secB);
  var secC=buildExample(examples[2]); secC.style.display='none'; d.appendChild(secC);
  return d;
}

// ── Step 2: Kenneth portrait + die shown large with ALL faces ──
function tutStep1Demo(){
  var d=mkEl('div');

  // Agent row -- portrait + name + context text only (no prediction bubble)
  var agRow=mkEl('div','agent-row'); agRow.style.marginTop='4px';
  var portWrap=mkEl('div','portrait-wrap');
  var port=mkEl('div','portrait');
  port.innerHTML = ROBOT_IDENTITY.avatar === 'amber' ? nexus7AvatarSVG() : aiAvatarSVG();
  var badge=mkEl('div','agent-badge ai'); badge.textContent='Humanoid social robot';
  portWrap.appendChild(port); portWrap.appendChild(badge);
  var speechArea=mkEl('div','speech-area');
  var agName=mkEl('div','agent-name'); agName.textContent=TUT_PARTNER;
  var ctx=mkEl('div'); ctx.style.cssText='font-size:13px;color:var(--text-mid);line-height:1.6;padding-top:6px;';
  ctx.innerHTML='All six faces are visible to <strong>'+TUT_PARTNER+'</strong> before the roll.';
  speechArea.appendChild(agName); speechArea.appendChild(ctx);
  agRow.appendChild(portWrap); agRow.appendChild(speechArea);
  d.appendChild(agRow);

  var divEl=mkEl('div','divider'); divEl.style.margin='14px 0'; divEl.textContent='Die B -- what '+TUT_PARTNER+' sees'; d.appendChild(divEl);

  // Large die (extra large for this step) + all 6 faces at big size
  var dieAndFaces=mkEl('div'); dieAndFaces.style.cssText='display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;';

  // Bigger die: 100px cube
  var dieId='tut1-die';
  dieDrags[dieId]={active:false,startX:0,startY:0,rotX:-70,rotY:20,totalDrag:0,seenFaces:{},allSeenFired:false};
  var dieWrapper=mkEl('div'); dieWrapper.style.cssText='flex-shrink:0;';
  var dieScene=mkEl('div','die-scene');
  dieScene.style.cssText='width:116px;height:116px;perspective:320px;cursor:grab;user-select:none;';
  var dieCube=mkEl('div','die-cube');
  dieCube.style.cssText='width:100px;height:100px;margin:8px;position:relative;transform-style:preserve-3d;transform:rotateX(-70deg) rotateY(20deg);';
  var fNames=['face-front','face-back','face-right','face-left','face-top','face-bottom'];
  var fAssign=[2,6,2,2,2,2]; // five 2s one 6
  fNames.forEach(function(fn,i){
    var face=mkEl('div','die-face '+fn);
    face.style.cssText='width:100px;height:100px;border-radius:10px;position:absolute;background:var(--die-face);border:1.5px solid var(--die-border);display:flex;align-items:center;justify-content:center;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.65),inset -2px -2px 5px rgba(0,0,0,0.22);';
    var transforms=['translateZ(50px)','rotateY(180deg) translateZ(50px)','rotateY(90deg) translateZ(50px)','rotateY(-90deg) translateZ(50px)','rotateX(90deg) translateZ(50px)','rotateX(-90deg) translateZ(50px)'];
    face.style.transform=transforms[i];
    face.innerHTML=faceInnerSVG(fAssign[i],84);
    dieCube.appendChild(face);
  });
  var dd1=dieDrags[dieId];
  function d1Down(e){
    dd1.active=true;dd1.startX=e.touches?e.touches[0].clientX:e.clientX;dd1.startY=e.touches?e.touches[0].clientY:e.clientY;
    window.addEventListener('mousemove',d1Move);window.addEventListener('touchmove',d1Move,{passive:false});
    window.addEventListener('mouseup',d1Up);window.addEventListener('touchend',d1Up);
    e.preventDefault();
  }
  function d1Move(e){if(!dd1.active)return;var cx=e.touches?e.touches[0].clientX:e.clientX;var cy=e.touches?e.touches[0].clientY:e.clientY;var dx=cx-dd1.startX,dy=cy-dd1.startY;dd1.rotY+=dx*0.7;dd1.rotX-=dy*0.7;dd1.startX=cx;dd1.startY=cy;dieCube.style.transition='none';dieCube.style.transform='rotateX('+dd1.rotX+'deg) rotateY('+dd1.rotY+'deg)';e.preventDefault();}
  function d1Up(){
    dd1.active=false;
    window.removeEventListener('mousemove',d1Move);window.removeEventListener('touchmove',d1Move);
    window.removeEventListener('mouseup',d1Up);window.removeEventListener('touchend',d1Up);
  }
  dieScene.addEventListener('mousedown',d1Down);
  dieScene.addEventListener('touchstart',d1Down,{passive:false});
  window.addEventListener('mousemove',d1Move);
  window.addEventListener('touchmove',d1Move,{passive:false});
  window.addEventListener('mouseup',d1Up);
  window.addEventListener('touchend',d1Up);
  dieScene.appendChild(dieCube);
  dieWrapper.appendChild(dieScene);
  dieAndFaces.appendChild(dieWrapper);

  // All 6 faces at large pip size -- five 2s, one 6
  var facesCol=mkEl('div'); facesCol.style.cssText='display:flex;flex-direction:column;gap:10px;';
  var fl=mkEl('div','inspect-faces-label'); fl.textContent='All 6 faces of Die B:'; facesCol.appendChild(fl);
  var fr=mkEl('div'); fr.style.cssText='display:flex;gap:8px;flex-wrap:wrap;';
  [2,2,2,2,2,6].forEach(function(v){ var w=mkEl('div'); w.innerHTML=pipSVG(v,64,false); fr.appendChild(w); });
  facesCol.appendChild(fr);
  dieAndFaces.appendChild(facesCol);
  d.appendChild(dieAndFaces);
  return d;
}

// ── Step 3: Live throwable die ──
function tutStep2Demo(){
  var d=mkEl('div');
  var lbl=mkEl('div','tut-demo-label'); lbl.textContent='Press the button -- watch the die land and settle:'; d.appendChild(lbl);
  var container=mkEl('div'); container.style.marginTop='8px';
  var TUT2_FACES=[2,2,2,2,2,6];

  function showIdle(){
    container.innerHTML='';
    var btn=mkEl('button','btn btn-roll'); btn.textContent='🎲 Throw the die'; btn.style.width='100%';
    btn.onclick=function(){
      container.innerHTML='';
      delete dieDrags['throw'];

      // Build with animating=true so throw-animating class and keyframes fire immediately
      var scene=buildThrowScene(TUT2_FACES, false, true);
      container.appendChild(scene);

      // After throw arc (1.65s): switch to settling wobble
      setTimeout(function(){
        scene.classList.remove('throw-animating');
        var cube=scene.querySelector('.die-cube');
        if(cube){ cube.style.animation='none'; cube.style.transform='rotateX(-70deg) rotateY(20deg)'; }
        // Force reflow then add settling class
        scene.classList.add('die-settling');
        var cube2=scene.querySelector('.die-cube');
        if(cube2) { void cube2.offsetWidth; cube2.style.animation=''; }
        var label=scene.querySelector('.throw-label');
        if(label) label.textContent='Die has landed…';
      }, 1650);

      // After settling (1.25s more): rest quietly + throw-again
      setTimeout(function(){
        scene.classList.remove('die-settling');
        var cube=scene.querySelector('.die-cube');
        if(cube){ cube.style.animation='none'; cube.style.transform='rotateX(-70deg) rotateY(20deg)'; }
        var label=scene.querySelector('.throw-label');
        if(label) label.textContent='';

        var rb=mkEl('button','btn btn-tut-sec');
        rb.textContent='↺ Throw again'; rb.style.cssText='width:100%;margin-top:8px;';
        rb.onclick=showIdle;
        container.appendChild(rb);
      }, 1650+1300);
    };
    container.appendChild(btn);
  }

  showIdle(); d.appendChild(container); return d;
}

// ── Step 3: Inspect die -- only seen faces appear ──
function tutStep3Demo(){
  var d=mkEl('div');
  var lbl=mkEl('div','tut-demo-label'); lbl.textContent='Drag the die -- only faces you\'ve actually seen appear to the right:'; d.appendChild(lbl);
  var inspSec=buildInspectSection([2,2,2,2,2,6],'tut3-insp',null,{onAllSeen:function(){ unlockTutNext(); }});
  inspSec.style.marginTop='8px'; d.appendChild(inspSec);
  return d;
}

// ── Step 4: Type of die (static) + example outcome + rating ──
// ── GAME ──
function renderGame(){
  var round=currentRound();
  var wrap=mkEl('div','fade-in'); wrap.style.cssText='display:flex;flex-direction:column;gap:16px;width:100%';

  var topBar=mkEl('div','top-bar');
  var gl=mkEl('div','game-label'); gl.textContent='Prediction Game';
  var pill=mkEl('div','round-pill'); pill.innerHTML='Round <em>'+(state.roundIndex+1)+'</em> of '+ROUNDS.length;
  topBar.appendChild(gl); topBar.appendChild(pill); wrap.appendChild(topBar);

  // Score bar
  var scoreBar=mkEl('div','score-bar');
  var scoreChip=mkEl('div','score-chip');
  var scoreLbl=mkEl('div','score-label'); scoreLbl.textContent='Team Score';
  var scoreVal=mkEl('div','score-val'); scoreVal.id='top-score-val'; scoreVal.textContent=state.teamScore;
  scoreChip.appendChild(scoreLbl); scoreChip.appendChild(scoreVal);
  scoreBar.appendChild(scoreChip);
  wrap.appendChild(scoreBar);

  var prog=mkEl('div','progress-track');
  var fill=mkEl('div','progress-fill'); fill.style.width=(state.roundIndex/ROUNDS.length*100)+'%';
  prog.appendChild(fill); wrap.appendChild(prog);

  var card=mkEl('div','card');

  // Agent portrait (always shown)
  var agentRow=mkEl('div','agent-row');
  var portWrap=mkEl('div','portrait-wrap');
  var port=mkEl('div','portrait'); port.innerHTML=aiAvatarSVG();
  var badge=mkEl('div','agent-badge ai'); badge.textContent='Humanoid social robot';
  portWrap.appendChild(port); portWrap.appendChild(badge);
  var speechArea=mkEl('div','speech-area');
  var agentName=mkEl('div','agent-name'); agentName.textContent=eName();

  if(state.phase==='inspecting'){
    // Show inspecting / inspected status next to portrait
    var statusBox=mkEl('div','inspecting-status');
    if(!state.inspected){
      var line=mkEl('div','inspecting-line');
      line.innerHTML=eName()+' is inspecting the die&ensp;';
      var dots=mkEl('span','inspecting-dots');
      dots.innerHTML='<span></span><span></span><span></span>';
      line.appendChild(dots);
      statusBox.appendChild(line);
    } else {
      var done=mkEl('div','inspecting-done');
      done.innerHTML='✓ &nbsp;'+eName()+' has inspected the die';
      statusBox.appendChild(done);
    }
    speechArea.appendChild(agentName);
    speechArea.appendChild(statusBox);
  } else {
    // roll / outcome phases -- show speech bubble
    var bubble=mkEl('div','speech-bubble'+(state.phase==='roll'?' speech-bubble-reveal':''));
    var sText=mkEl('div','speech-text');
    sText.innerHTML='My prediction: the die will land showing a <strong>'+round.prediction+'</strong>.';
    bubble.appendChild(sText);
    speechArea.appendChild(agentName);
    speechArea.appendChild(bubble);
  }

  agentRow.appendChild(portWrap); agentRow.appendChild(speechArea);
  card.appendChild(agentRow);

  // ROLL BUTTON
  if(state.phase==='roll'){
    var rollBtn=mkEl('button','btn btn-roll'); rollBtn.textContent='🎲 Roll the die'; rollBtn.onclick=doRoll; card.appendChild(rollBtn);
  }

  // OUTCOME
  if(state.phase==='outcome'){

    // Rolling -- placeholder replaced by doRoll with live scene
    if(state.rolling){
      card.appendChild(makeDivider('Rolling…'));
      var placeholder=mkEl('div'); placeholder.id='throw-scene-placeholder';
      placeholder.style.cssText='width:100%;height:220px;background:var(--surface2);border-radius:12px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;';
      var spinnerTxt=mkEl('div'); spinnerTxt.style.cssText='font-size:12px;color:var(--text-dim);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;';
      spinnerTxt.textContent='Throwing…';
      placeholder.appendChild(spinnerTxt);
      card.appendChild(placeholder);
    }

    // Settling fallback
    if(state.settling){
      card.appendChild(makeDivider('Rolling…'));
      delete dieDrags['throw'];
      card.appendChild(buildThrowScene(round.faces,true,false,state.outcome));
    }

    // Revealed
    if(state.outcome!==null && !state.rolling && !state.settling){
      // Update score once when outcome first revealed
      if(!state.scoreUpdatedThisRound){
        state.scoreUpdatedThisRound=true;
        var isMatchScore=(state.outcome==round.prediction);
        state.teamScore += isMatchScore ? 30 : -10;
        state.lastDelta = isMatchScore ? 30 : -10;
      }
      card.appendChild(makeDivider('Outcome'));
      var outScene=buildThrowScene(round.faces,false,false,state.outcome);
      card.appendChild(outScene);

      var isMatch=(state.outcome==round.prediction);
      var ob=mkEl('div','outcome-block '+(isMatch?'win':'lose'));
      ob.style.marginTop='0';
      var om=mkEl('div','outcome-main');
      var emoji=mkEl('span','emoji'); emoji.textContent=isMatch?'🎉':'😕';
      var ot=mkEl('span'); ot.innerHTML='Die shows <strong>'+state.outcome+'</strong> -- prediction was <strong>'+round.prediction+'</strong>. '+(isMatch?'Match!':'No match.');
      om.appendChild(emoji); om.appendChild(ot); ob.appendChild(om);
      // Score delta -- prominent
      var sub=mkEl('div','outcome-sub'); sub.style.marginTop='8px';
      if(isMatch){
        sub.innerHTML='<strong style="color:#1a6b3a;font-size:16px;">+30 points added to your team score!</strong>';
      } else {
        sub.innerHTML='<strong style="color:#8b1a1a;font-size:16px;">−10 points deducted from your team score.</strong>';
      }
      ob.appendChild(sub);
      card.appendChild(ob);
      // Animated score bar update
      var scoreBar2=mkEl('div','score-bar'); scoreBar2.style.marginTop='0';
      var scoreChip2=mkEl('div','score-chip');
      var scoreLbl2=mkEl('div','score-label'); scoreLbl2.textContent='Team Score';
      var scoreVal2=mkEl('div','score-val');
      scoreVal2.id='live-score-val';
      scoreVal2.textContent=state.teamScore;
      scoreVal2.style.transition='color 0.4s';
      setTimeout(function(){
        var el=document.getElementById('live-score-val');
        if(el){ el.style.color=isMatch?'#1a6b3a':'#8b1a1a'; setTimeout(function(){ if(el) el.style.color=''; },800); }
        // Also update top score bar
        var topVal=document.getElementById('top-score-val');
        if(topVal){ topVal.textContent=state.teamScore; topVal.style.color=isMatch?'#1a6b3a':'#8b1a1a'; setTimeout(function(){ if(topVal) topVal.style.color=''; },800); }
      },50);
      scoreChip2.appendChild(scoreLbl2); scoreChip2.appendChild(scoreVal2);
      scoreBar2.appendChild(scoreChip2); card.appendChild(scoreBar2);

      // Type of die -- with explanatory note
      card.appendChild(makeDivider('Type of Die'));
      var typeNote=mkEl('div');
      typeNote.style.cssText='font-size:13px;color:var(--text-mid);font-style:italic;margin-bottom:10px;';
      typeNote.textContent='Now you can inspect the die '+eName()+' could see before making the prediction.';
      card.appendChild(typeNote);
      card.appendChild(buildInspectSection(round.faces,'game-inspect',null,{
        onAllSeen:function(){
          state.inspectedDie=true;
          var nb=document.getElementById('next-btn'); if(nb)nb.disabled=!bothRated();
          var hint=document.getElementById('inspect-hint-game');
          if(hint) hint.style.display='none';
        }
      }));
      // Hint if not yet inspected
      if(!state.inspectedDie){
        var inspHint=mkEl('div'); inspHint.id='inspect-hint-game';
        inspHint.style.cssText='font-size:12px;color:var(--amber);font-weight:700;text-align:center;padding:6px;';
        inspHint.textContent='⚠ Please inspect all faces of the die before rating.';
        card.appendChild(inspHint);
      }

      card.appendChild(makeDivider('Your assessment'));
      card.appendChild(buildLikert());

      var nextBtn=mkEl('button','btn btn-next'); nextBtn.id='next-btn';
      nextBtn.textContent=state.roundIndex+1<ROUNDS.length?'Next round →':'See results →';
      nextBtn.disabled=!bothRated(); nextBtn.onclick=advanceRound;
      card.appendChild(nextBtn);
    }
  }

  wrap.appendChild(card); return wrap;
}

function makeDivider(label){var d=mkEl('div','divider'); d.textContent=label; return d;}

// LIKERT
function buildLikert(){
  var n=CONFIG.likertPoints;
  var questions=[
    {key:'assertability',text:'Should '+eName()+' have said that?'},
    {key:'justification', text:'Did '+eName()+' have good reasons to say that?'}
  ];
  var group=mkEl('div','likert-group');
  questions.forEach(function(q){
    var item=mkEl('div','likert-item');
    var qEl=mkEl('div','likert-q'); qEl.textContent=q.text; item.appendChild(qEl);
    var track=mkEl('div','likert-track');
    var btns=mkEl('div','likert-buttons');
    for(var v=1;v<=n;v++){(function(val){
      var btn=mkEl('button','likert-btn'+(state.ratingPost[q.key]===val?' selected':''));
      btn.textContent=String(val); btn.type='button';
      btn.setAttribute('data-key',q.key); btn.setAttribute('data-val',val);
      btn.addEventListener('click',function(){selectRating(q.key,val);});
      btns.appendChild(btn);
    })(v);}
    var anchors=mkEl('div','likert-anchors');
    var l=mkEl('span');l.textContent='Definitely not'; var r=mkEl('span');r.textContent='Definitely yes';
    anchors.appendChild(l); anchors.appendChild(r);
    track.appendChild(btns); track.appendChild(anchors); item.appendChild(track); group.appendChild(item);
  });
  // Start decision timer when Likert is built
  state.ratingStartTime = Date.now();
  return group;
}

function selectRating(key,val){
  state.ratingPost[key]=val;
  document.querySelectorAll('.likert-btn[data-key="'+key+'"]').forEach(function(btn){
    btn.classList.toggle('selected',parseInt(btn.getAttribute('data-val'))===val);
  });
  var nb=document.getElementById('next-btn'); if(nb)nb.disabled=!bothRated();
}

function bothRated(){
  return state.inspectedDie &&
  state.ratingPost.assertability != null &&
  state.ratingPost.justification != null;
}

// Generate a completion code: 5 random digits + z (e.g. "48392z")
function generateCode(){
  var digits='';
  for(var i=0;i<5;i++) digits+=Math.floor(Math.random()*10);
  return digits+(eType()==='ai'?'R':'Z');
}

// END
function renderEnd(){
  if(!state.completionCode) state.completionCode=generateCode();
  var wrap=mkEl('div','fade-in'); wrap.style.width='100%';
  var card=mkEl('div','card'); var inner=mkEl('div','end-inner');
  var title=mkEl('div','end-title'); title.textContent='Game Complete'; inner.appendChild(title);
  var body=mkEl('div','end-body');
  body.innerHTML='Thank you for playing! You have completed all '+ROUNDS.length+' rounds.<br><br>'+
    'Please click the button below to record your responses and generate your personal code.';
  inner.appendChild(body);
  // Button first
  var btn=mkEl('button','btn btn-submit');
  btn.textContent='\uD83D\uDCCB Record responses and generate personal code';
  btn.style.cssText='max-width:420px;width:100%;margin-top:8px;font-size:16px;';
  // Code block (hidden until button clicked)
  var codeWrap=mkEl('div'); codeWrap.style.cssText='display:none;margin-top:24px;text-align:center;';
  var codeInstr=mkEl('div','end-body'); codeInstr.innerHTML='<strong>Your personal code:</strong>';
  var codeBox=mkEl('div','completion-code'); codeBox.textContent=state.completionCode;
  var codeNote=mkEl('div','end-body');
  codeNote.style.cssText='margin-top:16px;font-size:17px;font-weight:bold;color:#2d6a4f;border:2px solid #2d6a4f;border-radius:8px;padding:12px;background:#f0f7f4;';
  codeNote.innerHTML='&#x26A0;&#xFE0F; Please now enter this code in the survey tab, then close this tab.';
  codeWrap.appendChild(codeInstr); codeWrap.appendChild(codeBox); codeWrap.appendChild(codeNote);
  btn.onclick=function(){ finishGame(); btn.textContent='\u2713 Responses recorded!'; btn.disabled=true; codeWrap.style.display='block'; };
  inner.appendChild(btn); inner.appendChild(codeWrap);
  card.appendChild(inner); wrap.appendChild(card); return wrap;
}

// ================================
// LOGIC
// ================================
function startGame(){state.screen='game';state.roundIndex=0;startRound();}
function startRound(){
  state.outcome=null; state.rolling=false; state.settling=false;
  state.ratingPost={}; state.inspected=false; state.phase='inspecting'; state.inspectedDie=false;
  state.scoreUpdatedThisRound=false; state.lastDelta=null;
  delete dieDrags['game-inspect'];
  delete dieDrags['throw'];
  render();
  // Random inspect time: 3-8 seconds
  var inspectMs = 3000 + Math.random() * 5000;
  // Show "has inspected" 1.2s before rolling becomes available
  setTimeout(function(){
    if(state.phase==='inspecting'){ state.inspected=true; render(); }
  }, inspectMs - 1200);
  setTimeout(function(){
    if(state.phase==='inspecting'){ state.phase='roll'; render(); }
  }, inspectMs);
}
function doRoll(){
  var round=currentRound();
  state.phase='outcome';
  state.rolling=true;
  render();

  // Replace placeholder with live animated scene immediately
  var throwEl=document.getElementById('throw-scene-placeholder');
  if(!throwEl) return;

  delete dieDrags['throw'];
  // Pre-compute outcome now so the face swap is baked into the animating die
  var finalOutcome=round.outcomeFixed!==null?round.outcomeFixed:rollDie(round.faces);
  state._pendingOutcome=finalOutcome;

  // Build with animating=true AND outcome so top face = outcome from the start
  var scene=buildThrowScene(round.faces, false, true, finalOutcome);
  scene.id='live-throw-scene';
  throwEl.parentNode.replaceChild(scene, throwEl);

  var finalTransform='rotateX(-70deg) rotateY(20deg)';

  // After throw arc (1.65s): switch to settling wobble at final angle
  setTimeout(function(){
    scene.classList.remove('throw-animating');
    var cube=scene.querySelector('.die-cube');
    if(cube){ cube.style.animation='none'; cube.style.transform=finalTransform; }
    scene.classList.add('die-settling');
    var cube2=scene.querySelector('.die-cube');
    if(cube2){ void cube2.offsetWidth; cube2.style.animation=''; }
    var label=scene.querySelector('.throw-label');
    if(label) label.textContent='Die has landed…';
  }, 1650);

  // After settling: reveal outcome
  setTimeout(function(){
    state.rolling=false; state.settling=false;
    state.outcome=finalOutcome;
    state.ratingStartTime = Date.now();
    render();
  }, 1650+1300);
}
function advanceRound(){
  // Record decision time
  if(state.ratingStartTime){
    var decisionTime = Date.now() - state.ratingStartTime;
    state.decisionTimes.push(decisionTime);
  }
  var round=currentRound();
  state.ratings.push({
    roundId:round.id,dieLabel:round.dieLabel,prediction:round.prediction,
    outcome:state.outcome,
    assertability: state.ratingPost.assertability!=null ? state.ratingPost.assertability : null,
    justification: state.ratingPost.justification!=null ? state.ratingPost.justification : null,
    decisionTime: decisionTime || null
  });
  state.roundIndex++;
  if(state.roundIndex>=ROUNDS.length){
    state.screen='end';
    render();
  } else {
    startRound();
  }
}
function finishGame(){
  var pid = getURLParam('pid') || 'unknown';
  var code = state.completionCode || generateCode();
  state.completionCode = code;
  var params = new URLSearchParams();
  params.set('pid', pid);
  params.set('code', code);
  params.set('condition', _condParam);
  params.set('agentType', CONFIG.experimenterType);
  params.set('teamScore', state.teamScore);
  params.set('ratings', JSON.stringify(state.ratings.map(function(r){
    return {
      assertability: r.assertability != null ? r.assertability : '',
      justification: r.justification != null ? r.justification : '',
      decisionTimeMs: r.decisionTime != null ? r.decisionTime : ''
    };
  })));
  params.set('decisionTimes', JSON.stringify(state.decisionTimes));
  var scriptURL = 'https://script.google.com/macros/s/AKfycbyxT1DeXhnHCZm6txy7twP_dMSAcXloyXFyiKkd8bZ10_DTVZxHzXKC2cc9Ndn4QxCVdw/exec';
  var img = new Image();
  img.src = scriptURL + '?' + params.toString();
  // Update button to confirm
  // button state handled by renderEnd
}
render();
