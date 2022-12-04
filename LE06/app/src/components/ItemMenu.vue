<script setup>
    defineProps({
        name: String,
        d: String
    })
</script>

<template>
    <li class="menu-navegacao-item"> 
        <a href="./index.html" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                <path v-bind:d="d"/>
            </svg>
            <p>{{name}}</p>
        </a> 
    </li>
</template>

<style>
    .menu-navegacao-item a{
        display: flex;
        padding: 5px 10px;
        color: rgb(15, 20, 25);
        text-decoration: none 
    }

    .menu-navegacao-item a:hover{
        border-radius: 20px;
        border: 1px solid transparent;
        background-color: rgba(15, 25, 20, 0.1);
    }

   .menu-navegacao-item a{
        justify-content: space-start;
        display: flex;
        align-items: center;
    }

    .menu-navegacao-item a svg{
        margin-right: 15px;
    }

    .menu-navegacao-item a p{
        margin: 0;
    }
    @media only screen and (max-width : 992px){
    #menu-navegacao-lista .menu-navegacao-item p{
        display: none;
    }
    #menu-navegacao .d-grid button{
        display: none;
    }

    #menu-navegacao #menu-navegacao-lista .menu-navegacao-item a{
        padding: 5px 5px;
        margin: 0;
    }

    #menu-navegacao #menu-navegacao-lista .menu-navegacao-item a:hover{
        border-radius: 0;
        border: 1px solid transparent;
        background-color: transparent;
    }

    #menu-navegacao #menu-navegacao-lista .menu-navegacao-item a svg:hover{
        border-radius: 5px;
        border: 1px solid transparent;
        background-color: rgba(15, 25, 20, 0.1);
    }

    }
    @media only screen and (min-width : 992px){
    #menu-navegacao .bnt-oculto{
        display: none;
    }
    }
</style>