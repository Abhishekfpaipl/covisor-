import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Sheer Pullover T-shirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        price: 2300,
        collecton: 'test 1212',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        ]
      },
      {
        id: 2,
        name: 'Straight Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        price: 2490,
        collecton: 'test 11',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        ]
      },
      {
        id: 3,
        name: 'Jacquard Denim Jacket with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        price: 7990,
        collecton: 'test 32',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        ]
      },
      {
        id: 4,
        name: 'Pocket Wide Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        price: 2290,
        collecton: 'test 12',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        ]
      },
      {
        id: 5,
        name: 'Flare Leg Denim Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        price: 3690,
        collecton: 'test 6',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        ]
      },
      {
        id: 6,
        name: 'Pocket Denim Jumpsuit with Refelctive Binding',
        img: 'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        price: 7990,
        collecton: 'test 5',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        ]
      },
      {
        id: 7,
        name: 'Patchwork Denim Top with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        price: 4290,
        collecton: 'test 4',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        ]
      },
      {
        id: 8,
        name: 'Buttoned Denim A-Line Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        price: 3290,
        collecton: 'test 1',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        ]
      },
      {
        id: 9,
        name: 'Seam Denim Straight Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        price: 2690,
        collecton: 'test 2',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        ]
      },
      {
        id: 10,
        name: 'Jumpsuit',
        img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        price: 3990,
        collecton: 'test 3',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        ]
      },
    ],

    users: [
      {
        id: 1,
        mobile: 8802172121,
        img: '/img/profile/8802172121.jpeg',
        banner: [
          {
            image: '/img/banners/8802172121.jpeg',
            alt: 'First slide',
          },
          {
            image: '/img/banners/dm.jpeg',
            alt: 'Second slide',
          },
          {
            image: '/img/banners/business.jpeg',
            alt: 'Third slide',
          },
          {
            image: '/img/banners/erp.jpeg',
            alt: 'Forth slide',
          },
        ],
        name: "Aayushmann",
        designation: "Websites, digital marketing, mobile apps, custom softwares",
        business_name: "Covisor Infotech Pvt Ltd",
        description: "Web development, software development, digital marketing",
        rating: 4.5,
        support: 200,
        tags: [
          'Chartered Accountant', 'Lawyers', 'Travel Agencies ', 'Doctors', 'Publishers', 'Insurance Agents',
          'Astrologers', 'Fashion Designer', 'Car Dealers ', 'Public Relation',
        ],
        contact: [
          { name: 'Email', icon: 'bi-envelope-fill fs-5', action: 'openEmail' },
          { name: 'Call', icon: 'bi-telephone-fill fs-5', action: 'openDialer' },
          { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
          { name: 'Map', icon: 'bi-geo-fill fs-5', action: 'openMaps' },
          { icon: 'bi bi-facebook fs-3', name: 'Facebook', url: 'https://www.facebook.com/Ayush.Covisor/' },
          { icon: 'bi bi-globe fs-3', name: 'Website', url: 'https://covisor.in' },
          { icon: 'bi bi-linkedin fs-3', name: 'LinkedIn', url: 'https://www.linkedin.com/in/mr-ayushgupta/' },
        ],
        contactDetails: {
          number: '+918802172121',
          email: 'ayush@covisor.in',
          location: '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058',
          facebook: 'https://www.facebook.com/Ayush.Covisor/',
          instagram: 'https://www.instagram.com/yourpage',
          website: 'https://covisor.in',
          linkedin: 'https://www.linkedin.com/in/mr-ayushgupta/'
        },
        information: [
          {
            heading: "Legal Info",
            text: "CIN:-U74999DL2017PTC310729 , GST:-07AAGCC7975D1ZG"
          },
          {
            heading: "Description",
            text: "Web development, software development, digital marketing"
          },
        ],
        promoters: [
          { image: "/img/users/guruji.jpeg", name: "Guruji", },
          { image: "/img/users/iskcon.jpeg", name: "Iskcon delhi", },
          { image: "/img/users/bni.jpeg", name: "BNI dc stellar", },
        ],
        collections: [
          {
            id: 620,
            name: "All",
            design: 0,
            products: [
              {
                id: 3423,
                likes: 45,
                price: '1200',
                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
              },
              {
                id: 2343242,
                likes: 72,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '990',
              },
              {
                id: 32342343,
                likes: 38,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1890',
              },
              {
                id: 4234234,
                likes: 7,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1790',
              },
              {
                id: 545654,
                likes: 98,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '3490',
              },
              {
                id: 66524524,
                likes: 92,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1590',
              },
              {
                id: 3423,
                likes: 45,
                name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                img: 'https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp',
                price: '1200',
                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
              },
              {
                id: 2343242,
                likes: 72,
                name: "Jumpsuit",
                img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '990',
              },
              {
                id: 32342343,
                likes: 38,
                name: "Wide Leg Pants",
                img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1890',
              },
              {
                id: 4234234,
                likes: 7,
                name: "Knotted Shirt Dress",
                img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1790',
              },
              {
                id: 545654,
                name: "Color Block Shimmer Top",
                img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                likes: 98,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '3490',
              },
              {
                id: 66524524,
                img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                likes: 92,
                name: "Linen Blend Cropped Blazer",
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1590',
              }
            ],
          },
          {
            id: 622,
            name: "Without image",
            design: 1,
            products: [
              {
                id: 3423,
                likes: 45,
                price: '1200',
                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
              },
              {
                id: 2343242,
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '990',
              },
              {
                id: 32342343,
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1890',
              },
              {
                id: 4234234,
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1790',
              },
              {
                id: 545654,
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '3490',
              },
              {
                id: 66524524,
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1590',
              }
            ],
          },
          {
            id: 62,
            name: "Image with price",
            design: 2,
            products: [
              {
                id: 3423,
                likes: 45,
                img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                price: '1200',
                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
              },
              {
                id: 2343242,
                likes: 45,
                img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '990',
              },
              {
                id: 32342343,
                likes: 45,
                img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1890',
              },
              {
                id: 4234234,
                likes: 45,
                img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1790',
              },
              {
                id: 545654,
                img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '3490',
              },
              {
                id: 66524524,
                img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1590',
              }
            ],
          },
          {
            id: 1,
            name: "Image with name",
            design: 2,
            products: [
              {
                id: 3423,
                name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                likes: 45,
                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
              },
              {
                id: 2343242,
                name: "Jumpsuit",
                img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                likes: 45,
              },
              {
                id: 32342343,
                name: "Wide Leg Pants",
                img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                likes: 45,
              },
              {
                id: 4234234,
                name: "Knotted Shirt Dress",
                img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                likes: 45,
              },
              {
                id: 545654,
                img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                name: "Color Block Shimmer Top",
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                likes: 45,
              },
              {
                id: 66524524,
                img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                name: "Linen Blend Cropped Blazer",
                likes: 45,
              }
            ],
          },
          {
            id: 1,
            name: "Image with name and price",
            design: 2,
            products: [
              {
                id: 3423,
                name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                likes: 45,
                price: '1200',
                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
              },
              {
                id: 2343242,
                name: "Jumpsuit",
                img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '990',
              },
              {
                id: 32342343,
                name: "Wide Leg Pants",
                img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1890',
              },
              {
                id: 4234234,
                name: "Knotted Shirt Dress",
                img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                likes: 45,
                price: '1790',
              },
              {
                id: 545654,
                img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                name: "Color Block Shimmer Top",
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                likes: 45,
                price: '3490',
              },
              {
                id: 66524524,
                img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                name: "Linen Blend Cropped Blazer",
                likes: 45,
                dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                price: '1590',
              }
            ],
          },
        ],
        counter: [
          { text: 'Years Of Experience', value: 10, },
          { text: 'No. of Happy Customers', value: 150, },
          { text: 'Team Members Count', value: 20, },
        ],
        schedule: [
          {
            start_time: "9:00 AM",
            end_time: "6:00 PM",
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
          },
          {
            start_time: "9:00 AM",
            end_time: "2:00 PM",
            days: ["Saturday"],
          },
          {
            start_time: "9:00 AM",
            end_time: "12:00 PM",
            days: ["Sunday"],
          },
        ]
      },
      {
        id: 2,
        mobile: 9810963346,
        img: '/img/profile/9810963346.jpeg',
        name: "Parvinder Singh",
        designation: "India 🇮🇳 Representative",
        business_name: "Thermofin GmbH",
        description: "Heat Exchangers for Industrial Refrigeration for Ammonia , Co2, Propane, Brine and Glycol",
        rating: 4.5,
        support: 200,
        contact: [
          { name: 'Email', icon: 'bi-envelope-fill fs-5', action: 'openEmail' },
          { name: 'Call', icon: 'bi-telephone-fill fs-5', action: 'openDialer' },
          { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
          // { name: 'Map', icon: 'bi-geo-fill fs-5', action: 'openMaps' }, 
          {
            icon: 'bi bi-globe fs-3', name: 'Website', url: 'https://www.thermofin.de/'
          },
          {
            icon: 'bi bi-linkedin fs-3', name: 'LinkedIn', url: 'https://www.linkedin.com/in/parvinder-singh-4661939?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
          },
        ],
        contactDetails: {
          number: '9810963346',
          email: 'Parvinder.singh@thermofin.de, Par_roy@rediffmail.com',
          website: 'https://www.thermofin.de',
          linkedin: 'https://www.linkedin.com/in/parvinder-singh-4661939?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        information: [
          {
            heading: "Description",
            text: "International Business Development and Marketing , linking the industry across the Globe, Trade and investment , GLobal Business Network Promotion and connection, Sales representative India at THERMOFIN GmbH"
          },
        ],
        promoters: [
          { image: "/img/users/Thermofin.jpeg", name: "Thermofin", },
        ],
      },
      {
        id: 3,
        mobile: 9811084279,
        img: '/img/profile/9811084279.jpg',
        banner: [
          {
            image: '/img/banners/9811084279.jpg',
            alt: 'First slide', 
          },
        ],
        name: "Gaurav Porwal ",
        designation: "PR services, Digital Marketing, TZP Magazine",
        business_name: "Taare Zameen Par Magazine",
        description: "Amplify Your Brand with Expert Magazine Coverage, PR, Digital Marketing & Book Publications",
        rating: 4.5,
        support: 200,
        contact: [
          { name: 'Email', icon: 'bi-envelope-fill fs-5', action: 'openEmail' },
          { name: 'Call', icon: 'bi-telephone-fill fs-5', action: 'openDialer' },
          { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
          { name: 'Map', icon: 'bi-geo-fill fs-5', action: 'openMaps' },
          {
            icon: 'bi bi-globe fs-3', name: 'Website', url: 'https://taarezameenparmagazine.com'
          },
          {
            icon: 'bi bi-instagram fs-3', name: 'Instagram', url: 'https://www.instagram.com/taarezameenparmagazine/?igsh=MXJteXJuYXRzbzZjZQ%3D%3D'
          },
        ],
        contactDetails: {
          number: '9811084279',
          email: 'taarezameenpar.magazine@gmail.com',
          location: '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058',
          website: 'https://taarezameenparmagazine.com',
          instagram: 'https://www.instagram.com/taarezameenparmagazine/?igsh=MXJteXJuYXRzbzZjZQ%3D%3D'
        },
        information: [
          {
            heading: "Description",
            text: "Magazine Coverage, PR Services, Digital Marketing, Book Publications"
          },
        ],
        promoters: [
          { image: "/img/users/divya.jpeg", name: "Divya Jyoti Jagrati Sansthan", },
          { image: "/img/users/lion.jpeg", name: "Lions International delhi veg", },
          { image: "/img/users/bni.jpeg", name: "BNI dc amigos ", },
        ],
      },
      {
        id: 4,
        mobile: 9711256073,
        img: '/img/profile/9711256073.jpg',
        banner: [
          {
            image: '/img/banners/9711256073.jpg',
            alt: 'First slide', 
          },
        ],
        name: "Gaurav Goyal ",
        designation: "Oil, lubricant and grease Manufacturer ",
        business_name: "CLG Oil India Pvt Ltd ",
        description: "Oil, lubricant and grease Manufacturer ",
        rating: 4.5,
        support: 200,
        contact: [
          { name: 'Email', icon: 'bi-envelope-fill fs-5', action: 'openEmail' },
          { name: 'Call', icon: 'bi-telephone-fill fs-5', action: 'openDialer' },
          { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
          { icon: 'bi bi-globe fs-3', name: 'Website', url: 'https://clgoilindia.com' },
        ],
        contactDetails: {
          number: '9711256073',
          email: 'goyal.gaurav9936@gmail.com',
          website: 'https://clgoilindia.com',
        },
        counter: [
          { text: 'Experience', value: 25, },
          { text: 'Dealers', value: 250, },
          { text: 'Employees', value: 100, },
        ],
        promoters: [
          { image: "/img/users/airseol.png", name: "Airseol", },
          { image: "/img/users/bni.jpeg", name: "BNI dc amigos ", },
        ],
      },
    ]
  },
  getters: {
    getProducts: state => state.products,
    getCollection: state => state.collections,
    getUsers: state => state.users,
    getUser: (state) => (userMobile) => {
      let index = state.users.findIndex(user => user.mobile == userMobile);
      return state.users[index];
    },
  },
  mutations: {
    createProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
  },
  actions: {
    createProduct({ commit }, product) {
      commit('createProduct', product);
    },
    editProduct({ commit }, product) {
      commit('editProduct', product);
    }
  },
  modules: {},
});
