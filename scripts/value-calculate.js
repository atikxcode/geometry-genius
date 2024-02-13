function calculateTriangleArea(){
  const base = getInputValueById('triangle-base');
  const height = getInputValueById('triangle-height');
  const area = 0.5 * base * height;
  display('triangle-area', area);
}

function calculateRectangleArea(){
  const width = getInputValueById('rectangle-width')
  const length = getInputValueById('rectangle-length')
  const area = width * length;
  display('rectangle-area', area);
}

function calculateParallelogramArea(){
  const base = getInputValueById('parallelogram-base');
  const height = getInputValueById('parallelogram-height');
  const area = base * height;
  display('parallelogram-area', area);
}

function calculateRhombusArea(){
  const d1 = getInputValueById('rhombus-d1');
  const d2 = getInputValueById('rhombus-d2');
  const area = 0.5 * d1 * d2;
  display('rhombus-area', area);
}

function calculatePentagonArea(){
   const perimeter =  getInputValueById('pentagon-perimeter');
   const base = getInputValueById('pentagon-base');
   const area = 0.5 * perimeter * base;
   display('pentagon-area', area);
}

function calculateEllipseArea(){
  const a = getInputValueById('ellipse-a');
  const b = getInputValueById('ellipse-b');
  const calculation = Math.PI * a * b;
  const area = calculation.toFixed(3);
  display('ellipse-area', area);
}




function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

function display(returnInput, area){
  const returnInputField = document.getElementById(returnInput);
  returnInputField.innerText = area;
}