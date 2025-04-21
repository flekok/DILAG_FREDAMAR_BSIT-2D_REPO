function whatshallIwear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

// example calls
whatshallIwear(80);
whatshallIwear(60);
whatshallIwear(50);