// tady je místo pro náš program

let vystupProgramu = document.querySelector(".vystupProgramu");
let jmeno = prompt("Jaké je vaše jméno?");
let prijmeni = prompt("Jaké je vaše příjmení?");
let rokNarozeni = Number(prompt("Jaký je váš rok narození?"));
let barva = prompt("Zadej svou oblíbenou barvu");

function vypocetVeku(rokNarozeni) {
    return 2023 - rokNarozeni;
} 

vystupProgramu.innerHTML = jmeno + " " + prijmeni + ", " + vypocetVeku(rokNarozeni);
vystupProgramu.style.color = barva;


