const items = [
    {
        id: 'leopardShoe',
        name: 'Leopard Shoes',
        imgs: [
            {
                src: 'https://cdn.shopify.com/s/files/1/0642/9637/products/allie-s_oat_cheet_double_band_cheetah_animal_print_slip_on_sandal_summer_sandals_3_1600x.jpeg?v=1571271751',
                alt: 'leopard shoe photo'
            },
            {
                src: 'https://cdn.shopify.com/s/files/1/0642/9637/products/allie-s_oat_cheet_double_band_cheetah_animal_print_slip_on_sandal_summer_sandals_2_1600x.jpeg?v=1571271751',
                alt: 'leopard shoe photo'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyLwlXXAfkwBmP6AWL77mb6urQzOWtncgBvn2zvFDVmzO8qPLtYSccpDAtb3ACxtf46E&usqp=CAU',
                alt: 'leopard shoe photo'
            },
            {
                src: 'data:image/jpeg;base64,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',
                alt: 'leopard shoe photo'
            }
        ],
        price: 50, inventory: 10, review: {}
    },
    {
        id: 'bearAndDrinkSweather',
        name: 'Bear And Drink Sweather',
        imgs: [
            {
                src: 'https://styburch.com/wp-content/uploads/2021/08/harajuku-cute-bear-hoodie-cosmiquestudio-aesthetic-outfits-7.jpg',
                alt: 'bear and drink sweather all colors photo'
            },
            {
                src: 'https://styburch.com/wp-content/uploads/2021/08/harajuku-cute-bear-hoodie-cosmiquestudio-aesthetic-outfits-3.jpg',
                alt: 'a model photo wearing the bear and drink sweather with the darker brown sleaves'
            },
            {
                src: 'https://styburch.com/wp-content/uploads/2021/08/harajuku-cute-bear-hoodie-cosmiquestudio-aesthetic-outfits-2.jpg',
                alt: 'a model photo wearing the bear and drink sweather with the lighter brown sleaves'
            },
            {
                src: 'https://styburch.com/wp-content/uploads/2021/08/harajuku-cute-bear-hoodie-cosmiquestudio-aesthetic-outfits-9.jpg',
                alt: 'bear and drink sweather darker brown sleaves photo'
            },
            {
                src: 'https://styburch.com/wp-content/uploads/2021/08/harajuku-cute-bear-hoodie-cosmiquestudio-aesthetic-outfits-8.jpg',
                alt: 'bear and drink sweather image'
            }
        ],
        price: 60, inventory: 20, review: {}
    },
    {
        id: 'mushroomFrogSweather',
        name: 'Mushroom Frog Sweather',
        imgs: [
            {
                src: 'https://m.media-amazon.com/images/I/818a8T4aGsL._AC_SX679._SX._UX._SY._UY_.jpg',
                alt: 'mushrom frog sweather all colors photo'
            },
            {
                src: 'https://m.media-amazon.com/images/I/6145yPNdZSS._AC_UX679_.jpg',
                alt: 'mushrom frog sweather from the back photo'
            },
            {
                src: 'https://m.media-amazon.com/images/I/61fnHvO6i7L._AC_UX679_.jpg',
                alt: '"mushrom frog sweather on a model photo'
            },
            {
                src: 'https://m.media-amazon.com/images/I/81cpYDPmm+L._AC_UX679_.jpg',
                alt: 'mushrom frog sweather on a pillow photo'
            },
            {
                src: 'https://m.media-amazon.com/images/I/61rSoO1dNvL._AC_UX679_.jpg',
                alt: 'mushrom frog sweather photo'
            }
        ],
        price: 35, inventory: 300, review: {}
    },
    {
        id: 'strawberryDress',
        name: 'Strawberry Dress',
        imgs: [
            {
                src: 'https://ae05.alicdn.com/kf/H85fe10b031e94bc2bbd84fdeab7fb5cdV/Strawberry-dress-Sequined-Embroidery-Cascading-Ruffle-Maxi-Dress-Women-summer-V-neck-Puff-Sleeve-Bow-Pink.jpg',
                alt: 'strawberry dress photo'
            },
            {
                src: 'https://ae05.alicdn.com/kf/H0d18dfeb7d684279ae2ef4c7ebe2e5f9p/Strawberry-dress-Sequined-Embroidery-Cascading-Ruffle-Maxi-Dress-Women-summer-V-neck-Puff-Sleeve-Bow-Pink.jpg',
                alt: 'strawberry dress photo'
            },
            {
                src: 'https://ae05.alicdn.com/kf/H94e1764486fd45dea57e6f9845cedbacf/Strawberry-dress-Sequined-Embroidery-Cascading-Ruffle-Maxi-Dress-Women-summer-V-neck-Puff-Sleeve-Bow-Pink.jpg',
                alt: 'strawberry dress photo'
            },
            {
                src: 'https://ae05.alicdn.com/kf/Hf1c0b4645474489e928049a82fdbedda8/Strawberry-dress-Sequined-Embroidery-Cascading-Ruffle-Maxi-Dress-Women-summer-V-neck-Puff-Sleeve-Bow-Pink.jpg',
                alt: 'strawberry dress photo'
            },
            {
                src: 'https://ae05.alicdn.com/kf/H88ae98cf57e745e7955c2478a51c310bT/Strawberry-dress-Sequined-Embroidery-Cascading-Ruffle-Maxi-Dress-Women-summer-V-neck-Puff-Sleeve-Bow-Pink.jpg_640x640.jpg',
                alt: 'strawberry dress photo'
            }
        ],
        price: 55, inventory: 43, review: {}
    },
    {
        id: 'bearSweather',
        name: 'Bear Sweather',
        imgs: [
            {
                src: 'https://kawaiitherapy.com/wp-content/uploads/2020/11/36408-bneppx.jpg',
                alt: 'photo of the strings on the sleaves of the bear sweather'
            },
            {
                src: 'https://kawaiitherapy.com/wp-content/uploads/2020/11/36408-uvzl7b.jpg',
                alt: 'photo of the ponpons of the bear sweather'
            },
            {
                src: 'https://kawaiitherapy.com/wp-content/uploads/2020/11/36408-zetmfd.jpg',
                alt: 'photo of the hood of the bear sweather'
            },
            {
                src: 'https://kawaiitherapy.com/wp-content/uploads/2020/11/36408-bswcn8.jpg',
                alt: 'bear sweather from the back photo'
            },
            {
                src: 'https://kawaiitherapy.com/wp-content/uploads/2020/11/0-8f1cd6.jpeg',
                alt: 'bear sweather on a bed photo'
            },
            {
                src: 'https://m.media-amazon.com/images/I/51h+g+RyR6L._UL1000_.jpg',
                alt: 'bear sweather photo'
            }
        ],
        price: 70, inventory: 5, review: {}
    },
    {
        id: 'catShoe',
        name: 'Cat Shoes',
        imgs: [
            {
                src: 'https://cdn.shopify.com/s/files/1/2417/6849/products/meow-runners-pink-cats-4-cat-shoes-footwear-kitten-kittens-ddlg-playground_190_250x.jpg?v=1571610629',
                alt: 'cat shoes photo'
            },
            {
                src: 'https://cdn.shopify.com/s/files/1/1369/6411/products/v-83549193__1170105898_400x.jpg?v=1626269244',
                alt: 'cat shoes photo'
            },
            {
                src: 'https://cdn.shopify.com/s/files/1/1369/6411/products/H9a89ab75cc774fd7b51f3fd9a889843ax_800x.jpg?v=1626269224',
                alt: 'cat shoe photo'
            },
            {
                src: 'data:image/jpeg;base64,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',
                alt: 'cat shoes photo'
            }
        ],
        price: 80, inventory: 78, review: {}
    },
    {
        id: 'sheepSweather',
        name: 'Sheep Sweather',
        imgs: [
            {
                src: 'https://litb-cgis.rightinthebox.com/images/640x853/202108/bps/product/inc/jtdyir1629083569410.jpg?fmt=webp&v=1',
                alt: 'close up photo of the sheep sweather in green'
            },
            {
                src: 'https://litb-cgis.rightinthebox.com/images/640x853/202108/bps/product/inc/abwmtb1629083567070.jpg?fmt=webp&v=1',
                alt: 'close up photo of the sheep sweather'
            },
            {
                src: 'https://litb-cgis.rightinthebox.com/images/640x853/202105/bps/product/inc/sirrvz1622114800815.jpg?fmt=webp&v=1',
                alt: 'photo of the sheep sweather in green'
            },
            {
                src: 'https://litb-cgis.rightinthebox.com/images/640x853/202112/bps/product/inc/lmxhjv1638522317341.jpg?fmt=webp&v=1',
                alt: 'photo of the sheep sweather in pink'
            },
            {
                src: 'https://litb-cgis.rightinthebox.com/images/640x853/202105/bps/product/inc/xcumhk1622114800218.jpg',
                alt: 'sheep sweather photo'
            }
        ],
        price: 25, inventory: 17, review: {}
    },
    {
        id: 'sleepingCatSweather',
        name: 'Sleeping Cat Sweather',
        imgs: [
            {
                src: 'https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/http%3A%2F%2Fimages.kent2015.com%2Fimages%2F17%2F10%2Fv%2F36295%2F1.jpg',
                alt: 'a photo of all the colors the sleeping cat sweather comes in'
            },
            {
                src: 'https://i5.walmartimages.com/asr/225ffb6a-3b37-4621-9c97-4aeaac8339b6_1.08dc3e2619c41ed3eb49f9e0359b4194.jpeg',
                alt: 'a photo of the sleeping cat sweather in red'
            },
            {
                src: 'https://ae01.alicdn.com/kf/UTB8MGpLcSbIXKJkSaefq6yasXXa0/Women-Cute-Front-Pocket-Cat-Ear-Hoodie-Sleeping-Cat-Pattern-Pullover-Sweatshirt.jpg',
                alt: 'a photo of the sleeping cat sweather in black'
            },
            {
                src: 'https://5.imimg.com/data5/WB/FE/VC/SELLER-31533998/sleeping-cat-hooded-sweatshirt-500x500.jpg',
                alt: 'a model wearing the sleeping cat sweather'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFQXxU0EZT8VP_wIuGhcRgcI2g1b-aaCBNA&usqp=CAU',
                alt: 'sleeping cat sweather image'
            }
        ],
        price: 63, inventory: 7, review: {}
    },
]
export default items