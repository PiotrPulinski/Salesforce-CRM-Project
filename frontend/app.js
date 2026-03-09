let customers = JSON.parse(localStorage.getItem("customers")) || []

renderCustomers()

function addCustomer() {

    const name = document.getElementById("name").value
    const lastname = document.getElementById("lastname").value
    const company = document.getElementById("company").value

    if(name === "" || lastname === "" || company === ""){
        alert("Please fill all fields")
        return
    }

    const customer = {
        name: name,
        lastName: lastname,
        company: company
    }

    customers.push(customer)

    document.getElementById("name").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("company").value = "" 
    
    saveCustomers()

    renderCustomers()

}

function renderCustomers() {

    const list = document.getElementById("customerList")
    list.innerHTML = ""

    customers.forEach((customer, index) => {

        const item = document.createElement("li")

        item.innerHTML =
        `${customer.name} ${customer.lastName} - ${customer.company}
        <button onclick="deleteCustomer(${index})"">Delete</button>`

        list.appendChild(item)

    })

    document.getElementById("totalCustomers").innerText = customers.length

}

function deleteCustomer(index){

    customers.splice(index,1)

    saveCustomers()

    renderCustomers()

}

function saveCustomers(){

    localStorage.setItem("customers", JSON.stringify(customers))

}