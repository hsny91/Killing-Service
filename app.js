
/**
 * -Service(customerDB)
 *   Müşterilerin verilerini tuttugumuz modelimiz
 *      -custumerList bu liste eğer local storege boş ,ise iöerisine yazılacak degerleri tutmaktadır
 *      -local stordsajfdsaj dolu ise local store verileri cekecegiz ve bunu customer liste eşitleyecegiz
 * -Local 
 *  localStorage metodlarını saklayacagımız bir class yapısı
 * -Shooter Manager
 *  start metdoumuz olacak ve bu metod aracılıgı ıle tetıkleyıcılerı burada calıstıracagız
 *  birr eventlistener ekleyecgız(map) kullanacgız (view push edecegız)
 *      *show-hidden metodları calısacak (3 defa en alt lısteye ulasana kadar bu dongu devam edecek)
 *  checkbox icin bir event (checked ve control metdolarını cagıracak)
 * checked (true/false)(setıtem)
 * control(arrayı guncelleyen metdod)
 * 
 * ====================================
 * -view
 * -AllListView(map)
 *  -CustomerView(map event listenr)
 *   -PersonView(map event listenr)
 */
//================================================
//================================================
//================================================
//================================================
//================================================
/**
 * let names = [{
        name: "boş hali",
        killist: [{
            killName: "mehmet",
            killAdress: ["adress1", "adres2", "adres3"],
            killStatus: false
        }]
    },
    {
        name: "veli",
        killist: [{
            killName: "mehmet",
            killAdress: ["adress1", "adres2", "adres3"],
            killStatus: false
        }]
    },
    {
        name: "kırkdokuz",
        killist: [{
            killName: "mehmet",
            killAdress: ["adress1", "adres2", "adres3"],
            killStatus: false
        }]
    },
    {
        name: "elli",
        killist: [{
            killName: "mehmet",
            killAdress: ["adress1", "adres2", "adres3"],
            killStatus: false
        }]
    },
    {
        name: "bitti",
        killist: [{
            killName: "mehmet",
            killAdress: ["adress1", "adres2", "adres3"],
            killStatus: false
        }]
    },
]
console.log(names)
controlled = () => {
    if (!localStorage.getItem("names")) {
        localStorage.setItem("names", JSON.stringify(names));
    } else {
        names = JSON.parse(localStorage.getItem("names"));
        console.log(names)
    }
}
controlled();

getItemKill = () => {
    return JSON.parse(localStorage.getItem("names"));
}

getItemKill().map((x)=>{
    console.log(x)
})
degistir=()=>{
    names[1].name="mahmut"
    localStorage.setItem("names", JSON.stringify(names));
    controlled()
}


/* let storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames) */
 

//new DBManager();

//localStorage.clear();

const viewCustomer=new ViewCustomer();// sepette guncellemeleri ekrana yazdiran  classi tutan degisken.
const viewVictim= new ViewVictim;
const viewVictimStatus=new ViewVictimStatus();
new Manager(viewCustomer.viewCustomerInformation,
   viewVictim.viewVictimInformation,
   viewVictimStatus.viewVictimStatusInformation).start();

 