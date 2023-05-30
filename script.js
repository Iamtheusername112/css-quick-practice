 // 2. Create an object called dog with properties name, breed, color and age
const dog = {
  name: "Pretzel",
  breed: "Toy Poodle",
  color: "apricot",
  age: 1
};
 
 
// 3. Use Object.values() to list the values of the object
const values = Object.values(dog);
 
console.log(values); // -->  ["Pretzel", "Toy Poodle", "apricot", 1]

/*function sortProducts(matrix) {
    return flat(matrix).reduce((acc, obj) => {
      let cat = obj.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(obj);
      return acc;
    }, {});
  }
   */