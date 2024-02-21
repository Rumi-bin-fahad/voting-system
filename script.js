document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);
    var partySelection = document.getElementById('partySelection');
    var result = document.getElementById('result');
  
    if (age >= 20) {
      partySelection.style.display = 'block';
      var selectedParty = document.getElementById('party').value;
      var address = document.getElementById('address').value;
      var cnic = document.getElementById('cnic').value;
      var picture = document.getElementById('picture').value;
  
      result.innerHTML = `
        <h2>Thank you, ${name}!</h2>
        <p>You have successfully voted for ${selectedParty}.</p>
        <p>Address: ${address}</p>
        <p>CNIC No: ${cnic}</p>
        <p>Passport Size Picture: ${picture}</p>
      `;
      result.style.display = 'block';
    } else {
      result.innerHTML = `<h2>Sorry, ${name}!</h2><p>You are under 20 years old and not eligible to vote.</p>`;
      result.style.display = 'block';
    }
  });
  