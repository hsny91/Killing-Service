class DBManager {
    constructor() {
      this.db = localStorage;
        this.setInitialData();
    }
    setInitialData() {
      let customer = [{
        customerName: "Mehmet",
        killist: [{victimName: "ahmet", victimAdress: ["adress1", "adres2", "adres3"], victimStatus: false},
                 { victimName: "ali",victimAdress: ["adress1", "adres2"],victimStatus: false}]
    },
    {
        customerName: "Hasan",
        killist: [{victimName: "Ayse",victimAdress: ["adress1", "adres2"], victimStatus: false}]
    },
    {
        customerName: "Huseyin",
        killist: [{victimName: "Fatma", victimAdress: ["adress1"],victimStatus: false},
                  {victimName: "Kadir",victimAdress: ["adress1", "adres2", "adres3"],victimStatus: false}]
    },
    {
      customerName: "Sevgi",
      killist: [{victimName: "Gulsen", victimAdress: ["adress1"],victimStatus: false},
                {victimName: "Burak",victimAdress: ["adress1", "adres2", "adres3"],victimStatus: false}]
  } 
    
]
   this.checkData(customer);
    
}
checkData(pData){
  if (!this.getItem("victim")) {
    this.setItem("victim",pData);
}
else{
  pData=this.getItem("victim")
}
}
    setItem(key, value){
      value = JSON.stringify(value);
      this.db.setItem(key, value);
    }
  
    getItem(key){
      let data = this.db.getItem(key);
      return JSON.parse(data);
     
    }
  }
  