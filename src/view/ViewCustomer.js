/**
 * Manager' dan aldigi musteri bilgileri dogrultusunda musteri isimlerini ekrana yazdiran class.
 */
class ViewCustomer {
  viewCustomerInformation(pData) {
    let customer = ``;
    customer += `<div class="container">
        <h3 class="h3">KILLING SERVICE </h3>
        <div class="row">`;
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
                <h3 class="title">
                <a id="${data.customerName}" href="#">${data.customerName}</a></h3>
            </div>
        </div>
    </div>`;
      }).join("");
    customer += ` </div>
    </div>
    <hr> <victim></victim> `
    document.querySelector("customer").innerHTML = customer;
  }
}
