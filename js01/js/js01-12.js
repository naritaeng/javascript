let tof = prompt('true 또는 false 값을 입력하세요.')
let list = ''
    list += `<h1>논리연산자</h1>`
    list += `<table class="a">`;
    list += `<tr><th>&&연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list += `<tr><td><mark>${tof}</mark></td><td>&&</td><td>${false && tof}</td><td>${false && tof}</td></tr>`;
    list += `<tr><td><mark>${tof}</mark></td><td>&&</td><td>${tof && true}</td><td>${true && tof}</td></tr>`;
    list += `<tr><th>||연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
    list += `<tr><td><mark>${tof}</mark></td><td>||</td><td>${false || tof}</td><td>${false || tof}</td></tr>`;
    list += `<tr><td><mark>${tof}</mark></td><td>||</td><td>${true || tof}</td><td>${true || tof}</td></tr>`;
    list += `</table>`;
document.write(list)