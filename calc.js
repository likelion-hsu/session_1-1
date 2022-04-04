let cal = () => {
  const getAge = prompt("당신의 생년월일은 어떻게 되나요?", "YYYY");
  let wrtSpc = document.getElementById("name");
  let toDay = new Date();
  let curYear = toDay.getFullYear();
  let result = (parseInt(curYear) - parseInt(getAge) + 1 + "세");
  wrtSpc.append(result)
};