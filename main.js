const btn = document.querySelector(".btn"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    err = document.querySelector(".error");


    

const calTip = () => {
    const bill = document.querySelector(".bill").value;
    const rt = document.querySelector(".rate").value;

    if (bill === "" || rt === "") {
        err.style.display = "block";
        hiderr();
    } else if(isNaN(bill)){
        err.innerHTML = "Please, Enter Only Number";
        err.style.display = "block";
        hiderr();
    }
    else {
        let tipAmt = bill * rt;
        tipAmt = Math.ceil(tipAmt);
        tip.innerHTML = `Tip is : ${tipAmt}$`;

        let totalAmt = Number(bill) + tipAmt;
        total.innerHTML = `Total Amount is : ${totalAmt}$`;
    }
}
btn.addEventListener("click", calTip);

const hiderr = () => {
  setTimeout(() => {
    err.style.display = "none";
  }, 6000);
};
