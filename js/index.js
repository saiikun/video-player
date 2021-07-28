const $video = document.querySelector('#video')
const $backward = document.querySelector('#backward')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')

$backward.addEventListener('click', handleBackward)
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleForward)

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10 
    $video.currentTime -= 10 
    console.log('le diste click al botón de retroceder 10 segundos', $video.currentTime)
}

function handlePlay() {
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le diste click al botón de play')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true;
    $play.hidden = false;
    console.log('le diste click al botón de pause')
}

function handleForward() {
    //$video.currentTime = $video.currentTime + 10 
    $video.currentTime += 10 
    console.log('le diste click al botón de avanzar 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', hanldeLoaded)
$video.addEventListener('timeupdate', hanldeTimeUpdate)

function hanldeLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function hanldeTimeUpdate() {
    $progress.value = $video.currentTime
    // console.log('Tiempo actual: ', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}