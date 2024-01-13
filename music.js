class Music {
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){

        return this.title + " - " + this.singer;
    }

}


const musicList = [

     new Music("Yeni Sezon Şarkılar", "Zeynep Bastık","6.jpg", "6.mp3"),
     new Music("Yılbaşı Özel Konser", "Zeynep Bastık","4.jpg", "4.mp3"),
     new Music("Neogazino Albüm", "Madrihal","5.jpg", "5.mp3"),
     new Music("Karam", "Hakan Peker","2.jpeg", "2.mp3"),
     new Music("Korkma Kalbim", "Bengü","3.jpeg", "3.mp3"),
     new Music("Poşet", "Serdar Ortaç","1.jpeg", "1.mp3")

]



