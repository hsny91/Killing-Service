class Manager {
  victimList=null;
  storageList=null;
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
    this.storageList=this.dbManager.getItem("victim")
    this.viewCustomerInformation( this.storageList);
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
      if (item.target.id === customer.customerName){
        this.viewVictimInformation(customer.victimList);
        this.checkVictim(customer.victimList);
        this.victimList=customer.victimList;
      }
    });
   }
  checkVictim(pVictimList){
pVictimList.map((victim)=>{document.querySelector(`#${victim.victimName}`).addEventListener("click",this.checkToVictim.bind(this))
})
    
  }
  checkToVictim(item){
     this.victimList.map((victim)=>{
      if (item.target.id === victim.victimName){
        this.viewVictimStatusInformation(victim);
        console.log(victim);
        this.checkVictimSatus(victim)
      }
     }) 
       
  }
  checkVictimSatus(pVictim){
    document.querySelector(`#${pVictim.victimName}-H`).addEventListener("click",()=>{
    pVictim.victimStatus=!pVictim.victimStatus
   
 
   })
   
  }
}













/*class Manager {
  victimList=null;
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
    this.viewCustomerInformation(this.dbManager.getItem("victim"));
    this.checkCustomer();
   
  }
  checkCustomer() {
    this.dbManager.getItem("victim").map((pcustomer) => {
      document
        .querySelector(`#${pcustomer.customerName}`)
        .addEventListener("click", this.checkToCustomer.bind(this));
    });
  }
  checkToCustomer(item) {
    this.dbManager.getItem("victim").map((customer) => {
      if (item.target.id === customer.customerName){
        this.viewVictimInformation(customer.victimList);
        this.checkVictim(customer.victimList);
        this.victimList=customer.victimList;
      }
    });
   }
  checkVictim(pVictimList){
pVictimList.map((victim)=>{document.querySelector(`#${victim.victimName}`).addEventListener("click",this.checkToVictim.bind(this))
})
    
  }
  checkToVictim(item){
     this.victimList.map((victim)=>{
      if (item.target.id === victim.victimName){
        this.viewVictimStatusInformation(victim);
        console.log(victim);
        this.checkVictimSatus(victim)
      }
     }) 
       
  }
  /*checkVictimSatus(pVictim){
    document.querySelector(`#${pVictim.victimName}-H`).addEventListener("click",()=>{
    pVictim.victimStatus=!pVictim.victimStatus
   let x= this.dbManager.getItem("victim").map(a=>{
            return a.victimList;
   })
   x.map((a=>{
     if(a.victimName===pVictim.victimName){
    a.victimStatus=pVictim.victimStatus
 }
   }))
   console.log(this.dbManager.getItem("victim"))
   console.log(x);
   console.log(y);
    console.log(pVictim.victimStatus)

    })
  }*/

