// ===========================================
// ITERACION 1 — .map()
// ===========================================

// 1.1 Recibe un array de numeros y devuelve un nuevo array con cada numero multiplicado por 2
function doubleNumbers(numbers) {
  return numbers.map(number => number * 2)
}

// 1.2 Recibe un array de objetos { name, age } y devuelve un array solo con los nombres
function getNames(people) {
  return people.map(person => person.name)
}

// 1.3 Recibe un array de numeros (precios) y devuelve un array de strings con formato "$X.XX"
// Ejemplo: [10, 5.5, 3.141] -> ["$10.00", "$5.50", "$3.14"]
function formatPrices(prices) {
  return prices.map(price => `$${price.toFixed(2)}`)
}

// 1.4 Recibe un array de strings con nombres completos ("Ada Lovelace")
// y devuelve un array con las iniciales ("A.L.")
function getInitials(names) {
  return names.map(name => {
    const letters = name
    .split(" ") // ["Ada" "Lovelace"]
    .map(word => word[0].toUpperCase()) // ["A", "L"]
    return `${letters[0]}.${letters[1]}.`
  })
}


// ===========================================
// ITERACION 2 — .filter()
// ===========================================

// 2.1 Recibe un array de numeros y devuelve solo los numeros pares
function getEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0)
}

// 2.2 Recibe un array de objetos { name, price } y un precio minimo
// Devuelve solo los productos cuyo precio sea mayor o igual al minimo
function getExpensiveProducts(products, minPrice) {
  return products.filter(producto => producto.price >= minPrice )
}

// 2.3 Recibe un array de objetos { username, active } y devuelve solo los usuarios activos
function getActiveUsers(users) {
  return users.filter(usuario => usuario.active)
}

// 2.4 Recibe un array de strings y un numero minLength
// Devuelve solo las palabras que tengan al menos minLength caracteres
function getLongWords(words, minLength) {
  return words.filter(word => word.length >= minLength)
}


// ===========================================
// ITERACION 3 — .reduce()
// ===========================================

// 3.1 Recibe un array de numeros y devuelve la suma total
function sumAll(numbers) {
  return numbers.reduce((acc, el) => el + acc, 0)
}

// 3.2 Recibe un array de strings y devuelve un objeto con el conteo de cada elemento
// Ejemplo: ["a", "b", "a", "c", "b", "a"] -> { a: 3, b: 2, c: 1 }
function countOccurrences(arr) {
  return arr.reduce((acc, el) => {
    if (el in acc) {
      acc[el] += 1
    } else {
      acc[el] = 1
    }
  return acc
  }, {})
}

// 3.3 Recibe un array de arrays y devuelve un unico array con todos los elementos
// Ejemplo: [[1, 2], [3, 4], [5]] -> [1, 2, 3, 4, 5]
function flattenArrays(arr) {
  return arr.reduce((acc, el) => {
    el.forEach(number => acc.push(number))
    return acc
  }, [])
}

// 3.4 Recibe un array de objetos { name, age } y devuelve el objeto de la persona mas vieja
function getOldest(people) {
  return people.reduce((acc, el) => {
    if (el.age > acc.age) {
      acc = el
    } 
    return acc
  }, people[0])
}


// ===========================================
// ITERACION 4 — Combinando 2 metodos
// ===========================================

// 4.1 Recibe un array de objetos { name, price } y un precio minimo
// Devuelve la SUMA TOTAL de los precios de los productos que cuesten >= minPrice
// Usa: filter + reduce
function getTotalExpensive(products, minPrice) {
  return products
  .filter(producto => producto.price >= minPrice)
  .reduce((acc, el) => acc += el.price, 0)
}

// 4.2 Recibe un array de objetos { name, age } y devuelve un array con los NOMBRES
// de las personas que tengan 18 anos o mas
// Usa: filter + map
function getAdultNames(people) {
  return people
  .filter(person => person.age >= 18)
  .map(person18 => person18.name)
}

// 4.3 Recibe un array de numeros y devuelve un array con los CUADRADOS de los numeros pares
// Ejemplo: [1, 2, 3, 4, 5, 6] -> [4, 16, 36]
// Usa: filter + map
function getSquaresOfEvens(numbers) {
  return numbers
  .filter(numero => numero % 2 === 0)
  .map(numeroPar => numeroPar * numeroPar)
}


// ===========================================
// BONUS — Combinando los 3 metodos
// ===========================================

// B.1 Recibe un array de objetos { name, price, category, discount }
// y un string con la categoria deseada.
// 1) Filtra los productos de esa categoria
// 2) Aplica el descuento a cada precio: precio * (1 - discount / 100)
// 3) Suma todos los precios con descuento
// Devuelve el total redondeado a 2 decimales
function getDiscountedTotal(products, category) {
  return products
  .filter(producto => producto.category === category)
  .map(productoOK => productoOK.price * (1 - productoOK.discount / 100))
  .reduce((acc, el) => acc += el, 0)
}

// B.2 Recibe un array de objetos { name, grade } donde grade es un numero del 0 al 10
// 1) Filtra los estudiantes que han aprobado (grade >= 5)
// 2) Extrae solo los nombres
// 3) Concatena los nombres en un string separado por ", " con " y " antes del ultimo
// Ejemplo: ["Ana", "Luis", "Marta"] -> "Ana, Luis y Marta"
// Si solo hay uno: "Ana"
// Si no hay ninguno: "Ninguno"
function getPassingSummary(students) {
  return students
  .filter(student => student.grade >= 5)
  .map(studentApr => studentApr.name)
  .reduce((acc, el, index, arr) => {
    if (index === 0) {
      acc = ""
    }

    if (index !== arr.length - 2 && index !== arr.length - 1) {
      acc += el + ", "
    }
    if (index === arr.length - 2) {
      acc += el + " y "
    }
    if (index === arr.length - 1) {
      acc += el
    }
    return acc
  }, "Ninguno")
}
