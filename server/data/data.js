const data = [
    {
      "drink": "Costa Coffee",
      "volume": 256.99371499999995,
      "calories": 0,
      "caffeine": 277,
      "type": "Coffee"
    },
    {
      "drink": "Coffee Friend Brewed Coffee",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 145,
      "type": "Coffee"
    },
    {
      "drink": "Hell Energy Coffee",
      "volume": 250.19181000000003,
      "calories": 150,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Killer Coffee (AU)",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 430,
      "type": "Coffee"
    },
    {
      "drink": "Nescafe Gold",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 66,
      "type": "Coffee"
    },
    {
      "drink": "Espresso Monster",
      "volume": 248.41740000000001,
      "calories": 170,
      "caffeine": 160,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin Donuts Shot In The Dark",
      "volume": 239.54534999999998,
      "calories": 80,
      "caffeine": 134,
      "type": "Coffee"
    },
    {
      "drink": "Illy Issimo Cafe",
      "volume": 201.0998,
      "calories": 45,
      "caffeine": 155,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Doubleshot Espresso",
      "volume": 192.22775,
      "calories": 140,
      "caffeine": 120,
      "type": "Coffee"
    },
    {
      "drink": "TrueStart Performance Coffee",
      "volume": 150.82485,
      "calories": 0,
      "caffeine": 95,
      "type": "Coffee"
    },
    {
      "drink": "Bizzy Cold Brew",
      "volume": 78.96124499999999,
      "calories": 0,
      "caffeine": 125,
      "type": "Coffee"
    },
    {
      "drink": "Zola Coconut Water Espresso",
      "volume": 517.53625,
      "calories": 0,
      "caffeine": 125,
      "type": "Coffee"
    },
    {
      "drink": "Barista Bros Iced Coffee",
      "volume": 500.08788499999997,
      "calories": 204,
      "caffeine": 140,
      "type": "Coffee"
    },
    {
      "drink": "Dare Iced Coffee",
      "volume": 500.08788499999997,
      "calories": 429,
      "caffeine": 160,
      "type": "Coffee"
    },
    {
      "drink": "V Iced Coffee",
      "volume": 500.08788499999997,
      "calories": 345,
      "caffeine": 155,
      "type": "Coffee"
    },
    {
      "drink": "Bottled Iced Coffee Dunkin Donuts",
      "volume": 405.15695,
      "calories": 260,
      "caffeine": 171,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Bottled Frappuccino",
      "volume": 405.15695,
      "calories": 300,
      "caffeine": 110,
      "type": "Coffee"
    },
    {
      "drink": "Stok Cold Brew",
      "volume": 405.15695,
      "calories": 0,
      "caffeine": 145,
      "type": "Coffee"
    },
    {
      "drink": "Wide Awake Iced Coffee Drinks",
      "volume": 405.15695,
      "calories": 290,
      "caffeine": 30,
      "type": "Coffee"
    },
    {
      "drink": "Caribou Canned Cold Brew",
      "volume": 340.09524999999996,
      "calories": 10,
      "caffeine": 177,
      "type": "Coffee"
    },
    {
      "drink": "McDonalds Iced Coffee",
      "volume": 340.09524999999996,
      "calories": 180,
      "caffeine": 133,
      "type": "Coffee"
    },
    {
      "drink": "Premier Protein Cafe Latte",
      "volume": 340.09524999999996,
      "calories": 160,
      "caffeine": 120,
      "type": "Coffee"
    },
    {
      "drink": "Stumptown Cold Brew Coffee",
      "volume": 310.52175,
      "calories": 3,
      "caffeine": 279,
      "type": "Coffee"
    },
    {
      "drink": "Espresso Shot",
      "volume": 44.36025,
      "calories": 0,
      "caffeine": 77,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Coffee Espresso",
      "volume": 44.36025,
      "calories": 0,
      "caffeine": 70,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Decaf Espresso",
      "volume": 44.36025,
      "calories": 0,
      "caffeine": 10,
      "type": "Coffee"
    },
    {
      "drink": "Gourmesso Coffee Pods",
      "volume": 39.924225,
      "calories": 0,
      "caffeine": 65,
      "type": "Coffee"
    },
    {
      "drink": "Nespresso Coffee Capsules",
      "volume": 39.924225,
      "calories": 0,
      "caffeine": 60,
      "type": "Coffee"
    },
    {
      "drink": "Stok Coffee Shots",
      "volume": 12.716605,
      "calories": 10,
      "caffeine": 40,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Bottled Iced Coffee",
      "volume": 1419.528,
      "calories": 240,
      "caffeine": 640,
      "type": "Coffee"
    },
    {
      "drink": "Baskin Robbins Cappuccino Blast",
      "volume": 709.764,
      "calories": 470,
      "caffeine": 234,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Cold Brew",
      "volume": 709.764,
      "calories": 5,
      "caffeine": 260,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Donuts Iced Coffee",
      "volume": 709.764,
      "calories": 20,
      "caffeine": 297,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Donuts Iced Latte",
      "volume": 709.764,
      "calories": 100,
      "caffeine": 166,
      "type": "Coffee"
    },
    {
      "drink": "Dutch Bros Coffee (Classic)",
      "volume": 591.47,
      "calories": 10,
      "caffeine": 187,
      "type": "Coffee"
    },
    {
      "drink": "Tim Hortons Large Brewed Coffee",
      "volume": 591.47,
      "calories": 5,
      "caffeine": 270,
      "type": "Coffee"
    },
    {
      "drink": "7 Eleven Brewed Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 280,
      "type": "Coffee"
    },
    {
      "drink": "Arby's Jamocha Shake",
      "volume": 473.176,
      "calories": 830,
      "caffeine": 12,
      "type": "Coffee"
    },
    {
      "drink": "Biggby Brewed Coffee",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 200,
      "type": "Coffee"
    },
    {
      "drink": "Biggby Creamy Lattes",
      "volume": 473.176,
      "calories": 387,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Biggby Iced Coffee",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 155,
      "type": "Coffee"
    },
    {
      "drink": "Caribou Brewed Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 305,
      "type": "Coffee"
    },
    {
      "drink": "Coffee Bean & Tea leaf Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 333,
      "type": "Coffee"
    },
    {
      "drink": "Einstein Bros Coffee",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 206,
      "type": "Coffee"
    },
    {
      "drink": "Latte",
      "volume": 473.176,
      "calories": 160,
      "caffeine": 154,
      "type": "Coffee"
    },
    {
      "drink": "McDonalds (McCafe) Latte",
      "volume": 473.176,
      "calories": 190,
      "caffeine": 142,
      "type": "Coffee"
    },
    {
      "drink": "McDonalds (McCafe) Mocha",
      "volume": 473.176,
      "calories": 380,
      "caffeine": 167,
      "type": "Coffee"
    },
    {
      "drink": "McDonalds Coffee",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 145,
      "type": "Coffee"
    },
    {
      "drink": "Panera Bread Coffee",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 189,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Brewed Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 267,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Caffe Americano",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 140,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Caffe Latte",
      "volume": 473.176,
      "calories": 190,
      "caffeine": 140,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Caffe Mocha",
      "volume": 473.176,
      "calories": 390,
      "caffeine": 165,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Cappuccino",
      "volume": 473.176,
      "calories": 140,
      "caffeine": 140,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Iced Coffee",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 150,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Iced Latte",
      "volume": 473.176,
      "calories": 120,
      "caffeine": 140,
      "type": "Coffee"
    },
    {
      "drink": "Peet's Iced Mocha",
      "volume": 473.176,
      "calories": 310,
      "caffeine": 165,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Caramel Macchiato",
      "volume": 473.176,
      "calories": 250,
      "caffeine": 150,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Cold Brew Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 205,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Decaf Coffee",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 25,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Grande Caffe Americano",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 225,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Grande Caffe Latte",
      "volume": 473.176,
      "calories": 190,
      "caffeine": 150,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Grande Caffe Mocha",
      "volume": 473.176,
      "calories": 370,
      "caffeine": 175,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Grande Cappuccino",
      "volume": 473.176,
      "calories": 140,
      "caffeine": 150,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Grande Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 310,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Iced Americano",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 225,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Nitro Cold Brew Coffee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 280,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Pink Drink",
      "volume": 473.176,
      "calories": 140,
      "caffeine": 45,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Pumpkin Cream Cold Brew",
      "volume": 473.176,
      "calories": 250,
      "caffeine": 185,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Refreshers",
      "volume": 473.176,
      "calories": 70,
      "caffeine": 45,
      "type": "Coffee"
    },
    {
      "drink": "Wawa Coffee",
      "volume": 473.176,
      "calories": 4,
      "caffeine": 290,
      "type": "Coffee"
    },
    {
      "drink": "Private Selection Canned Espresso",
      "volume": 443.60249999999996,
      "calories": 230,
      "caffeine": 145,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Doubleshot Energy",
      "volume": 443.60249999999996,
      "calories": 220,
      "caffeine": 135,
      "type": "Coffee"
    },
    {
      "drink": "Wide Awak Energy Coffee",
      "volume": 443.60249999999996,
      "calories": 190,
      "caffeine": 180,
      "type": "Coffee"
    },
    {
      "drink": "Chick-fil-A Frosted Coffee",
      "volume": 414.029,
      "calories": 240,
      "caffeine": 130,
      "type": "Coffee"
    },
    {
      "drink": "Chick-fil-A Iced Coffee",
      "volume": 414.029,
      "calories": 190,
      "caffeine": 80,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Donuts Brewed Coffee",
      "volume": 414.029,
      "calories": 5,
      "caffeine": 210,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Donuts Dunkaccino",
      "volume": 414.029,
      "calories": 350,
      "caffeine": 83,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Donuts Extra Charged Coffee",
      "volume": 414.029,
      "calories": 10,
      "caffeine": 252,
      "type": "Coffee"
    },
    {
      "drink": "Dunkin' Donuts Latte",
      "volume": 414.029,
      "calories": 100,
      "caffeine": 166,
      "type": "Coffee"
    },
    {
      "drink": "Americano Coffee",
      "volume": 354.882,
      "calories": 5,
      "caffeine": 154,
      "type": "Coffee"
    },
    {
      "drink": "Big Train Java Chip Ice Coffee",
      "volume": 354.882,
      "calories": 410,
      "caffeine": 49,
      "type": "Coffee"
    },
    {
      "drink": "Biohazard Coffee",
      "volume": 354.882,
      "calories": 3,
      "caffeine": 928,
      "type": "Coffee"
    },
    {
      "drink": "Black Ink Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 144,
      "type": "Coffee"
    },
    {
      "drink": "Black Insomnia Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1105,
      "type": "Coffee"
    },
    {
      "drink": "Black Label Brewed Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1555,
      "type": "Coffee"
    },
    {
      "drink": "Cafe Bustelo",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 150,
      "type": "Coffee"
    },
    {
      "drink": "Caffe Mocha",
      "volume": 354.882,
      "calories": 239,
      "caffeine": 152,
      "type": "Coffee"
    },
    {
      "drink": "Caffe Nero Coffee",
      "volume": 354.882,
      "calories": 5,
      "caffeine": 160,
      "type": "Coffee"
    },
    {
      "drink": "Cannonball Coffee Maximum Charge (UK)",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1101,
      "type": "Coffee"
    },
    {
      "drink": "Cappuccino",
      "volume": 354.882,
      "calories": 97,
      "caffeine": 154,
      "type": "Coffee"
    },
    {
      "drink": "Death Wish Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 728,
      "type": "Coffee"
    },
    {
      "drink": "Devils Brew Extreme Caffeine Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1325,
      "type": "Coffee"
    },
    {
      "drink": "Flat White",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 130,
      "type": "Coffee"
    },
    {
      "drink": "GymBrew Coffee",
      "volume": 354.882,
      "calories": 4,
      "caffeine": 333,
      "type": "Coffee"
    },
    {
      "drink": "High Voltage Coffee (AU)",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1150,
      "type": "Coffee"
    },
    {
      "drink": "International Delight Iced Coffee",
      "volume": 354.882,
      "calories": 180,
      "caffeine": 88,
      "type": "Coffee"
    },
    {
      "drink": "Seattle's Best Brewed Coffee",
      "volume": 354.882,
      "calories": 10,
      "caffeine": 260,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Iced Espresso Classics",
      "volume": 354.882,
      "calories": 190,
      "caffeine": 125,
      "type": "Coffee"
    },
    {
      "drink": "Stipe Miocic Extra Strength Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 500,
      "type": "Coffee"
    },
    {
      "drink": "Sudden Instant Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 95,
      "type": "Coffee"
    },
    {
      "drink": "Taft Coffee (EU)",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1182,
      "type": "Coffee"
    },
    {
      "drink": "Very Strong Coffee",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 1350,
      "type": "Coffee"
    },
    {
      "drink": "Chameleon Cold Brew With Milk",
      "volume": 325.3085,
      "calories": 100,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Muscle Milk Coffee House",
      "volume": 325.3085,
      "calories": 130,
      "caffeine": 120,
      "type": "Coffee"
    },
    {
      "drink": "SlimFast Shake - Cappuccino",
      "volume": 325.3085,
      "calories": 180,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Bottled Cold Brew",
      "volume": 325.3085,
      "calories": 50,
      "caffeine": 180,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Canned Nitro Cold Brew",
      "volume": 325.3085,
      "calories": 0,
      "caffeine": 235,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Cold & Crafted",
      "volume": 325.3085,
      "calories": 50,
      "caffeine": 135,
      "type": "Coffee"
    },
    {
      "drink": "Stumptown Nitro Cold Brew",
      "volume": 325.3085,
      "calories": 3,
      "caffeine": 330,
      "type": "Coffee"
    },
    {
      "drink": "Sunup Pure Green Coffee",
      "volume": 325.3085,
      "calories": 5,
      "caffeine": 200,
      "type": "Coffee"
    },
    {
      "drink": "Wide Awake Coffee Cold Brew",
      "volume": 325.3085,
      "calories": 5,
      "caffeine": 120,
      "type": "Coffee"
    },
    {
      "drink": "Chameleon Cold Brew RTD",
      "volume": 295.735,
      "calories": 10,
      "caffeine": 230,
      "type": "Coffee"
    },
    {
      "drink": "Chick-fil-A Brewed Coffee",
      "volume": 295.735,
      "calories": 0,
      "caffeine": 136,
      "type": "Coffee"
    },
    {
      "drink": "CoolBrew Coffee",
      "volume": 295.735,
      "calories": 0,
      "caffeine": 60,
      "type": "Coffee"
    },
    {
      "drink": "Tim Hortons Small French Vanilla Coffee",
      "volume": 295.735,
      "calories": 0,
      "caffeine": 60,
      "type": "Coffee"
    },
    {
      "drink": "La Colombe Cold Brew",
      "volume": 266.1615,
      "calories": 5,
      "caffeine": 180,
      "type": "Coffee"
    },
    {
      "drink": "La Colombe Draft Latte",
      "volume": 266.1615,
      "calories": 90,
      "caffeine": 120,
      "type": "Coffee"
    },
    {
      "drink": "Alpine Start Instant Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 120,
      "type": "Coffee"
    },
    {
      "drink": "Bulletproof Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 145,
      "type": "Coffee"
    },
    {
      "drink": "Califia Farms Cold Brew Coffee",
      "volume": 236.588,
      "calories": 10,
      "caffeine": 180,
      "type": "Coffee"
    },
    {
      "drink": "CBD Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Chameleon Cold Brew Coffee",
      "volume": 236.588,
      "calories": 15,
      "caffeine": 200,
      "type": "Coffee"
    },
    {
      "drink": "Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 163,
      "type": "Coffee"
    },
    {
      "drink": "Coffee (Decaf, Instant)",
      "volume": 236.588,
      "calories": 6,
      "caffeine": 2,
      "type": "Coffee"
    },
    {
      "drink": "Coffee (Instant)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 57,
      "type": "Coffee"
    },
    {
      "drink": "Coffee Leaf Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 20,
      "type": "Coffee"
    },
    {
      "drink": "Crio Bru Brewed Cacao",
      "volume": 236.588,
      "calories": 20,
      "caffeine": 10,
      "type": "Coffee"
    },
    {
      "drink": "Death Wish Canned Cold Brew",
      "volume": 236.588,
      "calories": 15,
      "caffeine": 300,
      "type": "Coffee"
    },
    {
      "drink": "Death Wish Latte",
      "volume": 236.588,
      "calories": 170,
      "caffeine": 300,
      "type": "Coffee"
    },
    {
      "drink": "Decaf Coffee",
      "volume": 236.588,
      "calories": 2,
      "caffeine": 6,
      "type": "Coffee"
    },
    {
      "drink": "Driftaway Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 160,
      "type": "Coffee"
    },
    {
      "drink": "Eight O'Clock Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 112,
      "type": "Coffee"
    },
    {
      "drink": "Folgers Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 112,
      "type": "Coffee"
    },
    {
      "drink": "Gold Peak Coffee",
      "volume": 236.588,
      "calories": 5,
      "caffeine": 126,
      "type": "Coffee"
    },
    {
      "drink": "Gothrider Gasoline Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 200,
      "type": "Coffee"
    },
    {
      "drink": "High Brew Coffee",
      "volume": 236.588,
      "calories": 50,
      "caffeine": 140,
      "type": "Coffee"
    },
    {
      "drink": "Indulgio Cappuccino",
      "volume": 236.588,
      "calories": 79,
      "caffeine": 20,
      "type": "Coffee"
    },
    {
      "drink": "K Cup Decaf",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 4,
      "type": "Coffee"
    },
    {
      "drink": "K-Cup Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Maxwell House Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 112,
      "type": "Coffee"
    },
    {
      "drink": "Maxwell House Max Boost Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 196,
      "type": "Coffee"
    },
    {
      "drink": "Nescafe Dolce Gusto",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 106,
      "type": "Coffee"
    },
    {
      "drink": "Nescafe Ice Java",
      "volume": 236.588,
      "calories": 50,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Nescafe Ricoffy",
      "volume": 236.588,
      "calories": 10,
      "caffeine": 6,
      "type": "Coffee"
    },
    {
      "drink": "Nestle Milo",
      "volume": 236.588,
      "calories": 80,
      "caffeine": 4,
      "type": "Coffee"
    },
    {
      "drink": "Noocaf Smart Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 160,
      "type": "Coffee"
    },
    {
      "drink": "Ocean Spray Brew",
      "volume": 236.588,
      "calories": 30,
      "caffeine": 40,
      "type": "Coffee"
    },
    {
      "drink": "Purity Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 163,
      "type": "Coffee"
    },
    {
      "drink": "Revv Coffee Pods",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 127,
      "type": "Coffee"
    },
    {
      "drink": "Robusta Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 265,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks 2X Coffee Pods",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 260,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Cordusio Mocha",
      "volume": 236.588,
      "calories": 130,
      "caffeine": 155,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Verismo Coffee Pods",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 60,
      "type": "Coffee"
    },
    {
      "drink": "Starbucks Via Ready Brew",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 135,
      "type": "Coffee"
    },
    {
      "drink": "Steep 18 Cold Brew",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 90,
      "type": "Coffee"
    },
    {
      "drink": "Taster's Choice Instant Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 98,
      "type": "Coffee"
    },
    {
      "drink": "Voila Instant Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Waka Decaf Instant Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 4,
      "type": "Coffee"
    },
    {
      "drink": "Waka Indian Instant Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 70,
      "type": "Coffee"
    },
    {
      "drink": "Waka Instant Coffee",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 70,
      "type": "Coffee"
    },
    {
      "drink": "Whipped (Dalgona) Coffee",
      "volume": 236.588,
      "calories": 48,
      "caffeine": 105,
      "type": "Coffee"
    },
    {
      "drink": "Mushroom Coffee",
      "volume": 207.0145,
      "calories": 5,
      "caffeine": 40,
      "type": "Coffee"
    },
    {
      "drink": "Cafe Con Leche",
      "volume": 177.441,
      "calories": 56,
      "caffeine": 154,
      "type": "Coffee"
    },
    {
      "drink": "Choffy (roasted cacao)",
      "volume": 177.441,
      "calories": 0,
      "caffeine": 23,
      "type": "Coffee"
    },
    {
      "drink": "COGO Caffeinated Hot Chocolate",
      "volume": 177.441,
      "calories": 110,
      "caffeine": 98,
      "type": "Coffee"
    },
    {
      "drink": "Dripdash Kyoto Coffee",
      "volume": 177.441,
      "calories": 0,
      "caffeine": 225,
      "type": "Coffee"
    },
    {
      "drink": "Long Black",
      "volume": 177.441,
      "calories": 2,
      "caffeine": 154,
      "type": "Coffee"
    },
    {
      "drink": "Nescafe 3 in 1 Instant Coffee",
      "volume": 177.441,
      "calories": 74,
      "caffeine": 50,
      "type": "Coffee"
    },
    {
      "drink": "Gloria Jean's Coffee",
      "volume": 59.975058,
      "calories": 0,
      "caffeine": 67,
      "type": "Coffee"
    },
    {
      "drink": "Biggby Espresso",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 100,
      "type": "Coffee"
    },
    {
      "drink": "Greek Coffee (Metrios)",
      "volume": 59.147,
      "calories": 25,
      "caffeine": 50,
      "type": "Coffee"
    },
    {
      "drink": "Turkish Coffee",
      "volume": 59.147,
      "calories": 20,
      "caffeine": 50,
      "type": "Coffee"
    },
    {
      "drink": "28 Black Energy Drink",
      "volume": 250.19181000000003,
      "calories": 125,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "4 Purpose Energy Drink",
      "volume": 250.19181000000003,
      "calories": 70,
      "caffeine": 70,
      "type": "Energy Drinks"
    },
    {
      "drink": "BEEBAD Energy Drink",
      "volume": 250.19181000000003,
      "calories": 110,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Black Bruin Energy Drink",
      "volume": 250.19181000000003,
      "calories": 122,
      "caffeine": 38,
      "type": "Energy Drinks"
    },
    {
      "drink": "Blu Frog Energy Drink",
      "volume": 250.19181000000003,
      "calories": 90,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Blue Bolt (UK)",
      "volume": 250.19181000000003,
      "calories": 112,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Blue Charge (UK)",
      "volume": 250.19181000000003,
      "calories": 49,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Blue Spark (UK)",
      "volume": 250.19181000000003,
      "calories": 56,
      "caffeine": 75,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bomb Energy Drink",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Boost Energy (UK)",
      "volume": 250.19181000000003,
      "calories": 58,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Euro Shopper Energy Drink (EU)",
      "volume": 250.19181000000003,
      "calories": 115,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Hell Energy Drink (EU)",
      "volume": 250.19181000000003,
      "calories": 115,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Hype Energy Drink (EU)",
      "volume": 250.19181000000003,
      "calories": 108,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "M-150 Energy Drink",
      "volume": 250.19181000000003,
      "calories": 155,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Pure Cofain 699 (EU)",
      "volume": 250.19181000000003,
      "calories": 148,
      "caffeine": 175,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Bull",
      "volume": 250.19181000000003,
      "calories": 117,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Bull Editions",
      "volume": 250.19181000000003,
      "calories": 113,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Bull Sugarfree",
      "volume": 250.19181000000003,
      "calories": 10,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Bull Zero",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Scheckters Energy Drink",
      "volume": 250.19181000000003,
      "calories": 78,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Slammers Energy Drink (EU)",
      "volume": 250.19181000000003,
      "calories": 122,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Source 1899 (UK)",
      "volume": 250.19181000000003,
      "calories": 58,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Taurus Energy Drink",
      "volume": 250.19181000000003,
      "calories": 180,
      "caffeine": 50,
      "type": "Energy Drinks"
    },
    {
      "drink": "TENZING Natural Energy",
      "volume": 250.19181000000003,
      "calories": 50,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Tiger Energy Drink",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Tweaker Energy Drink",
      "volume": 250.19181000000003,
      "calories": 110,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Virtue Clean Energy Beverage",
      "volume": 250.19181000000003,
      "calories": 8,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Wildcat Energy Drink (UK)",
      "volume": 250.19181000000003,
      "calories": 115,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "X Ray Energy Drink",
      "volume": 250.19181000000003,
      "calories": 125,
      "caffeine": 79,
      "type": "Energy Drinks"
    },
    {
      "drink": "OK Energy Drink",
      "volume": 249.89607499999997,
      "calories": 113,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Power Horse Energy Drink (EU)",
      "volume": 249.89607499999997,
      "calories": 125,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "V Energy Drink",
      "volume": 249.89607499999997,
      "calories": 116,
      "caffeine": 78,
      "type": "Energy Drinks"
    },
    {
      "drink": "XL Energy Drink (EU)",
      "volume": 249.89607499999997,
      "calories": 118,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Crave Energy Drink (UK)",
      "volume": 249.30460499999998,
      "calories": 10,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bomba (EU)",
      "volume": 248.41740000000001,
      "calories": 123,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Cintron Energy Drink",
      "volume": 248.41740000000001,
      "calories": 60,
      "caffeine": 85,
      "type": "Energy Drinks"
    },
    {
      "drink": "Dutch Bros Blue Rebel Energy Drink",
      "volume": 248.41740000000001,
      "calories": 116,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "XS Energy Drink",
      "volume": 248.41740000000001,
      "calories": 10,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Wild Tiger Energy Drink",
      "volume": 247.23445999999998,
      "calories": 125,
      "caffeine": 75,
      "type": "Energy Drinks"
    },
    {
      "drink": "Liquid Ice Energy Drink",
      "volume": 245.46005000000002,
      "calories": 120,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rush! Energy Drink",
      "volume": 245.46005000000002,
      "calories": 120,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Hydro",
      "volume": 751.1668999999999,
      "calories": 150,
      "caffeine": 188,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Import",
      "volume": 550.0671,
      "calories": 190,
      "caffeine": 179,
      "type": "Energy Drinks"
    },
    {
      "drink": "Moose Juice Energy Drink",
      "volume": 500.97509,
      "calories": 0,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Club Mate (EU)",
      "volume": 500.08788499999997,
      "calories": 160,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Demon Energy Drink",
      "volume": 500.08788499999997,
      "calories": 253,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "LevlUp Gaming Booster",
      "volume": 500.08788499999997,
      "calories": 8,
      "caffeine": 250,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Ripper Energy Juice (UK)",
      "volume": 500.08788499999997,
      "calories": 185,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster The Doctor VR46 (UK)",
      "volume": 500.08788499999997,
      "calories": 219,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Mother Energy Drink",
      "volume": 500.08788499999997,
      "calories": 228,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Protein2O + Energy",
      "volume": 500.08788499999997,
      "calories": 70,
      "caffeine": 125,
      "type": "Energy Drinks"
    },
    {
      "drink": "Strike Force Energy Drink Mix",
      "volume": 500.08788499999997,
      "calories": 0,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "4C Energy Drink Mix",
      "volume": 499.79214999999994,
      "calories": 15,
      "caffeine": 170,
      "type": "Energy Drinks"
    },
    {
      "drink": "Arizona Arnold Palmer Half and Half",
      "volume": 499.79214999999994,
      "calories": 180,
      "caffeine": 15,
      "type": "Energy Drinks"
    },
    {
      "drink": "Gatorade Bolt 24 Energize",
      "volume": 499.79214999999994,
      "calories": 40,
      "caffeine": 75,
      "type": "Energy Drinks"
    },
    {
      "drink": "Live+ Energy Drink",
      "volume": 499.79214999999994,
      "calories": 227,
      "caffeine": 150,
      "type": "Energy Drinks"
    },
    {
      "drink": "Pure Kick Energy Drink Mix",
      "volume": 499.79214999999994,
      "calories": 10,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Dragon Tea",
      "volume": 458.38925,
      "calories": 40,
      "caffeine": 155,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Rehab",
      "volume": 458.38925,
      "calories": 25,
      "caffeine": 170,
      "type": "Energy Drinks"
    },
    {
      "drink": "Neuro Sonic",
      "volume": 428.81575,
      "calories": 35,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Lucozade",
      "volume": 380.019475,
      "calories": 133,
      "caffeine": 46,
      "type": "Energy Drinks"
    },
    {
      "drink": "Fakeer Energy Drink (EU)",
      "volume": 370.26022,
      "calories": 148,
      "caffeine": 118,
      "type": "Energy Drinks"
    },
    {
      "drink": "Arizona Energy Drink Rx",
      "volume": 340.09524999999996,
      "calories": 130,
      "caffeine": 127,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bai Boost",
      "volume": 339.208045,
      "calories": 10,
      "caffeine": 110,
      "type": "Energy Drinks"
    },
    {
      "drink": "NOCCO Energy Drink (EU)",
      "volume": 330.33599499999997,
      "calories": 0,
      "caffeine": 180,
      "type": "Energy Drinks"
    },
    {
      "drink": "Carabao Energy Drink (UK)",
      "volume": 330.04026,
      "calories": 63,
      "caffeine": 106,
      "type": "Energy Drinks"
    },
    {
      "drink": "Irn Bru (UK)",
      "volume": 330.04026,
      "calories": 65,
      "caffeine": 30,
      "type": "Energy Drinks"
    },
    {
      "drink": "Soylent Stacked",
      "volume": 330.04026,
      "calories": 180,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Eye Energy Drink",
      "volume": 328.26585,
      "calories": 149,
      "caffeine": 106,
      "type": "Energy Drinks"
    },
    {
      "drink": "Mega Monster Energy Drink",
      "volume": 709.764,
      "calories": 320,
      "caffeine": 240,
      "type": "Energy Drinks"
    },
    {
      "drink": "Amino Force Energy Drink",
      "volume": 650.617,
      "calories": 0,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bodyarmour Edge",
      "volume": 591.47,
      "calories": 180,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "SoBe Energy Citrus",
      "volume": 591.47,
      "calories": 250,
      "caffeine": 81,
      "type": "Energy Drinks"
    },
    {
      "drink": "ABB Turbo Tea Zero",
      "volume": 532.323,
      "calories": 0,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bai Antioxidant Infusion",
      "volume": 532.323,
      "calories": 10,
      "caffeine": 55,
      "type": "Energy Drinks"
    },
    {
      "drink": "Viso Energy Drink",
      "volume": 502.7495,
      "calories": 140,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "3D Energy Drink",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Adrenaline Shoc",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Alsa Energy Drink Mix",
      "volume": 473.176,
      "calories": 30,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bang Energy",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bang Keto Coffee",
      "volume": 473.176,
      "calories": 130,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bang Natural",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 250,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bang Sweet Tea",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Beaver Buzz Energy Drink",
      "volume": 473.176,
      "calories": 240,
      "caffeine": 178,
      "type": "Energy Drinks"
    },
    {
      "drink": "Berzerk Energy Drink Mix",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "C4 Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "C4 Smart Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "C4 Ultimate Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Celsius Heat Energy Drink",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Crunk Energy Drink",
      "volume": 473.176,
      "calories": 200,
      "caffeine": 192,
      "type": "Energy Drinks"
    },
    {
      "drink": "Crystal Light Energy Mix",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 60,
      "type": "Energy Drinks"
    },
    {
      "drink": "Electric Monkey Wild Energy Drink",
      "volume": 473.176,
      "calories": 220,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Full Throttle Energy Drink",
      "volume": 473.176,
      "calories": 220,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "GFuel Cans",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "GFuel Energy Drink Mix",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 140,
      "type": "Energy Drinks"
    },
    {
      "drink": "Go Fast Energy Drink",
      "volume": 473.176,
      "calories": 200,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Go Fast High Octane Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Great Value Energy Drink Mix",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Gridlock Energy Drink",
      "volume": 473.176,
      "calories": 200,
      "caffeine": 140,
      "type": "Energy Drinks"
    },
    {
      "drink": "Hi Ball Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Joker Mad Energy",
      "volume": 473.176,
      "calories": 260,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Liquid Help Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Loud Energy Drink",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 320,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Assault",
      "volume": 473.176,
      "calories": 210,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Energy",
      "volume": 473.176,
      "calories": 210,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Juice",
      "volume": 473.176,
      "calories": 160,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Lo-Carb",
      "volume": 473.176,
      "calories": 30,
      "caffeine": 140,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Mango Loco",
      "volume": 473.176,
      "calories": 240,
      "caffeine": 152,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Mule",
      "volume": 473.176,
      "calories": 210,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Pipeline Punch",
      "volume": 473.176,
      "calories": 190,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Ultra",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 150,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Zero Sugar",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 140,
      "type": "Energy Drinks"
    },
    {
      "drink": "Mountain Dew Amp",
      "volume": 473.176,
      "calories": 220,
      "caffeine": 142,
      "type": "Energy Drinks"
    },
    {
      "drink": "Mountain Dew Game Fuel",
      "volume": 473.176,
      "calories": 90,
      "caffeine": 90,
      "type": "Energy Drinks"
    },
    {
      "drink": "Mountain Dew Rise",
      "volume": 473.176,
      "calories": 25,
      "caffeine": 180,
      "type": "Energy Drinks"
    },
    {
      "drink": "NOS Energy Drink",
      "volume": 473.176,
      "calories": 200,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Nuun Sport",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 40,
      "type": "Energy Drinks"
    },
    {
      "drink": "Propel Zero Powder",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 0,
      "type": "Energy Drinks"
    },
    {
      "drink": "Pure Boost Energy Drink Mix",
      "volume": 473.176,
      "calories": 25,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Quake Energy Berry Blast Slurpee",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 92,
      "type": "Energy Drinks"
    },
    {
      "drink": "Quake Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 250,
      "type": "Energy Drinks"
    },
    {
      "drink": "Raze Energy Drink",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Reign Total Body Fuel",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rip It Energy Drink",
      "volume": 473.176,
      "calories": 260,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Boom",
      "volume": 473.176,
      "calories": 280,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Energy Drink (Original)",
      "volume": 473.176,
      "calories": 250,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Halo Infinite",
      "volume": 473.176,
      "calories": 250,
      "caffeine": 240,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Juiced",
      "volume": 473.176,
      "calories": 30,
      "caffeine": 170,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Punched",
      "volume": 473.176,
      "calories": 260,
      "caffeine": 240,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Pure Zero",
      "volume": 473.176,
      "calories": 20,
      "caffeine": 240,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Recovery",
      "volume": 473.176,
      "calories": 25,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Sugar Free",
      "volume": 473.176,
      "calories": 25,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Thermo",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar XDurance",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Zero Carb",
      "volume": 473.176,
      "calories": 25,
      "caffeine": 240,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rogue Energy Drink Mix",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 175,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rowdy Energy Drink",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Sneak Energy Drink Mix",
      "volume": 473.176,
      "calories": 12,
      "caffeine": 150,
      "type": "Energy Drinks"
    },
    {
      "drink": "Solimo Energy Drink",
      "volume": 473.176,
      "calories": 10,
      "caffeine": 152,
      "type": "Energy Drinks"
    },
    {
      "drink": "Speed Energy Fuel",
      "volume": 473.176,
      "calories": 240,
      "caffeine": 186,
      "type": "Energy Drinks"
    },
    {
      "drink": "Spider Energy Drink",
      "volume": 473.176,
      "calories": 120,
      "caffeine": 240,
      "type": "Energy Drinks"
    },
    {
      "drink": "Spike Hardcore Energy",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 350,
      "type": "Energy Drinks"
    },
    {
      "drink": "Triton Energy Drink",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "True Lemon Energy Mix",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Ugly Energy Water",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Venom Death Adder",
      "volume": 473.176,
      "calories": 160,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Wired X 3000 Energy Drink",
      "volume": 473.176,
      "calories": 220,
      "caffeine": 185,
      "type": "Energy Drinks"
    },
    {
      "drink": "Wired X Berry Rush",
      "volume": 473.176,
      "calories": 220,
      "caffeine": 95,
      "type": "Energy Drinks"
    },
    {
      "drink": "Wired X344 Energy Drink",
      "volume": 473.176,
      "calories": 220,
      "caffeine": 344,
      "type": "Energy Drinks"
    },
    {
      "drink": "Xyience Energy Drink",
      "volume": 473.176,
      "calories": 15,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "ZipFizz Energy Drink Mix",
      "volume": 473.176,
      "calories": 20,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Zoa Energy Drink",
      "volume": 473.176,
      "calories": 100,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Java Monster",
      "volume": 443.60249999999996,
      "calories": 220,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Java Monster 300",
      "volume": 443.60249999999996,
      "calories": 200,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Muscle Monster",
      "volume": 443.60249999999996,
      "calories": 180,
      "caffeine": 157,
      "type": "Energy Drinks"
    },
    {
      "drink": "Rockstar Organic Energy Drink",
      "volume": 443.60249999999996,
      "calories": 180,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Starbucks Triple Shot Energy",
      "volume": 443.60249999999996,
      "calories": 210,
      "caffeine": 225,
      "type": "Energy Drinks"
    },
    {
      "drink": "Alani Nu Energy Drink",
      "volume": 354.882,
      "calories": 10,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "ALL IN Energy Drink",
      "volume": 354.882,
      "calories": 25,
      "caffeine": 75,
      "type": "Energy Drinks"
    },
    {
      "drink": "AXIO Energy Drink Mix",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Bing Energy Drink",
      "volume": 354.882,
      "calories": 40,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "BreinFuel",
      "volume": 354.882,
      "calories": 110,
      "caffeine": 360,
      "type": "Energy Drinks"
    },
    {
      "drink": "Burn Energy Drink",
      "volume": 354.882,
      "calories": 163,
      "caffeine": 112,
      "type": "Energy Drinks"
    },
    {
      "drink": "C4 On The Go",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Celsius Energy Drink",
      "volume": 354.882,
      "calories": 10,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Celsius Stevia",
      "volume": 354.882,
      "calories": 15,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Coca-Cola Cherry Vanilla",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 34,
      "type": "Energy Drinks"
    },
    {
      "drink": "Coca-Cola Energy",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 114,
      "type": "Energy Drinks"
    },
    {
      "drink": "Cocaine Energy Drink",
      "volume": 354.882,
      "calories": 90,
      "caffeine": 280,
      "type": "Energy Drinks"
    },
    {
      "drink": "Dark Dog Organic Energy",
      "volume": 354.882,
      "calories": 110,
      "caffeine": 114,
      "type": "Energy Drinks"
    },
    {
      "drink": "Duff Energy Drink",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "EBOOST Super Fuel",
      "volume": 354.882,
      "calories": 20,
      "caffeine": 110,
      "type": "Energy Drinks"
    },
    {
      "drink": "EnerBee Energy Drink",
      "volume": 354.882,
      "calories": 80,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Go Girl Energy Drink",
      "volume": 354.882,
      "calories": 25,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "GURU Energy Drink",
      "volume": 354.882,
      "calories": 115,
      "caffeine": 140,
      "type": "Energy Drinks"
    },
    {
      "drink": "Hyde Xtreme",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 400,
      "type": "Energy Drinks"
    },
    {
      "drink": "Java Kick Coffee Cola",
      "volume": 354.882,
      "calories": 130,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Kill Cliff Energy X Recover",
      "volume": 354.882,
      "calories": 20,
      "caffeine": 25,
      "type": "Energy Drinks"
    },
    {
      "drink": "Kill Cliff Ignite",
      "volume": 354.882,
      "calories": 25,
      "caffeine": 150,
      "type": "Energy Drinks"
    },
    {
      "drink": "Kona Gold Energy Drink",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 115,
      "type": "Energy Drinks"
    },
    {
      "drink": "Marquis Energy Drink",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "MATI Energy Drink",
      "volume": 354.882,
      "calories": 90,
      "caffeine": 110,
      "type": "Energy Drinks"
    },
    {
      "drink": "Meltdown Ketone Drink",
      "volume": 354.882,
      "calories": 18,
      "caffeine": 225,
      "type": "Energy Drinks"
    },
    {
      "drink": "Monster Maxx",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Nerd Focus",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 128,
      "type": "Energy Drinks"
    },
    {
      "drink": "Octane Energy Drink Mix",
      "volume": 354.882,
      "calories": 25,
      "caffeine": 225,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Power Elixir",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 160,
      "type": "Energy Drinks"
    },
    {
      "drink": "Red Thunder Energy Drink",
      "volume": 354.882,
      "calories": 156,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "RootJack Caffeinated Pirate Root Beer",
      "volume": 354.882,
      "calories": 200,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Runa",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 150,
      "type": "Energy Drinks"
    },
    {
      "drink": "Sambazon Amazon Energy Drink",
      "volume": 354.882,
      "calories": 120,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Spike Shooter",
      "volume": 354.882,
      "calories": 10,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Steaz Energy",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "T-Virus Antidote",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Tru Energy Wakeup",
      "volume": 354.882,
      "calories": 10,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "UPTIME Energy Drink",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 142,
      "type": "Energy Drinks"
    },
    {
      "drink": "USANA Rev3 Energy Drink",
      "volume": 354.882,
      "calories": 105,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Xtreme Shock Energy Drink",
      "volume": 354.882,
      "calories": 20,
      "caffeine": 200,
      "type": "Energy Drinks"
    },
    {
      "drink": "Zest Sparkling Tea",
      "volume": 354.882,
      "calories": 60,
      "caffeine": 135,
      "type": "Energy Drinks"
    },
    {
      "drink": "Zevia Energy Drink",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Cran Energy Juice",
      "volume": 295.735,
      "calories": 40,
      "caffeine": 70,
      "type": "Energy Drinks"
    },
    {
      "drink": "Mamma Chia Energy",
      "volume": 295.735,
      "calories": 110,
      "caffeine": 90,
      "type": "Energy Drinks"
    },
    {
      "drink": "Oikos Pro Fuel",
      "volume": 295.735,
      "calories": 130,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Advocare Slim",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "Arbonne Energy Fizz Stck",
      "volume": 236.588,
      "calories": 15,
      "caffeine": 55,
      "type": "Energy Drinks"
    },
    {
      "drink": "Berocca",
      "volume": 236.588,
      "calories": 5,
      "caffeine": 90,
      "type": "Energy Drinks"
    },
    {
      "drink": "Best Choice Strawberry Energy Drink Mix",
      "volume": 236.588,
      "calories": 5,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "EBOOST Energy Drink Mix",
      "volume": 236.588,
      "calories": 5,
      "caffeine": 110,
      "type": "Energy Drinks"
    },
    {
      "drink": "EBOOST Workout Crusher Mix",
      "volume": 236.588,
      "calories": 40,
      "caffeine": 175,
      "type": "Energy Drinks"
    },
    {
      "drink": "Great Value Energy Drink Enhancers",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 50,
      "type": "Energy Drinks"
    },
    {
      "drink": "Kin Spritz",
      "volume": 236.588,
      "calories": 25,
      "caffeine": 50,
      "type": "Energy Drinks"
    },
    {
      "drink": "LYFT Energy Mix",
      "volume": 236.588,
      "calories": 4,
      "caffeine": 125,
      "type": "Energy Drinks"
    },
    {
      "drink": "PerformElite Pre-Workout",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 225,
      "type": "Energy Drinks"
    },
    {
      "drink": "Perk Energy Beverage",
      "volume": 236.588,
      "calories": 90,
      "caffeine": 100,
      "type": "Energy Drinks"
    },
    {
      "drink": "Redline Princess",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Drinks"
    },
    {
      "drink": "Redline Xtreme Energy Drink",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 316,
      "type": "Energy Drinks"
    },
    {
      "drink": "Roaring Lion Energy Drink",
      "volume": 236.588,
      "calories": 100,
      "caffeine": 77,
      "type": "Energy Drinks"
    },
    {
      "drink": "Spark Energy Drink Mix",
      "volume": 236.588,
      "calories": 15,
      "caffeine": 120,
      "type": "Energy Drinks"
    },
    {
      "drink": "V8 +Energy Drink",
      "volume": 236.588,
      "calories": 140,
      "caffeine": 80,
      "type": "Energy Drinks"
    },
    {
      "drink": "Spike Energy Double Shot",
      "volume": 125.98311,
      "calories": 0,
      "caffeine": 350,
      "type": "Energy Shots"
    },
    {
      "drink": "Zombie Blood Energy Potion",
      "volume": 100.5499,
      "calories": 25,
      "caffeine": 80,
      "type": "Energy Shots"
    },
    {
      "drink": "Proper Wild Energy Shot",
      "volume": 73.93375,
      "calories": 25,
      "caffeine": 180,
      "type": "Energy Shots"
    },
    {
      "drink": "Redline Max 300",
      "volume": 73.93375,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Shots"
    },
    {
      "drink": "5 Hour Energy",
      "volume": 57.076854999999995,
      "calories": 4,
      "caffeine": 200,
      "type": "Energy Shots"
    },
    {
      "drink": "5 Hour Energy Extra Strength",
      "volume": 57.076854999999995,
      "calories": 0,
      "caffeine": 230,
      "type": "Energy Shots"
    },
    {
      "drink": "E6 Energy Shot",
      "volume": 57.076854999999995,
      "calories": 0,
      "caffeine": 235,
      "type": "Energy Shots"
    },
    {
      "drink": "Eternal Energy Extra Strength",
      "volume": 57.076854999999995,
      "calories": 0,
      "caffeine": 280,
      "type": "Energy Shots"
    },
    {
      "drink": "Eternal Energy Shot",
      "volume": 57.076854999999995,
      "calories": 0,
      "caffeine": 230,
      "type": "Energy Shots"
    },
    {
      "drink": "Woke Up Energy Shot",
      "volume": 57.076854999999995,
      "calories": 0,
      "caffeine": 225,
      "type": "Energy Shots"
    },
    {
      "drink": "Equip Pure Energy Shot",
      "volume": 53.2323,
      "calories": 35,
      "caffeine": 100,
      "type": "Energy Shots"
    },
    {
      "drink": "Mana Energy Potion",
      "volume": 49.979214999999996,
      "calories": 25,
      "caffeine": 75,
      "type": "Energy Shots"
    },
    {
      "drink": "Clif Shot Energy Gel",
      "volume": 35.4882,
      "calories": 100,
      "caffeine": 100,
      "type": "Energy Shots"
    },
    {
      "drink": "Screamin Energy Max Hit",
      "volume": 18.039835,
      "calories": 40,
      "caffeine": 185,
      "type": "Energy Shots"
    },
    {
      "drink": "Vital 4U Liquid Energy",
      "volume": 14.78675,
      "calories": 34,
      "caffeine": 155,
      "type": "Energy Shots"
    },
    {
      "drink": "Kaffn8 Liquified Caffeine",
      "volume": 7.393375,
      "calories": 0,
      "caffeine": 75,
      "type": "Energy Shots"
    },
    {
      "drink": "Bang Shot",
      "volume": 88.7205,
      "calories": 0,
      "caffeine": 300,
      "type": "Energy Shots"
    },
    {
      "drink": "Redline Xtreme Shot",
      "volume": 88.7205,
      "calories": 5,
      "caffeine": 300,
      "type": "Energy Shots"
    },
    {
      "drink": "7-Eleven Energy Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 260,
      "type": "Energy Shots"
    },
    {
      "drink": "Advocare Slam Energy Shot",
      "volume": 59.147,
      "calories": 10,
      "caffeine": 120,
      "type": "Energy Shots"
    },
    {
      "drink": "Balance Active Shot",
      "volume": 59.147,
      "calories": 80,
      "caffeine": 100,
      "type": "Energy Shots"
    },
    {
      "drink": "Balance Energy Shot",
      "volume": 59.147,
      "calories": 77,
      "caffeine": 150,
      "type": "Energy Shots"
    },
    {
      "drink": "Forto Organic Coffee Shot",
      "volume": 59.147,
      "calories": 35,
      "caffeine": 225,
      "type": "Energy Shots"
    },
    {
      "drink": "Kirkland Energy Shot",
      "volume": 59.147,
      "calories": 5,
      "caffeine": 180,
      "type": "Energy Shots"
    },
    {
      "drink": "Neu Nootropic Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 350,
      "type": "Energy Shots"
    },
    {
      "drink": "Nutramint Smart Serum",
      "volume": 59.147,
      "calories": 45,
      "caffeine": 200,
      "type": "Energy Shots"
    },
    {
      "drink": "Performance Caffeine",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 180,
      "type": "Energy Shots"
    },
    {
      "drink": "Phoenix Energy Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 280,
      "type": "Energy Shots"
    },
    {
      "drink": "Red Thunder Energy Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 138,
      "type": "Energy Shots"
    },
    {
      "drink": "Red Thunder Extra Strength",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 230,
      "type": "Energy Shots"
    },
    {
      "drink": "Reed's Ginger Energize Shot",
      "volume": 59.147,
      "calories": 24,
      "caffeine": 100,
      "type": "Energy Shots"
    },
    {
      "drink": "Rip It Energy Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 120,
      "type": "Energy Shots"
    },
    {
      "drink": "Stacker Extreme Energy Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 205,
      "type": "Energy Shots"
    },
    {
      "drink": "Tweaker Shot",
      "volume": 59.147,
      "calories": 0,
      "caffeine": 275,
      "type": "Energy Shots"
    },
    {
      "drink": "TruBrain Extra",
      "volume": 29.5735,
      "calories": 25,
      "caffeine": 100,
      "type": "Energy Shots"
    },
    {
      "drink": "X-Mode Energy Shot",
      "volume": 29.5735,
      "calories": 0,
      "caffeine": 150,
      "type": "Energy Shots"
    },
    {
      "drink": "Red Bull Simply Cola",
      "volume": 250.19181000000003,
      "calories": 0,
      "caffeine": 32,
      "type": "Soft Drinks"
    },
    {
      "drink": "Afri Cola",
      "volume": 330.04026,
      "calories": 139,
      "caffeine": 83,
      "type": "Soft Drinks"
    },
    {
      "drink": "Fritz Kola (EU)",
      "volume": 330.04026,
      "calories": 135,
      "caffeine": 83,
      "type": "Soft Drinks"
    },
    {
      "drink": "Pepsi Max (UK)",
      "volume": 330.04026,
      "calories": 0,
      "caffeine": 43,
      "type": "Soft Drinks"
    },
    {
      "drink": "Premium Cola (EU)",
      "volume": 330.04026,
      "calories": 132,
      "caffeine": 83,
      "type": "Soft Drinks"
    },
    {
      "drink": "Tropicana Twister Soda",
      "volume": 591.47,
      "calories": 320,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Bawls",
      "volume": 473.176,
      "calories": 190,
      "caffeine": 102,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Kickstart",
      "volume": 473.176,
      "calories": 80,
      "caffeine": 90,
      "type": "Soft Drinks"
    },
    {
      "drink": "Sprecher Cherry Cola",
      "volume": 473.176,
      "calories": 240,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "7-Up",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "A&W Cream Soda",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "A&W Root Beer",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "A&W Zero Sugar Cream Soda",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Ale 8 1",
      "volume": 354.882,
      "calories": 120,
      "caffeine": 37,
      "type": "Soft Drinks"
    },
    {
      "drink": "Barqs Red Creme Soda",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Barqs Root Beer",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 22,
      "type": "Soft Drinks"
    },
    {
      "drink": "Big Red Soda",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Canada Dry Green Tea Ginger Ale",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 9,
      "type": "Soft Drinks"
    },
    {
      "drink": "Cheerwine",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 47,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Caffeine Free",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Cherry",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Cherry Zero Sugar",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Classic",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Orange Vanilla",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Vanilla",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Vanilla Zero Sugar",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola With Coffee",
      "volume": 354.882,
      "calories": 70,
      "caffeine": 69,
      "type": "Soft Drinks"
    },
    {
      "drink": "Coca-Cola Zero Sugar",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 34,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Barqs Root Beer",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Cheerwine",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 47,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Coke",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 46,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Coke with Splenda",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 46,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Dr Pepper",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 41,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Mountain Dew",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 54,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Pepsi",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 35,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet RC Cola",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 48,
      "type": "Soft Drinks"
    },
    {
      "drink": "Diet Wild Cherry Pepsi",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 38,
      "type": "Soft Drinks"
    },
    {
      "drink": "doc Soda",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 60,
      "type": "Soft Drinks"
    },
    {
      "drink": "Double Cola",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 36,
      "type": "Soft Drinks"
    },
    {
      "drink": "Dr Pepper",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 42,
      "type": "Soft Drinks"
    },
    {
      "drink": "Dr Pepper 10",
      "volume": 354.882,
      "calories": 10,
      "caffeine": 51,
      "type": "Soft Drinks"
    },
    {
      "drink": "Dr Shasta Soda",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 29,
      "type": "Soft Drinks"
    },
    {
      "drink": "Fanta",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Faygo Cola",
      "volume": 354.882,
      "calories": 165,
      "caffeine": 43,
      "type": "Soft Drinks"
    },
    {
      "drink": "Faygo Moon Mist",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 20,
      "type": "Soft Drinks"
    },
    {
      "drink": "Fresca",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Ginger Ale",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Green Cola",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 37,
      "type": "Soft Drinks"
    },
    {
      "drink": "IBC Root Beer",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Inca Kola",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 38,
      "type": "Soft Drinks"
    },
    {
      "drink": "Kickapoo Soda: Joy Juice & Fruit Shine",
      "volume": 354.882,
      "calories": 190,
      "caffeine": 40,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mello Yello",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 51,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 54,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Baja Blast",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 54,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Code Red",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 54,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Live Wire",
      "volume": 354.882,
      "calories": 180,
      "caffeine": 54,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Major Melon",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 55,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Voltage",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 55,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mountain Dew Zero Sugar",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 68,
      "type": "Soft Drinks"
    },
    {
      "drink": "Moxie Soda",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 24,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mug Root Beer",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Orange Crush",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "PC Cola",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 12,
      "type": "Soft Drinks"
    },
    {
      "drink": "PC Cola Diet",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 13,
      "type": "Soft Drinks"
    },
    {
      "drink": "Pepsi",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 38,
      "type": "Soft Drinks"
    },
    {
      "drink": "Pepsi Caffeine Free",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Pepsi Made With Sugar",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 38,
      "type": "Soft Drinks"
    },
    {
      "drink": "Pepsi Zero Sugar",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 69,
      "type": "Soft Drinks"
    },
    {
      "drink": "Pibb Xtra",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 40,
      "type": "Soft Drinks"
    },
    {
      "drink": "RC (Royal Crown) Cola",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 43,
      "type": "Soft Drinks"
    },
    {
      "drink": "Ritz Cola",
      "volume": 354.882,
      "calories": 144,
      "caffeine": 10,
      "type": "Soft Drinks"
    },
    {
      "drink": "Ruby Red Squirt",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 39,
      "type": "Soft Drinks"
    },
    {
      "drink": "Sarsaparilla",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Shasta Cola",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 43,
      "type": "Soft Drinks"
    },
    {
      "drink": "Shasta Diet Cola",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 47,
      "type": "Soft Drinks"
    },
    {
      "drink": "Shasta Mountain Rush",
      "volume": 354.882,
      "calories": 150,
      "caffeine": 54,
      "type": "Soft Drinks"
    },
    {
      "drink": "Ski Soda",
      "volume": 354.882,
      "calories": 180,
      "caffeine": 69,
      "type": "Soft Drinks"
    },
    {
      "drink": "Slurpee",
      "volume": 354.882,
      "calories": 90,
      "caffeine": 30,
      "type": "Soft Drinks"
    },
    {
      "drink": "Sprite",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Squirt Soda",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Starbucks Refreshers Canned",
      "volume": 354.882,
      "calories": 90,
      "caffeine": 50,
      "type": "Soft Drinks"
    },
    {
      "drink": "Sun Drop Soda",
      "volume": 354.882,
      "calories": 170,
      "caffeine": 64,
      "type": "Soft Drinks"
    },
    {
      "drink": "Sunkist Orange Soda",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 19,
      "type": "Soft Drinks"
    },
    {
      "drink": "Vernors Ginger Ale",
      "volume": 354.882,
      "calories": 140,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Wave Soda",
      "volume": 354.882,
      "calories": 25,
      "caffeine": 42,
      "type": "Soft Drinks"
    },
    {
      "drink": "Wild Cherry Pepsi",
      "volume": 354.882,
      "calories": 160,
      "caffeine": 38,
      "type": "Soft Drinks"
    },
    {
      "drink": "Zevia Cola",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 45,
      "type": "Soft Drinks"
    },
    {
      "drink": "Boost Nutritional Drink",
      "volume": 236.588,
      "calories": 240,
      "caffeine": 5,
      "type": "Soft Drinks"
    },
    {
      "drink": "Mucho Mango Energy Drink",
      "volume": 236.588,
      "calories": 100,
      "caffeine": 0,
      "type": "Soft Drinks"
    },
    {
      "drink": "Soda Stream",
      "volume": 236.588,
      "calories": 40,
      "caffeine": 31,
      "type": "Soft Drinks"
    },
    {
      "drink": "PG Tips Black Tea",
      "volume": 200.50833,
      "calories": 0,
      "caffeine": 50,
      "type": "Tea"
    },
    {
      "drink": "Sencha Green Tea Shot",
      "volume": 189.2704,
      "calories": 0,
      "caffeine": 40,
      "type": "Tea"
    },
    {
      "drink": "Xingtea Iced Green Tea",
      "volume": 694.97725,
      "calories": 50,
      "caffeine": 110,
      "type": "Tea"
    },
    {
      "drink": "Gold Peak Tea",
      "volume": 547.10975,
      "calories": 0,
      "caffeine": 48,
      "type": "Tea"
    },
    {
      "drink": "Pure Leaf Iced Tea",
      "volume": 547.10975,
      "calories": 160,
      "caffeine": 69,
      "type": "Tea"
    },
    {
      "drink": "Honest Iced Tea",
      "volume": 499.79214999999994,
      "calories": 70,
      "caffeine": 63,
      "type": "Tea"
    },
    {
      "drink": "Nestea Iced Tea",
      "volume": 499.79214999999994,
      "calories": 160,
      "caffeine": 23,
      "type": "Tea"
    },
    {
      "drink": "Oi Ocha Green Tea",
      "volume": 499.79214999999994,
      "calories": 5,
      "caffeine": 60,
      "type": "Tea"
    },
    {
      "drink": "Teas' Tea Oolong",
      "volume": 499.79214999999994,
      "calories": 0,
      "caffeine": 70,
      "type": "Tea"
    },
    {
      "drink": "Guayaki Canned Yerba Mate",
      "volume": 458.38925,
      "calories": 120,
      "caffeine": 150,
      "type": "Tea"
    },
    {
      "drink": "Inko's White Tea Energy",
      "volume": 458.38925,
      "calories": 100,
      "caffeine": 165,
      "type": "Tea"
    },
    {
      "drink": "Master Brew Kombucha",
      "volume": 449.51719999999995,
      "calories": 60,
      "caffeine": 76,
      "type": "Tea"
    },
    {
      "drink": "McDonalds Sweet Tea",
      "volume": 946.352,
      "calories": 160,
      "caffeine": 100,
      "type": "Tea"
    },
    {
      "drink": "Dunkin' Donuts Iced Tea",
      "volume": 709.764,
      "calories": 230,
      "caffeine": 63,
      "type": "Tea"
    },
    {
      "drink": "Fuze Iced Tea",
      "volume": 709.764,
      "calories": 160,
      "caffeine": 24,
      "type": "Tea"
    },
    {
      "drink": "Peace Tea",
      "volume": 680.1904999999999,
      "calories": 150,
      "caffeine": 23,
      "type": "Tea"
    },
    {
      "drink": "Lipton Iced Tea",
      "volume": 591.47,
      "calories": 110,
      "caffeine": 25,
      "type": "Tea"
    },
    {
      "drink": "SoBe Green Tea",
      "volume": 591.47,
      "calories": 200,
      "caffeine": 7,
      "type": "Tea"
    },
    {
      "drink": "Arizona Iced Tea",
      "volume": 473.176,
      "calories": 190,
      "caffeine": 30,
      "type": "Tea"
    },
    {
      "drink": "Biggby Iced Tea",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 38,
      "type": "Tea"
    },
    {
      "drink": "Chick-fil-A Iced Tea",
      "volume": 473.176,
      "calories": 120,
      "caffeine": 62,
      "type": "Tea"
    },
    {
      "drink": "Guayaki Yerba Mate Bottled Tea",
      "volume": 473.176,
      "calories": 80,
      "caffeine": 140,
      "type": "Tea"
    },
    {
      "drink": "Snapple Tea",
      "volume": 473.176,
      "calories": 150,
      "caffeine": 37,
      "type": "Tea"
    },
    {
      "drink": "Southern Sweet Tea",
      "volume": 473.176,
      "calories": 128,
      "caffeine": 41,
      "type": "Tea"
    },
    {
      "drink": "Taiwanese Milk Tea",
      "volume": 473.176,
      "calories": 299,
      "caffeine": 151,
      "type": "Tea"
    },
    {
      "drink": "Wendy's Iced Tea",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 32,
      "type": "Tea"
    },
    {
      "drink": "Xing Craft Brew",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 120,
      "type": "Tea"
    },
    {
      "drink": "Brew Dr Kombucha Uplift",
      "volume": 414.029,
      "calories": 80,
      "caffeine": 130,
      "type": "Tea"
    },
    {
      "drink": "Brisk Iced Tea",
      "volume": 354.882,
      "calories": 70,
      "caffeine": 11,
      "type": "Tea"
    },
    {
      "drink": "KOE Kombucha",
      "volume": 354.882,
      "calories": 35,
      "caffeine": 15,
      "type": "Tea"
    },
    {
      "drink": "Tejava Iced Tea",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 50,
      "type": "Tea"
    },
    {
      "drink": "Turkey Hill Iced Tea",
      "volume": 354.882,
      "calories": 120,
      "caffeine": 64,
      "type": "Tea"
    },
    {
      "drink": "Big Train Spiced Chai",
      "volume": 236.588,
      "calories": 210,
      "caffeine": 65,
      "type": "Tea"
    },
    {
      "drink": "Bigelow Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 45,
      "type": "Tea"
    },
    {
      "drink": "Brown Rice Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 4,
      "type": "Tea"
    },
    {
      "drink": "Chai Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 50,
      "type": "Tea"
    },
    {
      "drink": "Cold Brew Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 70,
      "type": "Tea"
    },
    {
      "drink": "Crystal Light Iced Tea",
      "volume": 236.588,
      "calories": 5,
      "caffeine": 10,
      "type": "Tea"
    },
    {
      "drink": "Fast Lane Black Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 110,
      "type": "Tea"
    },
    {
      "drink": "Guayusa Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 41,
      "type": "Tea"
    },
    {
      "drink": "HICAF Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 110,
      "type": "Tea"
    },
    {
      "drink": "K Cup Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 41,
      "type": "Tea"
    },
    {
      "drink": "Kombucha Tea",
      "volume": 236.588,
      "calories": 30,
      "caffeine": 24,
      "type": "Tea"
    },
    {
      "drink": "Lipton Natural Energy Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 75,
      "type": "Tea"
    },
    {
      "drink": "Lipton Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 55,
      "type": "Tea"
    },
    {
      "drink": "Matcha Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 64,
      "type": "Tea"
    },
    {
      "drink": "Morning Thunder Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 45,
      "type": "Tea"
    },
    {
      "drink": "Tazo Chai",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 47,
      "type": "Tea"
    },
    {
      "drink": "Tea (Black)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 42,
      "type": "Tea"
    },
    {
      "drink": "Tea (Decaf)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 4,
      "type": "Tea"
    },
    {
      "drink": "Tea (Green)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 18,
      "type": "Tea"
    },
    {
      "drink": "Tea (Herbal)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 0,
      "type": "Tea"
    },
    {
      "drink": "Tea (Iced)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 47,
      "type": "Tea"
    },
    {
      "drink": "Tea (Instant)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 40,
      "type": "Tea"
    },
    {
      "drink": "Tea (Jasmine)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 25,
      "type": "Tea"
    },
    {
      "drink": "Tea (Oolong)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 37,
      "type": "Tea"
    },
    {
      "drink": "Tea (White)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 28,
      "type": "Tea"
    },
    {
      "drink": "Teavana Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 41,
      "type": "Tea"
    },
    {
      "drink": "Twig Tea (Kukicha)",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 25,
      "type": "Tea"
    },
    {
      "drink": "Waka Instant Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 30,
      "type": "Tea"
    },
    {
      "drink": "Yellow Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 63,
      "type": "Tea"
    },
    {
      "drink": "Yerba Mate Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 40,
      "type": "Tea"
    },
    {
      "drink": "YMateina Yerba Mate",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 80,
      "type": "Tea"
    },
    {
      "drink": "Zest Highly Caffeinated Tea",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 150,
      "type": "Tea"
    },
    {
      "drink": "Oregon Chai Tea",
      "volume": 177.441,
      "calories": 130,
      "caffeine": 45,
      "type": "Tea"
    },
    {
      "drink": "Pacific Chai",
      "volume": 177.441,
      "calories": 90,
      "caffeine": 29,
      "type": "Tea"
    },
    {
      "drink": "Perrier Energize",
      "volume": 250.19181000000003,
      "calories": 35,
      "caffeine": 99,
      "type": "Water"
    },
    {
      "drink": "3 Water",
      "volume": 499.79214999999994,
      "calories": 0,
      "caffeine": 50,
      "type": "Water"
    },
    {
      "drink": "Heroec Energy Water",
      "volume": 499.79214999999994,
      "calories": 0,
      "caffeine": 60,
      "type": "Water"
    },
    {
      "drink": "Caribou BOUsted Sparkling Water",
      "volume": 340.09524999999996,
      "calories": 0,
      "caffeine": 75,
      "type": "Water"
    },
    {
      "drink": "Phocus Sparkling Water",
      "volume": 340.09524999999996,
      "calories": 0,
      "caffeine": 75,
      "type": "Water"
    },
    {
      "drink": "Poland Spring Sparkling Energy Water",
      "volume": 340.09524999999996,
      "calories": 35,
      "caffeine": 75,
      "type": "Water"
    },
    {
      "drink": "Perrier Sparkling Water",
      "volume": 329.744525,
      "calories": 0,
      "caffeine": 0,
      "type": "Water"
    },
    {
      "drink": "VitaminWater Energy",
      "volume": 591.47,
      "calories": 100,
      "caffeine": 50,
      "type": "Water"
    },
    {
      "drink": "VitaRain Zero Enhanced Water",
      "volume": 591.47,
      "calories": 0,
      "caffeine": 42,
      "type": "Water"
    },
    {
      "drink": "Water Joe",
      "volume": 591.47,
      "calories": 0,
      "caffeine": 70,
      "type": "Water"
    },
    {
      "drink": "Polar Frost Plus Energy",
      "volume": 502.7495,
      "calories": 10,
      "caffeine": 67,
      "type": "Water"
    },
    {
      "drink": "Hint Caffeine Kick Water",
      "volume": 473.176,
      "calories": 0,
      "caffeine": 60,
      "type": "Water"
    },
    {
      "drink": "Sparkling Ice +Caffeine",
      "volume": 473.176,
      "calories": 5,
      "caffeine": 70,
      "type": "Water"
    },
    {
      "drink": "AHA Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 30,
      "type": "Water"
    },
    {
      "drink": "Arti Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 120,
      "type": "Water"
    },
    {
      "drink": "Bubbl'r Sparkling Water",
      "volume": 354.882,
      "calories": 5,
      "caffeine": 69,
      "type": "Water"
    },
    {
      "drink": "Bubly Bounce Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 35,
      "type": "Water"
    },
    {
      "drink": "Bubly Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 0,
      "type": "Water"
    },
    {
      "drink": "GURU Sparkling Energy Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 100,
      "type": "Water"
    },
    {
      "drink": "La Croix Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 0,
      "type": "Water"
    },
    {
      "drink": "Limitless Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 35,
      "type": "Water"
    },
    {
      "drink": "Pep Talk Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 55,
      "type": "Water"
    },
    {
      "drink": "Polar Seltzer Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 0,
      "type": "Water"
    },
    {
      "drink": "Yerbae Sparkling Water",
      "volume": 354.882,
      "calories": 0,
      "caffeine": 100,
      "type": "Water"
    },
    {
      "drink": "Tonic Water",
      "volume": 295.735,
      "calories": 110,
      "caffeine": 0,
      "type": "Water"
    },
    {
      "drink": "MiO Energy Water Enhancer",
      "volume": 236.588,
      "calories": 0,
      "caffeine": 60,
      "type": "Water"
    }
  ]

export default data;