
console.log("welcome to spotify");

//intialize the variables
// let songindex = 0;
let audioElement = new Audio('songs/1.mp3');

// let myprogressbar = document.getElementById('myprogressbar');

// let mastersongname = document.getElementById('mastersongname');

const songs = [
    {
        id: 1,
        songname: `lem me love you</span>`,
        coverPath: "images/1.jpg"
    },
    {
        id: 2,
        songname: `Mahadeva </span>`,
        coverPath: "images/2.jpg"
    },
    {
        id: 3,
        songname: `Remix 2024 </span>`,
        coverPath: "images/3.jpg"
    },
    {
        id: 4,
        songname: `shaitan ka sala </span>`,
        coverPath: "images/4.jpg"
    },
    {
        id: 5,
        songname: `tum pass ho </span>`,
        coverPath: "images/5.jpg"
    },
    {
        id: 6,
        songname: `yeh duniya </span> `,
        coverPath: "images/6.jpg"
    }

]
//when song chages the image and name is also change
Array.from(document.getElementsByClassName('songsitems')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;

})

//handling play/pause button click
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        console.log("audio playing");
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        console.log("audio paused");
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }

});

let index = 0;
Array.from(document.getElementsByClassName('songitemplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        audioElement.src = `songs/${index}.mp3`
        audioElement.play();
    })


});

let currentSongIndex = 0; // To keep track of the currently playing song

let makeallplay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e) => {
        e.classList.add('fa-play');
        e.classList.remove('fa-pause');
    });
}

let updateMasterPlayButton = (isPlaying) => {
    let masterPlayButton = document.getElementById('masterplay'); // Master play button ID
    if (isPlaying) {
        masterPlayButton.classList.remove('fa-play');
        masterPlayButton.classList.add('fa-pause');
    } else {
        masterPlayButton.classList.remove('fa-pause');
        masterPlayButton.classList.add('fa-play');
    }
}


// Event listener for song item play buttons
Array.from(document.getElementsByClassName('songitemplay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-pause')) {
            // Pause the song if it's currently playing
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            audioElement.pause(); // Pause the music
            updateMasterPlayButton(false); // Change the master play button to play
        } else {
            // Reset all buttons to "play" state
            makeallplay();
            // Change the clicked button to "pause"
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            // Update the audio source and play the song
            audioElement.src = `songs/${index + 1}.mp3`; // Assuming the song files are numbered
            audioElement.play();
            updateMasterPlayButton(true); // Change the master play button to pause
            currentSongIndex = index; // Update the current song index
        }
    });
});

// Event listener for master play button
document.getElementById('masterplay').addEventListener('click', () => {
    let masterPlayButton = document.getElementById('masterplay');
    let currentSongButton = document.getElementsByClassName('songitemplay')[currentSongIndex];

    if (audioElement.paused) {
        // If the audio is paused, play it
        audioElement.play();
        masterPlayButton.classList.remove('fa-play');
        masterPlayButton.classList.add('fa-pause');
        currentSongButton.classList.remove('fa-play');
        currentSongButton.classList.add('fa-pause');
    } else {
        // If the audio is playing, pause it
        audioElement.pause();
        masterPlayButton.classList.remove('fa-pause');
        masterPlayButton.classList.add('fa-play');
        currentSongButton.classList.remove('fa-pause');
        currentSongButton.classList.add('fa-play');
    }
});












// // next button
// document.getElementById('next').addEventListener('click', () => {
//     songindex = (songindex >= 6) ? 0 : songindex + 1 // Adjusted for zero-based index
//     audioElement.src = `songs/${songindex + 1}.mpeg`;
//     mastersongname.innerHTML = songs[songindex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play().then(() => {
//         console.log("Playing next song:", songs[songindex].songName);
//     }).catch(error => {
//         console.error("Error playing audio:", error);
//     });
//     // audioElement.play();
//     gif.style.opacity = 1;
//     masterplay.classList.remove('fa-play');
//     masterplay.classList.add('fa-pause');
// })

// //previous button
// document.getElementById('previous').addEventListener('click', () => {
//     songindex = (songindex <= 0) ? 6 : songindex - 1 // Adjusted for zero-based index
//     audioElement.src = `songs/${songindex + 1}.mpeg`;
//     mastersongname.innerHTML = songs[songindex].songName;
//     audioElement.currentTime = 0;
//     // audioElement.play();
//     audioElement.play().then(() => {
//         console.log("Playing previous song:", songs[songindex].songName);
//     }).catch(error => {
//         console.error("Error playing audio:", error);
//     });
//     gif.style.opacity = 1;
//     masterplay.classList.remove('fa-play');
//     masterplay.classList.add('fa-pause');
// });

// // Initialize variables
// let currentTimeDisplay = document.getElementById('current-time');
// let durationTimeDisplay = document.getElementById('duration-time');
// let remainingTimeDisplay = document.getElementById('remaining-time');

// // Display the total duration once the metadata is loaded
// audioElement.addEventListener('loadedmetadata', () => {
//     let duration = audioElement.duration;
//     let minutes = Math.floor(duration / 60);
//     let seconds = Math.floor(duration % 60);
//     if (seconds < 10) seconds = '0' + seconds;
//     durationTimeDisplay.innerText = `${minutes}:${seconds}`;
// });

// // Update the current time, remaining time, and duration
// audioElement.addEventListener('timeupdate', () => {
//     // Update current time display
//     let currentTime = audioElement.currentTime;
//     let currentMinutes = Math.floor(currentTime / 60);
//     let currentSeconds = Math.floor(currentTime % 60);
//     if (currentSeconds < 10) currentSeconds = '0' + currentSeconds;
//     currentTimeDisplay.innerText = `${currentMinutes}:${currentSeconds}`;

//     // Update total duration (in case of changes)
//     let duration = audioElement.duration;
//     let durationMinutes = Math.floor(duration / 60);
//     let durationSeconds = Math.floor(duration % 60);
//     if (durationSeconds < 10) durationSeconds = '0' + durationSeconds;
//     durationTimeDisplay.innerText = `${durationMinutes}:${durationSeconds}`;

//     // Update remaining time display
//     let remainingTime = duration - currentTime;
//     let remainingMinutes = Math.floor(remainingTime / 60);
//     let remainingSeconds = Math.floor(remainingTime % 60);
//     if (remainingSeconds < 10) remainingSeconds = '0' + remainingSeconds;
//     remainingTimeDisplay.innerText = `-${remainingMinutes}:${remainingSeconds}`;

//     // Update progress bar
//     let progress = parseInt((currentTime / duration) * 100);
//     myprogressbar.value = progress;
// });