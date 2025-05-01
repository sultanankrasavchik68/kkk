let header = document.querySelector('.header');
header.style.maxWidth = '1024px';
header.style.margin = '0 auto';



let nav = document.querySelector('.nav');
nav.style.width = '100%';
nav.style.height = '71px';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';




let logoBtn = document.querySelector('.logo-location button');
logoBtn.style.width = '256px';
logoBtn.style.height = '36px';
logoBtn.style.borderRadius = '12px';
logoBtn.style.backgroundColor = '#FC004A';
logoBtn.style.color = 'white';
logoBtn.style.border = 'none';



let navul = document.querySelector('.nav ul');
navul.style.display = 'flex';
navul.style.gap = '10px';
navul.style.listStyle = 'none';

let containerImg = document.querySelector('.header-content_img');
containerImg.style.maxWidth = '976px';
containerImg.style.height = '293.66px';
containerImg.style.borderRadius = '15px';

let sectionP = document.querySelector('.section p');
sectionP.style.fontSize = '32.48px';
sectionP.style.fontWeight = '400';
sectionP.style.lineHeight = '40px';
sectionP.style.color = '#262626';
sectionP.style.paddingTop = '60px';

let divSection = document.querySelector('.div_section');
divSection.style.maxWidth = '100%';
divSection.style.display = 'flex';
divSection.style.flexWrap = 'wrap';

let card = document.querySelector('.div_section div');
card.style.width = '235px';
card.style.height = '391px';
card.style.borderRadius = '15px';
card.style.boxShadow = '0px 10px 15px -3px #0000001A';



let cardTitle = card.querySelector('h4');
cardTitle.style.fontSize = '17.66px';
cardTitle.style.fontWeight = '700';
cardTitle.style.color = 'black';
cardTitle.style.lineHeight = '8px';
cardTitle.style.paddingLeft = '10px';

let cardPrice = card.querySelector('p');
cardPrice.style.fontSize = '18.13px';
cardPrice.style.fontWeight = '500';
cardPrice.style.lineHeight = '2px';
cardPrice.style.color = '#FC004A';
cardPrice.style.paddingLeft = '10px';
















document.getElementById('addButton').addEventListener('click', () => {
    const quantity = prompt('Qiyriq сет nechta zakaz qilmoqchisiz');
    let caseType = '';
  
    switch (true) {
      case (quantity === null || quantity === ''):
        caseType = 'empty';
        break;
      case (isNaN(quantity)):
        caseType = 'notNumber';
        break;
      case (Number(quantity) <= 0):
        caseType = 'negativeOrZero';
        break;
      default:
        caseType = 'valid';
    }
  
    switch (caseType) {
      case 'empty':
      case 'notNumber':
      case 'negativeOrZero':
        alert('Raqam kirit nigerbek');
        break;
      case 'valid':
        alert(`Siz ${quantity} dona zakaz qilmoqchisiz:`);
        const total = 45000 * Number(quantity);
        alert(`Sizning zakazingizni jami narxi: ${total.toLocaleString()} so'm`);
        break;
  }