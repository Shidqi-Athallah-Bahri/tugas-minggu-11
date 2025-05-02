function konversi() {
    const cm1 = document.getElementById("cm1").value;
    
    const mm1 = cm1 * 10;  
    document.getElementById("hasil").innerText = mm1 + " mm";;
}

function konversi2() {
    const mm = document.getElementById("mm").value;
    
    const cm = mm / 10;  
    document.getElementById("hasil2").innerText = cm + "cm";
}