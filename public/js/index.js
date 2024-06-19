document.addEventListener('DOMContentLoaded', function() {
    const oneWayBtn = document.getElementById('one-way-btn');
    const roundTripBtn = document.getElementById('round-trip-btn');
    const oneWayForm = document.getElementById('one-way');
    const roundTripForm = document.getElementById('round-trip');
  
    oneWayBtn.addEventListener('click', function() {
      oneWayForm.classList.remove('d-none');
      roundTripForm.classList.add('d-none');
      oneWayBtn.classList.add('active');
      roundTripBtn.classList.remove('active');
    });
  
    roundTripBtn.addEventListener('click', function() {
      roundTripForm.classList.remove('d-none');
      oneWayForm.classList.add('d-none');
      roundTripBtn.classList.add('active');
      oneWayBtn.classList.remove('active');
    });
  });