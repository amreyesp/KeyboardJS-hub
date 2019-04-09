
function PlayKeyboard() {
  C.addEventListener('click',function() {
    console.log(`This is ${C.id} note`)
    Csound.play()
  })
  Csharp.addEventListener('click',function() {
    console.log(`This is ${Csharp.id} note`)
    CsharpSound.play()
  })
  D.addEventListener('click',function() {
    console.log(`This is ${D.id} note`)
    Dsound.play()
  })
  Dsharp.addEventListener('click',function() {
    console.log(`This is ${Dsharp.id} note`)
    DsharpSound.play()
  })
  E.addEventListener('click',function() {
    console.log(`This is ${E.id} note`)
    Esound.play()
  })
  F.addEventListener('click',function() {
    console.log(`This is ${F.id} note`)
    Fsound.play()
  })
  Fsharp.addEventListener('click',function() {
    console.log(`This is ${Fsharp.id} note`)
    FsharpSound.play()
  })
  G.addEventListener('click',function() {
    console.log(`This is ${G.id} note`)
    Gsound.play()
  })
  Gsharp.addEventListener('click',function() {
    console.log(`This is ${Gsharp.id} note`)
    GsharpSound.play()
  })
  A.addEventListener('click',function() {
    console.log(`This is ${A.id} note`)
    Asound.play()
  })
  Asharp.addEventListener('click',function() {
    console.log(`This is ${Asharp.id} note`)
    AsharpSound.play()
  })
  B.addEventListener('click',function() {
    console.log(`This is ${B.id} note`)
    Bsound.play()
  })
}
