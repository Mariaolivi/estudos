var lista = document.getElementById("lista")// selecionando o botao 

const listaDebebidas =[
    {
        nome: "Bolsa de Ombro",
        descrição:"Uma forma elegante e estruturada caracteriza esta bolsa feita em couro napa, que lhe confere um toque refinado.",
        preço:" R$ 31.500",
        url: " https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD333/2DF0F0002/1BD333_2DF0_F0002_V_VO4_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",

        nome: "Bolsa de Mão",
        descrição:"Redefinida e recriada estação após estação, a bolsa Galleria é um arquétipo neoclássico ",
        preço:" R$ 44.000",
        url: " https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA906/NZVF0049/1BA906_NZV_F0049_V_EOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",

        nome: "Mochila em Couro",
        descrição:"O design híbrido desta mochila combina o pragmatismo do Re-Nylon",
        preço:" R$ 19.000",
        url: "https://www.prada.com/content/dam/pradabkg_products/1/1BZ/1BZ074/R789F0002/1BZ074_R789_F0002_V_OOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",

        nome: "Bolsa Ombro",
        descrição:"Automatico Tennesses Whiskey",
        preço:" R$ 15.000",
        url: "https://www.prada.com/content/dam/pradabkg_products/2/2VD/2VD044/789F0002/2VD044_789_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",

        nome: "Bolsa Carteiro",
        descrição:"Bolsa de ombro Prada Arqué em couro escovado e Re-Nylon",
        preço:" R$ 9.000",
        url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC194/R789F0002/1BC194_R789_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",

        nome: "Bolsa Tote",
        descrição:"Esta bolsa tote Prada Flou em couro macio apresentada para a coleção Outono/Inverno 2020"
        preço:"R$ 19.000",
        url: " https://www.prada.com/content/dam/pradabkg_products/1/1BG/1BG335/2DKVF0002/1BG335_2DKV_F0002_V_OOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg",

        nome: "Jack Daniels",
        descrição:"Automatico Tennesses Whiskey",
        preço:" R$ 90,00",
        url: "",

        nome: "Jack Daniels",
        descrição:"Automatico Tennesses Whiskey",
        preço:" R$ 90,00",
        url: "",

        nome: "Jack Daniels",
        descrição:"Automatico Tennesses Whiskey",
        preço:" R$ 90,00",
        url: "",

        nome: "Jack Daniels",
        descrição:"Automatico Tennesses Whiskey",
        preço:" R$ 90,00",
        url: "",


        
    
    }
]
 
function carregar(){
    for(let i =1; i <=10;i++){
        lista.innerHTML
        `<div class="col">
            </div>`
    }
}
