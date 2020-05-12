class Manager {
  victimList = null;
  storageList = null;
  constructor(
    pViewCustomerInformation,
    pViewVictimInformation,
    pViewVictimStatusInformation
  ) {
    this.dbManager = new DBManager();
    this.viewCustomerInformation = pViewCustomerInformation;
    this.viewVictimInformation = pViewVictimInformation;
    this.viewVictimStatusInformation = pViewVictimStatusInformation;
  }
  start() {
    this.storageList = this.dbManager.getItem("victim");
    this.viewCustomerInformation(this.storageList);
    this.checkCustomer();
  }
  checkCustomer() {
    this.storageList.map((pcustomer) => {
      document
        .querySelector(`#${pcustomer.customerName}`)
        .addEventListener("click", this.checkToCustomer.bind(this));
    });
  }
  checkToCustomer(item) {
    this.storageList.map((customer) => {
      if (item.target.id === customer.customerName) {
        this.viewVictimInformation(customer.victimList);
        this.checkVictim(customer.victimList);
        this.victimList = customer.victimList;
        this.statusControlled(this.victimList);
      }
    });
  }
  statusControlled(plist) {
    plist.map((deathorlive) => {
      if (deathorlive.victimStatus == true) {
        document.querySelector(`#${deathorlive.victimName}`).style.color =
          "red";
      } else {
        document.querySelector(`#${deathorlive.victimName}`).style.color =
          "black";
      }
    });
  }

  checkVictim(pVictimList) {
    pVictimList.map((victim) => {
      document
        .querySelector(`#${victim.victimName}`)
        .addEventListener("click", this.checkToVictim.bind(this));
    });
  }
  checkToVictim(item) {
    this.victimList.map((victim) => {
      if (item.target.id === victim.victimName) {
        this.viewVictimStatusInformation(victim);
        this.checkVictimSatus(victim);
      }
    });
  }
  checkVictimSatus(pVictim) {
    document
      .querySelector(`#${pVictim.victimName}-H`)
      .addEventListener("click", () => {
        pVictim.victimStatus = !pVictim.victimStatus;
        this.dbManager.setItem("victim", this.storageList);
        console.log(pVictim.victimStatus);
        this.statusControlled(this.victimList);
      });
  }
}
