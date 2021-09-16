export const CategoriesComponent = {
    data () {
        return {
            categories: [
                {
                    id: 1,
                    title: 'IPHONE X'
                },
                {
                    id: 2,
                    title: 'IPHONE 11'
                },
                {
                    id: 3,
                    title: 'IPHONE 12'
                },
                
            ]
        }
    },
    template: `
        <div>
            <h1>Daftar Kategori</h1>
            <ul>
                <li v-for="category of categories">
                    <router-link :to="'/category/'+category.id"> 
                        {{ category.title }} 
                    </router-link>
                </li>
            </ul>
        </div>
    ` 
}