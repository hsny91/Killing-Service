class Manager {
  victimList = null;
  storageList = null;// localStorage'deki bilgileri tutan degisken
  constructor(pViewCustomerInformation,pViewVictimInformation,pViewVictimStatusInformation) {
    this.dbManager = new DBManager();
    this.viewCustomerInformation = pViewCustomerInformation;//ViewCustomer classindan cagirilan metodu tutan degisken.
    this.viewVictimInformation = pViewVictimInformation;// ViewVictim classindan cagirilan metodu tutan degisken.
    this.viewVictimStatusInformation = pViewVictimStatusInformation;// ViewVictimStatus classindan cagirilan metodu tutan degisken.
  }/**
   * Start metodu ile localStorage'de buluna musteri bilgileri "this.storageList" e aktarilir.
   * localStorage' dan alinan musteri bilgileri "viewCustomerInformation" metodu ile ekrana yazdirilir.
   * musteri isimlerine click eventi ekleyen "checkCustomer" metodunu cagirir.
   */
  start() {
    this.storageList = this.dbManager.getItem("victim");
    this.viewCustomerInformation(this.storageList);
    this.checkCustomer();
  }/**
   * Musteri isimlerine click eventi ekleyen metod.
   */
  checkCustomer() {
    this.storageList.map((pcustomer) => {
      document.querySelector(`#${pcustomer.customerName}`).addEventListener("click", this.checkToCustomer.bind(this));
    });
  }
  /**
   * uzerine tiklanan musterinin dizinin hangi elemani oldugunu bulur ve o elemani "checkVictim","ViewVictimInformation", "statusControlled"metodlarina parametre olarak gonderir.
   * @param {*} item 
   */
  checkToCustomer(item) {
    this.storageList.map((customer) => {
      if (item.target.id === customer.customerName) {
        this.viewVictimInformation(customer.victimList);// bu metod ile uzerine tiklanan musterinin oldurmek istedigi kisiler "ViewVictim" classindaki metod cagirilarak ekrana yazdirilir.
        this.victimList = customer.victimList;// tiklanan musterinin maktul bilgilerini daha sonraki metodlar icin kullanmak amaciyla olusturulan degisken
        this.checkVictim(customer.victimList); //maktul isimlerine click eventi ekleyen metod
        this.statusControlled(this.victimList);// statusu degisikligi nedeniyle maktul bilgilerinde maydana gelen degisiklikleri kontrol eden metod
      }
    });
  }/**
   * maktul statusu true yapildiginda maktul ölmus kabul edilir ve ismi kirmizi harf ile yazilir.(bu metod ayni zamanda asagida "checkVictimSatus" birdaha cagirildi. Asagida kontrol yapiliyor ve status degistiriliyor burda ise anlik degiklikler ekrana yazdiriliyor) 
   * @param {*} plist 
   */
  statusControlled(plist) {
    plist.map((pCheckStatus) => {
      if (pCheckStatus.victimStatus == true) {
        document.querySelector(`#${pCheckStatus.victimName}`).style.color ="red";
      } else {
        document.querySelector(`#${pCheckStatus.victimName}`).style.color ="black";
      }
    });
  }
  /**
   * maktul isimlerine click eventi ekler ve uzerine tiklanan her maktul icin "checkToVictim" metodunu cagirir.
   * @param {*} pVictimList 
   */
  checkVictim(pVictimList) {
    pVictimList.map((victim) => {
      document.querySelector(`#${victim.victimName}`).addEventListener("click", this.checkToVictim.bind(this));
    });
  }
  /**
   * uzerine tiklanan musterinin dizinin hangi elemani oldugunu bulur ve o elemani "viewVictimStatusInformation" ve "checkVictimSatus" metodlarina parametre olarak gonderir.
   * @param {*} item 
   */
  checkToVictim(item) {
    this.victimList.map((victim) => {
      if (item.target.id === victim.victimName) {
        this.viewVictimStatusInformation(victim);// uzerine tiklanan maktulun adress ve status bilgilerini ekrana yazdiran metod. ViewVictimStaus classinda cagirilir.
        this.checkVictimSatus(victim);//Maktulun statusunde degisklik yapmak icin, daha onceden ViewVictimStatus ile olusturulan butona click eventi verir.
      }
    });
  }
  /**
   * Daha onceden olusturulmus status butonuna click eventi ekler.
   * Butona basilmasi ile maktulun statusu degistirlir.(olduyse true yasiyorsa false, oldu saniliyorsa ve tekrar yasadigi ogrenildiyse status tekradan false yapilabilir.)
   * Status true ise yani maktul olmus ise "statusControlled" ile ismi kirmizi hale gelir aksi takdirde ismi siyah hale getirilebilir.
   * @param {*} pVictim 
   */
  checkVictimSatus(pVictim) {
    document.querySelector(`#${pVictim.victimName}-H`) .addEventListener("click", () => {
        pVictim.victimStatus = !pVictim.victimStatus;//status degisir
        this.dbManager.setItem("victim", this.storageList);// yapilan degisiklik localStorage' ye kaydedilir.
        this.statusControlled(this.victimList);
      });
  }
}
