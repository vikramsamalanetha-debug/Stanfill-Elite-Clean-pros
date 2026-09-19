function toggleMenu(){
  const n=document.querySelector('.links');
  const b=document.querySelector('.menu');
  const o=n.classList.toggle('open');
  b.textContent=o?'×':'☰';
  b.setAttribute('aria-expanded',String(o));
}

document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{
  const n=document.querySelector('.links');
  if(n)n.classList.remove('open');
}));

function submitQuote(e){
  e.preventDefault();
  const value=id=>document.getElementById(id).value.trim();
  const service=document.getElementById('service').value;
  const bedrooms=document.getElementById('bedrooms').value;
  const bathrooms=document.getElementById('bathrooms').value;
  const lines=[
    'Cleaning quote request',
    `Name: ${value('name')}`,
    `Contact: ${value('contact')}`,
    `Address: ${value('address')||'Not provided'}`,
    `Service: ${service}`,
    `Preferred date: ${value('date')||'Flexible'}`,
    `Bedrooms: ${bedrooms}`,
    `Bathrooms: ${bathrooms}`,
    `Details: ${value('details')||'None'}`
  ];
  const message=encodeURIComponent(lines.join('\n'));
  const notice=document.querySelector('.notice');
  notice.innerHTML=`Your request is ready. <a class="text-request" href="sms:+17316022456?&body=${message}">Tap here to text it to Stanfill Elite Clean Pros</a>, or call <a href="tel:+17316022456">(731) 602-2456</a>.`;
  notice.style.display='block';
  notice.scrollIntoView({behavior:'smooth',block:'nearest'});
}
