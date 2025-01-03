CREATE DATABASE coins;
USE coins;
CREATE TABLE IF NOT EXISTS CoinCategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);
INSERT INTO CoinCategories (name)
VALUES 
('Bullion'),
('Exclusive'),
('Commemorative');
CREATE TABLE CoinTypes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO CoinTypes (name)
VALUES 
('Bullion'),
('Exclusive'),
('Commemorative');
CREATE TABLE IF NOT EXISTS Coins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coin_category_id INT,
    coin_type_id INT,
    coin_name VARCHAR(100),
    issuing_country VARCHAR(255),
    composition VARCHAR(255),
    quality VARCHAR(50),
    denomination VARCHAR(50),
    year INT,
    weight DECIMAL(5 , 2 ),
    description TEXT,
    price INT,
    long_description TEXT ,
    observe_img varchar(255),
    reverse_img varchar(255),
    FOREIGN KEY (coin_category_id)
        REFERENCES CoinCategories (id),
    FOREIGN KEY (coin_type_id)
        REFERENCES CoinTypes (id)
);
INSERT INTO Coins (coin_category_id, coin_type_id, coin_name, issuing_country, composition, quality, denomination, year, weight, description, price, long_description, observe_img, reverse_img)
VALUES 
(1, 1, 'South Vietnamese Dong','Republic of Vietnam', 'nickel', 'BU', '1 dong', 1955, 5.05, 'Currency of the Republic of Vietnam in 1955-1975 with wheat on the front side and a money unit symbol on the reverse side.',56, 
'Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.Currency of the Republic of Vietnam in 1955-1975. On the front side, we see wheat, and on the back, a unit symbolizing money.The monetary unit of South Vietnam was originally the Indochinese piastre, issued by the Institute of Emissions of the States of Cambodia, Laos and Vietnam. Banknotes of the graduating institute were issued in three types: Cambodian, Lao and Vietnamese. The inscriptions on the banknotes of all samples were made in four languages: French, Khmer, Lao and Vietnamese. Vietnamese-style banknotes depicted a pattern, as well as the inscription “VIÊN PHÁT-HÀNH”. Piastres previously issued by the French Bank of Indochina were also in circulation.', 
'https://i.hizliresim.com/qf8pu5n.jpg', 'https://i.hizliresim.com/pm5cm0v.jpg' ),
(1, 1, 'The British Antelope', 'British South Africa', 'gold', 'BU', '1/2 pound', 1952, 6.3, 
'British South African gold coin featuring an antelope on the reverse side. The obverse features the head of King George VI.', 78,
'Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952. \n On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX. \nOn the other side of the coin is an Antelope. Around it is the inscription SOUTH AFRICA 1952 SUID AFRICA, dotted with dots. Below is the nominal value.
', 'https://i.hizliresim.com/rn8jqir.jpg', 'https://i.hizliresim.com/p97ljx6.jpg'),
(1, 1, 'Cron','Estonia', 'gold', 'BU', '1 crown', 1934, 5.67, 'Estonian coin featuring a Viking ship, the Knarr, at sea.', 79, 
'A unique coin depicting a Knorr Viking ship at sea. \nCoin 1 crown was issued from August 1, 1934 to March 25, 1941, during the first period of Estonia’s independence. \nOn the obverse of the coin in the center is a large state seal, the emblem of Estonia, crowned with an arched text with the inscription “Eesti Vabariik”, and on the lower edge - the year of issue “1934”. \nThe reverse depicts a Viking ship Knarr in the sea, under which appears the inscription 1 crown. \nIn 2012, a single crown coin. \n1934 was recognized as "the most beautiful coin ever circulated in Estonia."
', 'https://i.hizliresim.com/4wq956d.jpg', 'https://i.hizliresim.com/4l84b4v.jpg'),
(1, 1, 'Franc','Belgian Congo', 'gold', 'BU', '2 francs', 1947, 5.45, 
'Coin from the Belgian Congo featuring a walking elephant on the reverse and inscriptions in French and Dutch.', 68,
'Unique coin with the image of a walking elephant. "Frank" of the Belgian Congo. \nOn the reverse of the coin in its central part there is an inscription in French: "2 francs" - 2 francs, framed by a five-pointed star. Along the edge from left to right there is an inscription in French and Dutch in two lines: “BANQUE DU CONGO BELGE”, “BANQUE VAN BELGISCH CONGO” - Bank of the Belgian Congo. The edge of the coin is decorated with decorative teeth. \nOn the reverse of the coin in the central part is a walking elephant. The year of minting is located under it: 1947. The edge is uneven.'
,'https://i.hizliresim.com/mcjcgot.jpg', 'https://i.hizliresim.com/clajxri.jpg'),
(1, 1, 'Stork','France', 'steel', 'BU', '2 francs', 1997, 6.57,'Commemorative coin issued in 1997 in honor of Georges Guynemer, a famous pilot of WWI.', 54,
"Unique coin with the image of a flying stork. French coin at 2 two francs 1997. \n
Two francs by Georges Gynemer - a commemorative coin of two French francs, issued in 1997 in honor of the famous pilot of the First World War, Georges Gynemer, on the occasion of the 80th anniversary of the officer cross of the Legion of Honor and his death: shot down in flight by a German plane. \n
They are painted by engravers of the workshop of coins and medals under the direction of the general engraver of coins Pierre Rodier 4. \n
The obverse depicts a portrait of Georges Gainemer in a flight suit and pilot's glasses, raised to his forehead. The inscription GEORGES GUYNEMER 1894-1917 in a semicircle at the top of the coin. And also the year of release below.\n
The reverse shows a flying stork. Also below the arc is the inscription LIBERTÉ ÉGALITÉ FRATERNITÉ, separated by dots. And the face value at the top of the coin.
", 'https://i.hizliresim.com/2k7wkbx.jpg', 'https://i.hizliresim.com/hcf5boo.jpg'),
(1, 1, 'Gyeonggi', 'Australia', 'gold', 'BU', '1 dollar', 1984, 4.76, 'Australian coin with the image of five kangaroos, symbolizing Australia.', 97,
' "Gyeonggi". Coin with the image of five kangaroos - symbols of Australia. \n The first Australian coin with a nominal value of 1 dollar was introduced on May 13, 1984 to replace a one-dollar banknote. \nThe portraits of Elizabeth II on the obverse of the 1984, 1985 and 1988 coins were made by Arnold Machin, and on the 1999 coins by Ian Rank-Broadley. \n
The reverse of the coin depicts five kangaroos symbolizing Australia. The drawing was designed by Stuart Devlin in 1966. \nThe first Australian $ 1 coin was introduced on May 13, 1984 to replace a one-dollar bill. \nThis is currently the most common coin denomination in Australia.' , 'https://i.hizliresim.com/bmw3b4j.jpg', 'https://i.hizliresim.com/ijx7gbl.jpg'),
(1, 1, 'Bolivian Peso','Bolivia', 'steel', 'BU', '1 PESO', 1988, 3.62, 'Coin from Bolivia featuring the inscription REPUBLICADE BOLIVIA and the image of the Bolivian peso.',54
, 'Boliviano Coin with the image of Bolivia. \n
By 1987, the Bolivian peso had completely depreciated and was replaced by a new boliviano during another monetary reform. \n
Old banknotes were printed and used as a "bargaining chip." And in 1988, they began to mint a real coin. \n
This currency is still in circulation. \n
At the top of one of the sides of the coin in a semicircle is the inscription REPUBLICADE BOLIVIA. At the bottom of the coin, an arc depicts 10 stars. \n
Above, on the other side of the coin, the inscription PESO BOLIVIANO is located in an arc. In the middle is an image of face value. At the bottom of the year, framed on both sides by branches.
', 'https://i.hizliresim.com/olmaf9y.jpg', 'https://i.hizliresim.com/hp7ouix.jpg'),
(1, 1, 'Botswana','Botswana', 'steel', 'BU', '1 thebe', 1976, 4.28, 'Coin from Botswana with an image of a bird. The name “Botswana” means “let it rain,”.', 62,
'"Botswana". Coin with the image of a bird. \n
Coin of state of Botswana 1976. \n
Translated from Botswana, its name means “let it rain” \n
After gaining independence from the United Kingdom in 1966, Botswana was a member of currency unions. \n
In 2005, as a result of inflation, the currency fell by 12%, but it still remains one of the “strong” currencies on the African continent.'
,'https://i.hizliresim.com/pwvi10i.jpg', 'https://i.hizliresim.com/eleptdl.jpg'),
(1, 1, 'Virginia','British Virgin Islands', 'nickel', 'BU', '5 dollars', 2014, 6.98, 
'Coin depicting a seahorse on the reverse, symbolizing the marine heritage of the British Virgin Islands.', 108,
'Virginia Coin with the image of a seahorse. Coin created during the reign of Elizabeth II. \n
The obverse depicts Her Majesty Queen Elizabeth II. At the top of the coin is the inscription British Virgin Islands Queen Elizabeth II 2014. \n
The reverse depicts a beautiful seahorse with a tail wrapped around a coral. \n
The choice of seahorse reflects the marine heritage of the British Virgin Islands. The British Virgin Islands, located in the Caribbean Sea and consisting of more than 60 islands, are known for their coral reefs, which are home to a wide variety of animal species, including seahorses. \n
Seahorse is the name given to 54 species of marine fish in the genus Hippocampus, which comes from the ancient Greek hippos, which means “horse”, and Campos - “sea monster”.'
,'https://i.hizliresim.com/phz8tc7.jpg', 'https://i.hizliresim.com/cnm2qpi.jpg'),
(1, 1, 'Theobroma Cocoa', 'Ghana', 'steel', 'BU', '20 pesewas', 1962, 4.76, 'The shield is divided into parts depicting a sword, staff, representing the country’s rich heritage.', 54,
'Coin with a lion in the center of the shield. Ghana coin, published in 1967. \n
The reverse depicts a runaway lion in the center of a shield divided into four parts, separating the date and the face value. The inscription at the top of the coin is TWENTY. \n
As for the images inside the coat of arms: \n
upper left: sword (used by chieftains) and std (used by a linguist for ceremonial events) \n
top right: OSU castle at sea (Presidential Palace), \n
bottom left: cocoa tree (agricultural wealth of Ghana). \n
Bottom right: a gold mine (rich in industrial minerals and natural resources) in Ghana. \n
The Golden Lion and George intersect in the center (a permanent connection between Ghana and the Commonwealth of Nations).
', 'https://i.hizliresim.com/7j5fjoc.jpg', 'https://i.hizliresim.com/sgevs71.jpg'),
(1, 1, 'Coin of the Weimar Republic','Weimar Republic', 'silver', 'BU', '5 Mark', 1927, 4.76, 
'Coin with the coat of arms of the Weimar Republic and the Hindenburg family.',142,
'The Hindenburg Coin with the coat of arms of the Weimar Republic. \n
On the obverse, in the center of the coin, at the top is the coat of arms of the Weimar Republic. \n 
In the center below is the coat of arms of the Hindenburg family. This is a shield divided into 4 fields - in the upper left and lower right corners there is a head of a bull. \n
On the reverse side is a portrait of Paul von Hindenburg (1847–1934), Field Marshal, President of the Weimar Republic in 1925–1934 (right). \n  Along the edge of the coin is a semicircle of date: 1847-1927 and the inscription: * * REICHSPRASIDENT * VON * HINDENBURG •. At the bottom left of the portrait is a letter denoting a German mint. ',
'https://i.hizliresim.com/d2fncrt.jpg', 'https://i.hizliresim.com/efze6ah.jpg'),
(1, 1, 'Scientist','Egypt', 'silver', 'BU', '1 pound', 1981, 3.95, 'Silver coin from Egypt depicting the god Thoth. The coin is associated with the Egyptian pound (LE) and represents the rich cultural and historical significance of Egypt.',112
, 'Silver Egyptian coin with the image of the god Thoth. Silver Egyptian coin. \n
Face value one pound. It has been produced since 1981. \n
The coin shows the name of the country and its meaning in Arabic. Also depicted is the Egyptian god Thoth. \n
On the other side is a travel plate left by a radiant sun gear and splatter. \n
The Egyptian pound is often shortened as LE or L. E., which means livre égyptienne (French for Egyptian pound). \n
', 'https://i.hizliresim.com/i7h0agb.jpg', 'https://i.hizliresim.com/djzuqy0.jpg'),

(3, 3, 'CANADA BEAVER', 'CANADA', 'nickel', 'BU', '5 cents', 1965, 4.54, 'Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',40
,'"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II. \nIn the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. \nThe inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. \nBelow is a mint mark. \nIn the center of the coin reverse is a Canadian beaver on a rock sticking out of the water.At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.'
, 'https://i.hizliresim.com/jp8ms56.jpg', 'https://i.hizliresim.com/shmfwn6.jpg'),
(3, 3, 'Looney', 'CANADA',  'gold', 'BU', '1 dollar', 1970, 5.4, 'Looney. Unique coin with the image of a goat. Canadian dollar symbol. The reverse of the coin depicts a black goat - a symbol of Canada.', 50,
'"Looney". Unique coin with the image of a goat. Canadian dollar symbol. \n
The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle "Canadian dollar". \n
The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.', 
'https://i.hizliresim.com/8owa9on.jpg','https://i.hizliresim.com/jsnnio7.jpg'),
(3, 3, 'Jefferson','UNITED STATES OF AMERICA', 'nickel', 'BU', '5 cents', 1966, 3.54, 'Jefferson. Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents. ', 35,
'Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents. \n
The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle "IN GOD WE TRUST". Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966. \n
The reverse side shows the Jefferson Monticello estate, as well as the inscription: on the top - the motto “E PLURIBUS UNUM”, on the bottom - the inscriptions “MONTICELLO”, “FIVE CENTS” and “UNITED STATES OF AMERICA”.', 
'https://i.hizliresim.com/m2f6da5.jpg', 'https://i.hizliresim.com/1fx5u6x.jpg'),
(3, 3, 'Kennedy', 'UNITED STATES OF AMERICA', 'nickel', 'BU', 'HALF DOLLAR', 1963, 4.3, 'Kennedy. The unique coin is made in honor of the assassination of the 35th president of Texas. ', 43, 'The unique coin is made in honor of the assassination of the 35th president of Texas. \n
On November 22, 1963, in connection with the assassination of the 35th President John F. Kennedy in Dallas (Texas), it was decided to perpetuate the memory of President Kennedy on a coin. \n
On the obverse to the right is a portrait of the 35th President of the United States, John F. Kennedy. Captions: FREEDOM / IN GOD WE TRUST / 1993. \n
The reverse depicts the US state emblem (bald eagle with a shield) in the ring of stars. Captions: UNITED STATES OF AMERICA / E PLURIBUS UNUM / HALF DOLLAR.
', 'https://i.hizliresim.com/94ky96d.jpg', 'https://i.hizliresim.com/b5tqut8.jpg'),
(3, 3, 'Canadian Cent','CANADA', 'Steel', 'BU', '1 cent', 1965, 2.7, 'Canadian Cent. A unique coin with the image of maple leaves - symbols of Canada. ', 8, '"Canadian cent." A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.
On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012. /n
On the reverse, in the center of the coin are two maple leaves (the symbol of Canada), the year of issue is 2012 on the left. The upper part of the coin shows the denomination: 1 cent (1 cent), in the lower part of the inscription in a semicircle: CANADA. /n
On the obverse in the center of the coin on the right is a portrait of Queen Elizabeth II. Along the edge of the coin there is an inscription: Elizabeth II D G REGINA.
', 'https://i.hizliresim.com/ku7bqhi.jpg', 'https://i.hizliresim.com/2juxza4.jpg'),
(3, 3, 'A penny ','UNITED STATES OF AMERICA', 'Steel', 'BU', '1 cent', 1793, 5.1, 'A penny. A unique coin with a shield image with 13 vertical stripes.',8, 
'"A penny". A unique coin with a shield image with 13 vertical stripes. /nMinted from 1793 to the present day. /nIn 1959, on the 150th anniversary of the birth of Lincoln, the reverse design was changed. Instead of wheat spikelets, the image of the Lincoln Memorial was depicted on the coin. On the surviving copies you can see the image of the statue of the 16th American president between the columns. Coins of this type were minted in multi-billion copies until 2008. /nAnother round date (200 years since the birth) was marked by the minting of 4 coins, which symbolized the periods of life of Abraham Lincoln. /nIn 2010, the design of the coin was changed - the reverse depicts a shield with 13 vertical stripes, symbolizing the state and national unity.
', 'https://i.hizliresim.com/4dvg5in.jpg', 'https://i.hizliresim.com/h23wiih.jpg'),
(3, 3, '25 cents','CANADA', 'nickel', 'BU', '25 cents', 1966, 5.7, '
25 cents. Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar. ', 80, '
Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar. /n
The obverse depicts Queen Elizabeth II. The caribou (reindeer) is depicted on the reverse. /n
A modern design (with a deer) has been used since the time of King George VI, when the design of other Canadian coins also changed. /n
Under previous kings, a different design was used for coins from 5 to 50 cents. On the reverse side was the name of the coin in small letters, framed by maple leaves, with a crown at the top. /n
Ordinary quarters are minted with a caribou on the back. /n
In 2004, Memorial Day was released. The reverse shows a poppy flower.
', 'https://i.hizliresim.com/ndz4pwn.jpg', 'https://i.hizliresim.com/qc0wrj2.jpg'),
(3, 3, 'Dim Sum','UNITED STATES OF AMERICA', 'nickel', 'BU', '10 cents', 1946, 4.25,
 'Dim Sum. Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present.', 10
,'Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present. This is a unique coin with the image of a torch, oak and olive branches. /n
The obverse of the coin depicts a portrait of the 32nd President of the United States, Franklin D. Roosevelt, and the reverse depicts a torch, oak and olive branches above the motto “E pluribus unum” - “Out of many.” /n
After the death of Franklin Roosevelt in 1945, it was decided to put his image on a coin to perpetuate his memory. The choice of a coin denomination of 10 cents was due to the fact that in 1938 Roosevelt made a lot of efforts to create the National Fund Fund, which is half joking, and since 1979 it has been officially called the “March of ten cents”.
', 'https://i.hizliresim.com/7imq8an.jpg', 'https://i.hizliresim.com/lekio0u.jpg');

INSERT INTO Coins (coin_category_id, coin_type_id, coin_name, issuing_country, composition, quality, denomination, year, weight, description, price, long_description, observe_img, reverse_img)
VALUES
(2, 2, 'Lion sedge', 'India', 'steel', 'BU', '1 rupee', 1975, 4.95, 'Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition. It depicts the lion Ashok on his pedestal.', 76,
 'Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition. /nIt depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain. /nThe rupee (from Sanskrit silver) is an Indian historical silver coin, put into circulation in the 15th century, as well as the monetary unit of a number of countries in South Asia. /nAfter the British conquest of Burma in 1852, the Indian rupee became its currency. /nIn 1938, Burma became an independent British colony. /nA year earlier, the release of the Burmese rupee, which lasted until 1952, began. /nIn 1952, the Burmese rupee was replaced by a kyat. /nThe rupee remained the currency of Portuguese possessions in India until 1959, when it was replaced by the escudos of Portuguese India.
', 'https://i.hizliresim.com/1hj5bxz.jpg', 'https://i.hizliresim.com/85ha1mi.jpg'),
(2, 2, 'Rial','Iran', 'silver', 'BU', '5000 dinars', 1928, 6.12, 'Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.',
 98 , 'Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year. /nIt depicts a bust of Reza Shah, whose head is turned to the right. /nOn the other side is a lion with a saber in front of the radiant sun. Above it is a crown. /nBefore the monetary reform of 1932, the currency of Iran was fog. (1 fog = 10 clicks, 1 crane = 1000 dinars.) /nCurrently, the name "fog" is used to denote the amount of 10 reais.
', 'https://i.hizliresim.com/kbg9gc8.jpg', 'https://i.hizliresim.com/4upyvaw.jpg'),
(2, 2, 'ISK','Iceland', 'nickel', 'BU', '1 Icelandic krona', 2007, 5.42, 'Icelandic coin with a picture of a fish. Face value 1 Icelandic krona. Coin minting in Krona began in 1925.', 78, 'Icelandic coin with a picture of a fish. Face value 1 Icelandic krona. /nInitially, the krone consisted of 100 Eire (ISL. EYRIR, MN. CH. ISL. Aurar), but since January 1, 1995 Eire has not been used in monetary circulation. /nFrom January 1, 1999, in accordance with Law No. 36 of April 27, 1998, amounts must be rounded to 50 Eire. /nCoin minting in Krona began in 1925. /nInitially, all coins had a monogram of King Christian X. /nIceland was declared a Republic in 1944, and in 1946 it began to mint coins without royal symbols. /nIcelandic coins were minted by the Royal Mint of Denmark, the Royal Mint of Great Britain and a private mint in Birmingham.
', 'https://i.hizliresim.com/pyq558r.jpg', 'https://i.hizliresim.com/j7gay9u.jpg'),
(2, 2, 'Yemen','Yemen', 'nickel', 'BU', '25 fils', 1964, 5.47, 'Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils.', 69,
 'Coin of South Arabia (Yemen) with the image of a viral boat.
 Coin in 25 twenty five fils. An octagonal star with dots is depicted on one side of the coin. On the other side, a sailboat divides bills into English and Arabic. Until 1951, Indian rupee and East African shilling traded in the British colony of Aden. /nIn 1951, East African shilling was declared the only legal tender in Aden. /nIn 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962. /n Aden joined the Federation in 1963. /n In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority. East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar. Dinar was equated to pound.
','https://i.hizliresim.com/m16noi3.jpg','https://i.hizliresim.com/nf5bpng.jpg'),
(2, 2, 'Woman', 'China', 'nickel', 'BU', '1 yuan', 1986, 6.02, '1 yuan Chinese coin with a picture of a woman. 1986 edition.', 48,
'1 yuan Chinese coin with a picture of a woman. 1986 edition. /n On one side of the coin is a woman sitting on a stone. Doves fly around her \n
On the other side is a Chinese weapon with stars. \n
Today, the term "yuan" usually refers to the main unit of account of the renminbi (renminbi), the currency of the People’s Republic of China. \n
Yuan banknotes start at one yuan and go up to 100 yuan. \n
The yuan symbol is also used in Chinese to denote the monetary units of Japan (yen) and Korea (won) and is used to convert the currency to the dollar, as well as to some other currencies; for example, the US dollar is called in Chinese meiyuan.
', 'https://i.hizliresim.com/bductey.jpg', 'https://i.hizliresim.com/514apt5.jpg'),
(2, 2, 'Alligator','China', 'nickel', 'BU', '5 yuan', 1998, 7.24, 'Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition.', 78, 
'Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition. \n
It depicts a Chinese alligator on the banks of the river. \n
On the other side is a Chinese weapon with stars. It is surrounded by hieroglyphs and a coin release date.
', 'https://i.hizliresim.com/py2ik5v.jpg','https://i.hizliresim.com/liiu9f3.jpg'),
(2, 2, 'The Golden Panda','China', 'nickel', 'BU', '5 yuan', 1993, 7.24, 'Chinese coin with the image of two pandas. 5 yuan Chinese coin. 1993 edition.',82, '
Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils. An octagonal star with dots is depicted on one side of the coin. On the other side, a sailboat divides bills into English and Arabic. \n
Until 1951, Indian rupee and East African shilling traded in the British colony of Aden.
In 1951, East African shilling was declared the only legal tender in Aden. \n
In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962. \n
Aden joined the Federation in 1963. \n
In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority. \n
East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar. \n
Dinar was equated to pound.', 'https://i.hizliresim.com/9w5okn2.jpg','https://i.hizliresim.com/i9uua8k.jpg'),
(2, 2, 'Costa Rica','Costa Rica', 'nickel', 'BU', '100 columns', 1974, 5.24, 'Costa Rican coin with the image of manatee. Costa Rican coin of 100 columns.', 78, '
Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils. An octagonal star with dots is depicted on one side of the coin. On the other side, a sailboat divides bills into English and Arabic. \n
Until 1951, Indian rupee and East African shilling traded in the British colony of Aden.
In 1951, East African shilling was declared the only legal tender in Aden. In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962. 
Aden joined the Federation in 1963.
In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority.
East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar.
Dinar was equated to pound.','https://i.hizliresim.com/sy3wvec.jpg','https://i.hizliresim.com/khi47bi.jpg'),
(2, 2, 'Year of the children', 'Costa Rica', 'nickel', 'BU', '100 columns', 1979, 5.24,'Costa Rican coin depicting three chicks in a nest.',72, 'Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils. An octagonal star with dots is depicted on one side of the coin. On the other side, a sailboat divides bills into English and Arabic. \n
Until 1951, Indian rupee and East African shilling traded in the British colony of Aden.
In 1951, East African shilling was declared the only legal tender in Aden. \n
In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962. \n
Aden joined the Federation in 1963. \n
In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority. \n
East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar. \n
Dinar was equated to pound.','https://i.hizliresim.com/5ott9m2.jpg','https://i.hizliresim.com/ixya4v5.jpg'),
(2, 2, 'Sailboat','Portugal', 'silver', 'BU', '5 escudos', 1933, 4.4, 'Portuguese silver coin with the image of a sailing ship. It has been produced since 1933.',134,
'Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils. An octagonal star with dots is depicted on one side of the coin. On the other side, a sailboat divides bills into English and Arabic.
Until 1951, Indian rupee and East African shilling traded in the British colony of Aden.
In 1951, East African shilling was declared the only legal tender in Aden.
In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962.
Aden joined the Federation in 1963.
In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority.
East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar.
Dinar was equated to pound.', 'https://i.hizliresim.com/ae6udsq.jpg', 'https://i.hizliresim.com/1ldjati.jpg');

select * from coins
