const url = `https://icanhazdadjoke.com/slack`;

const getJoker = document.querySelector("#getDadJokes");
const innerJoker = document.querySelector(".piada");

const fetchAPI = async () => {
  const getAPI = await fetch(url);
  return await getAPI.json();
};

const data = async () => {
    const { attachments } = await fetchAPI();
    return attachments[0].text;
};

getJoker.addEventListener("click", async () => {
  innerJoker.innerText = await data();
});
