class Manager {
  constructor(pViewCustomerInformation,pViewVictimInformation) {
    this.dbManager = new DBManager();
    this.viewCustomerInformation = pViewCustomerInformation;
    this.viewVictimInformation=pViewVictimInformation;
  }
  start() {
    this.viewCustomerInformation(this.dbManager.getItem("victim"));
    this.checkCustomer();
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
        console.log(customer)
         this.viewVictimInformation(customer);
      });
      
   
  }

}