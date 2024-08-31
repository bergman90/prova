// Calcolatore per 1 euro e 90
const rate1 = 1.90;
const rate2 = 1.66;
const totalAmountElement = document.getElementById('totalCalculator');
const amount1Element = document.getElementById('amount1');
const amount2Element = document.getElementById('amount2');

function updateAmounts() {
    const now = new Date();
    const start = new Date('2024-04-01T00:00:00');
    const elapsed = now - start;
    const seconds = Math.floor(elapsed / 1000);
    const amount1 = (seconds * rate1 / (60 * 60 * 24 * 365)).toFixed(2);
    const amount2 = (seconds * rate2 / (60 * 60 * 24 * 365)).toFixed(2);
    const totalAmount = (parseFloat(amount1) + parseFloat(amount2)).toFixed(2);

    amount1Element.textContent = `€${amount1}`;
    amount2Element.textContent = `€${amount2}`;
    totalAmountElement.textContent = `Totale = €${totalAmount}`;
}

setInterval(updateAmounts, 1000);

// Calcolatore per il tempo trascorso
function updateElapsedTime() {
    const now = new Date();
    const start = new Date('2010-05-12T00:00:00');
    const diff = now - start;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const daysLeft = days % 30;

    document.getElementById('timeElapsed').innerText = 
        `Tempo trascorso dall'ultimo Accordo Integrativo Regionale: ${years} anni, ${months} mesi, ${daysLeft} giorni`;
}

setInterval(updateElapsedTime, 1000);
