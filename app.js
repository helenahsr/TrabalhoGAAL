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

function distanciaPonto() {
    let [A, B, C, D] = document.getElementById("coeficiente").value.split(" ").map(Number);
    let P = document.getElementById("ponto3").value.split(" ").map(Number);
    let distancia = Math.abs(A * P[0] + B * P[1] + C * P[2] + D) / Math.sqrt(A ** 2 + B ** 2 + C ** 2);
    if (distancia === 0) {
        document.getElementById("resp3").innerHTML = ("O ponto está contido no plano, então a distância é 0.");
    } else {
        document.getElementById("resp3").innerHTML = (`A distância do ponto ao plano é: ${distancia}`);
    }
}

function distanciaPontoReta() {
    let P = document.getElementById("ponto4").value.split(" ").map(Number);
    let A = document.getElementById("ponto5").value.split(" ").map(Number);
    let V = document.getElementById("vetor3").value.split(" ").map(Number);

    let PA = P.map((coord, i) => coord - A[i]);
    let cruzado = crossProduct(PA, V);
    let distancia = magnitude(cruzado) / magnitude(V);

    if (distancia === 0) {
        document.getElementById("resp4").innerHTML = ("O ponto está contido na reta, então a distância é 0.");
    } else {
        document.getElementById("resp4").innerHTML = (`A distância do ponto à reta é: ${distancia}`);
    }
}

// Função para calcular a distância entre dois planos
function distanciaEntrePlanos() {
    let [A1, B1, C1, D1] = prompt("Insira os coeficientes do primeiro plano (A1x + B1y + C1z + D1 = 0):").split(" ").map(Number);
    let [A2, B2, C2, D2] = prompt("Insira os coeficientes do segundo plano (A2x + B2y + C2z + D2 = 0):").split(" ").map(Number);

    let N1 = [A1, B1, C1];
    let N2 = [A2, B2, C2];

    if (magnitude(crossProduct(N1, N2)) === 0) {
        console.log("Os planos são paralelos.");
        let distancia = Math.abs(D2 - D1) / magnitude(N1);
        console.log(`A distância entre os planos é: ${distancia}`);
    } else {
        console.log("Os planos se intersectam, então a distância é 0.");
    }
}

// Função para calcular a distância entre duas retas
function distanciaEntreRetas() {
    let A1 = prompt("Insira o ponto A1(x, y, z) pertencente à primeira reta (separado por espaços):").split(" ").map(Number);
    let V1 = prompt("Insira o vetor diretor V1(x, y, z) da primeira reta (separado por espaços):").split(" ").map(Number);

    let A2 = prompt("Insira o ponto A2(x, y, z) pertencente à segunda reta (separado por espaços):").split(" ").map(Number);
    let V2 = prompt("Insira o vetor diretor V2(x, y, z) da segunda reta (separado por espaços):").split(" ").map(Number);

    let A1A2 = A2.map((coord, i) => coord - A1[i]);
    let cruzado = crossProduct(V1, V2);

    if (magnitude(cruzado) === 0) {
        console.log("As retas são paralelas.");
        let distancia = magnitude(crossProduct(A1A2, V1)) / magnitude(V1);
        console.log(`A distância entre as retas é: ${distancia}`);
    } else {
        let distancia = Math.abs(dotProduct(A1A2, cruzado)) / magnitude(cruzado);
        console.log(`A distância entre as retas é: ${distancia}`);
    }
}

// Funções auxiliares para produtos vetorial, escalar e magnitude de vetores
function crossProduct(v1, v2) {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];
}

function dotProduct(v1, v2) {
    return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
}

function magnitude(v) {
    return Math.sqrt(v.reduce((sum, val) => sum + val ** 2, 0));
}
