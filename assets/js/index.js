
import { header } from './utils/header.js'
import { filter } from './utils/filter.js'
import { select } from './utils/select.js'
import { form } from './utils/form.js'
import { map } from './utils/map.js'
window.addEventListener('DOMContentLoaded', () => {
    try {
       
        header();
        filter();
        select();
        form();
        map();
    } catch (error) {
        console.error(error)
    }
})