// const api_endpoint = 'http://127.0.0.1:8000';
const api_endpoint = "https://portfolio.sinarabadikeramik.com";

const getData = (type) => {
  return axios
    .get(`${api_endpoint}/api/images?user_id=1&type=${type}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const loadData = async (type) => {
  let res = await getData(type);
  const endpoint = `${api_endpoint}/storage/`;
  if (res.response == "ok") {
    let content;
    res.data.forEach(function (data) {
      content += `<div class="grid-img-container">
                          <img src="${endpoint + data.featured}" alt="">
                          <div class="grid-tag">
                          </div>
                      </div>`;
    });
    console.log(content);
    $(".grid-container .grid").html(content);
  }
};
