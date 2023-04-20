const types = ["Course", "Profession"];
const generatedArrayProducts = (limit = 10) => {
  const products = [];
  for (let i = 0; i < limit; i++) {
    products.push({
      id: i,
      price: Math.floor(Math.random() * 1000),
      type: types[Math.floor(Math.random() * types.length)]
    })
  }
  return products;
}

// console.log(generatedArrayProducts());
const dataTest = [
  { price: 433, type: 'Course' },
  { price: 186, type: 'Course' },
  { price: 891, type: 'Profession' },
  { price: 314, type: 'Course' },
  { price: 10, type: 'Profession' },
  { price: 369, type: 'Course' },
  { price: 949, type: 'Profession' },
  { price: 60, type: 'Course' },
  { price: 215, type: 'Profession' },
  { price: 782, type: 'Course' }
]

const process2For1 = (data) => {
  for (let index = 0; index < data.length; index++)
    if (index % 2) data[index].price = 0;
  return data;
}

const process2For1Limited = (data) => {
  const result = [];
  data = data.sort((a,b) => b.price - a.price);
  let abc = 0;
  for (let element of data) {
    if(element.type == 'Profession') abc++;
    else {
      if(element.price != 0){
        if(abc > 0){
          abc--;
          element.price = 0;
        } else abc++;
      }
    }
    result.push(element);
  }
  return result;
}

// console.log(process2For1Limited(dataTest));

const generatedAndTransformArraysProducts = (limit = 10) => {
  for (let index = 0; index < 10; index++) {
    const data = generatedArrayProducts();
    console.log(`DATA ${index} FROM: `, data);
    console.log(`DATA ${index} TO:`, process2For1Limited(data))
  }
}

console.log(generatedAndTransformArraysProducts())

const specialCases = () => {
  const onlyProfession = [
    { id: 0, price: 308, type: 'Profession' },
    { id: 1, price: 874, type: 'Profession' },
    { id: 2, price: 420, type: 'Profession' },
    { id: 3, price: 375, type: 'Profession' },
    { id: 4, price: 384, type: 'Profession' },
    { id: 5, price: 562, type: 'Profession' },
    { id: 6, price: 550, type: 'Profession' },
    { id: 7, price: 507, type: 'Profession' },
    { id: 8, price: 952, type: 'Profession' },
    { id: 9, price: 731, type: 'Profession' }
  ];
  console.log(`DATA onlyProfession FROM: `, onlyProfession);
  console.log(`DATA onlyProfession TO `, process2For1Limited(onlyProfession));

  const Course2Profession1 = [
    { id: 0, price: 308, type: 'Profession' },
    { id: 1, price: 874, type: 'Course' },
    { id: 2, price: 420, type: 'Course' },
  ]
  console.log(`DATA Course2Profession1 FROM: `, Course2Profession1);
  console.log(`DATA Course2Profession1 TO `, process2For1Limited(Course2Profession1));

  const Course3Profession1 = [
    { id: 0, price: 308, type: 'Profession' },
    { id: 1, price: 874, type: 'Course' },
    { id: 2, price: 420, type: 'Course' },
    { id: 3, price: 420, type: 'Course' },
  ]
  console.log(`DATA Course3Profession1 FROM: `, Course3Profession1);
  console.log(`DATA Course3Profession1 TO `, process2For1Limited(Course3Profession1));

  const Course1Profession2 = [
    { id: 0, price: 308, type: 'Profession' },
    { id: 1, price: 874, type: 'Profession' },
    { id: 2, price: 420, type: 'Course' },
  ]
  console.log(`DATA Course1Profession2 FROM: `, Course1Profession2);
  console.log(`DATA Course1Profession2 TO `, process2For1Limited(Course1Profession2));

  const onlyCourse = [
    { id: 0, price: 308, type: 'Course' },
    { id: 1, price: 874, type: 'Course' },
    { id: 2, price: 420, type: 'Course' },
    { id: 3, price: 375, type: 'Course' },
  ]
  console.log(`DATA onlyCourse FROM: `, onlyCourse);
  console.log(`DATA onlyCourse TO `, process2For1Limited(onlyCourse));
}

console.log(specialCases())