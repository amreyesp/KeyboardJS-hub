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
    var tabs = new Array;
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
        tabs = [Esound, Gsound, Csound, Dsound, Esound];
        break;
      case 'song2':
        tabs = [Esound, Esound, Fsound, Gsound, Gsound, Fsound, Esound, Dsound, Csound];
        break;
      case 'song3':
        tabs = [Csound, Csound, Fsound, Fsound, Gsound, Gsound, Fsound, Fsound, Fsound, Esound, Esound, Dsound, Dsound, Csound];
        break;
    }
    console.log(tabs)
  }

}

function PracticeSong() {
  var practice = new Practice('random');
}
