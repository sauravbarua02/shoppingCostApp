let formEl = document.querySelector("form");
let tbodyEl = document.querySelector("tbody");
let tableEl = document.querySelector("table");
let val = document.getElementById("val");
    function onAddData(e) {
        e.preventDefault();
        let item = document.getElementById("item").value;
        let quantity = document.getElementById("quantity").value;
        let price = document.getElementById("price").value;
        
        let total = quantity*price;
        tbodyEl.innerHTML += `
            <tr>
                <td>${item}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${total}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
        let sumVal = 0;        
        for(let i = 1; i <tableEl.rows.length; i++)
        {
            sumVal = sumVal + parseInt(tableEl.rows[i].cells[3].innerHTML);
        }

        val.innerText = `The total cost is: ${sumVal}`;
    }

    function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
    }

        let btn = e.target;
        btn.closest("tr").remove();     
    }


      

      
formEl.addEventListener("submit", onAddData);
tableEl.addEventListener("click", onDeleteRow);







