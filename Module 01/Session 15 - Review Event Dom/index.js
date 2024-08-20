let animal = [
    {
      name: "Fox",
      info: `Foxes are small-to-medium-sized omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull; upright, triangular ears; a pointed, slightly upturned snout; and a long, bushy tail ("brush").<br/><br/>
   
      Twelve species belong to the monophyletic "true fox" group of genus Vulpes. Approximately another 25 current or extinct species are always or sometimes called foxes; these foxes are either part of the paraphyletic group of the South American foxes, or of the outlying group, which consists of the bat-eared fox, gray fox, and island fox.[1]<br/><br/>
  
      Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies.[2] The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.`,
      image: "./images/fox.jpg"
    },
    {
      name: "Elephant",
      info: `Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). They are the only surviving members of the family Elephantidae and the order Proboscidea; extinct relatives include mammoths and mastodons. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive grey skin. The trunk is prehensile, bringing food and water to the mouth and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears and convex or level backs.`,
      image: "./images/elephant.jpg"
    },
    {
      name: "Dear",
      info: `A deer (pl.: deer) or true deer is a hoofed ruminant ungulate of the family Cervidae (informally the deer family). Cervidae is divided into subfamilies Cervinae (which includes, among others, muntjac, elk (wapiti), red deer, and fallow deer) and Capreolinae (which includes, among others reindeer (caribou), white-tailed deer, roe deer, and moose). Male deer of almost all species (except the water deer), as well as female reindeer, grow and shed new antlers each year. These antlers are bony extensions of the skull and are often used for combat between males.<br/><br/>
  
      The musk deer (Moschidae) of Asia and chevrotains (Tragulidae) of tropical African and Asian forests are separate families that are also in the ruminant clade Ruminantia; they are not especially closely related to Cervidae.<br/><br/>
     
      Deer appear in art from Paleolithic cave paintings onwards, and they have played a role in mythology, religion, and literature throughout history, as well as in heraldry, such as red deer that appear in the coat of arms of Åland.[2] Their economic importance includes the use of their meat as venison, their skins as soft, strong buckskin, and their antlers as handles for knives. Deer hunting has been a popular activity since the Middle Ages and remains a resource for many families today.`,
      image: "./images/deer.jpg"
    },
    {
      name: "Hedgehog",
      info: `A hedgehog is a spiny mammal of the subfamily Erinaceinae, in the eulipotyphlan family Erinaceidae. There are seventeen species of hedgehog in five genera found throughout parts of Europe, Asia, and Africa, and in New Zealand by introduction. There are no hedgehogs native to Australia and no living species native to the Americas. However, the extinct genus Amphechinus was once present in North America.<br/><br/>
  
      Hedgehogs share distant ancestry with shrews (family Soricidae), with gymnures possibly being the intermediate link, and they have changed little over the last fifteen million years.[2] Like many of the first mammals, they have adapted to a nocturnal way of life.[3] Their spiny protection resembles that of porcupines, which are rodents, and echidnas, a type of monotreme.`,
      image: "./images/hedgehog.jpg"
    },
    {
      name: "Arctic fox",
      info: `The Arctic fox (Vulpes lagopus), also known as the white fox, polar fox, or snow fox, is a small species of fox native to the Arctic regions of the Northern Hemisphere and common throughout the Arctic tundra biome.[1][8][9][10] It is well adapted to living in cold environments, and is best known for its thick, warm fur that is also used as camouflage. It has a large and very fluffy tail. In the wild, most individuals do not live past their first year but some exceptional ones survive up to 11 years.[11] Its body length ranges from 46 to 68 cm (18 to 27 in), with a generally rounded body shape to minimize the escape of body heat.
  
      The Arctic fox preys on many small creatures such as lemmings, voles, ringed seal pups, fish, waterfowl, and seabirds. It also eats carrion, berries, seaweed, and insects and other small invertebrates. Arctic foxes form monogamous pairs during the breeding season and they stay together to raise their young in complex underground dens. Occasionally, other family members may assist in raising their young. Natural predators of the Arctic fox are golden eagles,[12] Arctic wolves, polar bears,[13] wolverines, red foxes, and grizzly bears.[14][15]`,
      image: "./images/arctic-fox.jpg"
    },
    {
      name: "Dog",
      info: `The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it was domesticated from an extinct population of Pleistocene wolves over 14,000 years ago. The dog was the first species to be domesticated by humans. Experts estimate that hunter-gatherers domesticated dogs more than 15,000 years ago, which was before the development of agriculture. Due to their long association with humans, dogs have expanded to a large number of domestic individuals and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.[4]<br/><br/>
  
      The dog has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.[5] Dog breeds vary widely in shape, size, and color. They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and the military, companionship, therapy, and aiding disabled people. Over the millennia, dogs became uniquely adapted to human behavior, and the human canine bond has been a topic of frequent study. This influence on human society has given them the sobriquet of "man's best friend".`,
      image: "./images/dog.jpg"
    }
  ];
  
  let active = 0;
  
  getAnimalInfo = () => {
    let animalName = document.getElementById("animal-name");
    let animalInfo = document.querySelector("#animal-info p");
    let animalImage = document.querySelector("#animal-image img");
  
    animalName.innerHTML = animal[active].name;
    animalInfo.innerHTML = animal[active].info;
    animalImage.setAttribute("src", `${animal[active].image}`);
  
    let liHTML = "";
  
    for (let i = 0; i < animal.length; i++) {
      liHTML += "<li></li>";
    }
  
    let indicator = document.querySelector(".indicator");
    indicator.innerHTML = liHTML;
  
    let indicatorLi = document.querySelectorAll(".indicator li");
    indicatorLi[active].classList.add("active");
  
  }
  
  getAnimalInfo();
  
  var autoNextSlide = setInterval(() => {
    nextSlide();
  }, 3000)
  
  stopAutoNextSlide = () => {
    clearInterval(autoNextSlide);
  }
  
  nextSlide = () => {
    if (active == animal.length - 1) {
      active = 0;
    } else {
      active += 1;
    }
    getAnimalInfo();
  }
  
  prevSlide = () => {
    if (active == 0) {
      active = 5;
    } else {
      active -= 1;
    }
    getAnimalInfo();
  }
  
  let nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", nextSlide);
  
  let prevButton = document.getElementById("prev-button");
  prevButton.addEventListener("click", prevSlide);
  
  let animalCard = document.getElementById("animal-card");
  animalCard.addEventListener("mouseover",stopAutoNextSlide);
  //animalCard.addEventListener("mouseout", setAutoNextSlide);
  