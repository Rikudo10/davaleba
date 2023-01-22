const toDoList = []; //მასივი


const tittleTodoList = []; //ჩემს მიერ შემოტანილი მასივი, title ებისთვის

/* აქ ვიძახებთ ცვლადს და გადავცემთ ელემენტის აიდს */
const $input = document.getElementsByTagName("input")[0];
const $button = document.getElementsByTagName("button")[0];
const $ul = document.getElementsByTagName("ul")[0];



/* ვიძახებთ ცვლადს და ვეუბნებით აიდი უდრიდეს თოდოლისტის სიგრძეს პლიუს ერთს */
var id = toDoList.length + 1; 


/*აქ ვიძახებთ ბათონზე ევენთს რაც აკეთებს კლიკზე მუნქციის ამუშავებას */
$button.addEventListener("click", addTodoItem); 

/* ვიძახებთ ფუნქციას დაამატოს აითემები */
function addTodoItem() {

    /*აქ ვიძახებთ ცვლადს და ვუთითებთ ვალუეს  */
  let newInput = $input.value;

    /* თუ დასტურდება ინფუთი შეასრულოს */
  if (validateInput(newInput)) {
    
    if (!tittleTodoList.includes($input.value)) {
      //თაითლების მასივი, რომელიც შეიცავს ინფუთ ვალიუს რომელიც ასევე შედგება თაითლებისაგან
      let newItem = new Object(); /* ....*/
      newItem.id = id; //ახალი ითემის აიდი
      id++; // /*ყოველჯერზე შემოტანისას აიდს დაუმატოს ერთი */
      newItem.title = $input.value;   /* ახალი აითემის თაითლი უდრიდეს ინპუტის ვალუეს */
      toDoList.push(newItem); // push ით ხდება ახალი აითემის დამატება თუდულისტში
      tittleTodoList.push(newItem.title); // push ხდება ახალი თაითლის დამატება, თაითლისტში
      $input.value = null; //ინფუთ ველიუს ვეუბნებით რო ცარიელი იყოს
      renderTodoList(); //დარენდერებულია თუდულისტი ფუნქციით
      console.log(tittleTodoList); //დალოგილია თაითლთუდულისტი
    } else {
      console.log("its similar element"); //ლოგში გვიჩვენოს თაითლისის მსგავსი აითემის შემთხვევაში
    }
  } else {
    console.log("The input must be filled"); //დაალოგოს თუ ცარიელია ინპუტი
  }
}

function deleteTodoItem(id) {
  //თუდუითემის წაშლის ფუნქცია
  deleteTodoItemFromtoDoList(id);
  renderTodoList();
}

/*აქ ვაკეთებთ ფუნქციას თოდოლისტის დარენდერებას */
function renderTodoList() {

  /*აქ ვეუბნებით ულ გამოტანისას არაფერ უდრიდეს */
  $ul.innerHTML = null; 

  /*აქ ვეუბნებით რო ჩვენ არაიში დააგენერიროს აითემები და ვაკეთებთ ფუნქციას  */
  toDoList.forEach((item) => {
    
    /* აქ ვეუბნებით რო შეიქმნას ახალი ელემენტი <li></li> */
    let li = document.createElement("li"); 

/* ლის მივანიჭოთ თაითლი და იდ ასევე სიცარიელე */
    li.innerHTML = item.title + " ID: " + item.id + " - "; 

        /* შეიქმნას ბათონი   წაშლის ღილაკი*/
    let delButton = document.createElement("button"); 

    /* ბათონი გამოვიდეს ვიზუალურად და ერქვას delet*/
    delButton.innerHTML = "Delete";

    /*აქ წაშლის ბათონზე ვიძახებთ ევენთს კლიკზე წაშალოს თოდოლისტის აითმი და იდ */
    delButton.addEventListener("click", () => {
      deleteTodoItem(item.id); 
    });
    li.appendChild(delButton);
    $ul.appendChild(li);
  });
}

function deleteTodoItemFromtoDoList(id) {
  /* ვერ გავიგე კარგად*/
  let item = toDoList.find((value) => value.id === id); 
  toDoList.splice(toDoList.indexOf(item), 1);
}

function validateInput(value) {
  /* თუ სრულდება პირობა გამოვიდეს true  */
  if (value !== "") {
    return true;
  } else {
    return false; /* თუ არ სრულდება პირობა გამოვიდეს false  */
  }
}

renderTodoList();
