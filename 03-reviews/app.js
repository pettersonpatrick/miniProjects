// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
      id: 5,
      name: 'Tanya McQuoid',
      job: 'the heiress',
      img: 'https://s2-marieclaire.glbimg.com/E0yRGVA2hxlZzVbvNklz1fnKP4o=/0x0:811x603/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2023/2/q/2iKs81TLG5cJGBxjcPsA/tanya-mcquoid-jennifer-coolidge-the-white-lotus.png',
      text: 'These gays are trying to murder me!',
    }
  ];
  // select items
  const img       = document.getElementById('person-img');
  const author    = document.getElementById('author');
  const jobTitle  = document.getElementById('job');
  const review    = document.getElementById('info');
  
  const prevBtn   = document.querySelector('.prev-btn');
  const nextBtn   = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
    
  });
  
  // show person based on item
  function showPerson(person){
    let currentItem = person;

    const item          = reviews[currentItem];
    img.src             = item.img;
    author.innerText    = item.name;
    jobTitle.innerText  = item.job;
    review.innerText    = item.text;
  }

  // show next person
  nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    currentItem ++;

    if(currentItem > reviews.length - 1 ){
      currentItem = 0;
    }

    showPerson(currentItem);

  });
 
  // show prev person
prevBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  
  currentItem --;

  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});

  // randomPerson
randomBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  function randomNum(){
    return Math.floor(Math.random() * reviews.length);
  }
  
  let currentItem = randomNum();

  showPerson(currentItem);
});

