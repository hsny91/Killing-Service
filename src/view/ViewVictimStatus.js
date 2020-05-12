class ViewVictimStatus{
    viewVictimStatusInformation(victimInformation){
        let informationVictim=`<ul class="list-group">
        <li class="list-group-item">${victimInformation.victimName}</li>
        <li class="list-group-item">${victimInformation.victimAdress}</li>
        </ul>
        <button type="button" id="${victimInformation.victimName}-H" class="btn btn-dark">${victimInformation.victimStatus}</button>`

        document.querySelector("information").innerHTML=informationVictim;
    }
}