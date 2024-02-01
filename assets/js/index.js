
import { header } from './utils/header.js'
import { filter } from './utils/filter.js'
import { select } from './utils/select.js'
import { form } from './utils/form.js'
window.addEventListener('DOMContentLoaded', () => {
    try {
        header();
        filter();
        select();
        form();
    } catch (error) {
        console.error(error)
    }
})