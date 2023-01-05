import axios from "axios";
import React, { useState } from "react";

const Addpet = () => {
  const [IMGG, setIMGG] = useState("");
  const [selected, setSelected] = useState("");
  const isCat = [
    { label: "Abyssinian" },
    { label: "American Bobtail" },
    { label: "American Curl" },
    { label: "American Shorthair" },
    { label: "American Wirehair" },
    { label: "Applehead Siamese" },
    { label: "Balinese" },
    { label: "Bengal" },
    { label: "Birman" },
    { label: "Bombay" },
    { label: "British Shorthair" },
    { label: "Burmese" },
    { label: "Burmilla" },
    { label: "Calico" },
    { label: "Canadian Hairless" },
    { label: "Chartreux" },
    { label: "Chausie" },
    { label: "Chinchilla" },
    { label: "Cornish Rex" },
    { label: "Cymric" },
    { label: "Devon Rex" },
    { label: "Dilute Calico" },
    { label: "Dilute Tortoiseshell" },
    { label: "Domestic Long Hair" },
    { label: "Domestic Medium Hair" },
    { label: "Domestic Short Hair" },
    { label: "Egyptian Mau" },
    { label: "Exotic Shorthair" },
    { label: "Extra-Toes Cat / Hemingway Polydactyl" },
    { label: "Havana" },
    { label: "Himalayan" },
    { label: "Japanese Bobtail" },
    { label: "Javanese" },
    { label: "Korat" },
    { label: "LaPerm" },
    { label: "Maine Coon" },
    { label: "Manx" },
    { label: "Munchkin" },
    { label: "Nebelung" },
    { label: "Norwegian Forest Cat" },
    { label: "Ocicat" },
    { label: "Oriental Long Hair" },
    { label: "Oriental Short Hair" },
    { label: "Oriental Tabby" },
    { label: "Persian" },
    { label: "Pixiebob" },
    { label: "Ragamuffin" },
    { label: "Ragdoll" },
    { label: "Russian Blue" },
    { label: "Scottish Fold" },
    { label: "Selkirk Rex" },
    { label: "Siamese" },
    { label: "Siberian" },
    { label: "Silver" },
    { label: "Singapura" },
    { label: "Snowshoe" },
    { label: "Somali" },
    { label: "Sphynx / Hairless Cat" },
    { label: "Tabby" },
    { label: "Tiger" },
    { label: "Tonkinese" },
    { label: "Torbie" },
    { label: "Tortoiseshell" },
    { label: "Toyger" },
    { label: "Turkish Angora" },
    { label: "Turkish Van" },
    { label: "Tuxedo" },
    { label: "York Chocolate" },
  ];
  const isDog = [
    { label: "Afador" },
    { label: "Affenhuahua" },
    { label: "Affenpinscher" },
    { label: "Afghan Hound" },
    { label: "Airedale Terrier" },
    { label: "Akbash" },
    { label: "Akita" },
    { label: "Akita Chow" },
    { label: "Akita Pit" },
    { label: "Akita Shepherd" },
    { label: "Alaskan Klee Kai" },
    { label: "Alaskan Malamute" },
    { label: "American Bulldog" },
    { label: "American English Coonhound" },
    { label: "American Eskimo Dog" },
    { label: "American Foxhound" },
    { label: "American Hairless Terrier" },
    { label: "American Leopard Hound" },
    { label: "American Pit Bull Terrier" },
    { label: "American Pugabull" },
    { label: "American Staffordshire Terrier" },
    { label: "American Water Spaniel" },
    { label: "Anatolian Shepherd Dog" },
    { label: "Appenzeller Sennenhunde" },
    { label: "Auggie" },
    { label: "Aussiedoodle" },
    { label: "Aussiepom" },
    { label: "Australian Cattle Dog" },
    { label: "Australian Kelpie" },
    { label: "Australian Retriever" },
    { label: "Australian Shepherd" },
    { label: "Australian Shepherd Husky" },
    { label: "Australian Shepherd Lab Mix" },
    { label: "Australian Shepherd Pit Bull Mix" },
    { label: "Australian Stumpy Tail Cattle Dog" },
    { label: "Australian Terrier" },
    { label: "Azawakh" },
    { label: "Barbet" },
    { label: "Basenji" },
    { label: "Bassador" },
    { label: "Basset Fauve de Bretagne" },
    { label: "Basset Hound" },
    { label: "Basset Retriever" },
    { label: "Bavarian Mountain Scent Hound" },
    { label: "Beabull" },
    { label: "Beagle" },
    { label: "Beaglier" },
    { label: "Bearded Collie" },
    { label: "Bedlington Terrier" },
    { label: "Belgian Laekenois" },
    { label: "Belgian Malinois" },
    { label: "Belgian Sheepdog" },
    { label: "Belgian Tervuren" },
    { label: "Bergamasco Sheepdog" },
    { label: "Berger Picard" },
    { label: "Bernedoodle" },
    { label: "Bernese Mountain Dog" },
    { label: "Bichon Frise" },
    { label: "Biewer Terrier" },
    { label: "Black and Tan Coonhound" },
    { label: "Black Mouth Cur" },
    { label: "Black Russian Terrier" },
    { label: "Bloodhound" },
    { label: "Blue Lacy" },
    { label: "Bluetick Coonhound" },
    { label: "Bocker" },
    { label: "Boerboel" },
    { label: "Boglen Terrier" },
    { label: "Bohemian Shepherd" },
    { label: "Bolognese" },
    { label: "Borador" },
    { label: "Border Collie" },
    { label: "Border Sheepdog" },
    { label: "Border Terrier" },
    { label: "Bordoodle" },
    { label: "Borzoi" },
    { label: "BoShih" },
    { label: "Bossie" },
    { label: "Boston Boxer" },
    { label: "Boston Terrier" },
    { label: "Boston Terrier Pekingese Mix" },
    { label: "Bouvier des Flandres" },
    { label: "Boxador" },
    { label: "Boxer" },
    { label: "Boxerdoodle" },
    { label: "Boxmatian" },
    { label: "Boxweiler" },
    { label: "Boykin Spaniel" },
    { label: "Bracco Italiano" },
    { label: "Braque du Bourbonnais" },
    { label: "Briard" },
    { label: "Brittany" },
    { label: "Broholmer" },
    { label: "Brussels Griffon" },
    { label: "Bugg" },
    { label: "Bull Arab" },
    { label: "Bull-Pei" },
    { label: "Bull Terrier" },
    { label: "Bullador" },
    { label: "Bullboxer Pit" },
    { label: "Bulldog" },
    { label: "Bullmastiff" },
    { label: "Bullmatian" },
    { label: "Cairn Terrier" },
    { label: "Canaan Dog" },
    { label: "Cane Corso" },
    { label: "Cardigan Welsh Corgi" },
    { label: "Carolina Dog" },
    { label: "Catahoula Bulldog" },
    { label: "Catahoula Leopard Dog" },
    { label: "Caucasian Shepherd Dog" },
    { label: "Cav-a-Jack" },
    { label: "Cavachon" },
    { label: "Cavador" },
    { label: "Cavalier King Charles Spaniel" },
    { label: "Cavapoo" },
    { label: "Central Asian Shepherd Dog" },
    { label: "Cesky Terrier" },
    { label: "Chabrador" },
    { label: "Cheagle" },
    { label: "Chesapeake Bay Retriever" },
    { label: "Chi Chi" },
    { label: "Chi-Poo" },
    { label: "Chigi" },
    { label: "Chihuahua" },
    { label: "Chilier" },
    { label: "Chinese Crested" },
    { label: "Chinese Shar-Pei" },
    { label: "Chinook" },
    { label: "Chion" },
    { label: "Chipin" },
    { label: "Chiweenie" },
    { label: "Chorkie" },
    { label: "Chow Chow" },
    { label: "Chow Shepherd" },
    { label: "Chug" },
    { label: "Chusky" },
    { label: "Cirneco dell�Etna" },
    { label: "Clumber Spaniel" },
    { label: "Cockalier" },
    { label: "Cockapoo" },
    { label: "Cocker Spaniel" },
    { label: "Collie" },
    { label: "Corgi Inu" },
    { label: "Corgidor" },
    { label: "Corman Shepherd" },
    { label: "Coton de Tulear" },
    { label: "Croatian Sheepdog" },
    { label: "Curly-Coated Retriever" },
    { label: "Dachsador" },
    { label: "Dachshund" },
    { label: "Dalmatian" },
    { label: "Dandie Dinmont Terrier" },
    { label: "Daniff" },
    { label: "Danish-Swedish Farmdog" },
    { label: "Deutscher Wachtelhund" },
    { label: "Doberdor" },
    { label: "Doberman Pinscher" },
    { label: "Docker" },
    { label: "Dogo Argentino" },
    { label: "Dogue de Bordeaux" },
    { label: "Dorgi" },
    { label: "Dorkie" },
    { label: "Doxiepoo" },
    { label: "Doxle" },
    { label: "Drentsche Patrijshond" },
    { label: "Drever" },
    { label: "Dutch Shepherd" },
    { label: "English Cocker Spaniel" },
    { label: "English Foxhound" },
    { label: "English Setter" },
    { label: "English Springer Spaniel" },
    { label: "English Toy Spaniel" },
    { label: "Entlebucher Mountain Dog" },
    { label: "Estrela Mountain Dog" },
    { label: "Eurasier" },
    { label: "Field Spaniel" },
    { label: "Fila Brasileiro" },
    { label: "Finnish Lapphund" },
    { label: "Finnish Spitz" },
    { label: "Flat-Coated Retriever" },
    { label: "Fox Terrier" },
    { label: "French Bulldog" },
    { label: "French Bullhuahua" },
    { label: "French Spaniel" },
    { label: "Frenchton" },
    { label: "Frengle" },
    { label: "German Longhaired Pointer" },
    { label: "German Pinscher" },
    { label: "German Shepherd Dog" },
    { label: "German Shepherd Pit Bull" },
    { label: "German Shepherd Rottweiler Mix" },
    { label: "German Sheprador" },
    { label: "German Shorthaired Pointer" },
    { label: "German Spitz" },
    { label: "German Wirehaired Pointer" },
    { label: "Giant Schnauzer" },
    { label: "Glen of Imaal Terrier" },
    { label: "Goberian" },
    { label: "Goldador" },
    { label: "Golden Cocker Retriever" },
    { label: "Golden Mountain Dog" },
    { label: "Golden Retriever" },
    { label: "Golden Retriever Corgi" },
    { label: "Golden Shepherd" },
    { label: "Goldendoodle" },
    { label: "Gollie" },
    { label: "Gordon Setter" },
    { label: "Great Dane" },
    { label: "Great Pyrenees" },
    { label: "Greater Swiss Mountain Dog" },
    { label: "Greyador" },
    { label: "Greyhound" },
    { label: "Hamiltonstovare" },
    { label: "Hanoverian Scenthound" },
    { label: "Harrier" },
    { label: "Havanese" },
    { label: "Havapoo" },
    { label: "Hokkaido" },
    { label: "Horgi" },
    { label: "Hovawart" },
    { label: "Huskita" },
    { label: "Huskydoodle" },
    { label: "Ibizan Hound" },
    { label: "Icelandic Sheepdog" },
    { label: "Irish Red And White Setter" },
    { label: "Irish Setter" },
    { label: "Irish Terrier" },
    { label: "Irish Water Spaniel" },
    { label: "Irish Wolfhound" },
    { label: "Italian Greyhound" },
    { label: "Jack-A-Poo" },
    { label: "Jack Chi" },
    { label: "Jack Russell Terrier" },
    { label: "Jackshund" },
    { label: "Japanese Chin" },
    { label: "Japanese Spitz" },
    { label: "Korean Jindo Dog" },
    { label: "Kai Ken" },
    { label: "Karelian Bear Dog" },
    { label: "Keeshond" },
    { label: "Kerry Blue Terrier" },
    { label: "King Shepherd" },
    { label: "Kishu Ken" },
    { label: "Komondor" },
    { label: "Kooikerhondje" },
    { label: "Kuvasz" },
    { label: "Kyi-Leo" },
    { label: "Lab Pointer" },
    { label: "Labernese" },
    { label: "Labmaraner" },
    { label: "Labrabull" },
    { label: "Labradane" },
    { label: "Labradoodle" },
    { label: "Labrador Retriever" },
    { label: "Labrastaff" },
    { label: "Labsky" },
    { label: "Lagotto Romagnolo" },
    { label: "Lakeland Terrier" },
    { label: "Lancashire Heeler" },
    { label: "Leonberger" },
    { label: "Lhasa Apso" },
    { label: "Lhasapoo" },
    { label: "Lowchen" },
    { label: "Maltese" },
    { label: "Maltese Shih Tzu" },
    { label: "Maltipoo" },
    { label: "Manchester Terrier" },
    { label: "Maremma Sheepdog" },
    { label: "Mastador" },
    { label: "Mastiff" },
    { label: "Miniature Pinscher" },
    { label: "Miniature Schnauzer" },
    { label: "Morkie" },
    { label: "Mountain Cur" },
    { label: "Mountain Feist" },
    { label: "Mudi" },
    { label: "Mutt (Mixed)" },
    { label: "Neapolitan Mastiff" },
    { label: "Newfoundland" },
    { label: "Norfolk Terrier" },
    { label: "Northern Inuit Dog" },
    { label: "Norwegian Buhund" },
    { label: "Norwegian Elkhound" },
    { label: "Norwegian Lundehund" },
    { label: "Norwich Terrier" },
    { label: "Nova Scotia Duck Tolling Retriever" },
    { label: "Old English Sheepdog" },
    { label: "Otterhound" },
    { label: "Papillon" },
    { label: "Papipoo" },
    { label: "Patterdale Terrier" },
    { label: "Peekapoo" },
    { label: "Pekingese" },
    { label: "Pembroke Welsh Corgi" },
    { label: "Petit Basset Griffon Vend�en" },
    { label: "Pharaoh Hound" },
    { label: "Pitsky" },
    { label: "Plott" },
    { label: "Pocket Beagle" },
    { label: "Pointer" },
    { label: "Polish Lowland Sheepdog" },
    { label: "Pomapoo" },
    { label: "Pomchi" },
    { label: "Pomeagle" },
    { label: "Pomeranian" },
    { label: "Pomsky" },
    { label: "Poochon" },
    { label: "Poodle" },
    { label: "Portuguese Podengo Pequeno" },
    { label: "Portuguese Pointer" },
    { label: "Portuguese Sheepdog" },
    { label: "Portuguese Water Dog" },
    { label: "Pudelpointer" },
    { label: "Pug" },
    { label: "Pugalier" },
    { label: "Puggle" },
    { label: "Puginese" },
    { label: "Puli" },
    { label: "Pyredoodle" },
    { label: "Pyrenean Mastiff" },
    { label: "Pyrenean Shepherd" },
    { label: "Rat Terrier" },
    { label: "Redbone Coonhound" },
    { label: "Rhodesian Ridgeback" },
    { label: "Rottador" },
    { label: "Rottle" },
    { label: "Rottweiler" },
    { label: "Saint Berdoodle" },
    { label: "Saint Bernard" },
    { label: "Saluki" },
    { label: "Samoyed" },
    { label: "Samusky" },
    { label: "Schipperke" },
    { label: "Schnoodle" },
    { label: "Scottish Deerhound" },
    { label: "Scottish Terrier" },
    { label: "Sealyham Terrier" },
    { label: "Sheepadoodle" },
    { label: "Shepsky" },
    { label: "Shetland Sheepdog" },
    { label: "Shiba Inu" },
    { label: "Shichon" },
    { label: "Shih-Poo" },
    { label: "Shih Tzu" },
    { label: "Shikoku" },
    { label: "Shiloh Shepherd" },
    { label: "Shiranian" },
    { label: "Shollie" },
    { label: "Shorkie" },
    { label: "Siberian Husky" },
    { label: "Silken Windhound" },
    { label: "Silky Terrier" },
    { label: "Skye Terrier" },
    { label: "Sloughi" },
    { label: "Small Munsterlander Pointer" },
    { label: "Soft Coated Wheaten Terrier" },
    { label: "Spanish Mastiff" },
    { label: "Spinone Italiano" },
    { label: "Springador" },
    { label: "Stabyhoun" },
    { label: "Staffordshire Bull Terrier" },
    { label: "Staffy Bull Bullmastiff" },
    { label: "Standard Schnauzer" },
    { label: "Sussex Spaniel" },
    { label: "Swedish Lapphund" },
    { label: "Swedish Vallhund" },
    { label: "Taiwan Dog" },
    { label: "Terripoo" },
    { label: "Texas Heeler" },
    { label: "Thai Ridgeback" },
    { label: "Tibetan Mastiff" },
    { label: "Tibetan Spaniel" },
    { label: "Tibetan Terrier" },
    { label: "Toy Fox Terrier" },
    { label: "Transylvanian Hound" },
    { label: "Treeing Tennessee Brindle" },
    { label: "Treeing Walker Coonhound" },
    { label: "Valley Bulldog" },
    { label: "Vizsla" },
    { label: "Weimaraner" },
    { label: "Welsh Springer Spaniel" },
    { label: "Welsh Terrier" },
    { label: "West Highland White Terrier" },
    { label: "Westiepoo" },
    { label: "Whippet" },
    { label: "Whoodle" },
    { label: "Wirehaired Pointing Griffon" },
    { label: "Xoloitzcuintli" },
    { label: "Yakutian Laika" },
    { label: "Yorkipoo" },
    { label: "Yorkshire Terrier" },
  ];
  const isParrot = [
    { label: "African Grey Parrot" },
    { label: "Australian King Parrot" },
    { label: "Blue and Yellow Macaw" },
    { label: "Blue Crowned Parakeet" },
    { label: "Blue Crowned Racquet Tail" },
    { label: "Blue Headed Parrot" },
    { label: "Blue Naped Parrot" },
    { label: "Blue Rumped Parrot" },
    { label: "Blue Winged Macaw" },
    { label: "Blue Winged Parrotlet" },
    { label: "Bluebonnet" },
    { label: "Budgerigar" },
    { label: "Burrowing Parakeet" },
    { label: "Cockatiel" },
    { label: "Crimson Rosella" },
    { label: "Cuban Amazon" },
    { label: "Double Eyed Fig Parrot" },
    { label: "Eclectus Parrot" },
    { label: "Galah" },
    { label: "Gang Gang Cockatoo" },
    { label: "Greater Vasa Parrot" },
    { label: "Grey Headed Lovebird" },
    { label: "Hyacinth Macaw" },
    { label: "Kakapo" },
    { label: "Kea" },
    { label: "Little Corella" },
    { label: "Monk Parakeet" },
    { label: "Mulga Parrot" },
    { label: "Musk Lorikeet" },
    { label: "Palm Cockatoo" },
    { label: "Papuan Lorikeet" },
    { label: "Peach Faced Parakeet" },
    { label: "Plum Headed Parakeet" },
    { label: "Rainbow Lorikeet" },
    { label: "Red and Blue Macaw" },
    { label: "Red Capped Parrot" },
    { label: "Red Crowned Parakeet" },
    { label: "Red Fan Parrot" },
    { label: "Red Lory" },
    { label: "Red Rumped Parrot" },
    { label: "Red Shouldered Macaw" },
    { label: "Red Tailed Black Cockatoo" },
    { label: "Red Winged Parrot" },
    { label: "Reddish Bellied Parakeet" },
    { label: "Regent Parrot" },
    { label: "Rock Parrot" },
    { label: "Rose Ringed Parakeet" },
    { label: "Rosy Faced Lovebird" },
    { label: "Ruppell�s Parrot" },
    { label: "Sapphire Rumped Parrotlet" },
    { label: "Scarlet Macaw" },
    { label: "Spix�s Macaw" },
    { label: "Sulphur Crested Cockatoo" },
    { label: "Superb Parrot" },
    { label: "Turquoise Fronted Amazon" },
    { label: "Varied Lorikeet" },
    { label: "Vernal Hanging Parrot" },
    { label: "Vulturine Parrot" },
    { label: "Yellow Chevroned Parakeet" },
    { label: "Yellow Crowned Parrot" },
  ];
  const isRabbit = [
    { label: "Angora" },
    { label: "Argente de Champagne" },
    { label: "Beige" },
    { label: "Belgian Hare" },
    { label: "Beveren" },
    { label: "Blanc de Bousecat" },
    { label: "Blanc de Hotot" },
    { label: "British Giant" },
    { label: "Californian" },
    { label: "Cashmere Lop" },
    { label: "Chinchilla" },
    { label: "Chinchilla Rex" },
    { label: "Deilenaar" },
    { label: "Dutch" },
    { label: "Dwarf Angora" },
    { label: "Dwarf Lop" },
    { label: "Dwarf Swiss Fox" },
    { label: "English" },
    { label: "English Lop" },
    { label: "Fauve de Bourgogne" },
    { label: "Flemish Giant" },
    { label: "French Lop" },
    { label: "German Lop" },
    { label: "Giant Chinchilla" },
    { label: "Giant Papillon" },
    { label: "Halle Pearl Grey" },
    { label: "Harlequin" },
    { label: "Havana" },
    { label: "Himalayan" },
    { label: "Holland Lop" },
    { label: "Hulstlander" },
    { label: "Klein Lotharinger" },
    { label: "Lilac" },
    { label: "Lionhead" },
    { label: "Lux" },
    { label: "Magpie" },
    { label: "Marburger" },
    { label: "Mini Lop" },
    { label: "Mini Rex" },
    { label: "Netherlands Dwarf" },
    { label: "Netherlands Dwarf (Coloured)" },
    { label: "New Zealand" },
    { label: "New Zealand Red" },
    { label: "Orange Rex" },
    { label: "Perlfee" },
    { label: "Polish" },
    { label: "Rex" },
    { label: "Rhinelander" },
    { label: "Sachsengold" },
    { label: "Sallander" },
    { label: "Satin" },
    { label: "Siamese Sable Martin Sable" },
    { label: "Silver" },
    { label: "Silver Fox" },
    { label: "St. Nicholas Blue" },
    { label: "Steenkonijn (Stone Rabbit)" },
    { label: "Swiss Fox" },
    { label: "Tan" },
    { label: "Thrianta" },
    { label: "Th�ringer" },
    { label: "Vienna Blue" },
    { label: "Vienna White" },
  ];
  let type = null;
  let options = null;

  const [Pet, setPet] = useState({
    image: "",
    name: "",
    price: "",
    Type: "",
    Breed: "",
    details: "",
  });
  const handleChange = (e) => {
    setPet({ ...Pet, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setPet({ ...Pet, image: e.target.files[0] });
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setIMGG(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", Pet.image);
    formData.append("name", Pet.name);
    formData.append("price", Pet.price);
    formData.append("Type", Pet.Type);
    formData.append("Breed", Pet.Breed);
    formData.append("details", Pet.details);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("http://localhost:9002/AddPet", formData, config)
      .then((res) => {
        alert(res.data.message);
        setPet({
          image: "",
          name: "",
          quantity: "",
          price: "",
          Type: "",
          details: "",
        });
      })
      .catch((err) => {
        // alert(err.data.message);
        alert(err);
      });
  };
  const changeSelectOptionHandler = (e) => {
    setSelected(e.target.value);
  };
  function getOptions() {
    if (selected === "Dog") {
      type = isDog;
    } else if (selected === "Cat") {
      type = isCat;
    } else if (selected === "Rabbit") {
      type = isRabbit;
    } else if (selected === "Parrot") {
      type = isParrot;
    }
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div>
      <div className="AddPetPage">
        <div className="form">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            <div className="form-item">
              {/* <label htmlFor="image">
                Pet Image:<span className="required">*</span>
              </label> */}
              <div className="ImagePreview">
                <img src={IMGG} alt="" />
              </div>
              <input
                type="file"
                name="Image"
                accept=".png, .jpg, .jpeg"
                onChange={handleImage}
              />
            </div>
            <div className="form-item">
              <label htmlFor="name">
                Pet Name:<span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Pet Name"
                value={Pet.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="price">
                Pet Price:<span className="required">*</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Pet Price"
                value={Pet.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="Type">
                Pet Type:<span className="required">*</span>
              </label>
              <select
                name="Type"
                id="Type"
                value={Pet.Type}
                onChange={changeSelectOptionHandler && handleChange}
                required
              >
                <option selected>Select Type</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Parrot</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="Breed">
                Pet Breed:<span className="required">*</span>
              </label>
              <select
                name="Breed"
                id="Breed"
                placeholder="Select Breed"
                value={Pet.Breed}
                onClick={getOptions}
                onChange={handleChange}
                required
              >
                <option value="Select Breed" selected>
                  Select Breed
                </option>
                {options}
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="details">
                Pet Details:<span className="required">*</span>
              </label>
              <textarea
                name="details"
                placeholder="Pet Details"
                onChange={handleChange}
                value={Pet.details}
                rows={5}
                required
              />
            </div>
            <div className="form-btn">
              <button id="button" type="submit">
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addpet;
