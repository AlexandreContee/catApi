const baseUrl = 'https://api.thecatapi.com/v1/images/search/';
const catBtn = document.getElementById(`change-cat`);
const catImg = document.getElementById(`cat`);

const getCats = async () => {
    const data = await fetch(baseUrl)
    .then(res => res.json())
    .catch(e => console.log(e.message));
    
    return data[0].url;
};

const loadImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener(`click`, loadImg);

loadImg();