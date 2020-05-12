/**
 * Manager' dan aldigi parametreler dogrultusunda uzerine tiklanan maktule ait adress ve status(olu veya sag) bilgilerini ekrana yazdiran class
 */
class ViewVictimStatus {
  viewVictimStatusInformation(victimInformation) {
    let informationVictim =
       `<ul class="list-group">
        <li class="list-group-item">${victimInformation.victimName}</li>
        <li class="list-group-item"> adress: ${victimInformation.victimAdress}</li>
        </ul>
        <button type="button" id="${victimInformation.victimName}-H" class="btn btn-dark">CHANGE STATUS</button>`;
    document.querySelector("information").innerHTML = informationVictim;
  }
}
