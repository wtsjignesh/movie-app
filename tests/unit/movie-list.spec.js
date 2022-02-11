import { shallowMount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'

describe('MovieList.vue', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MovieList, {
            methods: {
                getMovies: ()=> {

                }
            }
        })
    })
    
    it('Renders', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('MovieList is a component', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})