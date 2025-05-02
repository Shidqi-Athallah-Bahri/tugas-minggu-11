function konversi() {
    const cm1 = document.getElementById("cm1").value;
    
    const mm1 = cm1 * 10;  
    document.getElementById("hasil").innerText = mm1 + " mm";
    console.log(mm1 + " mm");
}