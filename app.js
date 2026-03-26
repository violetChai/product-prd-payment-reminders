let payments = [

  { name: "Electricity Bill", date: "2026-04-05" },
  { name: "Internet Subscription", date: "2026-04-10" }

];

function renderPayments() {

  const list = document.getElementById("paymentList");

  list.innerHTML = "";

  payments.forEach(payment => {

    const item = document.createElement("div");

    item.className = "payment-card";

    item.innerHTML = `
      <h3>${payment.name}</h3>
      <p>Due: ${payment.date}</p>
    `;

    list.appendChild(item);

  });

}

function addPayment() {

  const name = document.getElementById("paymentName").value;
  const date = document.getElementById("paymentDate").value;

  if (!name || !date) return;

  payments.push({ name, date });

  renderPayments();

}

renderPayments();
