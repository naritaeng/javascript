const k = prompt('국어점수를 입력하세요.') * 1
        const m = prompt('수학점수를 입력하세요.') * 1
        const s = prompt('과학점수를 입력하세요.') * 1
        console.log(`입력하신 국어점수는 ${k}점 입니다.`)
        console.log(`입력하신 수학점수는 ${m}점 입니다.`)
        console.log(`입력하신 과학점수는 ${s}점 입니다.`)
        console.log(`3과목의 평균 점수는 ${(k+m+s)/3}점 입니다.`)
        console.log(`${k>69 && m>50 && s>79}`)
        alert(`3과목의 평균 점수는 ${(k+m+s)/3}점 입니다.`)
        alert(`${k>69 && m>50 && s>79}`)
        let list = ""
        list += `<table>`
            list += `   <tr>
                            <th>/</th>
                            <th>국어</th>
                            <th>수학</th>
                            <th>과학</th>
                        </tr>`
            list += `   <tr>
                            <th>점수</th>
                            <td>${k}</td>
                            <td>${m}</td>
                            <td>${s}</td>
                        </tr>`
            list += `   <tr>    
                            <th>평균</th>
                            <td colspan="4">${(k+m+s)/3}</td>
                            
                        </tr>`
            list += `   <tr>
                            <th>결과</th>
                            <td colspan="4">${k>69 && m>50 && s>79}</td>
                        </tr>`          
            list += `</table>`
        document.write(list)