
function PlayKeyboard() {
  C.addEventListener('click',function() {
    console.log(`This is ${C.id} note`);
    Csound.play();
    tappedKey = Csound;
  })
  Csharp.addEventListener('click',function() {
    console.log(`This is ${Csharp.id} note`);
    CsharpSound.play();
    tappedKey = CsharpSound;
  })
  D.addEventListener('click',function() {
    console.log(`This is ${D.id} note`);
    Dsound.play();
    tappedKey = Dsound;
  })
  Dsharp.addEventListener('click',function() {
    console.log(`This is ${Dsharp.id} note`);
    DsharpSound.play();
    tappedKey = DsharpSound;
  })
  E.addEventListener('click',function() {
    console.log(`This is ${E.id} note`);
    Esound.play();
    tappedKey = Esound;
  })
  F.addEventListener('click',function() {
    console.log(`This is ${F.id} note`);
    Fsound.play();
    tappedKey = Fsound;
  })
  Fsharp.addEventListener('click',function() {
    console.log(`This is ${Fsharp.id} note`);
    FsharpSound.play();
    tappedKey = FsharpSound;
  })
  G.addEventListener('click',function() {
    console.log(`This is ${G.id} note`);
    Gsound.play();
    tappedKey = Gsound;
  })
  Gsharp.addEventListener('click',function() {
    console.log(`This is ${Gsharp.id} note`);
    GsharpSound.play();
    tappedKey = GsharpSound;
  })
  A.addEventListener('click',function() {
    console.log(`This is ${A.id} note`);
    Asound.play();
    tappedKey = Asound;
  })
  Asharp.addEventListener('click',function() {
    console.log(`This is ${Asharp.id} note`);
    AsharpSound.play();
    tappedKey = AsharpSound;
  })
  B.addEventListener('click',function() {
    console.log(`This is ${B.id} note`);
    Bsound.play();
    tappedKey = Bsound;
  })
  return tappedKey;
}
