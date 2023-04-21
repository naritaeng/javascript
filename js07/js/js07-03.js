const tem = prompt('현재 온도를 입력하세요.')
        const temp = ['','','','','']
        const message = [
            '쌀쌀해요',
            '시원하네요',
            '따뜻하네요',
            '더워요',
            '많이 더워요'
        ]
        if(tem<16){
            temp[0]+=message[0]
            document.write(`<div class="back"></div>`)
        } else if(tem>15 && tem<22){
            temp[1]+=message[1]
        } else if(tem>21 && tem<28){
            temp[2]+=message[2]
        } else if(tem>27 && tem<32){
            temp[3]+=message[3]
        } else if(tem>31) {
            temp[4]+=message[4]
        }
        let list = ''
            list += `<table>
            <tr>
                <td colspan="6">16미만</td>
                <td colspan="4">16이상~22미만</td>
                <td colspan="4">22이상~28미만</td>
                <td colspan="3">28이상~32미만</td>
                <td colspan="6">32이상</td>
            </tr>
            <tr class="color">
                <td class="cold"></td><td class="cold"></td><td class="cold"></td><td class="cold"></td><td class="cold"></td><td class="cold"></td>
                <td class="cool"></td><td class="cool"></td><td class="cool"></td><td class="cool"></td>
                <td class="warm"></td><td class="warm"></td><td class="warm"></td><td class="warm"></td>
                <td class="hot"></td><td class="hot"></td><td class="hot"></td>
                <td class="sohot"></td><td class="sohot"></td><td class="sohot"></td><td class="sohot"></td><td class="sohot"></td><td class="sohot"></td>
            </tr>
            <tr>
                <td colspan="6">${temp[0]}</td>
                <td colspan="4">${temp[1]}</td>
                <td colspan="4">${temp[2]}</td>
                <td colspan="3">${temp[3]}</td>
                <td colspan="6">${temp[4]}</td>
            </tr>
            </table>`
            document.write(list)
            document.write(`<h1>지금 온도는 ${tem}도 이며, 상태는 ${temp}</h1>`)
