document.getElementById('donateButton').addEventListener('click', function () {
    const donationInput = document.getElementById('donationAmount');
    const donationDestination = document.getElementById('donationDestination');
    const header = document.getElementById('header');
    const teksti = document.getElementById('tekstiaa');
    const nimi = document.getElementById('nimi');
    const msg = document.getElementById('confirmationMessage');
    const amount = donationInput.value;
    const destination = donationDestination.value;

    if (amount && destination && nimi.value) {
        if (amount < 0.01) { // tää on huonoa koodia, mä tiiän sen, sä tiiät sen. Unohda että tää on olemassa.
            alert('lahjoita järkevä määrä');
        } else {
            // Simuloidaan lahjoitusprosessia
            alert(`Olet lahjoittanut ${amount}€ kohteeseen ${destination}!`);

            // Piilotetaan syöte, valinta ja painike
            donationInput.value = ''; // Tyhjennetään syöte
            donationInput.style.display = 'none'; // Piilotetaan syötekenttä
            donationDestination.style.display = 'none'; // Piilotetaan valintakenttä
            this.style.display = 'none'; // Piilotetaan painike
            teksti.style.display = 'none';
            nimi.style.display = 'none';
            header.innerHTML = 'Lahjoitit Nyt';
            msg.innerHTML = `Kiitos lahjoituksestasi ${nimi.value}! 💖`

            // Näytetään vahvistusviesti animaatiolla
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.classList.remove('hidden');
            confirmationMessage.classList.add('show');
        }
    } else {
        alert('Ole hyvä ja syötä lahjoitussumma, valitse kohde ja kirjoita nimesi.');
    }
});