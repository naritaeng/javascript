const num = prompt('2에서 9까지 중 숫자를 입력하세요') * 1
let p = 1
let list = ""
    list += `<table class="a">`
    list += `<tr><th>단</th><th>X</th><th>곱</th><th>값</th></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `<tr><td>${num}</td><td>X</td><td>${++p}</td><td>${num*p}</td></tr>`
    list += `</table>`
    document.write(list)