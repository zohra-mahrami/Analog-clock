function uptadeClock() {
  const hour = document.querySelector(".a.hour");
  const minute = document.querySelector(".a.minute");
  const second = document.querySelector(".a.second");
  const time = document.querySelector(".clock-time");
  const amPm = document.querySelector(".ampm");
  const date = document.querySelector(".date");
  const btn = document.querySelector(".btn");

  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const hourFormat = hours % 12 || 12;

  
  const hdeg = hourFormat * 30 + minutes ;
  const mdeg = minutes * 6 + seconds * 0.1;
  const sdeg = seconds * 6;

  hour.style.transform = `rotate(${hdeg}deg)`;
  minute.style.transform = `rotate(${mdeg}deg)`;
  second.style.transform = `rotate(${sdeg}deg)`;

  const minuteFormat = minutes.toString().padStart(2, "0");
  const secondFormat = seconds.toString().padStart(2, "0");
  time.innerHTML = `${hourFormat}   :     ${minuteFormat}     :     ${secondFormat}`;
  amPm.textContent = ampm;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date.textContent = now.toLocaleDateString(undefined, options);

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

setInterval(uptadeClock, 1000);
uptadeClock();
