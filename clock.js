function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourDeg = (hours % 12) * 30 + minutes / 2;
    const minuteDeg = minutes * 6 + seconds / 10;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Update numbers
    const numbers = document.querySelectorAll('.number');

    numbers.forEach((number, index) => {
        const numberDeg = (index + 1) * 30;

        const x = Math.cos((numberDeg - 90) * (Math.PI / 180)) * 80; // 80 is the radius
        const y = Math.sin((numberDeg - 90) * (Math.PI / 180)) * 80;

        number.style.left = `calc(50% + ${x}px)`;
        number.style.bottom = `calc(50% + ${y}px)`;
    });

    setTimeout(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    updateClock();
});
