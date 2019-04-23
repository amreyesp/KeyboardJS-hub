class Practice{

  constructor(){
    this.level = 0;
    this.setPractice();
    this.tabs = new Array;
    this.tapCounter = 0;
    this.status = 'on practice'
  }

  setPractice(){
    btnFreeMode.classList.add('hide');
    btnPracticeSong.classList.add('hide');
    btnStartPractice.classList.remove('hide');
    btnHome.classList.remove('hide');
  }
}

function PracticeSession(){
  practice = new Practice();
  keyboardMode = 'practice';
  RemoveCaptureKey();
  ChooseSong();
}

function ChooseSong(){
  swal({
    title: "Please select the song you want to practice:",
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
      song1: { text: "Song 1", value: songList.song1 },
      song2: { text: "Song 2", value: songList.song2 },
      song3: { text: "Song 3", value: songList.song3 },
      //other: { text: "No, I want a random song", value: "random" }
    },
  })
  .then(value => {
    practice.tabs = value;
    swal("Let's begin!","Follow the key sequence", "success");
    console.log(practice.tabs);
  })
}

//This function is implemented once the button "Start Practice" is tapped
function StartPractice(){
  const maxLevel = practice.tabs.length; //Define number of levels for each song: number of key tabs
  PracticeOnLevel(maxLevel); //Practice on each level of the song (e.g. level 0 = key0; level 1 = key0 + key1 ...)
}

//Implement practice on specific level
function PracticeOnLevel(maxLevel){
  if (practice.level < maxLevel) {
    console.log(`start practice on level ${practice.level}`)
    PlayArray(practice.level)
    CaptureKeyEvent();
  } else {
    practiceStatus = 'succeded';
  }
}


function CheckTabMatch(){
  if (practice.tapCounter <= practice.level) {
    if (tappedKey === practice.tabs[practice.tapCounter]) {
      console.log(`${tappedKey.id} event captured`)
      practice.tapCounter++;
      NextLevel();
    } else {
      practice.status = 'fail'
      EvalPractice(practice.status);
    }
  }
}

function NextLevel(){
  if (practice.tapCounter > practice.level) {
    console.log(`Transition to level ${practice.level+1}`)
    practice.tapCounter = 0; //Restart tapCounter
    practice.level++; //Increment level
    setTimeout(StartPractice, 1500); //Start practice on new level
  }
  if (practice.level === practice.tabs.length) {
    practice.status = 'succeded';
    EvalPractice(practice.status);
  }
}

function EvalPractice(practiceStatus){
  console.log(`Eval practice: ${practiceStatus}`);
  switch (practiceStatus) {
    case 'succeded':
      swal("Congratulations!",`You learn the song`, "success");
      break;
    case 'fail':
      (swal("Sorry :(",`You tapped the wrong key`, "error"))
      .then(() => { PracticeSession() });
  }
}
