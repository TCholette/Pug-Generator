const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "MetaPugz";
const description = "Woof Woof";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    //Original 7640
    growEditionSizeTo: 1528,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Hats" },
      { name: "Neck" },
      { name: "Mouth" },
      { name: "Hand" },
    ],
  },
  {
    //Laser Eyes 40
    growEditionSizeTo: 1536,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Hats" },
      { name: "Neck" },
      { name: "Hand" },
      { name: "Laser Eyes" },
    ],
  },
  {
    //Psycho Masks 210
    growEditionSizeTo: 1578,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Eyes" },
      { name: "Psycho Masks" },
      { name: "Neck" },
      { name: "Hand" },
    ],
  },
  {
    //Rare 1000
    growEditionSizeTo: 1778,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Eyes" },
      { name: "Short Glasses" },
      { name: "Rare Hats" },
      { name: "Neck" },
      { name: "Mouth" },
      { name: "Hand" },
    ],
  },
  {
    //Vr 225
    growEditionSizeTo: 1823,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Eyes" },
      { name: "Vr Hat" },
      { name: "Neck" },
      { name: "Mouth" },
      { name: "Hand" },
    ],
  },
  {
    //Costumes 300
    growEditionSizeTo: 1883,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Costume Hats" },
      { name: "Neck" },
      { name: "Mouth" },
      { name: "Hand" },
    ],
  },
  {
    //Masks 300
    growEditionSizeTo: 1943,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Marks" },
      { name: "Open Eyes No Cracks" },
      { name: "Masks" },
      { name: "Neck" },
      { name: "Hand" },
    ],
  },
  {
    //Mark Masks 270
    growEditionSizeTo: 1997,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Ears" },
      { name: "Mask Marks" },
      { name: "Open Eyes No Cracks" },
      { name: "Glasses" },
      { name: "Neck" },
      { name: "Hand" },
    ],
  },
  {
    //Gas Maasks 40
    growEditionSizeTo: 2005,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Gas Masks" },
      { name: "Neck" },
    ],
  },
  {
    //Unique Pugz 15
    growEditionSizeTo: 2020,
    layersOrder: [
      { name: "Unique Pugz" },
    ],
  },
];


const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
