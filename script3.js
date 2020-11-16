var lista = []


function addToList() {
  let item = document.getElementById('item').value; //Para pegar as coisas do input usamos o doc...('item')value ele vai me retornar o valor que tá no input
  lista.push(item);

  let li = document.createElement("li");
  li.innerHTML = lista.pop();
  li.classList.add("destaque");
  document.getElementById('lista').append(li);
}
