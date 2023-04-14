async function generarHash() {
    var texto = document.getElementById("texto").value;
    var enc = new TextEncoder();
    var data = enc.encode(texto);
    var hashBuffer = await crypto.subtle.digest('SHA-256', data);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    var hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    document.getElementById("hash").value = hashHex;
}
