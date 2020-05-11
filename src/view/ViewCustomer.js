class ViewCustomer {
  viewCustomerInformation(pData) {
    let customer = ``;
    customer+=`<div class="container">
        <h3 class="h3">KILLING SERVICE </h3>
        <div class="row">`
     pData.map((data) => {
        customer += `
        <div class="col-md-3 col-sm-6" >
        <div class="product-grid2">
            <div class="product-image2">
                <a href="#">
                    <img class="pic-1" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png">
                    <img class="pic-2" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png">
                </a>
            </div>
            <div class="product-content">
                <h3 class="title"><a id="${data.customerName}" href="#">${data.customerName}</a></h3>
            </div>
        </div>
    </div>`
      }).join("");
      customer += ` </div>
    </div>
    <hr> `;
    
    document.querySelector("customer").innerHTML = customer;
  }
}


/*


    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script






<div class="container">
<h3 class="h3">shopping Demo-2 </h3>
<div class="row">
    <div class="col-md-3 col-sm-6">
        <div class="product-grid2">
            <div class="product-image2">
                <a href="#">
                    <img class="pic-1" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png">
                    <img class="pic-2" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png">
                </a>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">isim</a></h3>
                <span class="price">yazı</span>
            </div>
        </div>
    </div>
</div>
</div>
<hr>
*/