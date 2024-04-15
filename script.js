function calculateTax() {
    const age = document.getElementById("age").value;
    const income = parseFloat(document.getElementById("income").value);
    const deductions = parseFloat(document.getElementById("deductions").value) || 0; //if input is blank or 0 
    const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
    
        
    let isValid = true;
    if (!age) {
        document.getElementById("ageError").textContent = "Please select an age range";
        isValid = false;
    } else {
        document.getElementById("ageError").textContent = "";
    }
    if (!income) {
        document.getElementById("incomeError").textContent = "Please enter income";
        isValid = false;
    } else {
        document.getElementById("incomeError").textContent = "";
    }
   
    if (!isValid) {
        // Clear tax result textarea
        document.getElementById("taxResult").value = "";
        return;
    }
    
    const totalIncome = income - deductions + extraIncome;

  // Check if total income is less than 8 Lakhs
  if (totalIncome <= 8) { // Adjusted condition for 8 Lakhs
    showAlert('No tax applicable.');
    return;
  }

  // Calculate taxable amount
  const taxableAmount = totalIncome - 8; // Amount over 8 Lakhs

  // Calculate tax based on age group
  let taxRate;
  if (age === '<40') {
    taxRate = 0.3;
  } else if (age === '40-59') {
    taxRate = 0.4;
  } else {
    taxRate = 0.1;
  }

  const taxAmount = taxRate * taxableAmount;
  const incomeAfterTax = totalIncome - taxAmount;

  // Display result
  showAlert(`Tax to be paid: ${taxAmount.toFixed(2)} Lakhs \n Your Income after tax deduction:  ${incomeAfterTax.toFixed(2)} Lakhs`);
}

function showAlert(message) {
  Swal.fire({
    icon: 'info',
    title: 'Tax Calculation Result',
    text: message,
    confirmButtonText: 'Close'
    
  });
      
}