function load_checkmarks(ev) {
    if (localStorage.getItem('laerskool-fairland') == 'true') {
        var fairland = document.getElementById('laerskool-fairland')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('spca-volunteer') == 'true') {
        var fairland = document.getElementById('spca-volunteer')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('helpmekaar-kollege') == 'true') {
        var fairland = document.getElementById('helpmekaar-kollege')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('admin-finances') == 'true') {
        var fairland = document.getElementById('admin-finances')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('wits-student') == 'true') {
        var fairland = document.getElementById('wits-student')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('waiter') == 'true') {
        var fairland = document.getElementById('waiter')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check"  data-ie11-classes="">&nbsp;</i>';
    }

    if (localStorage.getItem('tutoring') == 'true') {
        var fairland = document.getElementById('tutoring')
        fairland.classList.add('visited-timeline-block');
        fairland.innerHTML = '<i class="svg-m s123-icon-converter timeline-i" data-icon-name="check" data-ie11-classes="">&nbsp;</i>';
    }
}

document.addEventListener('load', load_checkmarks);