let useAPI = document.getElementsByClassName("useAPI")

fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPI.length; j++) {
                useAPI[j].innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" style="background-image : url('${data[i].image}')">
                                        <div class="ep">${data[i].episode}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${data[i].cmt}</div>
                                        <div class="view"><i class="fa fa-eye"></i> ${data[i].views}</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>${data[i].genre}</li>
                                        </ul>
                                        <h5><a href="#">${data[i].title}</a></h5>
                                    </div>
                                </div>
                            </div>
            `
            }
        }
    })