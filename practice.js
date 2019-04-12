class Practice {

  constructor(random) {
    this.selectedSong = random
    this.setPractice()
    this.ChooseSong()
  }

  setPractice () {
    btnFreeMode.classList.add('hide')
    btnPracticeSong.classList.add('hide')
    btnStartPractice.classList.remove('hide')
    btnHome.classList.remove('hide')
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
        song4: {
          text: "Song 4", value: "song4",
        },
        other: {
          text: "No, I want a random song", value: "random",
        }
      },
    })
    .then(value => {
      this.selectedSong = value
      swal("Let's begin!",`You selected the ${value} option`, "success")
      console.log(this)
    })
    )
    .then (()=> {
      this.LoadSong(this.selectedSong)
    })
  }

  LoadSong(song) {
    console.log(song)
  }

}

function PracticeSong() {
  var practice = new Practice('random')
}
