type HolidayGreeting = string | null;

export function getHolidayGreeting(
  day: number,
  month: string
): HolidayGreeting {
  switch (month) {
    case "Jan":
      switch (day) {
        case 3:
          return Math.random() < 0.1
            ? "Dies Primus Compitalia"
            : "Laetus natalis dies, Marce Tullie Cicero!";
        case 4:
        case 5:
          return "Continuation of the Compitalia festival!";
        case 9:
          return "Celebration of the Agonalia in honor of Janus";
        case 10:
          return "Alea iacta est! Caesar crosses the Rubicon.";
        case 11:
        case 15:
          return "Celebration of the Carmentalia";
        case 16:
          return "Ave, Auguste! Ave, Princeps! Octavian granted the titles of Augustus and Princeps";
        case 24:
          return Math.random() < 0.1
            ? "Celebration of the Sementivae"
            : "Assassination of Caligula by the Praetorian Guard";
        case 25:
        case 26:
          return "Celebration of the Sementivae";
        case 27:
          return "Laetus natalis dies, Castor et Pollux";
        default:
          return null;
      }
    case "Feb":
      switch (day) {
        case 13:
        case 14:
        case 16:
        case 18:
        case 19:
        case 20:
          return "Celebration of the Parentalia";
        case 15:
          return Math.random() < 0.1
            ? "Celebration of the Parentalia"
            : "Celebration of the Lupercalia";
        case 17:
          return Math.random() < 0.1
            ? "Celebration of the Parentalia"
            : "Celebration of the Fornacalia, go bake something!";
        case 21:
          return Math.random() < 0.1
            ? "Celebration of the Parentalia"
            : "Celebration of the Feralia";
        case 22:
          return Math.random() < 0.1
            ? "Celebration of the Parentalia"
            : "Celebration of the Caristia";
        case 23:
          return "Celebration of the Terminalia";
        case 27:
          return "Celebration of the Equirria";
        default:
          return null;
      }
    case "Mar":
      switch (day) {
        case 14:
          return Math.random() < 0.5
            ? "Celebration of the second Equirria"
            : "Celebration of the Mamuralia";
        case 15:
          return "Cave Idus! Anniversary of the assassination of Julius Caesar";
        default:
          return null;
      }
    case "Apr":
      switch (day) {
        case 1:
          return "Celebration of the Veneralia";
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          return "Ludi Megalenses, enjoy the games!";
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19: {
          const gamesColors = ["greens", "reds", "blues", "whites"];
          const selectedColor =
            gamesColors[Math.floor(Math.random() * gamesColors.length)];
          return `Ludi Cereri/Cerialia, let's go ${selectedColor}!`;
        }
        case 21:
          return "LAETUS NATALIS DIES, ROMAE! Rome was founded by Romulus on this day!";
        default:
          return null;
      }
    case "May":
      switch (day) {
        case 6:
          return "Requiescat in pace, Crasse! Crassus killed at the battle of Carrhae.";
        case 9:
        case 11:
        case 13:
          return "Celebration of the Lemuria, the festival of the dead";
        case 15:
          return "Celebration of the Mercuralia";
        default:
          return null;
      }
    case "Jun":
      switch (day) {
        case 7:
          return Math.random() < 0.1
            ? "Celebration of the Vestalia"
            : "Ludi Piscatorii, remember to dedicate your fish to Vulcan!";
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          return "Celebration of the Vestalia";
        default:
          return null;
      }
    case "Jul":
      switch (day) {
        case 12:
          return Math.random() < 0.1
            ? "Ludi Apollinares, enjoy the theatre performances!"
            : "Laetus natalis dies, Gaie Iulie Caesar! Birthday of Julius Caesar";
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
          return "Ludi Apollinares, enjoy the theatre performances!";
        case 18:
          return Math.random() < 0.5
            ? "Rememberence of the Dies Ater (defeat by the Gauls at the Battle of the Allia in 390BC)"
            : "Great fire of Rome, grab a fiddle and join Emperor Nero.";
        case 23:
          return "Celebration of the Neptunalia";
        default:
          return null;
      }
    case "Aug":
      switch (day) {
        case 1:
          return "Requiescat in pace, Marce Antonie!";
        case 2:
          return "Loss to Hannibal at the battle of Cannae!";
        case 10:
          return Math.random() < 0.5
            ? "Trajan named Hadrian as his heir."
            : "Requiescat in pace, Cleopatra. Cleopatra commits suicide.";
        case 19:
          return "Requiescat in pace, Auguste! Death of Augustus";
        case 24:
          return "Cave Vesuvium Montem!";
        case 29:
          return "Requiescat in pace, Caesarion. With his death, Egypt becomes a province of Rome.";
        default:
          return null;
      }
    case "Sep":
      switch (day) {
        case 2:
          return "Anniversary of the battle of Actium";
        case 4:
          return "Fall of the western empire to Odoacer";
        default:
          return null;
      }
    case "Oct":
      switch (day) {
        case 19:
          return "Carthago delenda erat! Scipio Africanus defeated Carthage at the Battle of Zama ending the Second Punic War.";
        case 23:
          return "Requiescat in pace, Marce Iunie Brute! Brutus commits suicide.";
        default:
          return null;
      }
    case "Nov":
      switch (day) {
        case 1:
          return "Ludi Circenses, enjoy the races!";
        case 4:
        case 5:
        case 6:
        case 7:
        case 9:
        case 10:
        case 11:
        case 12:
        case 15:
        case 16:
        case 17:
          return "Ludi Plebeii, enjoy the shows!";
        case 8:
          return Math.random() < 0.25
            ? "Ludi Plebeii, enjoy the shows!"
            : "Opening of the Mundus pit.";
        case 13:
          return Math.random() < 0.25
            ? "Ludi Plebeii, enjoy the shows!"
            : "Celebration of the Epulum Jovis";
        case 14:
          return Math.random() < 0.25
            ? "Ludi Plebeii, enjoy the shows!"
            : "The second Equorum Probatio, watch the horses!";
        default:
          return null;
      }
    case "Dec":
      switch (day) {
        case 3:
          return "Celebration of Bona Dea, remember this one is just for the ladies.";
        case 8:
          return "Festival for Tiberinus Pater and Gaia.";
        case 9:
          return Math.random() < 0.5
            ? "Celebration of the Agonalia in honor of Indiges"
            : "Celebration of the Septimontium, enjoy the 7 hills!";
        case 15:
          return "Second Consualia Celebration, hope you have your winter food stored safely.";
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
          return "Io Saturnalia!";
        case 23:
          return "Io Saturnalia! Don't forget your gifts for Sigillaria!";
        case 25:
          return "Dies Natalis Solis Invicti, summer is coming.";
        default:
          return null;
      }
    default:
      return null;
  }
}

// Usage example:
const day = new Date().getDate();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[new Date().getMonth()];
const greeting = getHolidayGreeting(day, month);
if (greeting) {
  console.log(greeting);
}
