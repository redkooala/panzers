
import { connect } from './server_connection';


const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');

Promise.all([
    connect(onGameOver),
]).then(() => {
    playMenu.classList.remove('hidden');
    usernameInput.focus();
    playButton.onclick = () => {
        playMenu.classList.add('hidden');
    };
}).catch(console.error);

function onGameOver() {
   console.log("GAME OWER")
}
