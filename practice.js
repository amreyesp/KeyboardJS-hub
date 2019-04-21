class Practice {

  constructor(random) {
    this.selectedSong = random;
    this.level = 0;
    this.setPractice();
    this.ChooseSong();
  }

  setPractice () {
    btnFreeMode.classList.add('hide');
    btnPracticeSong.classList.add('hide');
    btnStartPractice.classList.remove('hide');
    btnHome.classList.remove('hide');
  }

  ChooseSong() {
    (swal({
      title: "¿Do you want to select the song?",
      closeOnClickOutside: false,
      closeOnEsc: false,
      buttons: {
        song1: { text: "Song 1", value: "song1" },
        song2: { text: "Song 2", value: "song2" },
        song3: { text: "Song 3", value: "song3" },
        other: { text: "No, I want a random song", value: "random" }
      },
    })
    .then(value => {
      this.selectedSong = value;
      swal("Let's begin!",`You selected the ${value} option`, "success");
      console.log(this);
    })
    )
    .then (()=> {
      this.LoadSong(this.selectedSong);
    })
  }

  LoadSong(song) {
    if (song === 'random') {
      const randNumber = Math.floor(Math.random()*3);
      switch (randNumber) {
        case 0:
          song = 'song1';
          break;
        case 1:
          song = 'song2';
          break;
        case 2:
          song = 'song3';
      }
    }
    switch (song) {
      case 'song1':
        tabs = [E, G, C, D, E];
        break;
      case 'song2':
        tabs = [E, E, F, G, G, F, E, D, C];
        break;
      case 'song3':
        tabs = [C, C, F, F, G, G, F, F, F, E, E, D, D, C];
    }
    console.log(tabs);
  }
}

function PracticeSession() {
  practice = new Practice('random');
}

//This function is implemented once the button "Start Practice" is tapped
function StartPractice(level) {
  //Define number of levels for each song: number of key tabs
  const maxLevel = tabs.length;
  var practiceStatus = 'on practice';
  //Practice on each level of the song (e.g. level 0 = key0; level 1 = key0 + key1 ...)
  practiceStatus = PracticeOnLevel(maxLevel);
  //EvalPractice(practiceStatus);
  // while (practiceStatus === 'on practice') {
  //   practiceStatus = PracticeOnLevel(level, maxLevel);
  //   EvalPractice(practiceStatus);
  //   level++;
  // }
}

function toggleLightKey(key) {
  key.classList.add('light');
  setTimeout(() => {key.classList.remove('light')}, 300);
}

//Implement practice on specific level
function PracticeOnLevel(maxLevel) {
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

function PlayArray(level) {
  for (let j = 0; j <= level; j++) {
    setTimeout(() => { GetSoundKey(tabs[j]).play(); toggleLightKey(tabs[j]) }, 1000 * j);
  }
  setTimeout(() => {console.log('Song ended')} , 1000 * level)
}

function onError() {
  console.log(`Wrong key!`);
  EvalPractice('fail');
}

function CaptureKeyEvent() {
  C.addEventListener('click', CheckTabMatch);
  D.addEventListener('click', CheckTabMatch);
  E.addEventListener('click', CheckTabMatch);
  F.addEventListener('click', CheckTabMatch);
  G.addEventListener('click', CheckTabMatch);
  A.addEventListener('click', CheckTabMatch);
}

function CheckTabMatch() {
  tappedKey = event.target;
  GetSoundKey(tappedKey).play();
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

function NextLevel() {
  if (tapCounter > practice.level) {
    console.log(`Transition to level ${practice.level+1}`)
    //Restart tappedKey
    tapCounter = 0;
    //Remove event listeners
    C.removeEventListener('click', CheckTabMatch);
    D.removeEventListener('click', CheckTabMatch);
    E.removeEventListener('click', CheckTabMatch);
    F.removeEventListener('click', CheckTabMatch);
    G.removeEventListener('click', CheckTabMatch);
    A.removeEventListener('click', CheckTabMatch);
    //Increment level
    practice.level++
    //Start practice on new level
    setTimeout(StartPractice, 2000);
  }
  if (practice.level === tabs.length) {
    EvalPractice('succeded');
  }
}

function EvalPractice(practiceStatus) {
  console.log(`Eval practice: ${practiceStatus}`);
  switch (practiceStatus) {
    case 'succeded':
      swal("Congratulations!",`You learn the ${practice.selectedSong}`, "success");
      break;
    case 'fail':
      swal("Sorry :(",`You tapped the wrong key`, "error");
  }
}
