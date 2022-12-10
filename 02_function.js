


function swapValues(value1, value2) {

    console.log("Before swap", value1, value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap", value1, value2);

}
swapValues(100,200);
swapValues(2,4);
swapValues("Kishor", "Hitesh");
swapValues("You", "Me");