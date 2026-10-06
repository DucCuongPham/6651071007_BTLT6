function display_random_image() {
    let myimages=[
        {
            src: "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },
        {
            src: "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: "320",
            height: "195"
        },
        {
            src: "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            width: "500",
            height: "343"
        }
    ];
    let ry=Math.floor(Math.random()*myimages.length);
    let img=document.createElement("img");
    img.src=myimages[ry].src;
    img.width=myimages[ry].width;
    img.height=myimages[ry].height;
    $("#random_image").html(img);
}