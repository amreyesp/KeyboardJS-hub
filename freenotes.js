function PlayKeyboard() {
    IdentifyTappedKey();
}

function IdentifyTappedKey() {
  C.addEventListener('click',() => {tappedKey = C; GetSoundKey(tappedKey).play()} );
  Csharp.addEventListener('click',() => {tappedKey = Csharp; GetSoundKey(tappedKey).play()} );
  D.addEventListener('click',() => {tappedKey = D; GetSoundKey(tappedKey).play()} );
  Dsharp.addEventListener('click',() => {tappedKey = Dsharp; GetSoundKey(tappedKey).play()} );
  E.addEventListener('click',() => {tappedKey = E; GetSoundKey(tappedKey).play()} );
  F.addEventListener('click',() => {tappedKey = F; GetSoundKey(tappedKey).play()} );
  Fsharp.addEventListener('click',() => {tappedKey = Fsharp; GetSoundKey(tappedKey).play()} );
  G.addEventListener('click',() => {tappedKey = G; GetSoundKey(tappedKey).play()} );
  Gsharp.addEventListener('click',() => {tappedKey = Gsharp; GetSoundKey(tappedKey).play()} );
  A.addEventListener('click',() => {tappedKey = A; GetSoundKey(tappedKey).play()} );
  Asharp.addEventListener('click',() => {tappedKey = Asharp; GetSoundKey(tappedKey).play()} );
  B.addEventListener('click',() => {tappedKey = B; GetSoundKey(tappedKey).play()} );
  return tappedKey;
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
