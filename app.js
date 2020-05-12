/**
 * KIRALIK KATIL ISMET'IN IS TAKIP DEFTERI
 * Uygulama kiralik bir katilin is defteri olarak calismalidir.
 * Katil Ismet musteri isimlerini,musterinin oldurmek istedigi kisi isimlerini ve maktullerin bilgilerini(adreslerini) uygulamada tutar.
 * Ismet musterilerinin isimlerine tikladiginda, musterilerin oldurmek istedigi kisi veya kisilerin isimleri ekrana gelir.
 * Ismet herhangi bir maktulun ustunu tikladiginda ise maktulun adres bilgileri, olu mu sag mi oldugu ekrana yazilir.
 * 
 * ANALIZ
 * - MODEL OBJELERI: Manager
 * - VIEW OBJELERI: ViewCustomer,ViewVictim,VievVictimStatus
 * - SERVICE OBJELERI: DBManager
 * 
 * DBManager musteri isimlerini ve maktul bilgilerini tutan diziyi olusturur ve LocalStorage' ye kaydeder. 
 * Manager, LocalStorage' deki musteri ve maktul bilgilerini alir ve bir degiskene kaydeder.
 * Manger, LocalStorage'dan aldigi musteri isimlerini ViewCustomer araciligi ile ekranda gosterir.
 * Manager,musteri isimlerine tiklandigi durumda musterinin oldurmek istedigi maktul isimlerini ViewVictim araciligi ile ekranda gosterir.
 * Manger, maktullerden herhangi biri uzerinde tiklandiginda maktulun adres bilgilerini, olu mu sag mi oldugunu ViewVictimStatus araciligi ile ekranda gosterir.
 * Manager, maktul bilgilerinin oldugu ekranda, maktulun olmesi durumunda butona tiklayarak maktulun statusunu degistirebilir.
 */


//localStorage.clear();

const viewCustomer=new ViewCustomer();// musteri isimlerini ekrana yazdiran  classi tutan degisken.
const viewVictim= new ViewVictim; // maktul isimlerini ekrana yazdiran classi tutan degisken
const viewVictimStatus=new ViewVictimStatus(); // maktul adres ve status (olu sag) bilgilerini ekrana yazdiran classi tutan degisken
new Manager(viewCustomer.viewCustomerInformation,
   viewVictim.viewVictimInformation,
   viewVictimStatus.viewVictimStatusInformation).start();

 