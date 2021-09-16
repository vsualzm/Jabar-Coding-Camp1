export const CategoryComponent = {
    data(){
        return {
            categories: [
                {
                    id: 1,
                    title: 'IPHONE 10',
                    description : 'Harga = Rp. 7.000.000 Walaupun dirilis pada 2018, iPhone XR tetap mendapatkan tempat spesial bagi para penggemar iPhone. Smartphone ini memang memiliki sejumlah keunggulan yang membuatnya menjadi salah satu seri iPhone terbaik.'
                },
                {
                    id: 2,
                    title: 'IPHONE 11',
                    description : 'Harga = Rp. 10.000.000 yang pertama adalah layarnya memiliki kecerahan yang baik. Dengan layar 6,1 inci dan resolusi 828 x 1792 piksel, kualitas tampilannya terbilang cukup baik. Selain itu, ada teknologi wide color gamut dan true-tone pada layarnya. Kemudian, desain smartphone ini juga tangguh dan tahan air.'

                },
                {
                    id: 3,
                    title: 'IPHONE 12',
                    description : 'Harga = Rp. 10.000.000 Hal pertama yang diunggulkan dari perangkat ini adalah layarnya yang tangguh serta tahan goresan. Kemampuannya ini disebabkan oleh layar kristal keramik yang membalutnya. Nggak heran jika perangkat Apple ini cukup berat. Untuk meng-upgrade dari versi sebelumnya, IPhone 12 juga sudah dilengkapi dengan magsafe.'

                },
                
            ]
        }
    },
    computed: {
        category() {
            return this.categories.filter((category)=>{
                return category.id === parseInt(this.$route.params.id)                
            })[0]
        }
    },
    template: `<div >
            <h1>Category :  {{ category.title }}</h1>
            <ul>
                <li v-for="(num, value) of category">
                    {{ num +' : '+ value }}                 </li>
            </ul>
        </div>`,
   
}