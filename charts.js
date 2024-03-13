async function fetchSoundCloudCharts() {
    const url = 'https://soundcloud-charts-api.p.rapidapi.com/charts?genre=soundcloud%3Agenres%3Adeephouse&kind=trending&region=soundcloud%3Aregions%3AUS&limit=50';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5fe01279c4msh0b48e990dfe7313p1d651fjsn13e7a532a658',
		    'X-RapidAPI-Host': 'soundcloud-charts-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Dando formato
        const chartDataElement = document.getElementById('chartData');
        chartDataElement.innerHTML = ''; // Limpiar la info anterior
        result.data.collection.forEach((item, index) => {
            const track = item.track;
            const trackHtml = `
            <span>${index + 1}</span>
                <div class="track">
                    <img src="${track.artwork_url}" alt="Track Artwork">
                    <div class="info">
                        <h3>${track.title}</h3>
                        <p>Artist: ${track.user.username}</p>
                        <p>Genre: ${track.genre}</p>
                    </div>
                </div>
            `;
            chartDataElement.innerHTML += trackHtml;
        });
    } catch (error) {
        console.error(error);
    }
}

// Llamada a la funcion 
fetchSoundCloudCharts();