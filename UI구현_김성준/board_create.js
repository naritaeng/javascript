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
  function createPost(title, content, name,id,time,count) {
    const post = getPost();
    const newPost = {
      title: title,
      content: content,
      name: name,
      id:id,
      time: time,
      count: count,
    };
    post.push(newPost);
    savePost(post);
  }

  if (getPost().length === 0) {
    id_count = 0;
  } else {
    id_count = getPost()[getPost().length - 1].id;
  }

  function timeNow() {
    const today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  }
  let countNum = 0;
  const submit = document.getElementById("postForm");
  submit.addEventListener("submit", function (event) {
    id_count++;
    id_count=id_count;

    const titleInput = document.getElementById("board_title");
    const contentInput = document.getElementById("board_content");
    const nameInput = document.getElementById("board_name");

    const title = titleInput.value;
    const content = contentInput.value;
    const name = nameInput.value;
    const id = id_count;
    const time = timeNow();
    const count = "notyet..";


    createPost(title, content, name,id,time,count);

    titleInput.value = "";
    contentInput.value = "";
    nameInput.value = "";

    window.location = "./noticeboard.html"
  });