let cloud, websiteHeading, fakeNFT, logo;
let ad1, ad2, ad3, ad1a, ad2a, ad3a;
let elonMuskTweet, heading1, heading2, websiteTitle;
let txt1, txt2, nftCaption, elonTweetCaption, ads, ads1;


function preload(){

  logo = createImg("Images/logo(FINAL).png", "logo");
  cloud = createImg("Images/Cloud.png", "A cloud");
  fakeNFT = createImg("Images/FakeNFT.png", "World's most expensive NFT");
  ad1 = createImg("Images/ad1.png", "Ad");
  ad2 = createImg("Images/ad2.png", "Ad");
  ad3 = createImg("Images/ad3.png", "Ad");
  ad1a = createImg("Images/ad1.png", "Ad");
  ad2a = createImg("Images/ad2.png", "Ad");
  ad3a = createImg("Images/ad3.png", "Ad");
  elonMuskTweet = createImg("Images/FAKEElonMuskTweet.png", "A tweet from Elon Musk that says \"Bitcoin will drop! Try to sell your coins to someone else if you can! Buy Dogecoin instead!\"");
  heading1 = createP("Most Expensive NFT Sold!");
  heading2 = createP("Bitcoin Projected to Drop Even More!");
  txt1 = createP("This week, the most expensive NFT has been sold. The NFT named \"Smile Boi\" has been sold for $3.9 million. This life changing NFT has such a heavy price to it since it has been created AND signed by the world famous artist, \"Suewoop ヅ\". Everyone is now trying to reach for the stars to get this priceless NFT.");
  txt2 = createP("Bitcoin has dropped to the lowest it has been in awhile. It is projected to drop even lower than it is now. This has caused many people to lose trust in Bitcoin. The drop in Bitcoin may have stemmed from this Tweet from Elon Musk (screenshot on the right). Though it is not confirmed, Mr. Musk does have a large following and has enough influence to cause such an impact.")
  nftCaption = createP("\"Smile Boi\" by Suewoopヅ");
  elonTweetCaption = createP("Tweet from Elon Musk");

  ads = createP("Ads");
  ads1 = createP("Ads");
}


function setup() {

  cloud.parent('top');
  logo.parent("topLeft");

  ads.parent('left');
  ad1.parent('left');
  ad2.parent('left');
  ad3.parent('left');

  ads1.parent('right');
  ad1a.parent('right');
  ad2a.parent('right');
  ad3a.parent('right');

  fakeNFT.parent('mainBodyRight');
  nftCaption.parent('mainBodyRight');
  elonMuskTweet.parent('mainBodyRight');
  elonTweetCaption.parent('mainBodyRight');

  heading1.parent('mainBody');
  txt1.parent('mainBody');
  heading2.parent('mainBody');
  txt2.parent('mainBody');
}
