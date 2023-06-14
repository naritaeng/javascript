function savePost(post) {
    localStorage.setItem("post", JSON.stringify(post));
  }
  function getPost() {
    const postString = localStorage.getItem("post");
    if (postString) {
      return JSON.parse(postString);
    } else {
      return [];
    }
  }
  function render() {
    const postList = document.getElementById("board_box");
    const post = getPost();
    for (let i = post.length - 1; i >= 0; i--) {
      const list = document.createElement("div");
      const board = document.createElement("table");
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");

      board.className = "add_board";

      postList
        .appendChild(list)
        .appendChild(board)
        .appendChild(tr)
        .append(td1, td2, td3, td4, td5);
      td1.textContent = post[i].id;
      td2.textContent = post[i].title;
      td3.textContent = post[i].name;
      td4.textContent = post[i].count;
      td5.textContent = post[i].time;

      td1.className = "board_num";
      td2.className = "board_tit";
      td3.className = "board_name";
      td4.className = "board_count";
      td5.className = "board_date";
      
      td2.addEventListener("click",()=>{
        postList.remove()
        const divNum =document.createElement("div")
        const divTit =document.createElement("div")
        const divName =document.createElement("div")
        const divCt =document.createElement("div")
        const divDate =document.createElement("div")

        postList.append(divNum,divTit,divName,divCt,divDate)
        // divNum.innerHTML =

      })
    }
  }
  render();
  