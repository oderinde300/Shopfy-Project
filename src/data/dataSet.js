const DUMMY_DATA = [
    {
        category: 'phones',
        name: 'lenovo',
        price: 4,
        id: 'p1',
        description: "The base model has the same 6.95-inch Full HD+ display with a 90Hz refresh rate and 180Hz touch sampling rate as the other models in the series.  The display is touted to have a 1,500:1 contrast ratio and a brightness of 480 nits.The gadget is powered by a MediaTek Helio G85 chipset with two Cortex- A75 cores operating at 2.0GHz and six Cortex-A55 cores running at 1.8GHz on the inside.  The phone comes in two flavors: 6GB RAM and 128GB storage.",
        image: 'https://images.unsplash.com/photo-1609252925148-b0f1b515e111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        category: 'phones',
        name: 'techno',
        price: 6,
        id: 'p2',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        category: 'phones',
        name: 'nokia',
        price: 6,
        id: 'p3',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1574547070681-291aeb4b2485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        category: 'phones',
        name: 'itel',
        price: 6,
        id: 'p4',
        description: "The Nokia X20 feels pretty big, mainly because of its large screen. It has a plastic body, and we tried out a version with a bronze hue. The rear has a circular camera bump, which has become a staple for Nokia phones, with the Zeiss logo in the middle.",
        image: 'https://images.unsplash.com/photo-1583315527632-3e828f851fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'phones',
        name: 'samsung',
        price: 6,
        id: 'p5',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
    },
    {
        category: 'phones',
        name: 'iphone',
        price: 6,
        id: 'p6',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'computers',
        name: 'hp',
        price: 4,
        id: 'p8',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'computers',
        name: 'dell',
        price: 6,
        id: 'p7',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        category: 'computers',
        name: 'lenovo',
        price: 6,
        id: 'p9',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
    },
    {
        category: 'computers',
        name: 'acer',
        price: 6,
        id: 'p10',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1623305615868-6c1134bb8f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'computers',
        name: 'toshiba',
        price: 6,
        id: 'p11',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        category: 'computers',
        name: 'mac',
        price: 6,
        id: 'p12',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
    },
    {
        category: 'television-sets',
        name: 'hisense',
        price: 4,
        id: 'p13',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    },
    {
        category: 'television-sets',
        name: 'samsung',
        price: 6,
        id: 'p14',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        category: 'television-sets',
        name: 'lg',
        price: 6,
        id: 'p15',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        category: 'television-sets',
        name: 'sharp',
        price: 6,
        id: 'p16',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1623920996377-9c5cd536143e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        category: 'television-sets',
        name: 'rock',
        price: 6,
        id: 'p17',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'
    },
    {
        category: 'television-sets',
        name: 'panasonic',
        price: 6,
        id: 'p18',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1597575732103-9f6d068cfa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        category: 'speakers',
        name: 'oriamo',
        price: 4,
        id: 'p19',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1612241143917-d05c85c43751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    },
    {
        category: 'speakers',
        name: 'ubl',
        price: 6,
        id: 'p20',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1517756548657-b2c24162e63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
        category: 'speakers',
        name: 't & g',
        price: 6,
        id: 'p21',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        category: 'speakers',
        name: 'zealot',
        price: 6,
        id: 'p22',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        category: 'speakers',
        name: 'tgbd03',
        price: 6,
        id: 'p23',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1520860100614-a714deb4805f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
    },
    {
        category: 'speakers',
        name: 'djeck',
        price: 6,
        id: 'p24',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1614755192999-b8ecede15458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        category: 'game-consoles',
        name: 'ps3',
        price: 4,
        id: 'p25',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80'

    },
    {
        category: 'game-consoles',
        name: 'x-box',
        price: 6,
        id: 'p26',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1588689115724-a624efec3c93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'game-consoles',
        name: 'ps2',
        price: 6,
        id: 'p27',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1591462391941-8e7b33fc4604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80'
    },
    {
        category: 'game-consoles',
        name: 'game Pad',
        price: 6,
        id: 'p28',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'game-consoles',
        name: 'wireless Game Pad',
        price: 6,
        id: 'p29',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/flagged/photo-1580234748052-2c23d8b27a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80'
    },
    {
        category: 'game-consoles',
        name: 'x-box',
        price: 6,
        id: 'p30',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80'
    },
    {
        category: 'home-appliances',
        name: 'binatone',
        price: 4,
        id: 'p31',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'

    },
    {
        category: 'home-appliances',
        name: 'phillips',
        price: 6,
        id: 'p32',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1611090925566-b1fc31065f63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        category: 'home-appliances',
        name: 'saisho',
        price: 6,
        id: 'p33',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1574269910231-bc508bcb68ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80'
    },
    {
        category: 'home-appliances',
        name: 'sanx Portable Iron',
        price: 6,
        id: 'p34',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1540544093-b0880061e1a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80'
    },
    {
        category: 'home-appliances',
        name: 'tosiba Cooking Pot',
        price: 6,
        id: 'p35',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        category: 'home-appliances',
        name: 'cooking Pot',
        price: 6,
        id: 'p36',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Maxime corporis minus maioreeius aspernatur molestias sint sit voluptatibus voluptas eligendi voluptatum perspiciatis beatae accusantium expedita reiciendis facilis quod, saepe aliquid.",
        image: 'https://images.unsplash.com/photo-1587377224035-72144bf39e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
]

export default DUMMY_DATA;