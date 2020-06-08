let eventTypes = [
  { id: 'all', name: 'All', selected: true },
  { id: 'meetup', name: 'Meetup' },
  { id: 'leap', name: 'Leap' },
  { id: 'recruitingmission', name: 'Recruiting Mission' },
  { id: 'vanhackathon', name: 'VanHackathon' },
  { id: 'premiumwebinar', name: 'Premium-only Webinar' },
  { id: 'openwebinar', name: 'Open Webinar' },
];

let events = [
  {
    title: 'ReactJS - Meetup',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Vancouver, Canada',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'meetup',
  },
  {
    title: 'Toronto - Leap | 2020',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Toronto, Canada',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'leap',
  },
  {
    title: 'Vanhackathon for Startups',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Online',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'vanhackathon',
  },
  {
    title: 'Vancouver Hiring Drive',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Vancouver, Canada',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'recruitingmission',
  },
  {
    title: 'Successful Career as a FrontEnd Engineer',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Online',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'openwebinar',
  },
  {
    title: 'How to get a job in 2 months through VanHack',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Online',
    isPremium: true,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'premiumwebinar',
  },
];

function onClickEventType(type) {
  eventTypes.forEach((event) => {
    if (type === event.id) {
      event.selected = true;
    } else {
      event.selected = false;
    }
  });

  renderEventTypes();
}

function renderEventCard(cardJS) {
  let { title, time, location, isPremium, src, eventType, deadline } = cardJS;
  let dt = new Date(time).getDate();
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let mnth = months[new Date(time).getMonth()];

  let deadlineDate = new Date(deadline).toLocaleDateString();
  let card = document.createElement('div');
  card.className = 'Card';

  let cardHeader = document.createElement('div');
  cardHeader.className = 'Card__Header flex';

  let image = document.createElement('IMG');
  image.className = 'Card__Header__Image';
  image.src = src;

  cardHeader.appendChild(image);

  if (isPremium) {
    let premiumTag = document.createElement('div');
    let premiumText = document.createTextNode('premium');
    premiumTag.appendChild(premiumText);
    premiumTag.className = 'Card__Premium';
    cardHeader.appendChild(premiumTag);
  }

  let cardBody = document.createElement('div');
  cardBody.className = 'Card__Body flex';

  let cardBodyLeft = document.createElement('div');
  cardBodyLeft.className = 'Card__Body__Left flex';

  let date = document.createElement('div');
  date.className = 'Date';
  let dateText = document.createTextNode(dt);
  date.appendChild(dateText);

  let month = document.createElement('div');
  let monthText = document.createTextNode(mnth);
  month.appendChild(monthText);
  month.className = 'Month';

  cardBodyLeft.appendChild(date);
  cardBodyLeft.appendChild(month);

  let cardBodyRight = document.createElement('div');
  cardBodyRight.className = 'Card__Body__Right flex';

  let titleDiv = document.createElement('div');
  let titleText = document.createTextNode(title);
  titleDiv.className = 'Event__Title ellipsis';
  titleDiv.appendChild(titleText);

  let locationDiv = document.createElement('div');
  let locationText = document.createTextNode(location);
  locationDiv.className = 'Event__Info ellipsis';
  locationDiv.appendChild(locationText);

  let deadlineDiv = document.createElement('div');
  let deadlineText = document.createTextNode(`Deadline: ${deadlineDate}`);
  deadlineDiv.className = 'Event__Info';
  deadlineDiv.appendChild(deadlineText);

  cardBodyRight.appendChild(titleDiv);
  cardBodyRight.appendChild(locationDiv);
  cardBodyRight.appendChild(deadlineDiv);

  let ctaWrapper = document.createElement('div');
  ctaWrapper.className = 'CTA__Wrapper flex';

  let ctaSecondary = document.createElement('div');
  let secondaryText = document.createTextNode('View Details');
  ctaSecondary.appendChild(secondaryText);
  ctaSecondary.className = 'CTA secondary';

  let ctaPrimary = document.createElement('div');
  let primaryText = document.createTextNode('Apply');
  ctaPrimary.appendChild(primaryText);
  ctaPrimary.className = 'CTA primary';

  ctaWrapper.appendChild(ctaSecondary);
  ctaWrapper.appendChild(ctaPrimary);

  cardBody.appendChild(cardBodyLeft);
  cardBody.appendChild(cardBodyRight);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(ctaWrapper);

  return card;
}

function renderCards() {
  let cardWrapper = document.getElementById('CardWrapper');
  cardWrapper.innerHTML = '';
  eventTypes.forEach((eventType) => {
    if (eventType.selected) {
      events.forEach((event) => {
        if (eventType.id === 'all') {
          card = renderEventCard(event);
          cardWrapper.appendChild(card);
        } else if (event.eventType === eventType.id) {
          card = renderEventCard(event);
          cardWrapper.appendChild(card);
        }
      });
    }
  });
}

function renderEventTypes() {
  const events = document.getElementById('events');
  events.innerHTML = '';
  eventTypes.forEach((event) => {
    let li = document.createElement('LI');
    li.className = `Event__Item ${event.selected ? 'selected' : ''}`;
    li.id = event.id;

    let liText = document.createTextNode(event.name);
    li.onclick = onClickEventType.bind(null, event.id);

    li.appendChild(liText);
    events.appendChild(li);
  });

  renderCards();
}

renderEventTypes();
