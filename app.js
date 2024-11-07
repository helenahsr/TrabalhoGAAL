function retaParametrica() {
    let A = document.getElementById("ponto1").value.split(" ").map(Number);
    let V = document.getElementById("vetor1").value.split(" ").map(Number);

    document.getElementById("resp1").innerHTML = (`As equações paramétricas da reta são:`);
    document.getElementById("resp1").innerHTML += (`<br>x = ${A[0]} + ${V[0]}t`); // Coloca o primeiro número do ponto e o primeiro do vetor
    document.getElementById("resp1").innerHTML += (`<br>y = ${A[1]} + ${V[1]}t`); // Coloca o segundo número do ponto e o segundo do vetor
    document.getElementById("resp1").innerHTML += (`<br>z = ${A[2]} + ${V[2]}t`); // Coloca o terceiro número do ponto e o terceiro do vetor
}

function equacaoGeral() {
    let P = document.getElementById("ponto2").value.split(" ").map(Number);
    let N = document.getElementById("vetor2").value.split(" ").map(Number);

    let d = -(N[0] * P[0] + N[1] * P[1] + N[2] * P[2]);
    document.getElementById("resp2").innerHTML = (`A equação geral do plano é: ${N[0]}x + ${N[1]}y + ${N[2]}z + (${d}) = 0`);
}