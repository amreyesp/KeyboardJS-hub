function PracticeSong() {
  swal({
    title: "¿Do you want to select the song?",
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
      song1: {
        text: "Song 1",
        value: "song1",
      },
      song2: {
        text: "Song 2",
        value: "song2",
      },
      song3: {
        text: "Song 3",
        value: "song3",
      },
      song4: {
        text: "Song 4",
        value: "song4",
      },
      other: {
        text: "No, I want a random song",
        value: "random",
      }
    },
  })
  .then(value => {
    swal("Let's begin!",`You selected the ${value} option`, "success")
  })
}
