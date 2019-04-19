
function PlayKeyboard() {
  C.addEventListener('click',() => {tappedKey = C; GetSoundKey(tappedKey).play(); tapCounter++} );
  Csharp.addEventListener('click',() => {tappedKey = Csharp; GetSoundKey(tappedKey).play(); tapCounter++} );
  D.addEventListener('click',() => {tappedKey = D; GetSoundKey(tappedKey).play(); tapCounter++} );
  Dsharp.addEventListener('click',() => {tappedKey = Dsharp; GetSoundKey(tappedKey).play(); tapCounter++} );
  E.addEventListener('click',() => {tappedKey = E; GetSoundKey(tappedKey).play(); tapCounter++} );
  F.addEventListener('click',() => {tappedKey = F; GetSoundKey(tappedKey).play(); tapCounter++} );
  Fsharp.addEventListener('click',() => {tappedKey = Fsharp; GetSoundKey(tappedKey).play(); tapCounter++} );
  G.addEventListener('click',() => {tappedKey = G; GetSoundKey(tappedKey).play(); tapCounter++} );
  Gsharp.addEventListener('click',() => {tappedKey = Gsharp; GetSoundKey(tappedKey).play(); tapCounter++} );
  A.addEventListener('click',() => {tappedKey = A; GetSoundKey(tappedKey).play(); tapCounter++} );
  Asharp.addEventListener('click',() => {tappedKey = Asharp; GetSoundKey(tappedKey).play(); tapCounter++} );
  B.addEventListener('click',() => {tappedKey = B; GetSoundKey(tappedKey).play(); tapCounter++} );
  //return tappedKey, tapCounter;
  //console.log(tapCounter)
}

function GetSoundKey(tappedKey) {
  var soundKey;
  switch (tappedKey) {
    case C:
      soundKey = Csound;
      break;
    case Csharp:
      soundKey = CsharpSound;
      break;
    case D:
      soundKey = Dsound;
      break;
    case Dsharp:
      soundKey = DsharpSound;
      break;
    case E:
      soundKey = Esound;
      break;
    case F:
      soundKey = Fsound;
      break;
    case Fsharp:
      soundKey = FsharpSound;
      break;
    case G:
      soundKey = Gsound;
      break;
    case Gsharp:
      soundKey = GsharpSound;
      break;
    case A:
      soundKey = Asound;
      break;
    case Asharp:
      soundKey = AsharpSound;
      break;
    case B:
      soundKey = Bsound;
      break;
  }
  return soundKey;
}
