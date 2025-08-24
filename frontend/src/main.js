import axios from "axios";


const app = document.querySelector("#app");

async function fetchMessage() {
    try {
        const res = await axios.get("http://localhost:3000/api/message");
        app.innerHTML = `<h2>${res.data.message}</h2>`;
    } catch (err) {
      app.innerHTML = "<p>Failed to fetch API</p>";
      console.error(err);
    }
}

fetchMessage(); 