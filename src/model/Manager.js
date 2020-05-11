class Manager {
  constructor(pViewCustomerInformation,pViewVictimInformation,pViewVictimStatusInformation) {
    this.dbManager = new DBManager();
    this.viewCustomerInformation = pViewCustomerInformation;
    this.viewVictimInformation=pViewVictimInformation;
    this.viewVictimStatusInformation=pViewVictimStatusInformation;
  }
  start() {
    this.viewCustomerInformation(this.dbManager.getItem("victim"));
    this.checkCustomer();
    this.checkVictim();
  }
  checkCustomer() {
    this.dbManager.getItem("victim").map((customer) => {
        document
          .querySelector(`#${customer.customerName}`)
          .addEventListener("click", this.checkToCustomer.bind(this));
      });
      
  }
  checkToCustomer(item){
      this.dbManager.getItem("victim").map((customer) => {
        if (item.target.id === customer.customerName)
         this.viewVictimInformation(customer.victimList);

      });
     
}
checkVictim(){
    let victims=this.dbManager.getItem("victim").victimList;
    console.log(victims)
    victims.map((pVictim) => {
        document
          .querySelector(`#${pVictim.victimName}`)
          .addEventListener("click", this.checkToVictim.bind(this));
      });
}
checkToVictim(){
console.log("x")
}

}
