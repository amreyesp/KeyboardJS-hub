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
        song1: {
          text: "Song 1", value: "song1",
        },
        song2: {
          text: "Song 2", value: "song2",
        },
        song3: {
          text: "Song 3", value: "song3",
        },
        other: {
          text: "No, I want a random song", value: "random",
        }
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
          break;
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
        break;
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
  var level = 4;
  var practiceStatus = 'on practice';
  //Practice on each level of the song (e.g. level 0 = key0; level 1 = key0 + key1 ...)
  while (practiceStatus === 'on practice') {
    practiceStatus = PracticeOnLevel(level, maxLevel);
    EvalPractice(practiceStatus);
    level++;
  }
}

//Implement practice on specific level
function PracticeOnLevel(level, maxLevel) {
  if (level < maxLevel) {
      PlayArray(level);
      //Let the user try to follow the sequence
      //Compare keys tapped vs elements of array
      //Update practiceResult variable
      //Increment practice level
      practiceStatus = 'on practice';
  } else {
    practiceStatus = 'succeded';
  }
  return practiceStatus;
}

function PlayArray(level) {
  for (let j = 0; j <= level; j++) {
    setTimeout(() => { GetSoundKey(tabs[j]).play(); console.log(tabs[j]) }, 1000 * j);
  }
}

function EvalPractice(practiceStatus) {
  console.log(practiceStatus);
  if (practiceStatus === 'succeded'){
    swal("Congratulations!",`You learn the ${practice.selectedSong}`, "success");
  }
}
