const menuItems = [
    {
        "category": "Entradas",
        "name": "EMPANADA DE JYQ",
        "description": "Empanadas fritas, por unidad.",
        "price": "$3.000,00",
        "image": "images/products/624.webp"
    },
    {
        "category": "Entradas",
        "name": "EMPANADA DE POLLO",
        "description": "Empanadas fritas, por unidad.",
        "price": "$3.000,00",
        "image": "images/products/56.webp"
    },
    {
        "category": "Entradas",
        "name": "EMPANADA DE CARNE",
        "description": "Empanadas fritas, por unidad.",
        "price": "$3.000,00",
        "image": "images/products/370.webp"
    },
    {
        "category": "Entradas",
        "name": "BASTONES DE MUZZARELLA",
        "description": "",
        "price": "$14.000,00",
        "image": "images/products/621.webp"
    },
    {
        "category": "Papas Fritas",
        "name": "PAPAS ORIGINALES",
        "description": "",
        "price": "$10.000,00",
        "image": "images/products/76.webp"
    },
    {
        "category": "Papas Fritas",
        "name": "PAPAS LAS DE SIEMPRE",
        "description": "Papas fritas con cheddar, panceta y verdeo.",
        "price": "$12.000,00",
        "image": "images/products/80.webp"
    },
    {
        "category": "Hamburgesas",
        "name": "MANSIÓN FELIZ",
        "description": "Pan de papa, medallòn 100gr, doble cheddar, porción de papas, lata de gaseosa o jugo.",
        "price": "$13.000,00",
        "image": "images/products/32.webp"
    },
    {
        "category": "Hamburgesas",
        "name": "LA FAMOSA",
        "description": "Pan de papa, doble medallón 100gr, cuádruple cheddar, cebolla caramelizada, panceta.",
        "price": "$17.000,00",
        "image": "images/products/34.webp"
    },
    {
        "category": "Hamburgesas",
        "name": "MESSIRVE",
        "description": "Pan de papa, doble medallón 100gr, cuádruple cheddar, lechuga, tomate, cebolla, salsa tasty",
        "price": "$17.000,00",
        "image": "images/products/33.webp"
    },
    {
        "category": "Hamburgesas",
        "name": "MIRA VO",
        "description": "",
        "price": "$17.000,00",
        "image": "images/products/36.webp"
    },
    {
        "category": "Hamburgesas",
        "name": "BONDIOLA BBQ",
        "description": "Pan de papa, bondiola desmenuzada con barbacoa, morrón asado y cebolla crispy.",
        "price": "$17.000,00",
        "image": "images/products/38.webp"
    },
    {
        "category": "Pizza",
        "name": "PIZZA MUZZARELLA",
        "description": "",
        "price": "$20.000,00",
        "image": "images/products/71.webp"
    },
    {
        "category": "Pizza",
        "name": "PIZZA JAMON Y MORRON",
        "description": "",
        "price": "$24.000,00",
        "image": "images/products/72.webp"
    },
    {
        "category": "Postres",
        "name": "FLAN",
        "description": "Con dulce de leche o crema.",
        "price": "$6.000,00",
        "image": "images/products/97.webp"
    },
    {
        "category": "Postres",
        "name": "VOLCAN DE CHOCOLATE",
        "description": "Con bocha de helado de crema americana y frutos rojos.",
        "price": "$9.000,00",
        "image": "images/products/99.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "AGUA SIN GAS 500ML",
        "description": "",
        "price": "$3.000,00",
        "image": "images/products/107.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "AGUA CON GAS 500ML",
        "description": "",
        "price": "$3.000,00",
        "image": "images/products/106.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "AQUARIUS MANZANA",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/540.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "AQUARIUS PERA",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/786.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "AQUARIUS POMELO",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/105.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "COCA COLA 500ML",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/102.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "COCA COLA ZERO 500ML",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/217.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "FANTA 500ML",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/103.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "SPRITE 500ML",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/104.webp"
    },
    {
        "category": "Sin Alcohol",
        "name": "Speed.",
        "description": "",
        "price": "$4.000,00",
        "image": "images/products/538.webp"
    },
    {
        "category": "Limonadas",
        "name": "LIMONADA BATIDA MYJ",
        "description": "Jugo de limón, menta, jengibre, azúcar y syrup.",
        "price": "$5.500,00",
        "image": "images/products/113.webp"
    },
    {
        "category": "Limonadas",
        "name": "LIMONADA FROZEN MYJ",
        "description": "Jugo de limón, menta, jengibre, azúcar y syrup.",
        "price": "$5.500,00",
        "image": "images/products/298.webp"
    },
    {
        "category": "Limonadas",
        "name": "MELONADA BATIDA",
        "description": "Jugo de limón, melón y almíbar neutro.",
        "price": "$5.500,00",
        "image": "images/products/116.webp"
    },
    {
        "category": "Limonadas",
        "name": "MELONADA FROZEN",
        "description": "Jugo de limón, melón y almíbar neutro.",
        "price": "$5.500,00",
        "image": "images/products/519.webp"
    },
    {
        "category": "Limonadas",
        "name": "POMELADA BATIDA",
        "description": "Jugo de pomelo, jugo de limón, azúcar, pomelo, lima.",
        "price": "$5.500,00",
        "image": "images/products/115.webp"
    },
    {
        "category": "Limonadas",
        "name": "POMELADA FROZEN",
        "description": "Jugo de pomelo, jugo de limón, azúcar, pomelo, lima.",
        "price": "$5.500,00",
        "image": "images/products/520.webp"
    },
    {
        "category": "Jarras",
        "name": "JARRA DE LIMONADA",
        "description": "",
        "price": "$16.000,00",
        "image": "images/products/117.webp"
    },
    {
        "category": "Jarras",
        "name": "JARRA CAIPI MIX.",
        "description": "",
        "price": "$20.000,00",
        "image": "images/products/300.webp"
    },
    {
        "category": "Jarras",
        "name": "JARRA GIN TONIC.",
        "description": "",
        "price": "$22.000,00",
        "image": "images/products/304.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Stella Artois",
        "description": "",
        "price": "$5.000,00",
        "image": "images/products/122.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Stella Artois",
        "description": "",
        "price": "$6.500,00",
        "image": "images/products/127.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Scotish Gaucho",
        "description": "",
        "price": "$5.500,00",
        "image": "images/products/123.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Scotish Gaucho",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/128.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Honey Gaucho",
        "description": "",
        "price": "$5.500,00",
        "image": "images/products/124.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Honey Gaucho",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/129.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Ipa LA CASA",
        "description": "",
        "price": "$6.500,00",
        "image": "images/products/126.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Ipa LA CASA",
        "description": "",
        "price": "$8.000,00",
        "image": "images/products/131.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Golden Gaucho",
        "description": "",
        "price": "$5.500,00",
        "image": "images/products/132.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Golden Gaucho",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/137.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Ipa Gaucho",
        "description": "",
        "price": "$6.500,00",
        "image": "images/products/136.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Ipa Gaucho",
        "description": "",
        "price": "$8.000,00",
        "image": "images/products/141.webp"
    },
    {
        "category": "Cervezas",
        "name": "Pinta Stout Gaucho",
        "description": "",
        "price": "$5.500,00",
        "image": "images/products/134.webp"
    },
    {
        "category": "Cervezas",
        "name": "Cañon Stout Gaucho",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/139.webp"
    },
    {
        "category": "Cervezas",
        "name": "Porron corona",
        "description": "",
        "price": "$6.500,00",
        "image": "images/products/142.webp"
    },
    {
        "category": "Cervezas",
        "name": "PORRÓN BLUE MOON",
        "description": "BLUE MOON BELGIAN WHITE",
        "price": "$6.000,00",
        "image": "images/products/844.webp"
    },
    {
        "category": "Cervezas",
        "name": "COMBO BLUE MOON",
        "description": "4 BLUE MOON BELGIAN WHITE",
        "price": "$20.000,00",
        "image": "images/products/845.webp"
    },
    {
        "category": "Cocktails",
        "name": "BRUMA",
        "description": "Gin infusionado con moras, glitter, blue coracao, jugo de arandanos, jugo de lima, tónica.",
        "price": "$8.000,00",
        "image": "images/products/780.webp"
    },
    {
        "category": "Cocktails",
        "name": "PLUM SIREN",
        "description": "Gin, Campari, mermelada de ciruela, almibar, jugo de pomelo.",
        "price": "$8.000,00",
        "image": "images/products/765.webp"
    },
    {
        "category": "Cocktails",
        "name": "ALGO CREMOSO",
        "description": "Baileys, licor de café, helado de crema, chocolate rayado, salsa charlotte.",
        "price": "$9.000,00",
        "image": "images/products/185.webp"
    },
    {
        "category": "Cocktails",
        "name": "APEROL SPRITZ",
        "description": "Aperol en copón, piel de naranja, champagne, jugo de naranja.",
        "price": "$7.000,00",
        "image": "images/products/186.webp"
    },
    {
        "category": "Cocktails",
        "name": "CITRIC PAM",
        "description": "Absolut apeach, frutos rojos, jugo de arándanos, jugo de pomelo, jugo de naranja, almíbar neutro.",
        "price": "$8.000,00",
        "image": "images/products/187.webp"
    },
    {
        "category": "Cocktails",
        "name": "PINK MANSION",
        "description": "",
        "price": "$9.000,00",
        "image": "images/products/207.webp"
    },
    {
        "category": "Cocktails",
        "name": "MALIBU FRUIT",
        "description": "Malibu, frutos rojos, jugo de pomelo o naranja, almibár.",
        "price": "$8.000,00",
        "image": "images/products/196.webp"
    },
    {
        "category": "Cocktails",
        "name": "GANCIA BATIDO",
        "description": "Gancia, lima, jugo de limón, azúcar, almíbar.",
        "price": "$6.000,00",
        "image": "images/products/192.webp"
    },
    {
        "category": "Cocktails",
        "name": "GARIBALDI",
        "description": "Campari, jugo de naranja, naranja natural.",
        "price": "$6.000,00",
        "image": "images/products/193.webp"
    },
    {
        "category": "Cocktails",
        "name": "MARGARITA CLASICA",
        "description": "Tequila blanco, triple sec, jugo de limón, azúcar, almíbar.",
        "price": "$6.000,00",
        "image": "images/products/197.webp"
    },
    {
        "category": "Cocktails",
        "name": "MARGARITA FRUTOS ROJOS",
        "description": "Tequila blanco, triple sec, jugo de limón, frutos rojos, azúcar, almíbar.",
        "price": "$7.000,00",
        "image": "images/products/198.webp"
    },
    {
        "category": "Cocktails",
        "name": "MOJITO",
        "description": "Ron, lima, menta, almíbar, base biter angostura, soda o sprite, jugo de limón.",
        "price": "$7.000,00",
        "image": "images/products/199.webp"
    },
    {
        "category": "Cocktails",
        "name": "MOJITO MARACUYA",
        "description": "Ron Havana blanco, lima, maracuyá, menta, sprite, almíbar.",
        "price": "$7.500,00",
        "image": "images/products/206.webp"
    },
    {
        "category": "Cocktails",
        "name": "NEGRONI",
        "description": "Campari, vermouth, gin Brighton, piel de naranja.",
        "price": "$6.000,00",
        "image": "images/products/200.webp"
    },
    {
        "category": "Cocktails",
        "name": "STACY MALIBU",
        "description": "Malibú con coca",
        "price": "$7.000,00",
        "image": "images/products/202.webp"
    },
    {
        "category": "Cocktails",
        "name": "CYNAR JULEP",
        "description": "Cynar, lima, azúcar, pomelo, menta, jugo de pomelo.",
        "price": "$7.000,00",
        "image": "images/products/209.webp"
    },
    {
        "category": "Cocktails",
        "name": "CAÑON DE FERNET",
        "description": "",
        "price": "$7.500,00",
        "image": "images/products/601.webp"
    },
    {
        "category": "Cocktails",
        "name": "CUBA LIBRE",
        "description": "Ron, limón y Coca Cola.",
        "price": "$7.000,00",
        "image": "images/products/188.webp"
    },
    {
        "category": "Cocktails",
        "name": "DAIKIRI FRUTILLA",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/297.webp"
    },
    {
        "category": "Cocktails",
        "name": "DAIKIRI DURAZNO",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/730.webp"
    },
    {
        "category": "Cocktails",
        "name": "DAIKIRI ANANA",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/731.webp"
    },
    {
        "category": "Cocktails",
        "name": "DAIKIRI FRUTOS ROJOS",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/732.webp"
    },
    {
        "category": "Caipis",
        "name": "CAIPI DA HOUSE",
        "description": "Vodka, lima, azúcar, almíbar, frutilla, maracuya.",
        "price": "$7.000,00",
        "image": "images/products/213.webp"
    },
    {
        "category": "Caipis",
        "name": "CAIPI JAGER",
        "description": "Jagger, lima, azúcar, almibar neutro, jugo de pomelo.",
        "price": "$9.000,00",
        "image": "images/products/216.webp"
    },
    {
        "category": "Caipis",
        "name": "CAIPI PASSION",
        "description": "Vodka, maracuyá, frutos rojos, lima, azúcar y almíbar.",
        "price": "$7.000,00",
        "image": "images/products/214.webp"
    },
    {
        "category": "Caipis",
        "name": "CAIPIS FRUTALES",
        "description": "",
        "price": "$7.000,00",
        "image": "images/products/290.webp"
    },
    {
        "category": "Caipis",
        "name": "CAIPI LIMA.",
        "description": "Vodka, lima, azúcar, almibar.",
        "price": "$7.000,00",
        "image": "images/products/684.webp"
    }
];