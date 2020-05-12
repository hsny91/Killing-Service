/**
 * Manager'den aldigi parametreler dogrultusunda maktul isimlerini ekrana yazdirir.
 */
class ViewVictim {
  viewVictimInformation(pVictimInformation) {
    console.log(pVictimInformation);
    let victim = ``;
    victim += `<div class="container">
               <h3 class="h3">TARGET</h3>
               <div class="row">`;
    pVictimInformation.map((data) => {
        victim += `
            <div class="col-md-3 col-sm-6" >
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">
                        <img class="pic-1" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png">
                        <img class="pic-2" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png">
                    </a>
                </div>
                <div class="product-content">
                    <h3 id="victimTitle" class="title"><a id="${data.victimName}" href="#">${data.victimName}</a></h3>
                </div>
            </div>
        </div>`;
      }).join("");
    victim += ` </div>
        </div>
        <hr>
        <information></information>
        `;
    document.querySelector("victim").innerHTML = victim;
  }
}
