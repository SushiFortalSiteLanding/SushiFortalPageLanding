import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {

    const menuEntradas = [
        {
            id: 1,
            name: 'Guioza (4 Unidades)',
            description: 'Pastel recheado com Legumes e carne bovina',
            price: '17.90',
            type: 'Entradas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310092235_M3AX_i.jpg',
        },
        {
            id: 2,
            name: 'Harumaki (4 Unidades)',
            description: 'Rolinhos primavera recheados com queijo',
            price: '15.90',
            type: 'Entradas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101539_85KL_i.jpg',
        },
        {
            id: 3,
            name: 'Harumaki Chocolate (4 Unidades)',
            description: 'Rolinho primavera recheados com chocolate. Muiiiito Bom pra finalizar sua refeicão, e servir como sobremesa.',
            price: '15.90',
            type: 'Entradas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101541_0866_i.jpg',
        },
        {
            id: 4,
            name: 'Harumaki Romeu e Julieta (4 Unidades)',
            description: 'Rolinho primavera rechado com queijo e goibada.',
            price: '15.90',
            type: 'Entradas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101545_S02R_i.jpg',
        },
        {
            id: 5,
            name: 'Harumaki Camarão (4 Unidades)',
            description: 'Rolinho primavera recheado com camarão, creme cheese.',
            price: '15.90',
            type: 'Entradas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101548_45J8_i.jpg',
        },
    ]

    const menuCombos = [
        {
            id: 6,
            name: 'Combo Fortal (12peças)',
            description: '2 Hossomaki Salmão , 2 Niguiri Salmão , 2 Niguiri Kani Empanado ,2 Hossomaki Kani , 2 Hossomaki Atum grelhado , 2 Hot Salmão.',
            price: '32.90',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091631_7UMB_i.jpg',
        },
        {
            id: 7,
            name: 'Combo Fortal (18peças)',
            description: '6 Hot rolls,3 Uramaki Kani couve, 3 Uramaki kani, 3 Niguiri Skin, 3 Jhou Salmão frito.',
            price: '29.90',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091631_7UMB_i.jpg',
        },
        {
            id: 8,
            name: 'Combo Fortal (30 peças)',
            description: '3 Niguiri Salmão, 3 Hossomaki Salmão, 2 Uramaki Salmão, 4 uramaki Camarão, 4 Uramaki skin, 4 Hossomaki Kani, 4 Uramaki kani, 6 Hot Roll',
            price: '37.90',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091631_7UMB_i.jpg',
        },
        {
            id: 9,
            name: 'Combo Fortal (40 peças)',
            description: '3 Hossomaki Salmão, 2 Uramaki Salmão, 6 Uramaki Atum , 6 Uramaki Skin, 6 Hossomaki Kani, 4 Uramaki Kani, 3 Hossomaki de Atum 5 Hot Kani, 5 Hot Salmão.',
            price: '40.00',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091631_7UMB_i.jpg',
        },
        {
            id: 10,
            name: 'Combo Fortal (50 peças)',
            description: '3 Niguiri Salmão, 5 Hossomaki de atum, 2 Uramaki Salmão, 8 Uramaki de atum,10 Uramaki Kani,10 Hossomaki Kani, 5 Hot Salmão, 5 Hot Kani.',
            price: '57.90',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091631_7UMB_i.jpg',
        },
        {
            id: 11,
            name: 'Combo frito Fortal (50 peças)',
            description: '10 Hot Salmão , 10 Hot Couve Crispy , 10 Uramaki skin com Batata Crispy ,10 Uramaki Kani ,10 Hot Atum com cebolinha.',
            price: '52.90',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091631_7UMB_i.jpg',
        },
        {
            id: 12,
            name: 'Combo Fortal (80 peças)',
            description: '6 sashimis salmão, 4 niguiris salmão, 6 Niguiri Kani, 6 uramakis salmão, 10 hossomaki salmão, 14 uramakis de Kani, 14 uramakis skin, 10 hot Salmão, 10 Hot Kani.',
            price: '102.90',
            type: 'Combos a parti de 1real a peça',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310092253_P55R_i.jpg',
        },
    ]

    const menuCombosPlus = [
        {
            id: 13,
            name: 'Combo plus (18 peças)',
            description: '4 Hossomaki de Salmão, 4 Jhou Salmão, 4 uramaki Skin, 2 Niguiri Salmão selado, 4 Niguiri Salmão.',
            price: '65.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091718_V0PM_i.jpg',
        },
        {
            id: 14,
            name: 'Combo plus executivo',
            description: '5 Uramaki Salmao, 4 Hossomaki kani, 4 Hossomaki Atum, 2 Niguiri kani empanado, 2 Uramaki Skin, 3 Jhou Salmão.',
            price: '39.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091731_8V2R_i.jpg',
        },
        {
            id: 15,
            name: 'Combo plus executivo frito (20 peças)',
            description: '4 Niguiri de kani empanado com limão, 4 Uramaki Skin, 4 Jhou frito, 4 Hot rolls, 2 Hot Couve e 2 Hot crispy batata.',
            price: '39.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091738_C0IX_i.jpg',
        },
        {
            id: 16,
            name: 'Combo plus Salmão (20 peças)',
            description: '8 Sashimi de Salmão, 4 Jhou Salmão selado, 4 Uramaki Mexicano, 4 Jhou Salmão.',
            price: '84.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091756_5ADU_i.jpg',
        },
        {
            id: 17,
            name: 'Combo plus (25 peças)',
            description: '10 Hot roll, 5 Uramaki kani com Crispy, 5 Uramaki Salmão, 5 Sashimi Salmão.',
            price: '42.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101936_D104_i.jpg',
        },
        {
            id: 18,
            name: 'Combo plus (20 peças)',
            description: '4 sashimis de salmão, 2 niguiris salmão, 2 uramakis salmão, 2 hossomakis salmão, 2 uramakis Kani, 3 Hot salmão, 3 Hot Kani.',
            price: '35.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101936_D104_i.jpg',
        },
        {
            id: 19,
            name: 'Combo plus (28 peças) + Coca lata 350ml',
            description: '4 Hossomaki Salmão, 4 Niguiri Salmão maçaricado, 4 Niguiri Salmão, 4 Uramaki Skin, 4 jhou Salmão, 4 Sashimi Salmão, 4 jhou geleia.',
            price: '110.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091647_HR4M_i.jpg',
        },
        {
            id: 20,
            name: 'Combo plus selado (28 peças)',
            description: '4 Sashimi Salmão selado, 4 Niguiri especial selado, 4 Jhou Salmão selado, 4 Jhou Salmao com crispy selado, 4 Jhou Salmao batata crispy selado e 8 hot roll Salmao com creme cheese acompanhado com cebolinha.',
            price: '87.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091710_8P8S_i.jpg',
        },
        {
            id: 21,
            name: 'Combo plus (30 peças)',
            description: '4 sashimis salmão, 2 niguiris salmão, 3 uramaki salmão, 4 hossomakis salmão, 3 uramakis Kani, 4 uramakis skin, 5 Hot salmão, 5 Hot Kani.',
            price: '45.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091812_050I_i.jpg',
        },
        {
            id: 22,
            name: 'Combo plus (40 peças)',
            description: '5 Sashimis salmão, 4 niguiris salmão, 4 uramakis salmão, 5 hossomakis salmão, 6 uramakis Kani, 6 uramakis skin, Hot salmão, 5 Hot Kani.',
            price: '55.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091814_D813_i.jpg',
        },
        {
            id: 23,
            name: 'Combo plus jhou mix plus (20 peças)',
            description: 'Deliciosas variedades de Jhou, 4 Camarão, 4 Jhou couve Crispy, 4 Jhou Salmao, 4 Jhou Geleia, 4 Jhou salmao selado.',
            price: '79.90',
            type: 'Combo Plus',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310141916_2U87_i.jpg',
        },
    ]

    const menuComboTemaki = [
        {
            id: 24,
            name: 'Temaki Par',
            description: '',
            price: '68.31',
            type: 'Combo Temaki',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310102014_C4U8_i.jpg',
        },
        {
            id: 25,
            name: 'Temaki casal',
            description: '',
            price: '60.90',
            type: 'Combo Temaki',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310102015_WGRW_i.jpg',
        },
        {
            id: 26,
            name: 'Temaki Executivo',
            description: '1 Temaki Salmao, 4 Sashimi Salmao, 3 Niguiri Salmão, 3 jhou Geleia, 3 Hot roll Crispy, 3 Uramaki kani',
            price: '55.90',
            type: 'Combo Temaki',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310102017_8QJ5_i.jpg'
        },

    ]

    const menuPromo = [

        {
            id: 27,
            name: 'Hot promo (40) Peças',
            description: '20 Hot Salmão, 20 Hot Kani.',
            price: '46.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080703_Y141_i.jpg',
        },
        {
            id: 28,
            name: 'Fish Ball (5 Unidades)',
            description: 'Bolinhas de Salmão grelhado com Creme Cheese, empanado na farinha Panko.',
            price: '25.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080708_5V54_i.jpg',
        },
        {
            id: 29,
            name: 'Chickenkatsu',
            description: 'Tiras de Frango empanado na farinha especial, aprox 200g.',
            price: '20.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080714_10U6_i.jpg',
        },
        {
            id: 30,
            name: 'Sashimi Salmão (10 Unidades)',
            description: 'Deliciosas Laminas de um Salmão bem fresquinho.',
            price: '35.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080718_2O5M_i.jpg',
        },
        {
            id: 31,
            name: 'Hot Banana 8 peças',
            description: 'Banana empanada com farinha especial e coberta com chocolate :)',
            price: '12.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080747_EWR7_i.jpg',
        },
        {
            id: 32,
            name: 'Big Hot Especial 10 peças',
            description: 'Delicioso Hot Salmao com Camarão com cream cheese e batata Especial.',
            price: '39.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080752_42E1_i.jpg',
        },
        {
            id: 33,
            name: 'Hot no capricho (16 peças)',
            description: '8 Hot kani com couve crispy, 8 Hot Salmao crispy com Batata.',
            price: '29.90',
            type: 'Promo',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091743_C2Y6_i.jpg',
        },
    ]

    const menuCombinadoFortal = [


        {
            id: 34,
            name: '20 Peças Fortal',
            description: '',
            price: '27.90',
            type: 'Combinado Fortal',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080130_664V_i.jpg',
        },
        {
            id: 35,
            name: '30 Peças Fortal',
            description: '',
            price: '37.90',
            type: 'Combinado Fortal',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080130_664V_i.jpg',
        },
        {
            id: 36,
            name: '40 Peças Fortal',
            description: '',
            price: '47.90',
            type: 'Combinado Fortal',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080130_664V_i.jpg',
        },
        {
            id: 37,
            name: '60 Peças Fortal',
            description: '',
            price: '67.90',
            type: 'Combinado Fortal',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080130_664V_i.jpg',
        },
        {
            id: 38,
            name: '80 Peças Fortal',
            description: '',
            price: '87.90',
            type: 'Combinado Fortal',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080130_664V_i.jpg',
        },
        {
            id: 39,
            name: '100 Peças Fortal',
            description: '',
            price: '107.00',
            type: 'Combinado Fortal',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080130_664V_i.jpg',
        },
    ]

    const menuHotRoll = [
        {
            id: 40,
            name: 'Hot roll 10 Peças',
            description: 'Hot de Salmão.',
            price: '24.00',
            type: 'Hot Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080725_D448_i.jpg',
        },
        {
            id: 41,
            name: 'Hot roll Kani 10 Peças',
            description: 'Hot de Kani.',
            price: '24.90',
            type: 'Hot Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080725_D448_i.jpg',
        },
        {
            id: 42,
            name: 'Hot roll 10 Peças',
            description: 'Hot de Camarão.',
            price: '27.90',
            type: 'Hot Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080725_D448_i.jpg',
        },
        {
            id: 43,
            name: 'Hot roll 10 Peças',
            description: 'Hot de Atum.',
            price: '24.90',
            type: 'Hot Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080725_D448_i.jpg',
        },
        {
            id: 44,
            name: 'Hot Couve 10 Peças',
            description: 'Enrolado frito com recheio de Salmão, coberto com cream cheese e crispy de couve.',
            price: '24.90',
            type: 'Hot Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080725_D448_i.jpg',
        },
    ]


    const menuJhou = [
        {
            id: 45,
            name: 'Jhou Camarão',
            description: 'Saboroso Gohan enrolado com uma fatia de sashimi, cream cheese e Camarão cozido.',
            price: '19.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101425_FO7E_i.jpg',
        },
        {
            id: 46,
            name: 'Jhou Salmão',
            description: 'Gohan enrolado em uma fatia de salmão, com Salmão batido e cebolinha.',
            price: '19.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101428_L2MG_i.jpg',
        },
        {
            id: 47,
            name: 'Jhou Salmão Maçaricado',
            description: 'Gohan enrolado em uma fatia de Salmão selado, cebolinha e Cream Cheese.',
            price: '16.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101430_5NLK_i.jpg',
        },
        {
            id: 48,
            name: 'Jhou Couve Maçaricado',
            description: 'Gohan enrolado em uma fatia de Salmão selado, com Crispy de Couve Frito e Cream Cheese.',
            price: '16.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101431_AJM4_i.jpg',
        },
        {
            id: 49,
            name: 'Jhou geleia goiaba',
            description: 'Gohan enrolado em uma fatia de Salmão, com geléia de Goiaba e cream cheese.',
            price: '19.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101433_618T_i.jpg',
        },
        {
            id: 50,
            name: 'Jhou geleia Morango',
            description: 'Gohan enrolado em uma fatia de Salmão, com geléia de Morango e cream cheese.',
            price: '19.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101436_DM1D_i.jpg',
        },
        {
            id: 51,
            name: 'Jhou Crispy Batata',
            description: 'Gohan enrolado em uma fatia de Salmão selado, com Crispy de Batata e Cream Cheese.',
            price: '19.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101443_7677_i.jpg',
        },
        {
            id: 52,
            name: 'Jhou gelei Pimenta',
            description: 'Gohan enrolado em uma fatia de Salmão, com geléia de pimenta e cream cheese.',
            price: '19.90',
            type: 'Jhou (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101452_DPCY_i.jpg',
        },
    ]

    const menuNiguiri = [


        {
            id: 53,
            name: 'Niguiri Salmão',
            description: 'Saboroso Gohan, coberto com uma fatia de Salmão.',
            price: '16.90',
            type: 'Niguiri (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080338_5Y6R_i.jpg',
        },
        {
            id: 54,
            name: 'Niguiri Salmão Maçaricado',
            description: 'Saboroso Gohan, coberto com uma fatia de Salmão selado.',
            price: '16.90',
            type: 'Niguiri (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080353_3G6Y_i.jpg',
        },
        {
            id: 55,
            name: 'Niguiri kani Empanado',
            description: 'Saboroso Gohan, coberto com uma fatia de Kani empanado enrolado na Alga.',
            price: '16.90',
            type: 'Niguiri (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080345_58T4_i.jpg',
        },
        {
            id: 56,
            name: 'Niguiri de Kani',
            description: 'Saboroso Gohan, coberto com uma fatia de Kani enrolado na Alga.',
            price: '15.90',
            type: 'Niguiri (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080348_5718_i.jpg',
        },
        {
            id: 57,
            name: 'Niguiri Camarão',
            description: 'Saboroso Gohan, coberto com Camarão cozido enrolado na Alga.',
            price: '20.90',
            type: 'Niguiri (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080400_T3PF_i.jpg',
        },

    ]

    const menuSashimi = [

        {
            id: 58,
            name: 'Sashimi Salmão',
            description: 'Atias de salmão bem Saboroso e Fresco.',
            price: '21.90',
            type: 'Sashimi (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080409_0A65_i.jpg',
        },
        {
            id: 59,
            name: 'Sashimi Salmão Maçaricado',
            description: 'Atias de salmão Selado bem Saboroso e Fresco com cebolinha.',
            price: '21.90',
            type: 'Sashimi (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080412_SFJF_i.jpg',
        },
        {
            id: 60,
            name: 'Sashimi Kani',
            description: 'Atias de Kani bem Saboroso e Fresco.',
            price: '16.90',
            type: 'Sashimi (5 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080415_72NK_i.jpg',
        },
    ]

    const menuUramaki = [


        {
            id: 61,
            name: 'Salmão',
            description: 'Saboroso Gohan com gergelim e Salmão Fresco com cream cheese.',
            price: '16.90',
            type: 'Uramaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080425_8346_i.jpg',
        },
        {
            id: 62,
            name: 'Kani',
            description: 'Saboroso Gohan com gergelim e Kani Fresco com cream cheese.',
            price: '13.90',
            type: 'Uramaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080452_5JN5_i.jpg',
        },
        {
            id: 63,
            name: 'Camarão',
            description: 'Saboroso Gohan com Gergelim, recheado com camarao empanado.',
            price: '13.90',
            type: 'Uramaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080456_MLRN_i.jpg',
        },
        {
            id: 64,
            name: 'Skin',
            description: 'Saboroso Gohan com gergelim, pele de salmão grelhada batida.',
            price: '9.00',
            type: 'Uramaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080458_QBWR_i.jpg',
        },
        {
            id: 65,
            name: 'Mexicano',
            description: 'Tarta de Salmão, cream cheese cebolinha, arroz e batata crispy.',
            price: '20.90',
            type: 'Uramaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080651_EIS0_i.jpg',
        },
        {
            id: 66,
            name: 'Uramaki Especial',
            description: 'Saboroso Gohan com gergelim, Com Patê de Arrai batida.',
            price: '8.00',
            type: 'Uramaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101710_H116_i.jpg',
        },
    ]

    const menuHossomaki = [


        {
            id: 67,
            name: 'Hossomaki',
            description: 'Nori, gohan e salmão fresco.',
            price: '8.00',
            type: 'Hossomaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101527_OJ06_i.jpg',
        },
        {
            id: 68,
            name: 'Hossomaki de Atum',
            description: 'Nori, gohan e Atum grelhado.',
            price: '8.00',
            type: 'Hossomaki (4 Unidades)',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101525_E40E_i.jpg',
        },

    ]

    const menuYakisoba = [

        {
            id: 69,
            name: 'Yakisoba Frango 500g',
            description: 'Yakisoba, Frango 500g + Coca Cola.',
            price: '31.90',
            type: 'Yakisoba',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080225_TND6_i.jpg',
        },
        {
            id: 70,
            name: 'Yakisoba carne 700g',
            description: 'Macarrão Oriental, Carne bovina e legumes e molho.',
            price: '37.90',
            type: 'Yakisoba',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080237_76T6_i.jpg',
        },
        {
            id: 71,
            name: 'Yakisoba Clássico 700g',
            description: 'Macarrão Oriental, Carne bovina, Frango e legumes e molho.',
            price: '38.90',
            type: 'Yakisoba',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080240_68KR_i.jpg',
        },
        {
            id: 72,
            name: 'Yakisoba Camarão 700g',
            description: 'Macarrão Oriental, Camarão legumes e molho.',
            price: '42.90',
            type: 'Yakisoba',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080230_5V1F_i.jpg',
        },
        {
            id: 73,
            name: 'Yakisoba especial 700g',
            description: 'Macarrão Oriental, Carne bovina, Frango, Camarão e legumes e molho.',
            price: '49.90',
            type: 'Yakisoba',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080241_GS7D_i.jpg',
        },

    ]

    const menuTemakis = [

        {
            id: 74,
            name: 'Camarão',
            description: 'Gohan, camarão no vapor, Cream Cheese e Cebolinha (180g).',
            price: '32.00',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080120_AAQ4_i.jpg',
        },
        {
            id: 75,
            name: 'Temaki de Kani Crocante',
            description: 'Temaki de kani em pedaços empanados na farinha panko, gohan, cebolinha e cream cheese.',
            price: '22.90',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310071948_EBHY_i.jpg',
        },
        {
            id: 76,
            name: 'Temaki Salmão',
            description: 'Gohan, Salmão fresco, Cebolinha e Cream Cheese (180g).',
            price: '27.90',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080030_S10N_i.jpg',
        },
        {
            id: 77,
            name: 'Temaki de Salmão Grelhado',
            description: 'Gohan, Salmão Grelhado fresco, Cebolinha e Cream Cheese (180g).',
            price: '29.90',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080034_60TH_i.jpg',
        },
        {
            id: 78,
            name: 'Temaki Kani Kama',
            description: 'Temaki de kani, gohan, cream cheese e cebolinha.',
            price: '21.90',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080035_6KVG_i.jpg',
        },
        {
            id: 79,
            name: 'Temaki Camarão hot',
            description: 'Gohan, camarão, cream cheese e cebolinha, empanado com farinha especial e frito (180g).',
            price: '28.90',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101647_O53B_i.jpg',
        },
        {
            id: 80,
            name: 'Temaki Especial Empanado',
            description: 'Temaki de Salmão grelhado empanado com Farinha especial. Finalizado com creme cheese e cebolinha (180g).',
            price: '28.90',
            type: 'Temakis',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101909_84K7_i.jpg',
        },
    ]

    const menuDogRoll = [

        {
            id: 81,
            name: 'Cru De Salmão',
            description: 'Um hotroll incrivelmente recheado com salmão cru, cream cheese, cebolinha e couve crispy.',
            price: '39.90',
            type: 'Dog Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080527_7716_i.jpg',
        },
        {
            id: 82,
            name: 'Salmão Grelhado',
            description: 'Um hotroll incrivelmente recheado com salmão grelhado, finalizado com cream cheese maçaricado, cebolinha.',
            price: '37.90',
            type: 'Dog Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080530_6TH4_i.jpg',
        },
        {
            id: 83,
            name: 'Camarão Cozido',
            description: 'Hotroll incrivelmente recheado com Camarão cozido, com cream cheese, cebolinha e couve crispy.',
            price: '39.90',
            type: 'Dog Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080552_C6VM_i.jpg',
        },
        {
            id: 84,
            name: 'Kani Kama',
            description: 'Hotroll incrivelmente recheado com Kani com cream cheese, cebolinha e couve crispy.',
            price: '27.90',
            type: 'Dog Roll',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310101916_O5MM_i.jpg',
        },

    ]

    const menuPoke = [
        {
            id: 85,
            name: 'Poke Especial',
            description: 'Arroz Japonês, Salmão em Cubos, Camarão ao Vapor, Gergelim, Cream Cheese, Crispy de Batata, Crispy couve Frita e molho Shoyu.',
            price: '39.90',
            type: 'Poke',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080639_Q673_i.jpg',
        },
        {
            id: 86,
            name: 'Poke Camarão',
            description: 'Arroz Japonês, Camarão Empanado, Cebola Roxa, Gergelim, Crispy de Batata, Crispy couve Frita e molho Especial.',
            price: '35.90',
            type: 'Poke',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310080639_Q673_i.jpg',
        },

    ]

    const menuPratosQuentes = [
        {
            id: 87,
            name: 'Teppan Camarão',
            description: '200g de Camarão na chapa com legumes refogado, arroz Japonês (Gohan).',
            price: '55.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081424_ME8O_i.jpg',
        },
        {
            id: 88,
            name: 'Crocks Camarão',
            description: 'Camarão empanado e frito 250g.',
            price: '37.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081446_Q7T4_i.jpg',
        },
        {
            id: 89,
            name: 'Ebi no Alho e Óleo',
            description: 'Filé de Camarão fresco, grelhado no alho e óleo, finalizado com cebolinha 350g.',
            price: '52.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081448_D4EB_i.jpg',
        },
        {
            id: 90,
            name: 'Camarão a milanesa com gohan',
            description: '100g Camarão temperado, empanado e frito, acompanha gohan e legumes refogado na manteiga.',
            price: '36.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081502_274T_i.jpg',
        },
        {
            id: 91,
            name: 'Teppan de Salmão',
            description: '200g de Salmão grelhado com legumes refogado, arroz Japonês (Gohan).',
            price: '62.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081434_45B4_i.jpg',
        },
        {
            id: 92,
            name: 'Salmão grelhado',
            description: '120g Salmão grelhado, 100g arroz Japonês, legumes refogados, 1 Guioza bovina, 1 Harumaki de queijo.',
            price: '51.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081438_1I1R_i.jpg',
        },
        {
            id: 93,
            name: 'Teppan Filé frango',
            description: 'Tiras de Filé de frango grelhado com legumes refogado, arroz Japonês (Gohan).',
            price: '35.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081443_XIN7_i.jpg',
        },
        {
            id: 94,
            name: 'Frango empanado 150g',
            description: '150g de frango temperado, empanado e frito. Acompanhado de legumes puxados na manteiga com gohan.',
            price: '31.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081508_OIOQ_i.jpg',
        },
        {
            id: 95,
            name: 'Frango grelhado',
            description: 'Acompanha legumes refogados na manteiga e gohan.',
            price: '32.90',
            type: 'Pratos Quentes',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081522_51S7_i.jpg',
        },
    ]

    const menuYakimeshi = [

        {
            id: 96,
            name: 'Yakimeshi',
            description: 'Arroz Oriental, Carne bovina, Frango, Ovos e legumes (serve 1 pessoa).',
            price: '35.90',
            type: 'Yakimeshi 700g',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081541_44UP_i.jpg',
        },
        {
            id: 97,
            name: 'Yakimeshi Camarão',
            description: 'Arroz Oriental, Camarão, Ovos e legumes (serve 1 pessoa).',
            price: '44.90',
            type: 'Yakimeshi 700g',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310081541_44UP_i.jpg',
        },
    ]

    const menuComplementos = [

        {
            id: 98,
            name: 'Tarê',
            description: '',
            price: '1.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111629_V108_i.jpg',
        },
        {
            id: 99,
            name: 'Shoyu',
            description: '',
            price: '1.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111631_7I8V_i.jpg',
        },
        {
            id: 100,
            name: 'Gengibre',
            description: '15g',
            price: '2.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111632_76J0_i.jpg',
        },
        {
            id: 101,
            name: 'Gergelim',
            description: '15g',
            price: '2.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111634_B20K_i.jpg',
        },
        {
            id: 102,
            name: 'Creme Cheese',
            description: '40g',
            price: '5.90',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111829_438P_i.jpg',
        },
        {
            id: 103,
            name: 'Cebolinha',
            description: '',
            price: '2.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310141915_0520_i.jpg',
        },
        {
            id: 104,
            name: 'Hashi',
            description: 'Par',
            price: '1.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111830_2156_i.jpg',
        },
        {
            id: 105,
            name: 'Geleias: Pimenta, goiabada, maracujá ou Morango',
            description: '',
            price: '4.00',
            type: 'Complementos',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111832_KWIS_i.jpg',
        },

    ]

    const menuBebidas = [
        {
            id: 106,
            name: 'Coca Comum 350ml',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111637_20DF_i.jpg',
        },
        {
            id: 107,
            name: 'Coca Zero 350ml',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111639_51VO_i.jpg',
        },
        {
            id: 108,
            name: 'Fanta Laranja 350ml',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111640_6CWG_i.jpg',
        },
        {
            id: 109,
            name: 'Fanta Uva 350ml',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111841_IEP4_i.jpg',
        },
        {
            id: 110,
            name: 'Guaraná Antarctica 350ml',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111751_52OF_i.jpg',
        },
        {
            id: 111,
            name: 'Guaraná Antarctica Zero 350ml',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111753_S052_i.jpg',
        },
        {
            id: 112,
            name: 'Garrafa Água Mineral 500 ml sem gás',
            description: '',
            price: '3.00',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111800_MPIC_i.jpg',
        },
        {
            id: 113,
            name: 'Garrafa Água Mineral 500 ml com gás',
            description: '',
            price: '5.90',
            type: 'Bebidas',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310111800_MPIC_i.jpg',
        },

    ]

    const menuDestaques = [
        {
            id: 114,
            name: 'Combo plus  (28 peças) + Coca lata  350ml',
            description: '4 Hossomaki Salmão , 4 Niguiri  Salmão maçaricado , 4 Niguiri Salmão 4 Uramaki Skin , 4 jhou Salmão , 4 Sashimi Salmão 4 jhou geleia.',
            price: '110.90',
            type: 'Destaques',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091647_HR4M_i.jpg',
        }, 
        {
            id: 115,
            name: 'Temaki Par',
            description: 'Cone tradicionalmente feito de folhas de algas com recheio de arroz e peixe',
            price: '68.31',
            type: 'Destaques',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310102014_C4U8_i.jpg',
        }, 
        {
            id: 116,
            name: 'Combo Plus Salmão (20 peças)',
            description: '8 Sashimi de Salmão , 4 jhou Salmão selado , 4 Uramaki Mexicano , 4 jhou Salmão',
            price: '76.41',
            type: 'Destaques',
            image: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b7470e3-6031-40bb-99ca-94e009621556/202310091756_5ADU_i.jpg',
        },
    ]

    return {
        menuEntradas,
        menuCombos,
        menuCombosPlus,
        menuComboTemaki,
        menuPromo,
        menuCombinadoFortal, menuHotRoll, menuJhou, menuNiguiri, menuSashimi,
        menuUramaki, menuHossomaki, menuYakisoba, menuTemakis, menuDogRoll, menuPoke,
        menuPratosQuentes, menuYakimeshi, menuComplementos, menuBebidas, 

        menuDestaques
    }
})
