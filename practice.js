class Practice{

  constructor(){
    this.level = 0;
    this.setPractice();
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
    tabs = value;
    swal("Let's begin!","Follow the key sequence", "success");
    console.log(tabs);
  })
}

//This function is implemented once the button "Start Practice" is tapped
function StartPractice(level){
  //Define number of levels for each song: number of key tabs
  const maxLevel = tabs.length;
  var practiceStatus = 'on practice';
  //Practice on each level of the song (e.g. level 0 = key0; level 1 = key0 + key1 ...)
  PracticeOnLevel(maxLevel);
}

//Implement practice on specific level
function PracticeOnLevel(maxLevel){
  if (practice.level < maxLevel) {
    practiceStatus = 'on practice';
    console.log(`start practice on level ${practice.level}`)
    PlayArray(practice.level)
    CaptureKeyEvent();
  } else {
    practiceStatus = 'succeded';
  }
  return practiceStatus;
}


function CheckTabMatch(){
  if (tapCounter <= practice.level) {
    if (tappedKey === tabs[tapCounter]) {
      console.log(`${tappedKey.id} event captured`)
      tapCounter++;
      NextLevel();
    } else {
      EvalPractice('fail');
    }
  }
}

function NextLevel(){
  if (tapCounter > practice.level) {
    console.log(`Transition to level ${practice.level+1}`)
    tapCounter = 0; //Restart tapCounter
    practice.level++; //Increment level
    setTimeout(StartPractice, 1500); //Start practice on new level
  }
  if (practice.level === tabs.length) {
    EvalPractice('succeded');
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
