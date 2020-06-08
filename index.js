let eventTypes = [
  { id: 'all', name: 'All', selected: true },
  { id: 'meetup', name: 'Meetup' },
  { id: 'leap', name: 'Leap', special: true },
  { id: 'recruitingmission', name: 'Recruiting Mission', special: true },
  { id: 'vanhackathon', name: 'VanHackathon', special: true },
  { id: 'premiumwebinar', name: 'Premium-only Webinar' },
  { id: 'openwebinar', name: 'Open Webinar' },
];

let events = [
  {
    title: 'Toronto - Leap | 2020',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Toronto, Canada',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'leap',
    special: true,
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Vanhackathon for Startups',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Online',
    isPremium: false,
    special: true,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'vanhackathon',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Vancouver Hiring Drive',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Vancouver, Canada',
    isPremium: false,
    special: true,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'recruitingmission',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'ReactJS - Meetup',
    time: new Date().toISOString(), // ISO TimeString
    deadline: new Date().toISOString(), // ISO TimeString
    location: 'Vancouver, Canada',
    isPremium: false,
    src:
      'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/cf617efc-6c93-4a73-8fb9-570d6c2d31a5.jpg',
    eventType: 'meetup',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function onClickEventType(type) {
  /** onClick  of EventType to mutate the selected state of the event */
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
  /** Main Card Generator based on the eventJSON */
  let {
    title,
    time,
    location,
    isPremium,
    src,
    eventType,
    deadline,
    special,
  } = cardJS;
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
  card.className = `Card ${special ? 'scale' : ''}`;

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
  let secondaryText = document.createTextNode('See Details');
  ctaSecondary.appendChild(secondaryText);
  ctaSecondary.className = 'CTA secondary';
  ctaSecondary.onclick = onClickViewDetails.bind(null, cardJS);

  let ctaPrimary = document.createElement('div');
  let primaryText = document.createTextNode('Apply');
  ctaPrimary.appendChild(primaryText);
  ctaPrimary.className = 'CTA primary';
  ctaPrimary.onclick = onClickApply.bind(null, cardJS);

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
  /** Fetched all the eventTypes and then gets the selected event, render events which has selected EventType */
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
  /** driver function, which renders the different type of Events in the Header */
  const events = document.getElementById('events');
  events.innerHTML = '';
  eventTypes.forEach((event) => {
    let li = document.createElement('LI');
    li.className = `Event__Item ${event.selected ? 'selected' : ''} ${
      event.special ? 'special' : ''
    }`;
    li.id = event.id;

    let liText = document.createTextNode(event.name);
    li.onclick = onClickEventType.bind(null, event.id);

    li.appendChild(liText);
    events.appendChild(li);
  });

  /**  now render cards based on the selected eventType */
  renderCards();
}

function onClickViewDetails(event) {
  let Modal = document.getElementById('Modal');
  Modal.style.display = 'block';
  viewDetailsModal(event);
  // View Details
}

function renderModalHeader(event) {
  const { title, about, eventType, location, time } = event;

  let header = document.getElementById('Modal__Heading');
  header.innerHTML = '';

  let headerTitle = document.createElement('div');
  headerTitle.className = 'Modal__Title';
  let headingText = document.createTextNode(title);
  headerTitle.appendChild(headingText);

  let headerSubTitle = document.createElement('div');
  headerSubTitle.className = 'Modal__SubTitle';
  let subTitle =
    location + ' | ' + new Date(time).toLocaleDateString() + ' | ' + eventType;
  let headerSubTitleText = document.createTextNode(subTitle);
  headerSubTitle.appendChild(headerSubTitleText);

  header.appendChild(headerTitle);
  header.appendChild(headerSubTitle);
}

function renderModalFooter(event) {
  const { title, about, eventType, location, time, isPremium } = event;

  let footer = document.getElementById('Modal__Footer');
  footer.innerHTML = '';

  let footerTitle = document.createElement('div');
  footerTitle.className = 'Modal__FooterTitle';

  let headingText = document.createTextNode('Share This Event');
  footerTitle.appendChild(headingText);

  let shareWrapper = document.createElement('div');
  shareWrapper.className = 'Modal__Share_Wrapper';

  let twitterIcon = document.createElement('IMG');
  twitterIcon.src = 'https://img.icons8.com/android/24/000000/twitter.png';
  twitterIcon.className = 'Share_Icon';

  let anchorTagTwitter = document.createElement('a');
  anchorTagTwitter.href = `https://twitter.com/share?text=${encodeURI(
    'https://vanhack.com/'
  )}&url=${encodeURI(title)}`;
  anchorTagTwitter.target = '_blank';
  anchorTagTwitter.rel = 'noopener noreferrer';
  anchorTagTwitter.appendChild(twitterIcon);

  let facebookIcon = document.createElement('IMG');
  facebookIcon.src =
    'https://img.icons8.com/android/24/000000/facebook-new.png';
  facebookIcon.className = 'Share_Icon';

  let anchorTagFacebook = document.createElement('a');
  anchorTagFacebook.href = `https://www.facebook.com/sharer.php?u=${encodeURI(
    'https://vanhack.com/'
  )}&p[title]=${encodeURI(title)}`;
  anchorTagFacebook.target = '_blank';
  anchorTagFacebook.rel = 'noopener noreferrer';
  anchorTagFacebook.appendChild(facebookIcon);

  let ctaPrimary = document.createElement('div');
  let primaryText = document.createTextNode('Buy Premium');
  ctaPrimary.appendChild(primaryText);
  ctaPrimary.className = 'CTA primary';
  ctaPrimary.onclick = function () {
    window.open('https://vanhack.com/premium', '_blank');
  };

  shareWrapper.appendChild(anchorTagTwitter);
  shareWrapper.appendChild(anchorTagFacebook);

  footer.appendChild(footerTitle);
  footer.appendChild(shareWrapper);
  if (isPremium) footer.appendChild(ctaPrimary);
}

function viewDetailsModal(event) {
  renderModalHeader(event);
  const { about } = event;
  let bodyTag = document.getElementById('Modal__Body');
  bodyTag.innerHTML = '';
  let body = document.createElement('div');
  let bodyText = document.createTextNode(about);
  body.appendChild(bodyText);
  bodyTag.appendChild(body);

  renderModalFooter(event);
}

function onClickApply(event) {
  let Modal = document.getElementById('Modal');
  Modal.style.display = 'block';
  applyModal(event);
  // Apply
}

function applyModal(event) {
  renderModalHeader(event);

  let bodyTag = document.getElementById('Modal__Body');
  const { isPremium } = event;
  bodyTag.innerHTML = '';
  let body = document.createElement('div');
  let bodyText = document.createTextNode(
    isPremium
      ? "You're trying to apply for a Premium Webinar, Please apply for Premium Membership to enjoy the benefits!"
      : 'Congratulations, You have successfully applied for the Event!'
  );

  body.appendChild(bodyText);
  bodyTag.appendChild(body);

  renderModalFooter(event);
}

function closeModal() {
  const Modal = document.getElementById('Modal');
  const close = document.getElementById('close');
  close.onclick = function () {
    Modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the Modal, close it
  window.onclick = function (event) {
    if (event.target == Modal) {
      Modal.style.display = 'none';
    }
  };
}

function eventListeners() {
  closeModal();
}

renderEventTypes();

eventListeners();
