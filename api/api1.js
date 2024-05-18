// Last.fm API anahtarınızı buraya girin
const API_KEY = '3fb1795b0c39029101627318e941331f';
// Sanatçı adı
const artistName = 'Serdar Ortaç';

async function getArtistInfo(artistName) {
    try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`);
        const data = await response.json();
        return data.artist;
    } catch (error) {
        console.error('Hata:', error);
        return null;
    }
}

async function getTopTracks(artistName) {
    try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${API_KEY}&format=json`);
        const data = await response.json();
        return data.toptracks.track;
    } catch (error) {
        console.error('Hata:', error);
        return [];
    }
}

async function getSerdarOrtacInfo() {
    const artistInfo = await getArtistInfo(artistName);
    const topTracks = await getTopTracks(artistName);
    
    return { artistInfo, topTracks };
}

async function showData() {
    const { artistInfo, topTracks } = await getSerdarOrtacInfo();

    const artistInfoDiv = document.getElementById('artistInfo');
    artistInfoDiv.innerHTML = `<p><strong>Sanatçı Adı:</strong> ${artistInfo.name}</p>
                                <p><strong>Biografi:</strong> ${artistInfo.bio.summary}</p>`;

    const topTracksList = document.getElementById('topTracks');
    topTracks.forEach(track => {
        const listItem = document.createElement('li');
        listItem.textContent = track.name;
        topTracksList.appendChild(listItem);
    });
}

window.onload = showData;