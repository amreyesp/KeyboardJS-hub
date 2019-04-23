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

function PlayArray(level){
  for (let j = 0; j <= level; j++) {
    setTimeout(() => { GetSoundKey(practice.tabs[j]).play(); toggleLightKey(practice.tabs[j]) }, 1000 * j);
  }
  setTimeout(() => {console.log('Song ended')} , 1000 * level)
}
