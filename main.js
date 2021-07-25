// new AlphaPos instance
const alphaPos = new AlphaPos();

const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]');
addDrinkButton.addEventListener("click", function () {
  // 1. 取得選擇的飲料名稱, 冰塊, 甜度
  // 利用input裡的checked是否為true，來檢查店員是否選到該品項
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')
  console.log(`${drinkName}, ${ice}, ${sugar}`)
  // 2. 如果沒有選擇飲料的話，跳出提示視窗
  if(!drinkName){
    alert(`Please select at least one item.`)
    return
  }
  // 3. 建立飲料instance, 並取得飲料價格
  // 4. 將飲料實例產生成左側訂單區的畫面
});

// AlphaPos Constructor function - 放所有點餐機的功能
function AlphaPos() {}

AlphaPos.prototype.getCheckedValue = function (inputName) {
  let selectedOption = "";
  document.querySelectorAll(`[name=${inputName}]`).forEach((item) => {
    if (item.checked) {
      selectedOption = item.value;
    }
  });
  return selectedOption;
};

// Constructor function for Drinks
function Drink(name, sugar, ice) {
  this.name = name;
  this.sugar = sugar;
  this.ice = ice;
}

// price methods: get price according to the drink

Drink.prototype.price = function () {
  switch (this.name) {
    case "Black Tea":
    case "Oolong Tea":
    case "Baozong Tea":
    case "Green Tea":
      return 30;
    case "Bubble Milk Tea":
    case "Lemon Green Tea":
      return 50;
    case "Black Tea Latte":
    case "Matcha Latte":
      return 55;
    default:
      alert("This drink does not exist.");
  }
};
