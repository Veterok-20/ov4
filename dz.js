// const forum = document.querySelector("#forum")

// const alertMsg = document.querySelector(".alert")

// const getMessagesBtn = document.getElementById('get-chat-messages')

function delay(ms, response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(response), ms);
  });
}

message = [];

offset = 0;

resultHtml = "";

function getMessageFromServer(sdvig) {
  return fetch(
    `http://user08.test1.seschool.ru:3000/api/chat/?offset=${sdvig}&limit=10`
  );
}

// // for (let i = 1; i<6; i++) {
// getMessageFromServer(offset)
//   .then((response) => {
//     console.log("OFFSET: " + offset);
//     return delay(5000, response);
//   })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((message) => {
//     offset += 10;
//     for (let i = 0; i <= 9; i++) {
//       console.log(message[i].username + ":" + message[i].message);
//     }

//     if (offset == 50) {
//       throw new Error("Limit of records");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   })

//   .then(() => getMessageFromServer(offset))
//   .then((response) => {
//     return delay(5000, response);
//   })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((message) => {
//     offset += 10;
//     for (let i = 0; i <= 9; i++) {
//       console.log(message[i].message);
//     }

//     if (offset == 50) {
//       throw new Error("Limit of records");
//     }
//     })

//     .then(() => getMessageFromServer(offset))
//   .then((response) => {
//     return delay(5000, response);
//   })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((message) => {
//     for (let i = 0; i <= 9; i++) {
//       console.log(message[i].message);
//     }

//     if (offset == 50) {
//       throw new Error("Limit of records");
//     }
//   });

// // }
// // Вывод в чат

// // message.forEach(mes => {

// // resultHtml += `<li class = "list-group-item">${mes.username}: ${mes.message}</li>`

// // })

// // forum.innerHTML = resultHtml

sdvig = 0;
async function func() {
  for (let i = 0; i < 6; i++) {
    await delay(2000);
    let response = await getMessageFromServer(sdvig);
    let pars = await response.json();
    console.log(response);
    //for (let i = 0; i < 9; i++) {
    pars.forEach(elem => console.log(elem.username + ":" + elem.message))
    
    sdvig += 10;
    console.log(sdvig);
  }
}

func();

console.log(sdvig);
// away fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=${offset}&limit=10`)
