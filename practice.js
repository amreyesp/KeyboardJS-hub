class Practice {

  constructor(random) {
    this.selectedSong = random;
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
function StartPractice() {
  //Define number of levels for each song: number of key tabs
  const maxLevel = tabs.length;
  var level = 3;
  var practiceStatus = 'on practice';
  //Practice on each level of the song (e.g. level 0 = key0; level 1 = key0 + key1 ...)
  practiceStatus = PracticeOnLevel(level, maxLevel);
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
function PracticeOnLevel(level, maxLevel) {
  if (level < maxLevel) {
    practiceStatus = 'on practice';
    PlayArray(level)
    CaptureKeyEvent(level);
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
  console.log(`An error ocurred`);
}

function CaptureKeyEvent(level) {
  C.addEventListener('click', CheckTabMatch);
  D.addEventListener('click', CheckTabMatch);
  E.addEventListener('click', CheckTabMatch);
  F.addEventListener('click', CheckTabMatch);
  G.addEventListener('click', CheckTabMatch);
  A.addEventListener('click', CheckTabMatch);

  function CheckTabMatch() {
    tappedKey = event.target;
    GetSoundKey(tappedKey).play();
    if (tapCounter <= level) {
      if (tappedKey === tabs[tapCounter]) {
        console.log(`${tappedKey.id} event captured`)
        tapCounter++;
      } else {
        onError();
        EvalPractice('Practice over');
      }
    }
  }
}

function EvalPractice(practiceStatus) {
  console.log(`Eval practice ${practiceStatus}`);
  if (practiceStatus === 'succeded'){
    //swal("Congratulations!",`You learn the ${practice.selectedSong}`, "success");
  }
}
