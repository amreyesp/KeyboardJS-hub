function CaptureKeyEvent(){
  C.addEventListener('click', CallBackKey);
  Csharp.addEventListener('click', CallBackKey);
  D.addEventListener('click', CallBackKey);
  Dsharp.addEventListener('click', CallBackKey);
  E.addEventListener('click', CallBackKey);
  F.addEventListener('click', CallBackKey);
  Fsharp.addEventListener('click', CallBackKey);
  G.addEventListener('click', CallBackKey);
  Gsharp.addEventListener('click', CallBackKey);
  A.addEventListener('click', CallBackKey);
  Asharp.addEventListener('click', CallBackKey);
  B.addEventListener('click', CallBackKey);
}

function RemoveCaptureKey(){
  C.removeEventListener('click', CallBackKey);
  Csharp.removeEventListener('click', CallBackKey);
  D.removeEventListener('click', CallBackKey);
  Dsharp.removeEventListener('click', CallBackKey);
  E.removeEventListener('click', CallBackKey);
  F.removeEventListener('click', CallBackKey);
  Fsharp.removeEventListener('click', CallBackKey);
  G.removeEventListener('click', CallBackKey);
  Gsharp.removeEventListener('click', CallBackKey);
  A.removeEventListener('click', CallBackKey);
  Asharp.removeEventListener('click', CallBackKey);
  B.removeEventListener('click', CallBackKey);
}

function CallBackKey(){
  tappedKey = event.target;
  GetSoundKey(tappedKey).play();
  if (keyboardMode === 'practice'){
    CheckTabMatch();
  }
}

function toggleLightKey(key){
  key.classList.add('light');
  setTimeout(() => {key.classList.remove('light')}, 300);
}
