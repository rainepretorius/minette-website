function load_checkmarks(ev) {
    if (localStorage.getItem('laerskool-fairland') == 'true') {
        var fairland = document.getElementById('laerskool-fairland');
        fairland.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" style="color:white !important;" data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('spca-volunteer') == 'true') {
        var spca = document.getElementById('spca-volunteer')
        spca.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        spca.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('helpmekaar-kollege') == 'true') {
        var helpies = document.getElementById('helpmekaar-kollege')
        helpies.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        helpies.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('admin-finances') == 'true') {
        var admin = document.getElementById('admin-finances')
        admin.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        admin.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('wits-student') == 'true') {
        var wits = document.getElementById('wits-student')
        wits.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        wits.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('waiter') == 'true') {
        var waiter = document.getElementById('waiter')
        waiter.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        waiter.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('tutoring') == 'true') {
        var tutoring = document.getElementById('tutoring')
        tutoring.style = "background-color: rgb(189, 92, 125) !important; color: whitesmoke !important;"
        tutoring.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }
}

document.addEventListener('load', load_checkmarks);