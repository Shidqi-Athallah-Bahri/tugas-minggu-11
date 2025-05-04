localStorage.setItem('conversion', 'cm'); 
function konversi() {
    const conversion = localStorage.getItem('conversion');
    if(conversion == 'cm') {
        const cm1 = document.getElementById("cm1").value;
        const mm1 = cm1 * 10;  
        document.getElementById("hasil").value = mm1 + " mm";;
    } else if(conversion == 'mm') {
        const mm = document.getElementById("cm1").value;
        const cm = mm / 10;  
        document.getElementById("hasil").value = cm + "cm";
    }
}

function tukar() {
    let conversion = localStorage.getItem('conversion');
    const label = document.getElementById('label');
    const inputLabel = document.getElementById('input-label');
    if(conversion == 'cm') {
        localStorage.setItem('conversion', 'mm');
        conversion = localStorage.getItem('conversion');
        inputLabel.innerHTML = `Masukkan (${conversion})`
        label.innerHTML = 'Konversi Nilai dari MM ke CM';
    } else if(conversion == 'mm') {
        localStorage.setItem('conversion', 'cm');
        conversion = localStorage.getItem('conversion');
        inputLabel.innerHTML = `Masukkan (${conversion})`
        label.innerHTML = 'Konversi Nilai dari CM ke MM';
    }
}