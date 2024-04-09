// const form = document.querySelector('form');
// //this case


// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     const heigth = parseInt(document.querySelector('#heigth').value);
//     const weigth = parseInt(document.querySelector('#weigth').value);
//     const results = document.querySelector('#heigth').value;
//     if(heigth === '' || heigth < 0 || isNaN(heigth)){
//         results.innerHTML = `Please give a vaild heigth ${heigth}`
//     } else if(weigth === '' || weigth < 0 || isNaN(weigth)){
//         results.innerHTML = `Please give a vaild weigth ${weigth}`
//     } else{
//         const bmi = (weigth/((heigth*heigth)/10000)).toFixed(2);

//         //show the result
//         results.innerHTML = `<span>${bmi}</span>`
//     }


// })

// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//     if(results <= 18.6){
//       results.innerHTML = `${bmi}Under Weight`
//     }else if(18.6 < results < 24.9){
//       results.innerHTML = `${bmi} Normal Range`
//     }else if(results > 24.9){
//       results.innerHTML = `${bmi} Overweight`
//     }
//   }
// });
console.log('hello')
const forms = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

forms.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (results <= 18.6) {
      results.innerHTML = `${bmi}Under Weight`
    } else if (18.6 < results < 24.9) {
      results.innerHTML = `${bmi} Normal Range`
    } else if (results > 24.9) {
      results.innerHTML = `${bmi} Overweight`
    }

  }
});


