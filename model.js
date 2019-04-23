//Define elements for events handler
const C = document.getElementById('C');
const Csharp = document.getElementById('Csharp');
const D = document.getElementById('D');
const Dsharp = document.getElementById('Dsharp');
const E = document.getElementById('E');
const F = document.getElementById('F');
const Fsharp = document.getElementById('Fsharp');
const G = document.getElementById('G');
const Gsharp = document.getElementById('Gsharp');
const A = document.getElementById('A');
const Asharp = document.getElementById('Asharp');
const B = document.getElementById('B');
const btnFreeMode = document.getElementById('btnFreeMode');
const btnPracticeSong = document.getElementById('btnPracticeSong');
const btnStartPractice = document.getElementById('btnStartPractice');
const btnHome = document.getElementById('btnHome');

//Define media files to be used
const Csound = new Audio('media/Cmajor.mov');
const CsharpSound = new Audio('media/Csharp.mov');
const Dsound = new Audio('media/Dmajor.mov');
const DsharpSound = new Audio('media/Dsharp.mov');
const Esound = new Audio('media/Emajor.mov');
const Fsound = new Audio('media/Fmajor.mov');
const FsharpSound = new Audio('media/Fsharp.mov');
const Gsound = new Audio('media/Gmajor.mov');
const GsharpSound = new Audio('media/Gsharp.mov');
const Asound = new Audio('media/Amajor.mov');
const AsharpSound = new Audio('media/Asharp.mov');
const Bsound = new Audio('media/Bmajor.mov');

//Define song list for practice mode
const songList = {
  'song1': [E, G, C, D, E],
  'song2': [E, E, F, G, G, F, E, D, C],
  'song3': [C, C, F, F, G, G, F, F, F, E, E, D, D, C]
}

//Define global variables
var practice, tappedKey, keyboardMode, tapCounter = 0;
var tabs = new Array;
