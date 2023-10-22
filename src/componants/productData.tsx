import Sunflower from '../assets/sunflower.jpeg';
import Cactus from '../assets/Cactus.jpeg';
import lavender from '../assets/lavender.jpeg';
import lilyflower from '../assets/lilyflower.jpg';
import Fern from '../assets/OIG.uJs.od9.jpeg';
import Succulent from '../assets/Succulent.jpeg';
import SpiderPlant from '../assets/SpiderPlant.jpeg';
import Calathea from '../assets/Calathea.jpeg';
import Snake from '../assets/SnakePlant.jpeg'
import ZZ from '../assets/ZZ.jpg'


export const products = [
  // Plants that grow in the sun
  {
    id: 1,
    name: "Sun-Loving Succulent",
    description:
      "This drought-tolerant succulent thrives in bright sunlight, making it a perfect addition to your sunny garden or windowsill. Its thick leaves store water, allowing it to withstand dry conditions and hot sun. With its unique and vibrant appearance, this succulent will bring a touch of the desert to your space.",
    src: `${Succulent}`,
    price: "25 SAR",
    sun: "Full Sun",
  },
  {
    id: 2,
    name: "Desert Cactus",
    description:
      "The desert cactus is a hardy species that has adapted to the sun-soaked and arid conditions of its natural habitat. Its spiky exterior not only adds a touch of rugged beauty but also serves as a survival mechanism, deterring animals from feeding on it. Bring a piece of the desert into your home or garden with this resilient and low-maintenance plant.",
    src:`${Cactus}`,
    price: "20 SAR",
    sun: "Full Sun",
  },
  {
    id: 3,
    name: "Sunflower",
    description:
      "The sunflower, known for its iconic bright yellow petals and impressive height, is a true sun lover. It thrives when exposed to full sun, and its large flower head even tracks the sun across the sky. With its cheerful appearance and undeniable connection to sunny days, the sunflower is a symbol of warmth and positivity.",
    src: `${Sunflower}`,
    price: "15 SAR",
    sun: "Full Sun",
  },
  {
    id: 11,
    name: "Lavender",
    description:
      "Lavender, a fragrant herb with beautiful purple blooms, is well-known for thriving in sunny and dry conditions. Its soothing scent and delicate appearance make it a popular choice for gardens, aromatherapy, and crafts. With its preference for sunny spots, lavender brings both visual and aromatic delight to any environment.",
    src: `${lavender}`,
    price: "18 SAR",
    sun: "Full Sun",
  },

  // Plants don't like direct sunlight
  {
    id: 4,
    name: "Fern Variety",
    description:
      "The lush fern variety is a perfect choice for those seeking a plant that prefers indirect light and high humidity. Its feathery fronds create an elegant and calming atmosphere, making it a favorite for indoor spaces. While ferns may not enjoy direct sunlight, they thrive in shaded corners and areas with filtered light.",
    src: `${Fern}`,
    price: "18 SAR",
    sun: "Indirect Light",
  },
  {
    id: 5,
    name: "Peaceful Peace Lily",
    description:
      "The peaceful peace lily is an air-purifying plant that flourishes in low to moderate light conditions. Its glossy green leaves and delicate white flowers create a serene and calming presence. Whether placed in a dimly lit room or an office with limited natural light, this elegant plant will thrive and help improve indoor air quality.",
    src: `${lilyflower}`,
    price: "30 SAR",
    sun: "Low Light",
  },
  {
    id: 6,
    name: "ZZ Zamioculcas",
    description:
      "The ZZ Zamioculcas, known for its resilience, is highly tolerant of low light conditions, making it an excellent choice for offices and homes with limited sunlight. Its glossy, dark green leaves add a touch of sophistication to any space. With minimal care requirements and its ability to thrive in low light, the ZZ plant is a reliable and stylish addition to interior decor.",
    src: `${ZZ}`,
    price: "22 SAR",
    sun: "Low Light",
  },
  {
    id: 8,
    name: "Calathea",
    description:
      "The calathea is a stunning foliage plant that prefers filtered or indirect light. Its vibrant and patterned leaves make it a standout addition to any indoor collection. While it may not enjoy direct sunlight, its intricate leaf designs and unique colors make it an excellent choice for creating an inviting and visually appealing environment.",
    src:`${Calathea}`,
    price: "28 SAR",
    sun: "Indirect Light",
  },
  {
    id: 9,
    name: "Spider Plant",
    description:
      'The spider plant, with its arching leaves and easy-to-grow nature, is suitable for various light conditions. It can thrive in both indirect light and low light settings, making it a versatile choice for homes and offices. Its ability to produce offshoots or "spiderettes" adds an extra layer of charm to this adaptable and resilient plant.',
    src: `${SpiderPlant}`,
    price: "20 SAR",
    sun: "Indirect Light",
  },
  {
    id: 12,
    name: "Snake Plant",
    description:
      "The snake plant, also known as the mother-in-law's tongue, is a low-maintenance succulent with tall, upright leaves. It thrives in low light conditions and is well-suited for indoor spaces. Its striking appearance and air-purifying qualities make it a popular choice for beginners and experienced plant enthusiasts alike.",
    src:`${Snake}`,
    price: "25 SAR",
    sun: "Low Light",
  },
];
