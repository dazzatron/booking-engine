var db = db.getSiblingDB('ibe');

var currencies = [
    {
        "value": "Currency: GB Pounds",
        "symbol": "£",
        "rate": 1
    },
    {
        "value": "Currency: US Dollars",
        "symbol": "$",
        "rate": 1.7
    },
    {
        "value": "Currency: Euros",
        "symbol": "€",
        "rate": 1.3
    }
];

var trips = [{

    "tripName": "china-and-the-yangtze",
    "trip": {
        "country": "china",
        "name": "china and the yangtze",
        "headerImage": "img/china-header.jpg",
        "countryImage": "img/yangtze.jpg",
        "tripImage": "img/china-map.jpg",
        "duration": 7,
        "maxGroupSize": 18,
        "pricesFrom": 2000,
        "roomOptions": [
            { "id": 1, "name": "Two Double", "maxPeople": 4, "perAdult": 1000, "perChild": 800 },
            { "id": 2, "name": "Two Single", "maxPeople": 2, "perAdult": 1200, "perChild": 900 },
            { "id": 3, "name": "Three Single", "maxPeople": 3, "perAdult": 900, "perChild": 700 }
        ],
        "dates": [
        {
            "id": 1,
            "limited": true,
            "from": 1418342400000,
            "to": 1418947200000
        },
        {
            "id": 2,
            "from": 1418947200000,
            "to": 1419552000000
        },
        {
            "id": 3,
            "from": 1419552000000,
            "to": 1420243200000
        },
        {
            "id": 4,
            "from": 1420243200000,
            "to": 1420848000000
        }

        ],
        "tours": [
            {
                "id": 1000,
                "type": "pre",
                "title": "great wall of china",
                "image": "img/china.jpg",
                "days": 4,
                "perPerson": 1000,
                "information": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China in part to protect the Chinese Empire or its prototypical states against intrusions by various nomadic groups or military incursions by various warlike peoples or forces. Several walls were being built as early as the 7th century BC; these, later joined together and made bigger and stronger, are now collectively referred to as the Great Wall. Especially famous is the wall built between 220–206 BC by the first Emperor of China, Qin Shi Huang. Little of that wall remains. Since then, the Great Wall has on and off been rebuilt, maintained, and enhanced; the majority of the existing wall is from the Ming Dynasty."
            },
            {
                "id": 1001,
                "type": "post",
                "title": "terracotta army tour",
                "image": "img/terracotta-army.jpg",
                "days": 6,
                "perPerson": 2000,
                "information": "The Terracotta Army or the 'Terracotta Warriors and Horses' is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE and whose purpose was to protect the emperor in his afterlife. The figures, dating from approximately the late third century BCE, were discovered in 1974 by local farmers in Lintong District, Xi'an, Shaanxi province. The figures vary in height according to their roles, with the tallest being the generals. The figures include warriors, chariots and horses. Estimates from 2007 were that the three pits containing the Terracotta Army held more than 8,000 soldiers, 130 chariots with 520 horses and 150 cavalry horses, the majority of which remained buried in the pits nearby Qin Shi Huang's mausoleum. Other terracotta non-military figures were found in other pits, including officials, acrobats, strongmen and musicians."
            }
        ]

    }

},
{
    "tripName": "classic-china",
    "trip": {
        "country": "china",
        "name": "classic china",
        "headerImage": "img/china-header.jpg",
        "countryImage": "img/china.jpg",
        "tripImage": "img/china-map.jpg",
        "duration": 7,
        "maxGroupSize": 12,
        "pricesFrom": 2000,
        "roomOptions": [
            { "id": 7, "name": "One Double", "maxPeople": 2, "perAdult": 1400, "perChild": 0 },
            { "id": 8, "name": "One Single", "maxPeople": 1, "perAdult": 600, "perChild": 400 }
        ],
        "dates": [
        {
            "id": 10,
            "limited": true,
            "from": 1425254400000,
            "to": 1425859200000
        },
        {
            "id": 12,
            "from": 1425859200000,
            "to": 1426464000000
        },
        {
            "id": 13,
            "soldOut": true,
            "from": 1426464000000,
            "to": 1427068800000
        },
        {
            "id": 14,
            "from": 1427068800000,
            "to": 1427673600000
        }

        ],
        "tours": [
            {
                "id": 1000,
                "type": "pre",
                "title": "great wall of china",
                "image": "img/china.jpg",
                "days": 4,
                "perPerson": 1000,
                "information": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China in part to protect the Chinese Empire or its prototypical states against intrusions by various nomadic groups or military incursions by various warlike peoples or forces. Several walls were being built as early as the 7th century BC; these, later joined together and made bigger and stronger, are now collectively referred to as the Great Wall. Especially famous is the wall built between 220–206 BC by the first Emperor of China, Qin Shi Huang. Little of that wall remains. Since then, the Great Wall has on and off been rebuilt, maintained, and enhanced; the majority of the existing wall is from the Ming Dynasty."
            },
            {
                "id": 1001,
                "type": "post",
                "title": "terracotta army tour",
                "image": "img/terracotta-army.jpg",
                "days": 6,
                "perPerson": 2000,
                "information": "The Terracotta Army or the 'Terracotta Warriors and Horses' is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE and whose purpose was to protect the emperor in his afterlife. The figures, dating from approximately the late third century BCE, were discovered in 1974 by local farmers in Lintong District, Xi'an, Shaanxi province. The figures vary in height according to their roles, with the tallest being the generals. The figures include warriors, chariots and horses. Estimates from 2007 were that the three pits containing the Terracotta Army held more than 8,000 soldiers, 130 chariots with 520 horses and 150 cavalry horses, the majority of which remained buried in the pits nearby Qin Shi Huang's mausoleum. Other terracotta non-military figures were found in other pits, including officials, acrobats, strongmen and musicians."
            }
        ]

    }

},
{

    "tripName": "classic-japan",
    "trip": {
        "country": "japan",
        "name": "classic japan",
        "headerImage": "img/japan-header.jpg",
        "countryImage": "img/japan.jpg",
        "tripImage": "img/japan-map.jpg",
        "duration": 7,
        "maxGroupSize": 20,
        "pricesFrom": 5000,
        "roomOptions": [
            { "id": 100, "name": "Two Double", "maxPeople": 4, "perAdult": 200, "perChild": 400 },
            { "id": 200, "name": "Two Single", "maxPeople": 2, "perAdult": 2200, "perChild": 1800 }
        ],
        "dates": [
    {
        "id": 31,
        "limited": true,
        "from": 1431212400000,
        "to": 1431817200000
    },
    {
        "id": 32,
        "from": 1431817200000,
        "to": 1432422000000
    },
    {
        "id": 34,
        "from": 1432422000000,
        "to": 1433113200000
    }
        ],
        "tours": [
            {
                "id": 1000,
                "type": "pre",
                "title": "todaiji temple tour",
                "image": "img/todaiji-temple.jpg",
                "days": 4,
                "perPerson": 1000,
                "information": "Tōdai-ji (東大寺?, Eastern Great Temple),[1] is a Buddhist temple complex, that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. Its Great Buddha Hall (大仏殿 Daibutsuden?), houses the world's largest bronze statue of the Buddha Vairocana,[2] known in Japanese simply as Daibutsu (大仏?). The temple also serves as the Japanese headquarters of the Kegon school of Buddhism. The temple is a listed UNESCO World Heritage Site as 'Historic Monuments of Ancient Nara', together with seven other sites including temples, shrines and places in the city of Nara. Sika deer, regarded as messengers of the gods in the Shinto religion, roam the grounds freely."
            },
            {
                "id": 1001,
                "type": "post",
                "title": "mount fuji trek",
                "image": "img/mount-fuji.jpg",
                "days": 6,
                "perPerson": 2000,
                "information": "Mount Fuji (富士山 Fujisan?, IPA: [ɸɯꜜdʑisaɴ] ( listen)), located on Honshu Island, is the highest mountain in Japan at 3,776.24 m (12,389 ft). An active stratovolcano that last erupted in 1707–08, Mount Fuji lies about 100 kilometres (60 mi) south-west of Tokyo, and can be seen from there on a clear day. Mount Fuji's exceptionally symmetrical cone, which is snow-capped several months a year, is a well-known symbol of Japan and it is frequently depicted in art and photographs, as well as visited by sightseers and climbers. It is one of Japan's 'Three Holy Mountains' (三霊山 Sanreizan?) along with Mount Tate and Mount Haku; it is a Special Place of Scenic Beauty, a Historic Site, and was added to the World Heritage List as a Cultural Site on June 22, 2013."
            }
        ]

    }

},
{
    "tripName": "passport-to-the-world",
    "trip": {
        "country": "japan",
        "name": "passport to the world",
        "headerImage": "img/japan-header.jpg",
        "countryImage": "img/japan-passport.jpg",
        "duration": 7,
        "maxGroupSize": 18,
        "pricesFrom": 2000,
        "roomOptions": [
            { "id": 11, "name": "Two Double", "maxPeople": 4, "perAdult": 4000, "perChild": 2800 },
            { "id": 12, "name": "Two Single", "maxPeople": 2, "perAdult": 1200, "perChild": 900 },
            { "id": 13, "name": "One Double", "maxPeople": 1, "perAdult": 1400, "perChild": 1000 },
            { "id": 14, "name": "One Single", "maxPeople": 1, "perAdult": 600, "perChild": 400 }
        ],
        "dates": [
        {
            "id": 31,
            "limited": true,
            "from": 1431212400000,
            "to": 1431817200000
        },
        {
            "id": 32,
            "from": 1431817200000,
            "to": 1432422000000
        },
        {
            "id": 34,
            "from": 1432422000000,
            "to": 1433113200000
        }
        ],
        "tours": [
            {
                "id": 1000,
                "type": "pre",
                "title": "todaiji temple tour",
                "image": "img/todaiji-temple.jpg",
                "days": 4,
                "perPerson": 1000,
                "information": "Tōdai-ji (東大寺?, Eastern Great Temple),[1] is a Buddhist temple complex, that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. Its Great Buddha Hall (大仏殿 Daibutsuden?), houses the world's largest bronze statue of the Buddha Vairocana,[2] known in Japanese simply as Daibutsu (大仏?). The temple also serves as the Japanese headquarters of the Kegon school of Buddhism. The temple is a listed UNESCO World Heritage Site as 'Historic Monuments of Ancient Nara', together with seven other sites including temples, shrines and places in the city of Nara. Sika deer, regarded as messengers of the gods in the Shinto religion, roam the grounds freely."
            },
            {
                "id": 1001,
                "type": "post",
                "title": "mount fuji trek",
                "image": "img/mount-fuji.jpg",
                "days": 6,
                "perPerson": 2000,
                "information": "Mount Fuji (富士山 Fujisan?, IPA: [ɸɯꜜdʑisaɴ] ( listen)), located on Honshu Island, is the highest mountain in Japan at 3,776.24 m (12,389 ft). An active stratovolcano that last erupted in 1707–08, Mount Fuji lies about 100 kilometres (60 mi) south-west of Tokyo, and can be seen from there on a clear day. Mount Fuji's exceptionally symmetrical cone, which is snow-capped several months a year, is a well-known symbol of Japan and it is frequently depicted in art and photographs, as well as visited by sightseers and climbers. It is one of Japan's 'Three Holy Mountains' (三霊山 Sanreizan?) along with Mount Tate and Mount Haku; it is a Special Place of Scenic Beauty, a Historic Site, and was added to the World Heritage List as a Cultural Site on June 22, 2013."
            }
        ]

    }

}
];

db.trips.remove({});
db.currencies.remove({});

db.trips.insert(trips);
db.currencies.insert(currencies);