/**
 * bu class musteri ve maktul bilgilerini tutan diziyi olusturur ve localStorage'ye kaydeder.
 */
class DBManager {
  customer = null;
  constructor() {
    this.db = localStorage;
    this.setInitialData();
  }
  setInitialData() {
    this.customer = [
      { customerName: "Mehmet",
        victimList: [{ victimName: "ahmet",victimAdress: ["Ulmenstrasse no:10", "Eichwillstrasse no:6", "Obergrundstrasse no:8"], victimStatus: false },
                     {victimName: "ali", victimAdress: ["Ulmenstrasse no:11", "Eichwillstrasse no:7"],victimStatus: false}],
      },
      {
        customerName: "Hasan",
        victimList: [{ victimName: "Ayse", victimAdress: ["Ulmenstrasse no:12", "Eichwillstrasse no:8"], victimStatus: false}],
      },
      {
        customerName: "Huseyin",
        victimList: [{victimName: "Fatma",victimAdress: ["Ulmenstrasse no:13"],victimStatus: false },
                     {victimName: "Kadir",victimAdress: ["Ulmenstrasse no:14", "Eichwillstrasse no:9", "Obergrundstrasse no:9"],victimStatus: false}],
      },
      {
        customerName: "Sevgi",
        victimList:[{victimName: "Gulsen", victimAdress: ["Ulmenstrasse no:15"],victimStatus: false},
                    {victimName: "Burak", victimAdress: ["Ulmenstrasse no:16", "Eichwillstrasse no:10", "Obergrundstrasse no:10"],victimStatus: false}],
      },
    ];
    this.checkData(this.customer);
  }
  /**
   * LocalStorage kontrol eden metod.
   * @param {*} pData
   */
  checkData(pData) {
    if (!this.getItem("victim")) {
      this.setItem("victim", pData);
    } else {
      pData = this.getItem("victim");
    }
  }
  /**
   * verileri LocalStorage'a kaydetmeye yarayan metod
   * @param {*} key 
   * @param {*} value 
   */
  setItem(key, value) {
    value = JSON.stringify(value);
    this.db.setItem(key, value);
  }
/**
 * verileri LocalStorage'dan cekmeye yarayan metod
 * @param {*} key 
 */
  getItem(key) {
    let data = this.db.getItem(key);
    return JSON.parse(data);
  }
}
