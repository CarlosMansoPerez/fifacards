document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerImageInput = document.getElementById('image').files[0];
    const playerRating = document.getElementById('rating').value;
    const playerPosition = document.getElementById('position').value;
    const nationalityImage = document.getElementById('nationality').value;
    const teamImage = document.getElementById('team').value;
    const playerPace = document.getElementById('pace').value;
    const playerName = document.getElementById('name').value;
    const playerShooting = document.getElementById('shooting').value;
    const playerPassing = document.getElementById('passing').value;
    const playerDribbling = document.getElementById('dribbling').value;
    const playerDefense = document.getElementById('defense').value;
    const playerPhysical = document.getElementById('physical').value;
    const carta = document.getElementById('carta');

    if (playerImageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('playerImage').src = e.target.result;
        }
        reader.readAsDataURL(playerImageInput);
    }

    document.getElementById('playerRating').textContent = playerRating;
    document.getElementById('playerPosition').textContent = playerPosition;
    document.getElementById('nationalityImage').src = './img/' + nationalityImage;
    document.getElementById('teamImage').src = './img/' + teamImage; 
    // document.getElementById('teamImage').src = teamImage;
    document.getElementById('playerPace').textContent = playerPace;
    document.getElementById('playerName').textContent = playerName;
    document.getElementById('playerShooting').textContent = playerShooting;
    document.getElementById('playerPassing').textContent = playerPassing;
    document.getElementById('playerDribbling').textContent = playerDribbling;
    document.getElementById('playerDefense').textContent = playerDefense;
    document.getElementById('playerPhysical').textContent = playerPhysical;
    carta.style.display = "block";
});
